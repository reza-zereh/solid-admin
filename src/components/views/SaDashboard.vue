<template>
  <div>
    <h1>Admin Dashboard</h1>
    <button class="button is-primary" @click="showModal()">Show Modal</button>
      <!--<sa-modal title="Custom title"
              content="Is this going well?"
              :show-header="true"
              :show-footer="true"
              ok-text="Confirm"
              :show-ok="true"
              cancel-text="Close"
              :show-cancel="true"
      >
      </sa-modal>  -->
  </div>
</template>

<script>
// import SaModal from '../features/modal/SaModal.vue';

export default {
  components: {
    // SaModal
  },

  data() {
    return {
    }
  },

  methods: {
    onModalOk() {
      alert('Modal confirmed');
    },
    onModalCancel() {
      alert('Modal canceled');
    },
    showModal() {
      this.$modal.error({
        title: 'Fucking modal',
        content: 'Are you sure!?',
        // type: 'success',
        onOk: this.onModalOk,
        onCancel: this.onModalCancel,
      });
    }
  }
}
</script>
