{
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { defineConfig } = require('cypress');
  const fs = require('fs')
  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1',
      setupNodeEvents(on, config) {
        on('task', {
          countFiles(folderName) {
            return new Promise((resolve, reject) => {
              fs.readdir(folderName, (err, files) => {
                if (err) {
                  return reject(err)
                }
                resolve(files.length)
              })
            })
          },
        })
      }
    },
  });
}
