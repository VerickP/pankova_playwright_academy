import { Locator, Page } from "playwright-core";
import { LoginPage } from "./login_page.ts";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameImput: Locator;
  readonly emailImput: Locator;
  readonly sendButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameImput = page.locator(
      ":nth-child(2) > .input-icon > .form-control"
    );

    this.emailImput = page.locator(
      ":nth-child(3) > . imput-icon > .form-centrol"
    );

    this.sendButton = page.locator(".btn-info");
    this.backButton = page.locator("#back-btn");
  }

  async fillUsername(username: string) {
    await this.usernameImput.fill(username);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailImput.fill(email);
    return this;
  }

  async clickSend() {
    await this.sendButton.click();
    return new LoginPage(this.page);
  }
  async clickBack() {
    await this.backButton.click();
    return new LoginPage(this.page);
  }
}
