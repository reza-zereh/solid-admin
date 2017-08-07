<template>
  <div class="sa-switch-container">
    <div class="sa-switch-wrapper" :class="{'sa-row-reverse': isRtl}">
      <label class="checkbox sa-switch">
        <input type="checkbox" :id="id" :checked="checked" @change="update($event.target.checked)" :disabled="disabled" ref="input">
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

  // Changing v-model default prop and event which are 'value' and 'input'
  model: {
    prop : 'checked',
    event: 'change'
  },

  props: {
    id: {
      type: String
    },
    type: {
      type   : String,
      default: ''
    },
    checked: {
      type   : Boolean,
      default: false
    },
    disabled: {
      type   : Boolean,
      default: false
    },
    value: {
      type: String
    }
  },

  computed: {
   // Generates full class name for bulma types (e.g: is-success)
    typeClass() {
      return `is-${this.type}`;
    }
  },

  methods: {
    update(value) {
      // console.log(value);
      // this.checked = value;
      // this.$refs.input.checked = value;
      this.$emit('change', value);
    } 
  }
}
</script>
