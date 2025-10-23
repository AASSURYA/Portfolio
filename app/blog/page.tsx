import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getAllPosts } from "@/lib/blog"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts on web development, design, and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
