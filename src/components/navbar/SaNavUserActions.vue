<template>
  <!--
    Wrapper for action nav-items (Notifications, User profile, etc.)
    if isRtl == true then located at left side of navbar
    otherwise located at right.

    NOTE: All sub-components & child items must be placed directly here (No <slot>).
  -->
  <div :class="className">
    <sa-navitem>
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
    </sa-navitem>

    <sa-nav-dropdown>
      <template slot="heading">
        <span class="icon">
          <i class="fa fa-user"></i>
        </span>
      </template>
      <template slot="items">
        <sa-nav-dropdown-item to="/#profile">Profile</sa-nav-dropdown-item>
        <sa-nav-dropdown-item to="/#signout">Sign Out</sa-nav-dropdown-item>
      </template>
    </sa-nav-dropdown>

    <sa-nav-dropdown>
      <template slot="heading">
        <span class="icon">
          <i class="fa fa-bell"></i>
        </span>
      </template>
      <template slot="items">
        <sa-nav-dropdown-item to="/#messages">Messages</sa-nav-dropdown-item>
        <sa-nav-dropdown-item to="/#alerts">Alerts</sa-nav-dropdown-item>
      </template>
    </sa-nav-dropdown>
  </div>
</template>

<script>
  import SaNavItem from './SaNavItem.vue';
  import SaNavDropdown from './SaNavDropdown.vue';
  import SaNavDropdownItem from './SaNavDropdownItem.vue';

  export default {
    components: {
      'sa-navitem': SaNavItem,
      'sa-nav-dropdown': SaNavDropdown,
      'sa-nav-dropdown-item': SaNavDropdownItem
    },
    data() {
      return {
        isRtl: false
      }
    },

    mounted() {
      this.isRtl = window.isRtl || false;
    },

    computed: {
      className() {
        return this.isRtl ? 'nav-left' : 'nav-right sa-row-reverse sa-flex-start';
      }
    }
  }
</script>
