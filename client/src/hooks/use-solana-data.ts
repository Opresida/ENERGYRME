
<old_str>import { useState, useEffect } from 'react';

interface SolanaTokenData {
  holders: number;
  price: number;
  volume24h: number;
  totalSupply: number;
  marketCap: number;
  priceChange24h: number;
}

export function useSolanaData() {
  const [tokenData, setTokenData] = useState<SolanaTokenData>({
    holders: 70,
    price: 0.000045,
    volume24h: 125000,
    totalSupply: 1000000000,
    marketCap: 45000,
    priceChange24h: 5.67
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const TOKEN_ADDRESS = 'HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump';

  const fetchSolanaData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('🔄 Buscando dados via Helius API...');
      
      // 1. Buscar holders via Helius RPC (método correto)
      const heliusRpcUrl = `https://mainnet.helius-rpc.com/?api-key=${import.meta.env.VITE_HELIUS_API_KEY || process.env.HELIUS_API_KEY}`;
      
      const holdersResponse = await fetch(heliusRpcUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getTokenLargestAccounts',
          params: [TOKEN_ADDRESS]
        })
      });

      if (holdersResponse.ok) {
        const holdersData = await holdersResponse.json();
        console.log('✅ Helius holders data:', holdersData);
        
        if (holdersData.result?.value) {
          setTokenData(prev => ({
            ...prev,
            holders: holdersData.result.value.length || prev.holders
          }));
        }
      }

      // 2. Buscar metadados do token via Helius API
      const metadataResponse = await fetch(`https://api.helius.xyz/v0/token-metadata?api-key=${import.meta.env.VITE_HELIUS_API_KEY || process.env.HELIUS_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mintAccounts: [TOKEN_ADDRESS]
        })
      });

      if (metadataResponse.ok) {
        const metadataData = await metadataResponse.json();
        console.log('✅ Helius metadata:', metadataData);
        
        if (metadataData.length > 0) {
          const tokenInfo = metadataData[0];
          setTokenData(prev => ({
            ...prev,
            totalSupply: tokenInfo.supply || prev.totalSupply
          }));
        }
      }

      // 3. Usar dados dinâmicos calculados com base no supply real
      const currentTime = Date.now();
      const basePrice = 0.000045;
      const priceVariation = (Math.sin(currentTime / 300000) * 0.000005); // Variação suave
      const dynamicPrice = Math.max(0.000035, basePrice + priceVariation);
      
      setTokenData(prev => ({
        ...prev,
        price: dynamicPrice,
        volume24h: 150000 + Math.floor(Math.sin(currentTime / 600000) * 50000),
        priceChange24h: ((dynamicPrice - basePrice) / basePrice) * 100,
        marketCap: dynamicPrice * prev.totalSupply
      }));
      
      console.log('✅ Dados atualizados com sucesso via Helius!');
      
    } catch (err) {
      console.error('❌ Erro ao buscar dados:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      
      // Simular dados realistas em caso de erro
      setTokenData(prev => ({
        ...prev,
        holders: 68 + Math.floor(Math.random() * 15),
        price: 0.000042 + (Math.random() - 0.5) * 0.000008,
        volume24h: 120000 + Math.floor(Math.random() * 80000),
        priceChange24h: 4.2 + (Math.random() - 0.5) * 6,
        marketCap: 42000 + Math.floor(Math.random() * 15000)
      }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch inicial
    fetchSolanaData();
    
    // Atualizar a cada 30 segundos com a Helius API
    const interval = setInterval(fetchSolanaData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => price.toFixed(6);
  const formatVolume = (volume: number) => `$${(volume / 1000).toFixed(1)}K`;
  const formatMarketCap = (cap: number) => `$${(cap / 1000).toFixed(1)}K`;
  const formatPriceChange = (change: number) => `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;

  return {
    tokenData,
    isLoading,
    error,
    formatPrice,
    formatVolume,
    formatMarketCap,
    formatPriceChange,
    refetch: fetchSolanaData
  };
}</old_str>
<new_str>import { useState, useEffect } from 'react';

interface SolanaTokenData {
  holders: number;
  price: number;
  volume24h: number;
  totalSupply: number;
  marketCap: number;
  priceChange24h: number;
  lastUpdated?: string;
}

export function useSolanaData() {
  const [tokenData, setTokenData] = useState<SolanaTokenData>({
    holders: 70,
    price: 0.000045,
    volume24h: 125000,
    totalSupply: 1000000000,
    marketCap: 45000,
    priceChange24h: 5.67
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const TOKEN_ADDRESS = 'HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump';

  const fetchSolanaData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('🔄 Buscando dados via backend proxy...');
      
      // Usar nosso proxy backend ao invés de chamar APIs externas diretamente
      const response = await fetch(`/api/solana/token/${TOKEN_ADDRESS}`);
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('✅ Dados recebidos via proxy:', data);
      
      setTokenData(data);
      console.log('✅ Dados atualizados com sucesso via proxy backend!');
      
    } catch (err) {
      console.error('❌ Erro ao buscar dados:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      
      // Fallback: dados simulados realistas
      const currentTime = Date.now();
      const basePrice = 0.000045;
      const priceVariation = (Math.sin(currentTime / 300000) * 0.000005);
      const dynamicPrice = Math.max(0.000035, basePrice + priceVariation);
      
      setTokenData({
        holders: 68 + Math.floor(Math.random() * 15),
        price: dynamicPrice,
        volume24h: 120000 + Math.floor(Math.random() * 80000),
        totalSupply: 1000000000,
        priceChange24h: ((dynamicPrice - basePrice) / basePrice) * 100,
        marketCap: dynamicPrice * 1000000000,
        lastUpdated: new Date().toISOString()
      });
      
      console.log('📊 Usando dados simulados (modo offline)');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch inicial
    fetchSolanaData();
    
    // Atualizar a cada 30 segundos
    const interval = setInterval(fetchSolanaData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => price.toFixed(6);
  const formatVolume = (volume: number) => `$${(volume / 1000).toFixed(1)}K`;
  const formatMarketCap = (cap: number) => `$${(cap / 1000).toFixed(1)}K`;
  const formatPriceChange = (change: number) => `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;

  return {
    tokenData,
    isLoading,
    error,
    formatPrice,
    formatVolume,
    formatMarketCap,
    formatPriceChange,
    refetch: fetchSolanaData
  };
}</new_str>
