<template>
  <!--
    Simply shows the searchbar by firing an event when clicked.
   -->
  <a class="nav-item"  @click="showSearchbar">
    <span class="icon">
      <i class="fa fa-search"></i>
    </span>
  </a>
</template>

<script>
  export default {
      methods: {
        showSearchbar() {
          Event.$emit('showSearchbar');
        }
      }
  }
</script>
