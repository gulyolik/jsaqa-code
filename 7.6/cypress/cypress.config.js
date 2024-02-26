const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://localhost:3000/",
    viewportHeight: 768,
    viewportWidth: 1366,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
);
