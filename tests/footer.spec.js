const { test, expect } = require("@playwright/test");
import { urlList } from "../src/utils/constant";

test.describe.parallel("Footer test Case", async () => {
  let context;
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
  });
  for (const url of urlList) {
    test(`${url}`, async () => {
      let page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForLoadState();
      await expect(page.getByText("Adventure") !== undefined).toBeTruthy();
      await expect(
        page.getByText(
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem atus error sit volupt unde omnis iste iatis un."
        ) !== undefined
      ).toBeTruthy();
      await expect(page.getByText("Adventure Island") !== undefined).toBeTruthy();
      await page.getByRole("contentinfo").getByRole("link", { name: "Services" }).click();
      await page.getByRole("contentinfo").getByRole("link", { name: "Privacy" }).click();
      await expect(page.getByText("Support") !== undefined).toBeTruthy();
      await page.getByRole("contentinfo").getByRole("link", { name: "Contact" }).click();
      await page
        .getByRole("contentinfo")
        .getByRole("link", { name: "info@materialtest.com" })
        .click();
      await expect(page.getByText("Pages") !== undefined).toBeTruthy();
      await page.getByRole("contentinfo").getByRole("link", { name: "Sign In" }).click();
      await page.waitForLoadState();
      await expect(page).toHaveURL(/.*signin/);
      await page.getByRole("contentinfo").getByRole("link", { name: "Sign Up" }).click();
      await page.waitForLoadState();
      await expect(page).toHaveURL(/.*signup/);
      await expect(page.getByText("Follow Us") !== undefined).toBeTruthy();
    });
  }
});
