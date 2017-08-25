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
                  :disabled='true/false'
                  :has-addon='true/false'
                  text-align='left/right'
                  :asterisk='true/false'
        >
        </sa-input>

        * 'label' property is the only required one
        * default type      = 'text'
        * default flow      = 'vertical'
        * default required  = 'false'
        * default has-addon = 'false'
        * default asterisk  = 'false'
        * slot: 'prepend' for prepending an add-on to input field
        * slot: 'append' for appending an add-on to input field
        * slot: 'help' for displaying help messages like errors
  -->
  <div class="field">
    <!--
      Template when input is vertical (default)
    -->
    <div class="field" :class="[isRtl ? 'has-text-right' : '', directionClass]" v-if="flow === 'vertical'">
      <label class="label" :class="directionClass" :for="id">
        <span>{{label}}</span>
        <span class="has-text-danger" v-if="asterisk">&nbsp;&#42;</span>
      </label>
      <p class="control" :class="{'sa-input-addon': hasAddon}">
        <slot name="prepend" v-if="hasAddon"></slot>
        <input class="input" :type="type == 'number' ? 'number' : 'text'" 
               :name="name" :id="id" :placeholder="placeholder" :required="required"
               :class="[textAlignClass, ` is-${color}`]" :disabled="disabled"
               :value="value" @input="updateValue($event.target.value)" ref="input"
        >
        <slot name="append" v-if="hasAddon"></slot>
      </p>
      
      <slot name="help"></slot>
    </div>

    <!--
      Template when input is horizontal
    -->
    <div class="field is-horizontal" 
        :class="{'has-text-right sa-row-reverse': isRtl}" 
        v-else-if="flow === 'horizontal'"
    >
      <div class="field-label is-normal" :class="{'sa-form-horizontal-label': isRtl}">
        <label class="label" :class="directionClass" :for="id">
          <span>{{label}}</span>
          <span class="has-text-danger" v-if="asterisk">&nbsp;&#42;</span>
        </label>
      </div>
      <div class="field-body">
        <div class="field" :class="[directionClass]">
          <div class="control" :class="{'sa-input-addon': hasAddon}">
            <slot name="prepend" v-if="hasAddon"></slot>
            <input class="input" :type="type == 'number' ? 'number' : 'text'" 
                  :name="name" :id="id" :placeholder="placeholder" :required="required"
                  :class="[textAlignClass, ` is-${color}`]" :disabled="disabled"
                  :value="value" @input="updateValue($event.target.value)" ref="input"
            >
            <slot name="append" v-if="hasAddon"></slot>
          </div>

          <slot name="help"></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TextInputMixin from './TextInputMixin.js';

export default {
  name: 'TextInput',
  mixins: [TextInputMixin],
  props: {
    type    : { default: 'text', type: String },
    hasAddon: { default: false, type : Boolean }
  }
}
</script>  