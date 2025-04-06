import { MapData } from '@/components/types';

/**
 * Fetches map data from the static JSON file
 * @returns Promise containing the map data
 */
export async function fetchMaps(): Promise<MapData[]> {
  try {
    const response = await fetch('/data/maps.json');
    
    if (!response.ok) {
      throw new Error(`Error fetching maps: ${response.status}`);
    }
    
    const data: MapData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching maps:', error);
    throw error;
  }
}