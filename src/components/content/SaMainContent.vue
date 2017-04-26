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
      this.isRtl = window.isRtl || false;

      Event.$on('toggleSidebar', () => {
        this.showSidebar = window.showSidebar;
      });
    },

    computed: {
      className() {
        if (this.showSidebar) {
          return isRtl ? 'sa-is-rtlcontent' : 'sa-is-ltrcontent';
        }

        return 'sa-content-nosidebar';
      }
    }
  }
</script>
