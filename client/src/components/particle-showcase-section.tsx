
import React from 'react';
import { useSolanaData } from '@/hooks/use-solana-data';
import { ParticleTextEffect } from '@/components/ui/particle-text-effect';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, DollarSign, Activity } from 'lucide-react';

export function ParticleShowcaseSection() {
  const { 
    tokenData, 
    isLoading, 
    error, 
    formatPrice, 
    formatVolume, 
    formatPriceChange 
  } = useSolanaData();

  // Criar palavras dinâmicas baseadas nos dados reais
  const liveDataWords = [
    'RME ENERGY',
    `${tokenData.holders} HOLDERS`,
    `PRICE ${formatPrice(tokenData.price)}`,
    `VOLUME ${formatVolume(tokenData.volume24h)}`,
    '98.7% EFFICIENCY',
    'SOLANA POWERED',
    'COP 30 READY',
    'GREEN FUTURE'
  ];

  return (
    <section 
      id="particle-showcase" 
      className="py-20 bg-gradient-to-b from-background to-green-950/20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-green-400 border-green-400">
            <Activity className="w-4 h-4 mr-2" />
            DADOS EM TEMPO REAL
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Blockchain ao Vivo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualização dinâmica dos dados do token RME Energy diretamente da blockchain Solana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Particle Canvas */}
          <div className="relative">
            <Card className="bg-black/40 border-green-500/20 backdrop-blur-sm overflow-hidden">
              <div className="h-96 w-full relative min-h-[384px]">
                <ParticleTextEffect
                  words={liveDataWords}
                  className="w-full h-full"
                  particleColor="#22c55e"
                  animationSpeed={0.025}
                  particleCount={400}
                />
              </div>
            </Card>
            
            {/* Status indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  isLoading ? 'bg-yellow-500 animate-pulse' : 
                  error ? 'bg-red-500' : 'bg-green-500 animate-pulse'
                }`} />
                <span className="text-sm text-muted-foreground">
                  {isLoading ? 'Atualizando...' : error ? 'Offline' : 'Ao Vivo'}
                </span>
              </div>
            </div>
          </div>

          {/* Live Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <Badge variant="secondary" className="text-xs">
                    HOLDERS
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {tokenData.holders}
                </div>
                <p className="text-sm text-muted-foreground">
                  Detentores ativos
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  <Badge variant="secondary" className="text-xs">
                    PREÇO
                  </Badge>
                </div>
                <div className="text-lg font-bold text-blue-400">
                  ${formatPrice(tokenData.price)}
                </div>
                <div className="flex items-center text-sm">
                  {tokenData.priceChange24h >= 0 ? (
                    <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-400 mr-1" />
                  )}
                  <span className={tokenData.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {formatPriceChange(tokenData.priceChange24h)}
                  </span>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-400">Volume 24h</h3>
                <Badge variant="outline" className="text-purple-400 border-purple-400">
                  SOLANA
                </Badge>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {formatVolume(tokenData.volume24h)}
              </div>
              <p className="text-sm text-muted-foreground">
                Volume de negociação nas últimas 24 horas
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-orange-400">Contrato</h3>
                <Badge variant="outline" className="text-orange-400 border-orange-400">
                  VERIFICADO
                </Badge>
              </div>
              <div className="font-mono text-sm text-orange-400 break-all">
                HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Endereço do token na Solana
              </p>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dados atualizados automaticamente a cada 30 segundos
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Blockchain Solana
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              Jupiter API
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              RPC Mainnet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
