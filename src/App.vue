<template>
  <div id="app">
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
</template>

<script>
import SaNavbar from './components/layout/navbar/SaNavbar.vue';
import SaSidebar from './components/layout/sidebar/SaSidebar.vue';
import SaMainContent from './components/layout/content/SaMainContent.vue';
import SaSearch from './components/layout/search/SaSearch.vue';

export default {
  components: {
    'sa-navbar' : SaNavbar,
    'sa-sidebar': SaSidebar,
    'sa-content': SaMainContent,
    'sa-search': SaSearch
  },

  data() {
    return {

    }
  }
}
</script>
