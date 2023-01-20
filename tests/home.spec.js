const { test, expect } = require("@playwright/test");

test("home screen test case", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForLoadState();
  await expect(page.getByText("Get Ready For Adventure") !== undefined).toBeTruthy();
  await expect(
    page.getByText("Enjoy rides and get 70% off on all rides for first 200 persons") !==
      undefined
  ).toBeTruthy();
  await page.getByRole("button", { name: "Register" }).click();
  await page.waitForLoadState();
  await expect(page).toHaveURL(/.*signup/);
  await expect(page.getByText("Discover the experience") !== undefined).toBeTruthy();

  await expect(page.getByText("Luxury hotels") !== undefined).toBeTruthy();
  await expect(page.getByAltText("chair") !== undefined).toBeTruthy();
  await expect(
    page.getByText(
      "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
    ) !== undefined
  ).toBeTruthy();
  await expect(page.getByText("New experiences") !== undefined).toBeTruthy();
  await expect(page.getByAltText("wheel") !== undefined).toBeTruthy();
  await expect(
    page.getByText(
      "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike."
    ) !== undefined
  ).toBeTruthy();
  await expect(page.getByText("Exclusive rates") !== undefined).toBeTruthy();
  await expect(page.getByAltText("amount") !== undefined).toBeTruthy();
  await expect(
    page.getByText(
      "By registering, you will access specially negotiated rates that you will not find anywhere else."
    ) !== undefined
  ).toBeTruthy();

  await expect(page.getByText("Snorkeling") !== undefined).toBeTruthy();
  await expect(page.getByText("Massage") !== undefined).toBeTruthy();
  await expect(page.getByText("Hiking") !== undefined).toBeTruthy();
  await expect(page.getByText("Tour") !== undefined).toBeTruthy();
  await expect(page.getByText("Gastronomy") !== undefined).toBeTruthy();
  await expect(page.getByText("Shopping") !== undefined).toBeTruthy();
  await expect(page.getByText("Walking") !== undefined).toBeTruthy();
  await expect(page.getByText("Fitness") !== undefined).toBeTruthy();
  await expect(page.getByText("Reading") !== undefined).toBeTruthy();

  await expect(page.getByText("1") !== undefined).toBeTruthy();
  await expect(page.getByAltText("hammer") !== undefined).toBeTruthy();
  await expect(
    page.getByText("Appointment every Wednesday 9am.") !== undefined
  ).toBeTruthy();
  await expect(page.getByText("2") !== undefined).toBeTruthy();
  await expect(page.getByAltText("quantity") !== undefined).toBeTruthy();
  await expect(
    page.getByText(
      "First come, first served. Our offers are in limited quantities, so be quick."
    ) !== undefined
  ).toBeTruthy();
  await expect(page.getByText("3") !== undefined).toBeTruthy();
  await expect(page.getByAltText("mac") !== undefined).toBeTruthy();
  await expect(
    page.getByText(
      "New offers every week. New experiences, new surprises. Your Sundays will no longer be alike."
    ) !== undefined
  ).toBeTruthy();
  await page.getByRole("button", { name: "Get started" });

  await expect(page.getByText("Receive offers") !== undefined).toBeTruthy();
  await expect(
    page.getByText("Taste the holidays of the everyday close to home.") !== undefined
  ).toBeTruthy();
  await page.getByRole("button", { name: "Keep me updated" });
});
