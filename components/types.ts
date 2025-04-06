// Define types for the application

// Resource icons
export const resourceIcons = {
  stone: "/data/assets/stone.png",
  fiber: "/data/assets/fiber.png", 
  ore: "/data/assets/ore.png",
  hide: "/data/assets/hide.png",
  wood: "/data/assets/wood.png",
  green_chest: "/data/assets/green_chest.png",
  blue_chest: "/data/assets/blue_chest.png",
  gold_chest: "/data/assets/gold_chest.png",
  dungeon: "/data/assets/dungeon.png"
}

// Resource type definition
export interface Resource {
  type: string;
  quantity: number;
}

// Map data type definition
export interface MapData {
  id: number;
  name: string;
  tier: number;
  resources: Resource[];
  image: string;
}

// Sort types
export type SortDirection = 'asc' | 'desc' | null;
export type SortField = 'name' | 'tier' | null;