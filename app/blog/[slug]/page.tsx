import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxComponents } from "@/components/mdx-components"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="space-y-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <article className="max-w-4xl mx-auto">
              <header className="space-y-4 mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold">{post.title}</h1>
                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </header>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
