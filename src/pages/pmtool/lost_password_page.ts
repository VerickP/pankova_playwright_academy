import { Locator, Page } from "playwright-core";

export class LostPasswordPage {
  readonly page: Page;
  readonly usernameImput: Locator;
  readonly emailImput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameImput = page.locator(
      ":nth-child(2) > .input-icon > .form-control"
    );

    this.emailImput = page.locator(
      ":nth-child(3) > . imput-icon > .form-centrol"
    );

    this.sendButton = page.locator(".btn-info");
  }

  async fillUsername(username: string) {
    await this.usernameImput.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailImput.fill(email);
  }

  async clickSend() {
    await this.sendButton.click();
  }
}
