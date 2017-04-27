<template>
  <!--
    Top navbar component

    NOTE: All sub-components and childs must be placed directly here (No <slot>).
  -->
  <nav class="nav nav-fixed">
    <sa-nav-useractions v-if="isRtl"></sa-nav-useractions>
    <sa-nav-usertoggles v-if="!isRtl"></sa-nav-usertoggles>

    <div class="nav-center" :class="{'sa-row-reverse': isRtl}">
      <sa-navitem to="https://github.com/ironcladgeek/solid-admin">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </sa-navitem>
    </div>

    <sa-nav-usertoggles v-if="isRtl"></sa-nav-usertoggles>
    <sa-nav-useractions v-if="!isRtl"></sa-nav-useractions>
  </nav>
</template>

<script>
  import SaNavItem from './SaNavItem.vue';
  import SaNavUserActions from './SaNavUserActions.vue';
  import SaNavUserToggles from './SaNavUserToggles.vue';

  export default {
    components: {
      'sa-navitem'        : SaNavItem,
      'sa-nav-useractions': SaNavUserActions,
      'sa-nav-usertoggles': SaNavUserToggles
    },

    data() {
      return {
        isRtl: false
      }
    },

    mounted() {
      // Get isRtl from window global object if set
      this.isRtl = window.isRtl || false;
    }
  }
</script>
