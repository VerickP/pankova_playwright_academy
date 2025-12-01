import { expect, test } from "playwright/test";

test.describe("Mouse Actions", () => {
  // test najetí myší
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });
  test("Mouse Hover", async ({ page }) => {
    await page.locator('[data-testid="hover-box"]').hover(); // když nedáme spadne to na tom že tam ten prvek není
    await expect(page.locator('[data-testid="hover-message"]')).toBeVisible();
  });

  test("Drag to", async ({ page }) => {
    //přetažení myší
    const draggable = page.locator("#drag1");
    const dropzone = page.locator("#drop1");
    await dropzone.scrollIntoViewIfNeeded(); //  Zascrollování na dropzone -> musí být vidět pro úspěšné přetažení.

    await draggable.dragTo(dropzone);
    // Počkání 1 sec., ať vidíme výsledek
    // podtím je jak to vypnu
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);
  });

  test("Double Click", async ({ page }) => {
    await page.locator('[data-testid="double-click-box"]').dblclick();
    await expect(page.locator('[data-testid="double-click-box"]')).toHaveClass(
      /action-active/
    ); // ? /action-active/ - regex, který ověří, že element má třídu action-active. Používáme proto, že prvek má více tříd a toHaveClass ověřuje všechny třídy. Regulární výraz ověří, že prvek má třídu action-active a ostatní třídy jsou libovolné

    await expect(
      page.locator('[data-testid="double-click-box"]')
    ).toContainClass("action-active"); //to je jen v nových playwhraitech
  });

  test("Click and hold", async ({ page }) => {
    //držení tlačítka
    const hold = page.locator(".hold-button").click({ delay: 2000 });
    await expect(page.locator(".hold-button")).toContainClass("hold-active");
    await hold;

    //  Počkání 1 sec., ať vidíme výsledek
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);
  });
});
