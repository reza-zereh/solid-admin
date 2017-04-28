/**
 * Global configuration which should be accessible by all components
 * ==============================================================================
 */
// Controls the whole direction of the admin panel
window.isRtl = false;

// Holds the global state for sidebar
// Required - May see unexpected behaviour if undefined
window.showSidebar = true;

/**
 * Importing css and sass styles
 * ===============================================================================
 */
import '../node_modules/bulma/css/bulma.css';
import './assets/sass/app.scss';
