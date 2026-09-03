import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';

test('should login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});

//Invalid Login test

test('should reject invalid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

// user bloqued

test('should block locked user', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByText('Epic sadface: Sorry, this user has been locked out.')
  ).toBeVisible();
});

//Logout test

test('should logout successfully', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByText('Logout').click();

  await expect(page).toHaveURL('/');
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});
