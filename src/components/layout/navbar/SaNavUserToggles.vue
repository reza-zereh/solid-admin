<template>
  <!--
    Wrapper for toggle buttons (Sidebar, Search, etc.)
    if isRtl == true then located at right side of navbar
    otherwise located at left.

    NOTE: All sub-components & child items must be placed directly here (No <slot>).
  -->
  <div :class="className">
    <sa-sidebar-toggle></sa-sidebar-toggle>

    <sa-searchbar-toggle></sa-searchbar-toggle>

    <sa-direction-toggle></sa-direction-toggle>
  </div>
</template>

<script>
  import SaNavItem from './SaNavItem.vue';
  import SaNavSidebarToggle from './SaNavSidebarToggle.vue';
  import SaSearchbarToggle from './SaSearchbarToggle.vue';
  import SaNavDirectionToggle from './SaNavDirectionToggle.vue';

  export default {
    components: {
      'sa-navitem'         : SaNavItem,
      'sa-sidebar-toggle'  : SaNavSidebarToggle,
      'sa-searchbar-toggle': SaSearchbarToggle,
      'sa-direction-toggle': SaNavDirectionToggle
    },

    computed: {
      className() {
        return this.isRtl ? 'nav-right sa-row-reverse sa-flex-start' : 'nav-left';
      },

      // Determines if the screen is right-to-left or not by reading its value from the global store
      isRtl() {
        return this.$store.state.isRtl;
      }
    }
  }
</script>
