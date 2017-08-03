<template>
  <div>
    <h1>Admin Dashboard</h1>
    <button class="button is-primary" @click="showModal()">Show Message Modal</button>

    <button class="button is-info" @click="showRegularModal = true">Show Regular Modal</button>
    <sa-modal title="Custom title"
            content="Is this going well?"
            :show-header="true"
            :show-footer="true"
            ok-text="Confirm"
            :show-ok="true"
            cancel-text="Close"
            :show-cancel="true"
            type="success"
            :on-cancel="handleRegularModalCancel"
            :on-ok="handleRegularModalOk"
            @modalClosed="showRegularModal = false"
            v-if="showRegularModal"
    >
    </sa-modal>  
  </div>
</template>

<script>
import SaModal from '../features/modal/SaModal.vue';

export default {
  components: {
    SaModal
  },

  data() {
    return {
      showRegularModal: false
    }
  },

  methods: {
    handleRegularModalCancel() {
      this.showRegularModal = false;
    },
    handleRegularModalOk() {
      alert('Regular modal confirmed!!');
      // this.showRegularModal = false;
    },

    onModalOk() {
      alert('Message modal confirmed');
    },
    onModalCancel() {
      alert('Message modal canceled');
    },
    showModal() {
      this.$modal.error({
        title: 'A Message Modal',
        content: 'Are you sure!?',
        // type: 'success',
        onOk: this.onModalOk,
        onCancel: this.onModalCancel,
        closeIn: 4
      });
    }
  }
}
</script>
