import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate to venue details", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    // Verify venue container is visible
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    // Click the first venue
    const firstVenue = venueContainer.locator(".bg-cover").first();
    await firstVenue.click();

    // Verify "Venue details" heading is visible
    const heading = page.getByRole("heading", { name: "Venue details" });
    await expect(heading).toBeVisible();
  });
});
