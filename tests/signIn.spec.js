const { test, expect } = require("@playwright/test");
import { loginCredential, API_URL, LOGIN } from "../src/utils/constant";

test("SignIn Form Test Case", async ({ page, request }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });
  await page.waitForLoadState();
  await expect(page.getByText("Sign In") !== undefined).toBeTruthy();
  await expect(page.getByText("Not a member yet?") !== undefined).toBeTruthy();
  await page.getByText("Sign Up here").click();
  await page.waitForLoadState();
  await expect(page).toHaveURL(/.*signup/);
  const emailInput = page.locator("input[name='email']");
  await emailInput.scrollIntoViewIfNeeded();
  await emailInput.type(loginCredential.email);
  const passwordInput = page.locator("input[name='password']");
  await passwordInput.scrollIntoViewIfNeeded();
  await passwordInput.type(loginCredential.password);
  const signInButton = page.locator("button[type='submit']");
  await signInButton.click();
  const loginForm = {
    email: await emailInput.inputValue(),
    password: await passwordInput.inputValue(),
  };
  const loginResponse = await request.post(`${API_URL}${LOGIN}`, {
    data: loginForm,
  });
  expect(loginResponse.ok()).toBeTruthy();
});
