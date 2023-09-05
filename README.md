# Website

UF DBF Website

https://uf-design-build-fly.github.io/Website/

To Update Existing Page

- Change markdown file
- run 'npm run start' to view a local copy of the site

To Create New Page

- Create/copy a new markdown file
- Copy a page in the pages folder
- Update line 6 in the .js file to point to the new markdown file
- Update the title line 9(If necessary)
- Import the new page into App.js (line ~11)
- Add a route line to App.js (line ~26)
- Add a navLink to the navBar.js in the component folder (line ~13)

To Deploy

- run 'npm run build'
- run 'npm run deploy'
