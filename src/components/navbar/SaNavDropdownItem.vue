<template>
  <!--
    Simple wrapper for navabar dropdown's link.

    NOTE: Should be placed within <sa-nav-dropdown> component in <slot name="items">.
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
