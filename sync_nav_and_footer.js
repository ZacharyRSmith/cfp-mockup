const fs = require('fs');

const cheerio = require('cheerio');

$New = cheerio.load(fs.readFileSync('index.html').toString());
const navNew = $New.html($New('nav'));
const footerNew = $New.html($New('footer'));

['sponsor.html', 'volunteer.html'].forEach(filename => {
  const $Old = cheerio.load(fs.readFileSync(filename).toString());

  $Old('nav').replaceWith(navNew);
  $Old('footer').replaceWith(footerNew);

  fs.writeFileSync(filename, $Old.html());
});
