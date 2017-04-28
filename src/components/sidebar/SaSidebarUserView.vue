<template>
<!-- 
  Sidebars's userview component.

  NOTE: All props are required.
-->
  <div class="sa-userview">
    <div class="sa-userview-background">
      <img :src="backgroundSrc">
    </div>

    <div class="sa-userview-profile" :class="profileClassName">
      <img :src="profileSrc" class="sa-circle">
      <p class="title is-4">{{username}}</p>
      <p class="subtitle is-6">{{email}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'backgroundSrc': {
        required: true,
        type: String
      },
      'profileSrc': {
        required: true,
        type: String
      },
      'username': {
        required: true,
        type: String
      },
      'email': {
        required: true,
        type: String
      }
    },

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
      profileClassName() {
        return this.isRtl ? 'sa-profile-rtl' : 'sa-profile-ltr'
      }
    },
    
    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>
