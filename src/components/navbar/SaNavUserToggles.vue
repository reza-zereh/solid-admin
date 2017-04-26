<template>
  <!-- 
    Wrapper for toggle buttons (Sidebar, Search, etc.)
    if isRtl == true then located at right side of navbar
    otherwise located at left.

    NOTE: All sub-components & child items must be placed directly here (No <slot>).
  -->
  <div :class="className">
    <sa-sidebar-toggle></sa-sidebar-toggle>

    <sa-navitem>
      <span class="icon">
        <i class="fa fa-search"></i>
      </span>
    </sa-navitem>
  </div>
</template>

<script>
  import SaNavItem from './SaNavItem.vue';
  import SaNavSidebarToggle from './SaNavSidebarToggle.vue';

  export default {
    components: {
      'sa-navitem'       : SaNavItem,
      'sa-sidebar-toggle': SaNavSidebarToggle
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
        return isRtl ? 'nav-right sa-row-reverse sa-flex-start' : 'nav-left';
      }
    }
  }
</script>