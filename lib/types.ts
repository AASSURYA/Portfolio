import { z } from "zod"

export const siteDataSchema = z.object({
  name: z.string(),
  role: z.string(),
  location: z.string(),
  about: z.string(),
  avatar: z.string(),
  contacts: z.object({
    email: z.string().email(),
    github: z.string().url(),
    linkedin: z.string().url(),
    twitter: z.string().url(),
    resume: z.string(),
  }),
  skills: z.array(z.string()),
  projects: z.array(z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url(),
    repo: z.string().url(),
    images: z.array(z.string()),
    highlight: z.boolean(),
  })),
  experience: z.array(z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    bullets: z.array(z.string()),
  })),
  testimonials: z.array(z.object({
    name: z.string(),
    title: z.string(),
    quote: z.string(),
  })),
  blog: z.object({
    enabled: z.boolean(),
    rss: z.boolean(),
  }),
})

export type SiteData = z.infer<typeof siteDataSchema>
export type Project = SiteData['projects'][0]
export type Experience = SiteData['experience'][0]
export type Testimonial = SiteData['testimonials'][0]

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  cover?: string
}
