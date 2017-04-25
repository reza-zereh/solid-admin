<template>
  <a class="nav-item" @click="toggleSidebar">
    <span class="icon" v-if="!isSidebarVisible">
      <i class="fa fa-bars"></i>
    </span>
    
    <span class="icon" v-if="isSidebarVisible">
      <i class="fa fa-times"></i>
    </span>
  </a>
</template>

<script>
  export default {
    data() {
      return {
        isSidebarVisible: null
      }
    },

    methods: {
      toggleSidebar() {
        this.isSidebarVisible = !this.isSidebarVisible;
        window.showSidebar = !window.showSidebar;
        // Firing `toggleSidebar` event to show/hide the sidebar
        Event.$emit('toggleSidebar');
      }
    },

    mounted() {
      this.isSidebarVisible = (window.showSidebar === false) ? false : true;
    }
  }
</script>
