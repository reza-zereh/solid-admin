<template>
  <!--
    Simple wrapper for navabar dropdown's link.

    NOTE: Should be placed within <sa-nav-dropdown> component in <slot name="items">.
    TODO: Add more padding to left & right of <a> tag. Add border-bottom to <li> tag.
  -->
  <li>
    <a :href="to">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      'to': { default: '#' }
    }
  }
</script>
