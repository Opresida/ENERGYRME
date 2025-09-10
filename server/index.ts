import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Verificar se a HELIUS_API_KEY está configurada
if (!process.env.HELIUS_API_KEY) {
  console.warn('⚠️  HELIUS_API_KEY não encontrada - dados da blockchain podem ser limitados');
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(app); // Corrigido para chamar await aqui

  // Importar e usar a rota do proxy Helius
  app.use("/api/helius", async (req: Request, res: Response) => {
    const heliusApiKey = process.env.HELIUS_API_KEY;
    if (!heliusApiKey) {
      return res.status(500).json({ message: "HELIUS_API_KEY not configured" });
    }

    const heliusUrl = `https://api.helius.xyz${req.originalUrl.replace("/api/helius", "")}`;
    try {
      const response = await fetch(heliusUrl, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${heliusApiKey}`,
          // Passar outros headers se necessário
        },
        body: req.body ? JSON.stringify(req.body) : undefined,
      });

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error proxying Helius request:", error);
      res.status(500).json({ message: "Internal Server Error proxying Helius" });
    }
  });


  // Importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();