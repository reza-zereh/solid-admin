<template>
  <nav class="nav nav-fixed">
    <div class="nav-left">
      <slot name="nav-left"></slot>
    </div>

    <div class="nav-center" :class="{'sa-row-reverse': isRtl}">
      <slot name="nav-center"></slot>
    </div>

    <div class="nav-right" :class="{'sa-row-reverse': isRtl, 'sa-flex-start': isRtl}">
      <slot name="nav-right"></slot>
    </div>
  </nav>
</template>

<script>

  export default {
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
