<template>
  <!--
    Simple wrapper for navabar dropdown's link.

    NOTE: Should be placed within <sa-nav-dropdown> component in <slot name="items">.
    TODO: Add more padding to left & right of <a> tag. Add border-bottom to <li> tag.
  -->
  <li>
    <a :href="to" @click="itemClicked">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'NavbraDropdownItem',
    props: {
      'to': { default: '#' }
    },

    methods: {
      // adds v-on:click support for this custom component
      itemClicked() {
        this.$emit('click');
      }
    }
  }
</script>
