import { test, expect } from "@playwright/test";

test.describe("accounts", () => {
  test("show accounts", async ({ page }) => {
    await page.goto("/accounts");

    const DEFAUlT_ACCOUNT_OWNERS = ["_owner0", "_owner1", "_owner2"];

    await Promise.all(
      DEFAUlT_ACCOUNT_OWNERS.map(async function (owner) {
        await expect(page.locator(`text=${owner}`)).toBeVisible();
      })
    );
  });
});
