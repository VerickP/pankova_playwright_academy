import { test } from "@playwright/test"; // tím se začítá každý nový test

test("First test", async ({ page }) => {
  //zavolání si ( pojmenivání ) async řeknemu mu kde běží (stránka)

  await page.goto("http://tredgate.com/pmtool");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});
//hadles mode  npx playwright test nevidím exekuci
