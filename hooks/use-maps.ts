import { useState, useEffect } from 'react';
import { MapData } from '@/components/types';
import { fetchMaps } from '@/lib/data';

interface UseMapsResult {
  maps: MapData[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useMaps(): UseMapsResult {
  const [maps, setMaps] = useState<MapData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getMaps = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await fetchMaps();
      setMaps(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error fetching maps:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch maps on component mount
  useEffect(() => {
    getMaps();
  }, []);

  return { maps, isLoading, error, refetch: getMaps };
}