import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/use-theme"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - {{YOUR_NAME}}",
  description: "{{SHORT_BIO_2_3_SENTENCES}}",
  keywords: ["portfolio", "developer", "frontend", "react", "nextjs"],
  authors: [{ name: "{{YOUR_NAME}}" }],
  creator: "{{YOUR_NAME}}",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Portfolio - {{YOUR_NAME}}",
    description: "{{SHORT_BIO_2_3_SENTENCES}}",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - {{YOUR_NAME}}",
    description: "{{SHORT_BIO_2_3_SENTENCES}}",
    creator: "@{{TWITTER_HANDLE}}",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
