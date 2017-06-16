<template>
  <!--
    Lock the screen by modifing the related variable stored in central store.
    After that user need to provide a password to unlock the screen.

    Default password: 'secret'
   -->
  <a class="nav-item"  @click="lockScreen" title="Lock the screen">
    <span class="icon">
      <i class="fa fa-lock"></i>
    </span>
  </a>
</template>

<script>
  export default {
      methods: {
        lockScreen() {
          this.$store.state.isDashboardLocked = true;
        }
      }
  }
</script>
