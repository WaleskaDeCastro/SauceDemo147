import { test, expect } from '@playwright/test';

test('Fluxo de compra programado manualmente', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toContainText('Products');

  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
  await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
}); 
