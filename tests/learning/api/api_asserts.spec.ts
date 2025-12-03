import { expect, test } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  expect(response.status(), "Response Status Should be 200").toEqual(200);
});

test("Assert Response Header", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const headers = response.headers();
  const contentType = headers["content-type"];
  expect(contentType, "Response Header Content-Type has Value").toEqual(
    "application/json; charset=utf-8"
  );
});

test("Response Body Assert", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responBody = await response.json();
  expect(responBody.message, "responseBody.message should have value").toEqual(
    "TEG#B Training GET request successful"
  );
  expect(responBody, "responseBody have property timestamp").toHaveProperty(
    "timestamp"
  );
  expect(typeof responBody.id, "responseBody.id is a number").toBe("number");
});
