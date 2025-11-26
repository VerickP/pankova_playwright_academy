import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Using tags for filter test", { tag: "@DescribeTag" }, () => {
  test("Tag test", { tag: "@MujTag" }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Without tag test", async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.open();
  });
});
