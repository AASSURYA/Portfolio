"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSiteData } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function CTA() {
  const siteData = getSiteData()

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={siteData.contacts.resume} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
