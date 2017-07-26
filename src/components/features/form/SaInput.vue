<template>
  <!--
      Form's label and text input component with standard HTML5 attributes

      Usage:
        <sa-input type='text/number' label='label' name='name' id='id' 
                  placeholder='placeholder' 
                  v-model='data'
                  color='success/danger/info/warning'
                  flow='horizontal/vertical'
                  :required='true/false'
                  text-align='left/right'
        >
        </sa-input>

        * 'label' property is the only required one
        * default type = 'text'
        * default flow = 'vertical'
        * default required = 'false'
  -->
  <div class="field">
    <!--
      Template when input is vertical (default)
    -->
    <div class="field" :class="{'has-text-right': isRtl}" v-if="flow === 'vertical'">
      <label class="label" :for="id">{{label}}</label>
      <p class="control">
        <input class="input" :type="type == 'number' ? 'number' : 'text'" :name="name" :id="id" 
               :placeholder="placeholder" :required="required"
               :class="[isRtl ? 'has-text-right' : '', ` is-${color}`]" 
               :style="inlineStyle" :value="localValue" 
               @input="updateValue($event.target.value)"
        >
      </p>
    </div>

    <!--
      Template when input is horizontal
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
            <input class="input" :type="type == 'number' ? 'number' : 'text'" :name="name" :id="id" 
                   :placeholder="placeholder" :required="required"
                   :class="[isRtl ? 'has-text-right' : '', ` is-${color}`]" 
                   :style="inlineStyle" :value="localValue" 
                   @input="updateValue($event.target.value)"
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
    'type'       : { default : 'text'},
    'name'       : { default : '' },
    'id'         : { default : '' },
    'placeholder': { default : '' },
    'required'   : { default : false, type: Boolean },
    'value'      : { default : '' },
    'color'      : { default : '' },
    'flow'       : { default : 'vertical' },
    'text-align' : { default : '', type: String }
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
    },

    // Generate inline style rules for the element
    inlineStyle() {
      if (this.textAlign !== '') {
        return (this.textAlign === 'left') ? 'text-align: left !important;' : 'text-align: right !important;'
      }
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