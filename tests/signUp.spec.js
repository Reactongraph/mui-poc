const { test, expect } = require("@playwright/test");
import { registationCredential, API_URL, REGISTER } from "../src/utils/constant";

test("SignUp Form Test Case", async ({ page, request }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });
  await page.waitForLoadState();
  await expect(page.getByText("Sign Up") !== undefined).toBeTruthy();
  await expect(page.getByText("Already have an account? ") !== undefined).toBeTruthy();
  await page.getByText("Login In").click();
  await page.waitForLoadState();
  await expect(page).toHaveURL(/.*signin/);
  const emailInput = page.locator("input[name='email']");
  await emailInput.scrollIntoViewIfNeeded();
  await emailInput.type(registationCredential.email);
  const passwordInput = page.locator("input[name='password']");
  await passwordInput.scrollIntoViewIfNeeded();
  await passwordInput.type(registationCredential.password);
  const signInButton = page.locator("button[type='submit']");
  await signInButton.click();
  const registerForm = {
    email: await emailInput.inputValue(),
    password: await passwordInput.inputValue(),
  };
  const registerResponse = await request.post(`${API_URL}${REGISTER}`, {
    data: registerForm,
  });
  expect(registerResponse.ok()).toBeTruthy();
});
