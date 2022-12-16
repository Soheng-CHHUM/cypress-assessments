{
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { defineConfig } = require('cypress');
  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1',
      // setupNodeEvents(on, config) {
      //   // implement node event listeners here
      // },
    },
    // env: {
    //   BASE_URL: 'https://fakerestapi.azurewebsites.net/api/v1',
    // },
  });
}
