import React, { useState, useEffect } from 'react';
import { checkBackendConnection } from '../services/api';

interface BackendStatusProps {
  className?: string;
}

export const BackendStatus: React.FC<BackendStatusProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkConnection = async () => {
    const connected = await checkBackendConnection();
    setIsConnected(connected);
    setLastChecked(new Date());
  };

  useEffect(() => {
    // Initial check
    checkConnection();

    // Check every 30 seconds
    const interval = setInterval(checkConnection, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (isConnected === null) return 'bg-yellow-500';
    return isConnected ? 'bg-green-500' : 'bg-red-500';
  };

  const getStatusText = () => {
    if (isConnected === null) return 'Checking...';
    return isConnected ? 'Connected' : 'Disconnected';
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
      <span className="text-xs text-gray-600">
        Backend: {getStatusText()}
      </span>
      {lastChecked && (
        <span className="text-xs text-gray-400">
          ({lastChecked.toLocaleTimeString()})
        </span>
      )}
    </div>
  );
};