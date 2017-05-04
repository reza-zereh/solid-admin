# solid-admin

> A simple admin panel based on [Vue.js](https://vuejs.org/) and [Bulma](http://bulma.io/) css framework that could be LTR and RTL at the same time!

## Quick install

1. Clone the project:
```bash
$ git clone https://github.com/ironcladgeek/solid-admin.git
```
or [download](https://github.com/ironcladgeek/solid-admin/archive/master.zip) the zip and extract it.

2. `cd` into `solid-admin` directory and install dependencies with: 
``` bash
npm install
```

3. Run or build with:
```bash
# serve with hot reload at localhost:8080
npm start

# build for development without minification
npm run dev

# build for production with minification
npm run build
```
## Components

### Main Navbar
Fixed top navbar - `./src/components/navbar/SaNavbar.vue` consists of 3 sections (left, center and right) and is a wrapper for other navbar's components:

- Navbar toggles section - `./src/components/navbar/SaNavUserToggles.vue` is at left side of the navbar if `window.isRtl = false`, otherwise is at the right side.
- Navbar actions section - `./src/components/navbar/SaNavUserActions.vue` is at right side of the navbar if `window.isRtl = false`, otherwise is at the left side. 
- Simple navbar link - `./src/components/navbar/SaNavItem.vue` 
- Dropdown menu - `./src/components/navbar/SaNavDropdown.vue`
  * Dropdown links - `./src/components/navbar/SaNavDropdownItem.vue`
- Sidebar toggler - `./src/components/navbar/SaNavSidebarToggle.vue` Shows and hides the sidebar.
- Searchbar toggler - `./src/components/navbar/SaSearchbarToggle.vue` Shows the searchbar.
- Direction toggler - `./src/components/navbar/SaNavDirectionToggle.vue` Changes direction from left to right and wise versa.

### Sidebar

### Search Form