"use client"

import { Badge } from "@/components/ui/badge"
import { Resource, resourceIcons } from "./types"
import Image from "next/image"

interface ResourceDisplayProps {
  resources: Resource[];
}

export function ResourceDisplay({ resources }: ResourceDisplayProps) {
  const resourceOrder: Record<string, number> = {
    'gold_chest': 1,
    'blue_chest': 2,
    'green_chest': 3,
    'fiber': 4,
    'wood': 5,
    'stone': 6,
    'hide': 7,
    'ore': 8,
    'dungeon': 9
  };

  const sortedResources = [...resources]
    .filter(resource => resource.quantity > 0)
    .sort((a, b) => resourceOrder[a.type] - resourceOrder[b.type]);

  return (
    <div className="flex space-x-3">
      {sortedResources.map((resource, i) => (
        <div key={i} className="relative">
          <div className="w-8 h-8 relative" title={`${resource.type}: ${resource.quantity}`}>
            <Image
              src={resourceIcons[resource.type as keyof typeof resourceIcons]}
              alt={resource.type}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          {resource.quantity > 1 && (
            <Badge 
              className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold"
            >
              {resource.quantity}
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}