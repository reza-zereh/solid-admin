<template>
  <!-- 
    Default bulma's nav-item anchor tag for navbar links
   -->
  <a class="nav-item" :href="to">
    <slot></slot>
  </a> 
</template>

<script>
  export default {
    props: {
      to: {
        default: '#',
        type: String
      }
    }
  } 
</script>