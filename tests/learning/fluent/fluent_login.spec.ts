import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Login and Logout using Fluent API", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.fillUsername("pw_academy"))
    .then((login) => login.fillPassword("Playwrightš21!"))
    .then((login) => login.clickLogin())
    .then((dashbord) => dashbord.clickProfile())
    .then((dashbord) => dashbord.clickLogout());
});
