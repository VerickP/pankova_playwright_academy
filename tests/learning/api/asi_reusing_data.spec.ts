//přepoužívání dat mezi jednotlivými data requesty

import { expect, test } from "playwright/test";
import { faker } from "@faker-js/faker";

test("Reusing Data Between API Requests", async ({ request }) => {
  const email = faker.internet.email();
  const password = "123456";
  const username = faker.internet.username();
  let userId = "";

  const registerResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username,
        password,
        email,
      },
    }
  );

  const registerResponseBody = registerResponse.json();
  userId = registerResponseBody.userId;

  const userRespons = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop",
    {
      params: { userId },
    }
  );
  // * Připravte testy na kontrolu hodnot: username a email
  expect(
    userRespondsBody.username,
    "userResponseBody.username should have value"
  ).toBe(username);
  expect(userResponBody.email, "userResponseBody.email should have value").toBe(
    email
  );
  /* Body
{
    "userId": 2208,
    "username": "Aric.Wolf1",
    "email": "Mohamed_Crist@example.net",
    "createdAt": "2025-09-23",
    "updatedAt": null,
    "active": 1
    */
});
