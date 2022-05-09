const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/top-button-smooth/runtime.js',
    './dist/top-button-smooth/polyfills.js',
    './dist/top-button-smooth/main.js',
  ];

  await fs.ensureDir('widget');
  await concat(files, 'widget/top-button-smooth.js');
}
build();
