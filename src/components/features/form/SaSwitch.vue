<template>
  <!--
    Switch style checkbox

    Usage:
      <sa-switch id="id" v-model="model"
                 type="success/danger/warning/info"
                 value="value" 
                 :disabled="true/false"
      >
      </sa-switch>
  -->
  <div class="sa-switch-container">
    <div class="sa-switch-wrapper" :class="{'sa-row-reverse': isRtl}">
      <label class="checkbox sa-switch">
        <input type="checkbox" :id="id" :name="name"
               :checked="localChecked" @change="update($event.target.checked)" 
               :disabled="disabled" :value="value" ref="checkbox"
        >
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

  // Changing v-model default prop and event from 'value' and 'input'
  model: {
    prop : 'checked',
    event: 'change'
  },

  props: {
    id: {
      type: String
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type   : String,
      default: ''
    },
    checked: {
      type   : Boolean
    },
    disabled: {
      type   : Boolean,
      default: false
    },
    value: {
      type: String
    }
  },

  data: () => ({
    // local variable to track this checkbox's checked status
    localChecked: null
  }),

  mounted() {
    this.localChecked = this.checked;
  },

  computed: {
   // Generates full class name for bulma types (e.g: is-success)
    typeClass() {
      return `is-${this.type}`;
    }
  },

  watch: {
    /**
     * Watcher for 'checked' prop to update 'localChecked'
     * Usefull when this component's v-model value is changing dynamically (not by clicking)
     */
    checked(newValue) {
      this.localChecked = newValue;
    }
  },

  methods: {
    update(value) {
      this.localChecked = value;
      this.$emit('change', value);
    } 
  }
}
</script>
