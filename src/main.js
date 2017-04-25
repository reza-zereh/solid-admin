import './bootstrap.js';

import Vue from 'vue';
// Global `Event` object for firing and listening to custom events
window.Event = new Vue();

import App from './App.vue';


new Vue({
  el: '#app',
  render: h => h(App)
});
