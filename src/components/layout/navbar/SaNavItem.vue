<template>
  <!-- 
    Default bulma's nav-item anchor tag for navbar links
   -->
  <a class="nav-item" :href="to" @click="itemClicked()">
    <slot></slot>
  </a> 
</template>

<script>
  export default {
    name: 'NavbarItem',
    props: {
      to: {
        default: '#',
        type: String
      }
    },

    methods: {
      // Adds v-on:click directive support to this component
      itemClicked() {
        this.$emit('click');
      }
    }
  } 
</script>