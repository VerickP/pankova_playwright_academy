import { Locator, Page } from "playwright-core";
// src/pages/pmtool/login_page.ts
export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameImput: Locator;
  readonly paaswordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameImput = page.locator("#username");
    this.paaswordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }

  async open() {
    await this.page.goto(this.url);
  }

  async fillUsername(username: string) {
    await this.usernameImput.fill(username);
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
//složená metoda
   async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();

}