<template>
  <!--
      Form's label and textarea component with standard HTML5 attributes

      Usage:
        <sa-textarea label='label' name='name' id='id' 
                     placeholder='placeholder' 
                     v-model='data'
                     color='success/danger/info/warning'
                     flow='horizontal/vertical'
                    :required='true/false'
                    text-align='left/right'
        >
        </sa-textarea>

        * 'label' property is the only required one
        * default flow = 'vertical'
        * default required = 'false'
  -->
  <div class="field">
    <!--
      Template when textarea is vertical (default)
    -->
    <div class="field" :class="{'has-text-right': isRtl}" v-if="flow === 'vertical'">
      <label class="label" :for="id">{{label}}</label>
      <p class="control">
        <textarea class="textarea" :name="name" :id="id" 
                  :placeholder="placeholder" :required="required"
                  :class="[isRtl ? 'has-text-right' : '', ` is-${color}`]"
                  :value="localValue" :style="inlineStyle" 
                  @input="updateValue($event.target.value)"
        >
        </textarea>
      </p>
    </div>

    <!--
      Template when textarea is horizontal
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
            <textarea class="textarea" :name="name" :id="id" 
                      :placeholder="placeholder" :required="required" 
                      :class="[isRtl ? 'has-text-right' : '', ` is-${color}`]"
                      :value="localValue" :style="inlineStyle" 
                      @input="updateValue($event.target.value)"
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    'label'      : { required: true },
    'name'       : { default : '' },
    'id'         : { default : '' },
    'placeholder': { default : '' },
    'required'   : { default : false, type: Boolean },
    'value'      : { default : '' },
    'color'      : { default: '' },
    'flow'       : { default: 'vertical' },
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

