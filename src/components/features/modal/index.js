import Vue from 'vue';
import { store } from '../../../store/store.js';
import SaModal from './SaModal.vue';

/**
 * Creates an instance of ModalComponent (Vue subclass)
 * connects it to central store management (Vuex) and shows the modal
 * @param {Object} propsData 
 */
function open(propsData) {
  const ModalComponent = Vue.extend(SaModal);
  return new ModalComponent({
    el: document.createElement('div'),
    store: store,
    propsData
  });
}

// Fluent API for opening different type of modals with some predifined properties
// e.g: this.$modal.success({options})
export default {
  open(params) {
    let defaultParams = { type: 'primary'};
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },

  info(params) {
    let defaultParams = { type: 'info', icon: 'fa-exclamation-circle' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);

  },

  success(params) {
    let defaultParams = { type: 'success', icon: 'fa-check-circle' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },
  
  warning(params) {
    let defaultParams = { type: 'warning', icon: 'fa-exclamation-triangle' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },

  error(params) {
    let defaultParams = { type: 'danger', icon: 'fa-times-circle' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  }

};