import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { getSiteData } from "@/lib/utils"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const siteData = getSiteData()
  const project = siteData.projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="space-y-8">
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold">{project.title}</h1>
                  <p className="text-xl text-muted-foreground">{project.summary}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {project.images.map((image, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
