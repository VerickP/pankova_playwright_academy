import { test } from "@playwright/test";

test("Get request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("Get request whit URL parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 345,
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "testujeme hlavičky",
      },
    }
  );
});

test("POST Request with JSON Body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "test",
        numberProperty: 123,
        booleanProperty: true,
      },
    }
  );
});
