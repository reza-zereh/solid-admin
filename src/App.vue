<template>
  <div id="app">
    <!-- Fixed top navbar -->
    <sa-navbar>
      <template slot="nav-left">
        <sa-nav-item to="/books">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </sa-nav-item>
      </template>

      <template slot="nav-center">
        <sa-nav-item>
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </sa-nav-item>
      </template>

      <template slot="nav-right">
        <sa-nav-toggle></sa-nav-toggle>
        <sa-nav-item>
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
        </sa-nav-item>
      </template>
    </sa-navbar>

    <!-- wrapper for sidebar and main content -->
    <div class="sa-main-wrapper">
      <sa-sidebar></sa-sidebar>

      <!-- Temp main content -->
      <div class="sa-main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla doloribus velit adipisci ullam vel, ipsa, perspiciatis consequatur excepturi aspernatur sunt itaque dolores neque ut fugiat esse nihil. Temporibus, delectus, quo!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iste eos quod animi reprehenderit quo obcaecati repellat dolorum perferendis in excepturi error inventore possimus, culpa ipsa quos, fugit officia at!
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>
import SaNavbar from './components/navbar/SaNavbar.vue';
import SaNavItem from './components/navbar/SaNavItem.vue';
import SaNavToggle from './components/navbar/SaNavToggle.vue';

import SaSidebar from './components/sidebar/SaSidebar.vue';

export default {
  components: {
    'sa-navbar'    : SaNavbar,
    'sa-nav-item'  : SaNavItem,
    'sa-nav-toggle': SaNavToggle,
    'sa-sidebar'   : SaSidebar
  },

  data() {
    return {

    }
  }
}
</script>
