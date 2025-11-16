import { test } from "@playwright/test"; // toto se používá vzdy !!

import { faker } from "@faker-js/faker";
//import { fakerCS_CZ } from "@faker-js/faker";

test("Faker Random Data Generation", async () => {
  const firstName = faker.person.firstName("female");
  const lastName = faker.person.lastName("female");
  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: "seznam.cz",
  });
  const address = faker.location.streetAddress() + ", " + faker.location.city();

  console.log("Generated First Name: " + firstName);
  console.log("Generated Last Name: " + lastName);
  console.log("Generated Email: " + email);
  console.log("Generated Address: " + address);
});
