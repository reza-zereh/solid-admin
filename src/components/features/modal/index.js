import Vue from 'vue';
import SaModal from './SaModal.vue';

function open(propsData) {
  console.log('Openning modal');
  const ModalComponent = Vue.extend(SaModal);
  return new ModalComponent({
    el: document.createElement('div'),
    propsData
  });
}

export default {
  open(params) {
    console.log('modal.open');
    return open(params);
  }
};