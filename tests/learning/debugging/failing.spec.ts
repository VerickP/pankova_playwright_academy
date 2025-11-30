import { expect, test } from "@playwright/test";

test("Debugging Failures", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator("#not_existing")).toBeVisible();
});

//import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

//test("Debugging Failures", async ({ page }) => {
// const user = {
//username: "test",
// password: undefined,
//};

//const loginPage: LoginPage = undefined;
//await page.goto("http://tredgate.com/pmtool/");

//page.locator("#username").fill("test");
//page.locator("#username").fill("test");
//await loginPage.open();
//expect.page.locator("#not_existing")).toBeVisible();
//page.locator("something").click();
//});
