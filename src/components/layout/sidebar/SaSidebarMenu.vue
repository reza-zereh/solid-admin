<template>
  <!-- 
    Default bulma's menu-list wrapper for other menu items.
   -->
  <ul class="menu-list">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'SidebarMenu'
  }
</script>
