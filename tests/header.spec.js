const { test, expect } = require("@playwright/test");
import { urlList } from "../src/utils/constant";

test.describe.parallel("Header test Case", async () => {
  let context;
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
  });
  for (const url of urlList) {
    test(`${url}`, async () => {
      let page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForLoadState();
      await page.getByRole("link", { name: "Adventure Island" }).click();
      await page.waitForLoadState();
      await expect(page).toHaveURL(/.*/);
      await page.getByRole("banner").getByRole("link", { name: "Sign In" }).click();
      await page.waitForLoadState();
      await expect(page).toHaveURL(/.*signin/);
      await page.getByRole("banner").getByRole("link", { name: "Sign Up" }).click();
      await page.waitForLoadState();
      await expect(page).toHaveURL(/.*signup/);
    });
  }
});
