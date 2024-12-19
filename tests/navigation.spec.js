import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to venue details", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    const firstVenue = venueContainer.locator(".bg-cover").first();
    await firstVenue.click();

    const heading = page.getByRole("heading", { name: "Venue details" });
    await expect(heading).toBeVisible();
  });
});
