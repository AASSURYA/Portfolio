const { execSync } = require('child_process')

try {
  console.log('Generating sitemap...')
  execSync('npx next-sitemap', { stdio: 'inherit' })
  console.log('Sitemap generated successfully!')
} catch (error) {
  console.error('Error generating sitemap:', error.message)
  process.exit(1)
}
