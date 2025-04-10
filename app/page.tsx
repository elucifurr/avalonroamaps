"use client"

import { useState, useMemo } from 'react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avalon Roads Explorer - RoA Maps",
  description: "Browse and search for Roads of Avalon maps. Find resources, tiers, and locations for all RoA maps.",
}

// Import components
import { SearchBar } from '@/components/SearchBar'
import { MapTable } from '@/components/MapTable'
import { MapDialog } from '@/components/MapDialog'
import { SkeletonLoader } from '@/components/SkeletonLoader'

// Import types and hooks
import { SortDirection, SortField } from '@/components/types'
import { useMaps } from '@/hooks/use-maps'

export default function Home() {
  const { maps, isLoading, error } = useMaps()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [selectedMap, setSelectedMap] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortField(null)
        setSortDirection(null)
      }
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  // Filter and sort maps
  const filteredAndSortedMaps = useMemo(() => {
    let result = [...maps]
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(map => 
        map.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Sort by field
    if (sortField && sortDirection) {
      result.sort((a, b) => {
        if (sortField === 'name') {
          return sortDirection === 'asc' 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        } else if (sortField === 'tier') {
          return sortDirection === 'asc'
            ? a.tier - b.tier
            : b.tier - a.tier
        }
        return 0
      })
    }
    
    return result
  }, [maps, searchQuery, sortField, sortDirection])

  // Handle opening the image dialog
  const handleOpenImage = (mapName: string) => {
    setSelectedMap(mapName)
    setDialogOpen(true)
  }

  // Find the selected map
  const currentMap = useMemo(() => {
    return maps.find(map => map.name === selectedMap)
  }, [maps, selectedMap])

  if (error) {
    return (
      <div className="min-h-screen text-gray-100 flex items-center justify-center relative">
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Error Loading Maps</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen text-gray-100 relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Roads of Avalon Maps</h1>
        
        {/* Search Component */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* Map count */}
        <div className="flex justify-center mb-6">
          <div className="text-gray-400 text-center">
            {isLoading ? (
              <span className="font-semibold text-xl text-blue-400">Loading...</span>
            ) : (
              <>
                <span className="font-semibold text-xl text-blue-400">{filteredAndSortedMaps.length}</span> maps found
              </>
            )}
          </div>
        </div>
        
        {/* Loading state or Maps table */}
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <MapTable 
            maps={filteredAndSortedMaps}
            sortField={sortField}
            sortDirection={sortDirection}
            handleSort={handleSort}
            handleOpenImage={handleOpenImage}
            searchQuery={searchQuery}
          />
        )}
      </div>

      {/* Map Dialog Component */}
      <MapDialog 
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        currentMap={currentMap}
      />
    </main>
  )
}
