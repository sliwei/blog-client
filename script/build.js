const shell = require('shelljs');

shell.exec(`npm run nuxt:build`, function() {
  // 上传
  shell.exec(`node ./upload.js`);
});


