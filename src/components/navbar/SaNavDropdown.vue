<template>
  <!--
    Dropdown component for top navbar
  -->
  <div class="nav-item sa-nav-dropdown">
    <!-- Heading (Caption) of dropdown -->
    <a class="sa-dropdown-heading" @click="toggleDropdown">
      <slot name="heading"></slot>
    </a>

    <!-- Items wrapper -->
    <ul v-show="show">
      <span class="sa-dropdown-up-arrow">
        <i class="fa fa-sort-asc"></i>
      </span>
      <slot name="items"></slot>
    </ul>

    <!-- Click away overlay to catch clcik outside of the dropdown -->
    <div class="sa-dropdown-clickaway" v-if="show" @click="show = false">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },

    mounted() {
      // Listen for collapsing this dropdown when other dropdown expands
      Event.$on('navDropdownToggled', (eventDispatacherId) => {
        if (this._uid != eventDispatacherId)
          this.show = false;
      });
    },

    methods: {
      // Toggle this dropdown & fire an event to notify other dropdowns to collapse
      toggleDropdown() {
        this.show = !this.show;
        Event.$emit('navDropdownToggled', this._uid);
      }
    }
  }
</script>
