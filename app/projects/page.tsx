"use client"

import { useState, useMemo } from "react"
import { TagFilter } from "@/components/projects/tag-filter"
import { ProjectCard } from "@/components/projects/project-card"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { getSiteData } from "@/lib/utils"

export default function ProjectsPage() {
  const siteData = getSiteData()
  const [activeTag, setActiveTag] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return siteData.projects
    }
    return siteData.projects.filter(project => 
      project.tags.includes(activeTag)
    )
  }, [siteData.projects, activeTag])

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of my work and side projects
              </p>
            </div>

            <TagFilter
              projects={siteData.projects}
              onFilterChange={setActiveTag}
              activeTag={activeTag}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
