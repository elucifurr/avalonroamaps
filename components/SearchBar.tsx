"use client"

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/use-debounce"

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(searchQuery)
  const debouncedValue = useDebounce(inputValue, 300)
  
  // Update the parent's searchQuery when the debounced value changes
  useEffect(() => {
    setSearchQuery(debouncedValue)
  }, [debouncedValue, setSearchQuery])
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-6 md:mb-10 px-2 sm:px-0">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
        </div>
        <Input
          type="text"
          placeholder="Search for maps..."
          className="pl-10 sm:pl-12 py-5 sm:py-6 text-base sm:text-lg bg-gray-800 border-gray-700 border-2 rounded-lg sm:rounded-xl text-gray-100 focus:ring-blue-500 focus:border-blue-500 shadow-lg transition-all"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  )
}