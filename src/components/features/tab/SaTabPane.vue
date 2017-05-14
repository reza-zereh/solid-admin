<template>
  <!--
    Tab Pane component. This component should be placed within a `<sa-tabs>` component.

    NOTE: `name` property is required. You can make a tab selected by passing true 
      to `selected` property.
  -->
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    selected: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
}
</script>
