<template>
  <div>
    <h1>Admin Dashboard</h1>
    <sa-modal title="Custom title"
              :show-header="true"
              :show-footer="true"
              ok-text="Confirm"
              :show-ok="true"
              cancel-text="Close"
              :show-cancel="true"
    >
      Whooa!!
    </sa-modal>
  </div>
</template>

<script>
import SaModal from '../features/modal/SaModal.vue';

export default {
  components: {
    SaModal
  }
}
</script>
