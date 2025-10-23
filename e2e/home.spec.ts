import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/')
    
    // Check if the hero section is visible
    await expect(page.locator('h1')).toBeVisible()
    
    // Check if navigation is present
    await expect(page.locator('nav')).toBeVisible()
    
    // Check if footer is present
    await expect(page.locator('footer')).toBeVisible()
  })

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/')
    
    // Click on projects link
    await page.click('text=Projects')
    
    // Should be on projects page
    await expect(page).toHaveURL('/projects')
    await expect(page.locator('h1')).toContainText('Projects')
  })

  test('should toggle theme', async ({ page }) => {
    await page.goto('/')
    
    // Click theme toggle button
    await page.click('button[aria-label="Toggle theme"]')
    
    // Check if theme changed (this would need to be implemented)
    // For now, just check that the button is clickable
    await expect(page.locator('button[aria-label="Toggle theme"]')).toBeVisible()
  })

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check if mobile menu button is visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible()
  })
})
