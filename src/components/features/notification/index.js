import Vue from 'vue';
import SaNotification from './SaNotification.vue';

function open(propsData) {
  const NotificationComponent = Vue.extend(SaNotification);
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  });
}

export default {
  open(params) {
    let defaultParams = { type: 'primary'};
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },

  info(params) {
    let defaultParams = { type: 'info' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);

  },

  success(params) {
    let defaultParams = { type: 'success' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },
  
  warning(params) {
    let defaultParams = { type: 'warning' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  },

  error(params) {
    let defaultParams = { type: 'danger' };
    let propsData = Object.assign(defaultParams, params);
    return open(propsData);
  }



};