import { test, expect } from '@playwright/test';

test('verify blog and fast contact form', async ({ page }) => {
  // Go to blog page
  await page.goto('http://localhost:5173/blog');

  // Wait for the blog list to potentially load
  await page.waitForTimeout(2000);

  // Check if articles are present
  const articles = page.locator('article');
  const count = await articles.count();
  console.log(`Found ${count} articles`);

  await page.screenshot({ path: '/home/jules/verification/blog_list_final.png', fullPage: true });

  if (count > 0) {
    // Click on the first article
    await articles.first().locator('h3').click();
    await page.waitForTimeout(1000);
    console.log('Navigated to article page');
    await page.screenshot({ path: '/home/jules/verification/blog_post_final.png', fullPage: true });

    // Check for CTA and social sharing
    await expect(page.locator('text=Condividi')).toBeVisible();
    await expect(page.locator('text=Ti piace questo approccio?')).toBeVisible();
  }

  // Go to contact page
  await page.goto('http://localhost:5173/contatti');
  await page.waitForTimeout(1000);

  // Check for Fast Contact form
  await expect(page.locator('text=Hai una domanda veloce?')).toBeVisible();
  await expect(page.locator('input[placeholder="Il tuo nome"]')).toBeVisible();
  await expect(page.locator('input[placeholder="La tua email"]')).toBeVisible();
  await expect(page.locator('text=Invia Messaggio Veloce')).toBeVisible();

  await page.screenshot({ path: '/home/jules/verification/contact_page_final.png', fullPage: true });
});
