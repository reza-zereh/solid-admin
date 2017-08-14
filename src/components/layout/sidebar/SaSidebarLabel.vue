<template>
  <!-- 
    Default bulma's menu-label.
  -->
  <p class="menu-label" v-text="text">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: 'SidebarLabel',
    props: {
      text: { type: String }
    }
  }
</script>
