// Import packages
import Vue from 'vue';
import Vuex from 'vuex';

// Register 'vuex' to work with 'vue'
Vue.use(Vuex);

// Export central store to be accessible in main app's entry or other files
export const store = new Vuex.Store({
  state: {
    // TODO: window.isRtl should move to this central store
    // TODO: unlock password should be read from a config file or localStorage and will be changeble

    isDashboardLocked: false,
    unlockPassword: 'secret',

    // holds global state for sidebar visibility
    showSidebar: true
  },

  getters: {

  },

  mutations: {
    /**
     * Set visibility of sidebar
     * @param {Object} state 
     * @param {Boolean} status 
     */
    setSidebarVisibility(state, status) {
      state.showSidebar = status;
    }
  }
});