import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";
import { pmtoolTexts } from "../asserts/dictionaries/dictionary.ts";

test("Using dictionaries to Reuse Texts", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await expect(page.locator(".from-title")).toHaveText(pmtoolTexts.login.title);
  await expect(page.locator("#username")).toHaveAttribute(
    "placeholder",
    pmtoolTexts.login.usernamePlaceholder
  );
});
