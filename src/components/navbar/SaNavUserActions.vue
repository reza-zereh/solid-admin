<template>
  <!-- 
    Wrapper for action nav-items (Notifications, User profile, etc.)
    if isRtl == true then located at left side of navbar
    otherwise located at right.
    
    NOTE: All sub-components & child items must be placed directly here (No <slot>).
  -->
  <div :class="className">
    <sa-navitem>
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
    </sa-navitem> 

    <sa-navitem>
      Home
    </sa-navitem>
  </div>
</template>

<script>
  import SaNavItem from './SaNavItem.vue';

  export default {
    components: {
      'sa-navitem': SaNavItem
    },
    data() {
      return {
        isRtl: false 
      }
    },

    mounted() {
      this.isRtl = window.isRtl || false;
    },

    computed: {
      className() {
        return this.isRtl ? 'nav-left' : 'nav-right sa-row-reverse sa-flex-start';
      }
    }
  }
</script>
