import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "client/cypress/tests/e2e/**/*.cy.{js,ts}",
    supportFile: "client/cypress/support/e2e.ts",
    baseUrl: "http://localhost:3000",
  },
});
