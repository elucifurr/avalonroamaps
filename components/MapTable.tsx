"use client"

import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ResourceDisplay } from "./ResourceDisplay"
import { MapData, SortDirection, SortField } from "./types"
import { highlightText } from "@/utils/highlight-text"

interface MapTableProps {
  maps: MapData[];
  sortField: SortField;
  sortDirection: SortDirection;
  handleSort: (field: SortField) => void;
  handleOpenImage: (mapName: string) => void;
  searchQuery: string; // ✅ add this
}

export function MapTable({ 
  maps, 
  sortField, 
  sortDirection, 
  handleSort, 
  handleOpenImage,
  searchQuery // ✅ receive it
}: MapTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full border-collapse max-w-4xl mx-auto table-fixed">
        <thead className="bg-gray-800">
          <tr>
            <th 
              className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors w-[180px]"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center space-x-1">
                <span>Name</span>
                {sortField === 'name' && (
                  sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors w-16"
              onClick={() => handleSort('tier')}
            >
              <div className="flex items-center space-x-1">
                <span>Tier</span>
                {sortField === 'tier' && (
                  sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </th>
            <th className="px-4 py-3 text-left w-[200px]">Resources</th>
            <th className="px-4 py-3 text-left w-24">Image</th>
          </tr>
        </thead>
        <tbody>
          {maps.map((map, index) => (
            <tr 
              key={map.id} 
              className={`${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-850'} hover:bg-gray-750 transition-colors`}
            >
              <td className="px-4 py-3 font-medium truncate max-w-[180px]">
                {highlightText(map.name, searchQuery)} {/* ✅ highlight match */}
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-blue-100 font-semibold">
                  {map.tier}
                </span>
              </td>
              <td className="px-4 py-3">
                <ResourceDisplay resources={map.resources} />
              </td>
              <td className="px-4 py-3">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleOpenImage(map.name)}
                >
                  Open Image
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}