import React, { useState } from 'react';

interface WalletProviderWrapperProps {
  children: React.ReactNode;
}

export function WalletProviderWrapper({ children }: WalletProviderWrapperProps) {
  return <>{children}</>;
}

export function useWalletConnection() {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const handleConnect = async () => {
    if (connected) {
      setConnected(false);
      setPublicKey(null);
    } else {
      setConnecting(true);
      try {
        // Simulated wallet connection - para demonstração
        setTimeout(() => {
          setConnected(true);
          setPublicKey('5FHwkrdxnt9S3HSfNrqz8XTfTgwqz6nfG2FP3j7Hqb2t');
          setConnecting(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        setConnecting(false);
      }
    }
  };

  const formatAddress = (address: string) => {
    if (address.length <= 8) return address;
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return {
    connected,
    connecting,
    publicKey,
    handleConnect,
    formatAddress,
  };
}
