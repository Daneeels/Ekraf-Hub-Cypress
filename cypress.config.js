const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
    pageLoadTimeout: 120000,  // 120 detik
  defaultCommandTimeout: 10000,  // timeout untuk find element
  e2e: {
    setupNodeEvents(on, config) {},
  },
})

