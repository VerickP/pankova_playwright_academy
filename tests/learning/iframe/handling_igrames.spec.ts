import { test } from "@playwright/test";

test("Handling iframes", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  //await page.locator("#name").fill("Hmmm toto se nevypíše."); tohle ne
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
  await frame.locator("#name").fill("Hurá, píšeme do iframu");
});
