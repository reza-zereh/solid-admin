<template>
  <!--
    Form's field container. Suitable for radio button and checkbox.

    Usage:
      <sa-field label='label' flow='vertical/horizontal'>
        <other-component></other-component>
      </sa-field>
  -->
  <div>
    <!-- template for vertical field -->
    <div class="field" :class="{'has-text-right': isRtl}" v-if="flow === 'vertical'">
      <label class="label" v-text="label"></label>
      <div class="control">
        <slot></slot>
      </div>
    </div>
  
    <!-- template for horizontal field -->
    <div class="field is-horizontal" 
         :class="{'has-text-right sa-row-reverse': isRtl}"
         v-else-if="flow === 'horizontal'"
    >
      <div class="field-label" :class="{'sa-form-horizontal-label': isRtl}">
        <label class="label" v-text="label"></label>
      </div>
  
      <div class="field-body" :class="{'sa-row-reverse': isRtl}">
        <div class="field is-narrow">
          <div class="control">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isRtl from '../../global/mixin/isRtl.js';

export default {
  name: 'FieldContainer',
  mixins: [isRtl],
  props: {
    label: String,
    flow: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

