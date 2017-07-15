<template>
  <!--
      Form's label and text input component with standard HTML5 attributes

      Usage:
        <sa-input label='label' name='name' id='id' 
                  placeholder='placeholder' 
                  v-model='data'
                  type='success/danger/info/warning'
                  flow='horizontal/vertical'
        >
        </sa-input>

        * 'label' property is the only required one
        * default flow is 'vertical'
  -->
  <div class="field">
    <!--
      Template for when input is vertical (default)
    -->
    <div class="field" :class="{'has-text-right': isRtl}" v-if="flow === 'vertical'">
      <label class="label" :for="id">{{label}}</label>
      <p class="control">
        <input class="input" type="text" :name="name" :id="id" 
               :placeholder="placeholder" :class="[isRtl ? 'has-text-right' : '', ` is-${type}`]" 
               :value="localValue" @input="updateValue($event.target.value)"
        >
      </p>
    </div>

    <!--
      Template for when input is horizontal
    -->
    <div class="field is-horizontal" 
        :class="{'has-text-right sa-row-reverse sa-form-horizontal-label': isRtl}" 
        v-else-if="flow === 'horizontal'"
    >
      <div class="field-label is-normal" :class="{'sa-form-horizontal-label': isRtl}">
        <label class="label" :for="id">{{label}}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" type="text" :name="name" :id="id" 
                   :placeholder="placeholder" :class="[isRtl ? 'has-text-right' : '', ` is-${type}`]" 
                   :value="localValue" @input="updateValue($event.target.value)"
            >
          </div>
        </div>
      </div>
    </div>
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
    'value'      : { default : '' },
    'type'       : { default: '' },
    'flow'       : { default: 'vertical' }
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