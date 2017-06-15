<template>
  <div class="sa-main-content" :class="className">
    <!-- Sample content -->

    <slot></slot>
  </div> 
</template>

<script>

  export default {

    data() {
      return {
        isRtl: false,
        showSidebar: true
      }
    },

    mounted() {
      // Read `window.isRtl` at startup
      this.getWindowIsRtl();

      // Listening for `toggleSidebar` event to show/hide the sidebar
      Event.$on('toggleSidebar', () => {
        this.showSidebar = window.showSidebar;
      });

      // Listening for `toggleDirecion` event to change the direction of sidebar
      Event.$on('toggleDirection', () => {
        this.getWindowIsRtl();
      });
    },

    computed: {
      className() {
        if (this.showSidebar) {
          return this.isRtl ? 'sa-is-rtlcontent' : 'sa-is-ltrcontent';
        }

        return 'sa-content-nosidebar';
      }
    },
    
    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>
