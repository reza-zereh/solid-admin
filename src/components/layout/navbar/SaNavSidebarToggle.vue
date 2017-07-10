<template>
  <!--
        Primary sidebar's show/hide button.
    -->
  <a class="nav-item" @click="toggleSidebar()">
    <span class="icon" v-if="showSidebar">
      <i class="fa fa-times"></i>
    </span>
  
    <span class="icon" v-else>
      <i class="fa fa-bars"></i>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ToggleSidebar',
  methods: {
    toggleSidebar() {
      this.$store.commit('setSidebarVisibility', !this.showSidebar);
    }
  },

  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    }
  }
}
</script>
