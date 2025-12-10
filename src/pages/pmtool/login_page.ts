// src/pages/pmtool/login_page.ts
import { Locator, Page, test, expect } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly pageHeader: Locator;
  readonly passwordForgottenAnchor: Locator; //property

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
    this.pageHeader = page.locator("h3.form-title");
    this.passwordForgottenAnchor = page.locator("#forget_password"); //lokátor
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten() {
    await this.passwordForgottenAnchor.click();
    return new LostPasswordPage(this.page);
  }

  async login(username: string, password: string): Promise<DashboardPage> {
    //jistota pri zmene chová se to stejně kdyby tam nebyla promise
    await test.step("Login to Pmtoll", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLogin();
    });
    return new DashboardPage(this.page);
  }
  async pageHeaderHasText(headerText: string): Promise<LoginPage> {
    await expect(this.pageHeader).toHaveText(headerText);
    return this;
  }
  async emptyLoginFormVisualCheck(): Promise<this> {
    //cvičení na visual testování
    await expect(this.page).toHaveScreenshot("empty_login_page.png", {
      fullPage: true,
    });
    return this;
  }
}
