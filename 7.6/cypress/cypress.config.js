const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://localhost:3000/",
    retries:{
      openMode:2,
      runMode:2,
      viewportHeight: 768,
      viewportWidth: 1366,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
