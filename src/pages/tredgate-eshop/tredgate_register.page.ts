import { Locator, Page } from "@playwright/test";

export class Registr {
  readonly page: Page;
  readonly myAccount: Locator;
  readonly registr: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirm: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.myAccount = page.locator("#top-links a i.fa-user");
    this.registr = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );

    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirm = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async openEshop() {
    await this.page.goto("https://tredgate.com/eshop/");
  }
  async openRegistr() {
    await this.myAccount.click();
    await this.registr.click();
  }

  async fillIFirstName(firstname: string) {
    await this.firstNameInput.fill(firstname);
  }

  async fillLastName(lastname: string) {
    await this.lastNameInput.fill(lastname);
  }
  async fillEmail(email: string) {
    await this.lastNameInput.fill(email);
  }
  async fillTelephone(telephone: string) {
    await this.lastNameInput.fill(telephone);
  }
  async fillPassword(password: string) {
    await this.lastNameInput.fill(password);
  }
  async fillPasswordConfirm(passwordConfirm: string) {
    await this.lastNameInput.fill(passwordConfirm);
  }
  async clickContine() {
    await this.continueButton.click();
  }
}
