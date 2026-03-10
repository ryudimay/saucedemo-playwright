import { test } from '@playwright/test';

test('saucedemo - login, adicionar, remover e logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.waitForURL('**/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForURL('**/cart.html');

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await page.waitForURL('**/');
});