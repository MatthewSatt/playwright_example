// @ts-check
const { test, expect } = require('@playwright/test');
require('dotenv').config();


test.beforeEach( async ({ page }) => {
  await page.goto('https://console-dev.app.pagealive.com/login');
})


test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/pagealive/);
});


test('login works', async ({ page }) => {
  await page.waitForLoadState();

  await page.locator('#emailInput').fill(process.env.ADMIN_EMAIL);
  await page.locator('#passwordInput').fill(process.env.PASSWORD);
  await page.getByText('Login').click();

  await expect(page).toHaveURL('https://console-dev.app.pagealive.com/accounts');
});


