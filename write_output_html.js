const fs = require('fs');

const navbar = fs.readFileSync('html_src/views/navbar.html');

const files = fs.readdirSync('html_src/pages');
for (const file of files) {
  let contents = fs.readFileSync(`html_src/pages/${file}`, { encoding: 'utf-8' });
  contents = contents.replace('<!-- #include file="navbar.html" -->', navbar);
  fs.writeFileSync(file, contents);
}
