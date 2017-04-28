<template>
  <div class="sa-main-content" :class="className">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae autem aliquid maiores natus, maxime! Eius corporis accusantium voluptate temporibus quidem, consequuntur adipisci, natus nobis enim. Voluptatum doloremque tenetur asperiores quaerat.
    </p>
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
