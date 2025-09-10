import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WalletProviderWrapper } from "@/components/wallet-provider";
import { EnergyLoader } from "@/components/ui/energy-loader";
import { useState, useEffect } from "react";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000 + Math.random() * 2000); // 3-5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WalletProviderWrapper>
          <EnergyLoader 
            isLoading={isLoading} 
            onComplete={handleLoadingComplete}
          />
          <div 
            className={`transition-opacity duration-500 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              visibility: showContent ? 'visible' : 'hidden',
              position: showContent ? 'relative' : 'absolute',
              top: showContent ? 'auto' : '-9999px'
            }}
          >
            <Toaster />
            <Router />
          </div>
        </WalletProviderWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
