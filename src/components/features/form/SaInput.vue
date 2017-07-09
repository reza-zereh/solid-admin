<template>
  <!--
      Form's label and text input component with standard HTML5 attributes

      Usage:
        <sa-input label='label' name='name' id='id' placeholder='placeholder' v-model='data'></sa-input>
        * 'label' property is the only required one
  -->
  <div class="field" :class="{'has-text-right': isRtl}">
    <label class="label" :for="id">{{label}}</label>
    <p class="control">
      <input class="input" type="text" :name="name" :id="id" :placeholder="placeholder" 
        :class="{'has-text-right': isRtl}" :value="value" @input="updateValue($event.target.value)"
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    'label'      : { required: true },
    'name'       : { default : '' },
    'id'         : { default : '' },
    'placeholder': { default : '' },
    'value'      : { default : '' }
  },

  data() {
    return {
      isRtl: false
    }
  },

  mounted() {
    // Read `window.isRtl` at startup
    this.getWindowIsRtl();

    // Listening for `toggleDirecion` event to change the direction of input
    Event.$on('toggleDirection', () => {
      this.getWindowIsRtl();
    });
  },

  methods: {
    getWindowIsRtl() {
      this.isRtl = window.isRtl || false;
    },

    // adding v-model support for this custom component
    updateValue(value) {
      this.$emit('input', value);
    }
  }
}
</script>  