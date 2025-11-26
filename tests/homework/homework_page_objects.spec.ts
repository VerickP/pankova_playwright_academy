import { test } from "@playwright/test";
import { Registr } from "../../src/pages/tredgate-eshop/tredgate_register.page.ts";

test("Registrace přes Page Object", async ({ page }) => {
  const registr = new Registr(page);

  await registr.openEshop();
  await registr.openRegistr();

  await registr.fillIFirstName("Veronika");
  await registr.fillLastName("Pánková");
  await registr.fillEmail("pankova.veri@gmail.com");
  await registr.fillTelephone("721158999");
  await registr.fillPassword("Heslo123");
  await registr.fillPasswordConfirm("Helso123");
  await registr.clickContine();
});
