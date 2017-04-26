<template>
  <div id="app">
    <!-- Fixed top navbar -->
    <sa-navbar></sa-navbar>

    <!-- wrapper for sidebar and main content -->
    <div class="sa-main-wrapper">
      <sa-sidebar></sa-sidebar>

      <sa-content></sa-content>
    </div>
  </div>
</template>

<script>
import SaNavbar from './components/navbar/SaNavbar.vue';
import SaSidebar from './components/sidebar/SaSidebar.vue';
import SaMainContent from './components/content/SaMainContent.vue';

export default {
  components: {
    'sa-navbar' : SaNavbar,
    'sa-sidebar': SaSidebar,
    'sa-content': SaMainContent
  },

  data() {
    return {

    }
  }
}
</script>
