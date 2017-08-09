<template>
  <!--
    Container for notification component. It should be placed in 'App.vue'.
  -->
  <div class="sa-notification-container"  id="sa__notification__container"
       :class="[isRtl ? 'flex-align-start' : 'flex-align-end']">
  </div>
</template>

<script>
import isRtl from '../../global/mixin/isRtl.js';

export default {
  name: 'NotificationContainer',
  mixins: [ isRtl ]
}
</script>
