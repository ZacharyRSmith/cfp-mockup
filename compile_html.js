const fs = require('fs');

const template = fs.readFileSync(`./html/template.html`).toString();
['index', 'sponsor', 'volunteer'].forEach(baseName => {
  const fileContents = fs.readFileSync(`./html/${baseName}_main.html`).toString();
  fs.writeFileSync(
    `${baseName}.html`,
    template.replace(
      '<!-- INSERT CONTENT HERE -->',
      fileContents
    )
  );
});
