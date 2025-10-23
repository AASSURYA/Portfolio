/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-portfolio.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = []
    
    // Add dynamic project pages
    const siteData = require('./data/site.json')
    siteData.projects.forEach(project => {
      result.push({
        loc: `/projects/${project.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
      })
    })
    
    return result
  },
}
