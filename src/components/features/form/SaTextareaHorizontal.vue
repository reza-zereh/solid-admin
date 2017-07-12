<template>
  <!--
              Form's label and textarea component with standard HTML5 attributes
        
              Usage:
                <sa-textarea label='label' name='name' id='id' placeholder='placeholder' v-model='data'></sa-textarea>
                * 'label' property is the only required one
          -->
  <div class="field is-horizontal" :class="{'has-text-right sa-row-reverse sa-form-horizontal-label': isRtl}">
    <div class="field-label is-normal" :class="{'sa-form-horizontal-label': isRtl}">
      <label class="label" :for="id">{{label}}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea class="textarea" :name="name" :id="id" :placeholder="placeholder" :class="{'has-text-right': isRtl}" :value="localValue" @input="updateValue($event.target.value)">
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaHorizontal',
  props: {
    'label': { required: true },
    'name': { default: '' },
    'id': { default: '' },
    'placeholder': { default: '' },
    'value': { default: '' }
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

