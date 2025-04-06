"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapData } from "./types"

interface MapDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  currentMap: MapData | undefined;
}

export function MapDialog({ dialogOpen, setDialogOpen, currentMap }: MapDialogProps) {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-4xl bg-gray-800 border-gray-700"> {/* ✅ Wider */}
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-100">
            {currentMap?.name} - Tier {currentMap?.tier}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Map details and navigation information
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-[600px] mt-4 rounded-md overflow-hidden"> {/* ✅ Taller */}
          <Image
            src={currentMap?.image || "/placeholder.svg?height=600&width=800"}
            alt={`Map of ${currentMap?.name}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button 
            variant="ghost"
            className="bg-gray-700 text-white hover:bg-gray-600 transition-colors" // ✅ Better contrast
            onClick={() => setDialogOpen(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}