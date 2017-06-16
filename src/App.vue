<template>
  <div id="app">
    <!-- Lock screen. only vissible when the dashboard is locked-->
    <sa-lock-screen v-if="isDashboardLocked"></sa-lock-screen>

    <!-- Content to show when the dashboard is not locked-->
    <div v-else="isDashboardLocked">
      <!-- Fixed top navbar -->
      <sa-navbar></sa-navbar>
      <sa-search></sa-search>
  
      <!-- wrapper for sidebar and main content -->
      <div class="sa-main-wrapper">
        <sa-sidebar></sa-sidebar>
  
        <sa-content>
          <router-view></router-view>
        </sa-content>
      </div>
    </div>

  </div>
</template>

<script>
import SaNavbar from './components/layout/navbar/SaNavbar.vue';
import SaSidebar from './components/layout/sidebar/SaSidebar.vue';
import SaMainContent from './components/layout/content/SaMainContent.vue';
import SaSearch from './components/layout/search/SaSearch.vue';
import SaLockScreen from './components/layout/overlay/SaLockScreen.vue';

export default {
  components: {
    'sa-navbar'     : SaNavbar,
    'sa-sidebar'    : SaSidebar,
    'sa-content'    : SaMainContent,
    'sa-search'     : SaSearch,
    'sa-lock-screen': SaLockScreen
  },

  data() {
    return {

    }
  },

  computed: {
    isDashboardLocked() {
      return this.$store.state.isDashboardLocked;
    }
  }
}
</script>
