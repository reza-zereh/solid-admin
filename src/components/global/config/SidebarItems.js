/**
 * Simply add an object for each node you want to be displayed in sidebar.
 * 
 * Node types and usage:
 * ======================================================================
 * LABEL => 
 * {
 *   type: 'label',
 *   text: 'text to display'
 * }
 * 
 * 
 * MENU =>
 * {
 *   type: 'menu,
 *   items: [array, of, items]
 * }
 * 
 * notes for 'menu':
 *    1. May act as parent for 'label', 'submenu' or 'link' nodes
 * 
 * 
 * SUBMENU =>
 * {
 *   type: 'submenu',
 *   text: 'text to display',
 *   icon: 'font-awesome icon (eg. fa-plus)',
 *   items: [array, of, items]
 * }
 * 
 * notes for 'submenu':
 *    1. Should be direct child of 'menu'
 *    2. 'submenu'.'items' can only cointain 'link' type node
 * 
 * 
 * LINK =>
 * {
 *   type: 'link',
 *   text: 'text to display',
 *   to: 'href',
 *   icon: 'font-awesome icon (eg. fa-plus)', 
 *   routerLink: 'wheter it should parse as a <router-link></router-link> or <a></a> tag'
 * }
 * 
 * notes for 'link':
 *    1. Should be direct child of either 'menu' or 'submenu'
 * 
 */

// Put sidebar's items here in this array
const sidebarItems = [
  {
    'type': 'label',
    'text': 'General'
  },

  {
    'type': 'menu',
    'items': [
      {
        'type': 'link',
        'to': '/',
        'icon': 'fa-tachometer',
        'routerLink': true,
        'text': 'Dashboard'
      },
      {
        'type': 'link',
        'to': '/form',
        'icon': 'fa-file-text-o',
        'routerLink': true,
        'text': 'Form'
      },
      {
        'type': 'link',
        'to': '/mails',
        'icon': 'fa-envelope-o',
        'routerLink': false,
        'text': 'Mails'
      }
    ]
  },

  {
    'type': 'label',
    'text': 'Administration'
  },

  {
    'type': 'menu',
    'items': [
      {
        'type': 'submenu',
        'text': 'System',
        'icon': 'fa-cog',
        'items': [
          {
            'type': 'link',
            'to': '/form',
            'icon': 'fa-tachometer',
            'routerLink': true,
            'text': 'Settings'
          },
          {
            'type': 'link',
            'to': '/',
            'icon': 'fa-envelope',
            'routerLink': true,
            'text': 'Mails'
          }
        ]
      },

      {
        'type': 'submenu',
        'text': 'Catalog',
        'icon': 'fa-tags',
        'items': [
          {
            'type': 'link',
            'to': '/categories',
            'icon': 'fa-file-text-o',
            'routerLink': false,
            'text': 'Categories'
          }
        ]
      }
    ]
  }

];

export default sidebarItems;