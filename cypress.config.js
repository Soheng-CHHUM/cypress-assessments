{
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { defineConfig } = require('cypress');
  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1',
    },
  });
}
