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
        :class="{'has-text-right': isRtl}" :value="localValue" @input="updateValue($event.target.value)"
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
      localValue: this.value
    }
  },

  computed: {
    // Determines if the screen is right-to-left or not by reading its value from the global store
    isRtl() {
      return this.$store.state.isRtl;
    }
  },

  methods: {
    // adding v-model support for this custom component
    updateValue(value) {
      this.localValue = value;
      this.$emit('input', value);
    }
  }
}
</script>  