<template>
  <div class="sa-switch-container">
    <div class="sa-switch-wrapper" :class="{'sa-row-reverse': isRtl}">
      <label class="checkbox sa-switch">
        <input type="checkbox">
        <span class="sa-switch-slider sa-switch-round" :class="typeClass"></span>
      </label>
      <span class="sa-switch-content">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
import isRtl from '../../global/mixin/isRtl.js';
export default {
  name: 'SwitchCheckbox',
  mixins: [ isRtl ],
  props: {
    type: {
      type: String,
      default: ''
    }
  },

  computed: {
   // Generates full class name for bulma types (e.g: is-success)
    typeClass() {
      return `is-${this.type}`;
    }

  }
}
</script>
