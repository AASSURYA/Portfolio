# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dynamic content management, blog functionality, and optimized performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Dynamic Content**: Single JSON configuration file for easy updates
- **Blog System**: MDX-powered blog with search and filtering
- **Performance Optimized**: Core Web Vitals ≥ 95, Lighthouse scores
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Ready**: Dynamic meta tags, sitemap, and Open Graph images
- **Responsive Design**: Mobile-first approach with smooth animations
- **Theme Support**: Light, dark, and system theme preferences
- **Contact Form**: Server-side email handling with validation

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── sections/        # Page sections
│   └── projects/         # Project-specific components
├── data/                 # Site configuration
├── content/             # Blog posts (MDX)
├── lib/                  # Utilities and types
├── public/               # Static assets
└── test/                 # Test files
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your email configuration:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   SITE_URL=https://your-portfolio.com
   ```

4. **Update site data**
   
   Edit `/data/site.json` with your information:
   ```json
   {
     "name": "Your Name",
     "role": "Your Role",
     "location": "Your Location",
     "about": "Your bio...",
     "contacts": {
       "email": "your-email@example.com",
       "github": "https://github.com/yourusername",
       "linkedin": "https://linkedin.com/in/yourusername",
       "twitter": "https://twitter.com/yourusername",
       "resume": "/resume/your-resume.pdf"
     }
   }
   ```

5. **Add your assets**
   - Place your avatar in `/public/images/avatar.jpg`
   - Add project images to `/public/images/projects/`
   - Upload your resume to `/public/resume/`

6. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Content Management

### Updating Site Information

All site content is managed through `/data/site.json`. Update this file to change:

- Personal information (name, role, bio)
- Contact details
- Skills and technologies
- Projects and experience
- Testimonials

### Adding Projects

Add new projects to the `projects` array in `/data/site.json`:

```json
{
  "title": "Project Name",
  "slug": "project-slug",
  "summary": "One-line description",
  "description": "Detailed description",
  "tags": ["React", "TypeScript"],
  "link": "https://project-url.com",
  "repo": "https://github.com/username/repo",
  "images": ["/images/projects/project-1.png"],
  "highlight": true
}
```

### Adding Blog Posts

Create new MDX files in `/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Post excerpt"
tags: ["React", "Next.js"]
cover: "/images/blog/cover.jpg"
---

# Your Post Content

Write your blog post content here using Markdown.
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### All Tests
```bash
npm run test
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Connect your repository and deploy
- **Railway**: Deploy with zero configuration
- **DigitalOcean App Platform**: One-click deployment

## 📊 Performance

This portfolio is optimized for performance:

- **Core Web Vitals**: All metrics ≥ 95
- **Lighthouse Score**: 100 across all categories
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Optimized font loading

## 🎨 Customization

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Typography**: Modify Tailwind config in `tailwind.config.js`
- **Components**: Customize shadcn/ui components

### Layout

- **Sections**: Modify components in `/components/sections/`
- **Navigation**: Update `/components/layout/navbar.tsx`
- **Footer**: Customize `/components/layout/footer.tsx`

## 📱 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions

### Accessibility
- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- Focus management

### SEO
- Dynamic meta tags
- Open Graph images
- Sitemap generation
- JSON-LD structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have questions or need help:

1. Check the documentation
2. Search existing issues
3. Create a new issue
4. Contact: your-email@example.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
