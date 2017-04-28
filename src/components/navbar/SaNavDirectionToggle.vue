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
      // Inverse the value of `window.isRtl` and fire an event
      toggleDirection() {
        window.isRtl = !window.isRtl;
        Event.$emit('toggleDirection');
      }
    }
  }
</script>
