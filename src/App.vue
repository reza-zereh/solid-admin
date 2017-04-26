<template>
  <div id="app">
    <!-- Fixed top navbar -->
    <sa-navbar></sa-navbar>

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
import SaSidebar from './components/sidebar/SaSidebar.vue';

export default {
  components: {
    'sa-navbar'    : SaNavbar,
    'sa-sidebar'   : SaSidebar
  },

  data() {
    return {

    }
  }
}
</script>
