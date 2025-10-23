"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllTags } from "@/lib/utils"

interface TagFilterProps {
  projects: any[]
  onFilterChange: (tag: string) => void
  activeTag: string
}

export function TagFilter({ projects, onFilterChange, activeTag }: TagFilterProps) {
  const allTags = getAllTags(projects)
  const tags = ["All", ...allTags]

  return (
    <Tabs value={activeTag} onValueChange={onFilterChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {tags.map((tag) => (
          <TabsTrigger key={tag} value={tag} className="text-sm">
            {tag}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
