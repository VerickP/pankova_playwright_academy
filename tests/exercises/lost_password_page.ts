import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Fluent Lost Password: E2E", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .clickPasswordForgotten()
    .then((lostPassword) => lostPassword.fillUsername("lost_password_user"))
    .then((lostPassword) => lostPassword.fillEmail("lost_password@tredgate.cz"))
    .then((lostPassword) => lostPassword.clickSend());
});
