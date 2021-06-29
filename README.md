# cfp-mockup
Code For Philly mockup. View our progress here: codeforphilly.github.io/cfp-mockup/

# Context
A wonderful volunteer Walt created a mock up of the new homepage. Walt did a great job and we are very appreciative! There are just a few additional things we need to do to get it fully working. Our old website was built on a system called Laddr. This is a custom content management system developed by Chris Alfano, the founder of Code for Philly. It was specifically designed to manage an organization like Code for Philly and its data. While Laddr is really great, it's not updated as much as we may need. Several people in the past had advocated to moving the website to a more popular system like WordPress or Django. Unfortunately the suggestions were shot down. There's still a small group of people that really want us to stick with laddr. Also so much work has been done in Laddr and it's so customized at this point that it would a huge overhaul to redo the whole thing in a different content management system. So we're starting small. 

# Goal 
The goal of this particular project is just to re-do the homepage first, and connect it to the existing old pages and laddr. The issues on our "Issues" page in this repo are ones that the leadership team has identified as things they would like changed. However we're open to other ideas of course.

# More Details and our Blog
https://codeforphilly.org/projects/code_for_philly_website_redesign

# How to change a project on the home page

There are 2 things to change in index.html:
- the project card in the "Portfolio Grid", and
- the modal that pop ups when you click on the project card.

You can change index.html by going to https://github.com/CodeForPhilly/cfp-mockup/blob/main/index.html then clicking the edit button, which looks like a pencil. It's close to the "Raw" and "Blame" buttons.

Below are instructions on how to change index.html. Here is an example change: https://github.com/ZacharyRSmith/cfp-mockup/pull/1/files

How to change the project card:

In index.html, search for `<!-- Portfolio Grid -->`. Here, you will find the project card to change. Change:
  - the img
  - the heading
  - the subheading

How to change the popup modal:

1. Copy html/projects/template_modal.html to any location where you can replace all the `TODO`s.
- For `id="portfolioModalTODO"`, you'll set the id to the project card's href minus the `#`. Ex.: `id="portfolioModal3`.
- For `<!-- MODAL TODO -->`, replace TODO with the modal number. Ex.: `<!-- MODAL 3 -->`.
- Replace the rest of the TODOs.
2. Now that your HTML is ready, find the modal to replace in index.html by searching for the popup modal id. Replace it with your HTML.

# Development
## Changing HTML

1. Make changes in files in html/.
1. Run `node compile_html.js`, which uses html/ to update final HTML pages. Alternatively, you can manually update the final HTML pages by copying & pasting from html/ to the final HTML pages.
