<template>
  <!--
    Main wrapper for dashboard content.

    Usage:
      <sa-main-content>
        content goes here.
      </sa-main-content>
  -->
  <div class="sa-main-content" :class="className">
    <slot></slot>
  </div> 
</template>

<script>

  export default {
    name: 'MainContent',
    data() {
      return {
        isRtl: false
      }
    },

    mounted() {
      // Read `window.isRtl` at startup
      this.getWindowIsRtl();

      // Listening for `toggleDirecion` event to change the direction of sidebar
      Event.$on('toggleDirection', () => {
        this.getWindowIsRtl();
      });
    },

    computed: {
      className() {
        if (this.showSidebar) {
          return this.isRtl ? 'sa-is-rtlcontent has-text-right' : 'sa-is-ltrcontent';
        }

        return this.isRtl ? 'sa-content-nosidebar has-text-right' : 'sa-content-nosidebar';
      },

      showSidebar() {
        return this.$store.state.showSidebar;
      }
    },
    
    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>
