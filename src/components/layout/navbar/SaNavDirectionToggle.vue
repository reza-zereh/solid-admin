<template>
  <!--
    Navbar's item which changes the direction of dashboard by firing an event.
   -->
  <a class="nav-item" @click="toggleDirection">
    <span class="icon">
      <i class="fa fa-exchange"></i>
    </span>
  </a>
</template>

<script>

  export default {
    methods: {
      // Reverse the value of `store.state.isRtl` by commiting a mutation
      toggleDirection() {
        this.$store.commit('toggleIsRtl');
      }
    }
  }
</script>
