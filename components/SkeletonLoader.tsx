"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoader() {
  // Create an array of 5 items to render skeleton rows
  const skeletonItems = Array.from({ length: 5 }, (_, i) => i)

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full border-collapse max-w-4xl mx-auto table-fixed">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left w-[180px]">
              <Skeleton className="h-6 w-20 bg-gray-700" />
            </th>
            <th className="px-4 py-3 text-left w-16">
              <Skeleton className="h-6 w-12 bg-gray-700" />
            </th>
            <th className="px-4 py-3 text-left w-[200px]">
              <Skeleton className="h-6 w-24 bg-gray-700" />
            </th>
            <th className="px-4 py-3 text-left w-24">
              <Skeleton className="h-6 w-16 bg-gray-700" />
            </th>
          </tr>
        </thead>
        <tbody>
          {skeletonItems.map((item) => (
            <tr key={item} className={`${item % 2 === 0 ? 'bg-gray-900' : 'bg-gray-850'}`}>
              <td className="px-4 py-3">
                <Skeleton className="h-6 w-32 bg-gray-700" />
              </td>
              <td className="px-4 py-3">
                <Skeleton className="h-8 w-8 rounded-full bg-gray-700" />
              </td>
              <td className="px-4 py-3">
                <div className="flex space-x-2">
                  <Skeleton className="h-6 w-6 rounded-full bg-gray-700" />
                  <Skeleton className="h-6 w-6 rounded-full bg-gray-700" />
                </div>
              </td>
              <td className="px-4 py-3">
                <Skeleton className="h-8 w-20 rounded bg-gray-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}