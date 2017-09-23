<template>
<!--
  Default bulma's box component with 'heading' feature added.

  Usage:
    <sa-box title="heading" 
            type="primary/info/success/warning/danger/dark/grey"
    >
      <p>Content goes here</p>
    </sa-box>

    default type: 'grey'
  --> 
  <div class="box sa-box">
    <div class="sa-box-header" :class="[`is-${type}`]" v-if="title">
      <h4 class="title" v-text="title"></h4>
    </div>
    <div class="sa-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaBox',
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'grey'
    }
  }
}
</script>

