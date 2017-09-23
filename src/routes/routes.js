import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * Import components here
 */
import SaDashboard from '../components/views/SaDashboard.vue';
import SaForm from '../components/views/SaForm.vue';
import ModalsView from '../components/views/ui-elements/ModalsView.vue';

const routes = [
  { path: '/', component: SaDashboard},
  { path: '/form', component: SaForm},
  { path: '/modals', component: ModalsView }
];

/**
 * Exporting the router object that can be use in app's entry file (main.js)
 */
export const router = new VueRouter({
  routes: routes
});