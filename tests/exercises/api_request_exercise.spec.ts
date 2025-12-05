import { test } from "@playwright/test";

test("Exersice", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
