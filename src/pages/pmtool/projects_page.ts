import { Locator, Page } from "playwright-core";
import { CreateNewProjectModal } from "./projects/create_new_project_modal.ts";
import { expect } from "playwright/test";

export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Locator;
  readonly projectsTabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator('[test_id="Add Project"]');
    this.projectsTabel = page.locator("slimScroll table");
  }
  async clickAddProject() {
    await expect(this.projectsTabel).toBeVisible();
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}
