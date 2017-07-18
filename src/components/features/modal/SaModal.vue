<template >
  <div class="modal" v-if="isActive" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="handleCancel"></div>
    <button class="modal-close is-large" @click="handleCancel"></button>
    <div class="modal-card">
      <header class="modal-card-head" v-if="showHeader">
        <p class="modal-card-title" v-text="title"></p>
      </header>

      <section class="modal-card-body">
        <slot></slot>
      </section>

      <footer class="modal-card-foot" v-if="showFooter">
        <slot name="footer">
          <a class="button is-info" v-if="showOk" @click="handleConfirm">{{ okText }}</a>
          <a class="button" v-if="showCancel" @click="handleCancel">{{ cancelText }}</a>
        </slot>
      </footer>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Modal',

  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'Modal Title'
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showOk: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: 'OK'
    },
    onOk: {
      type: Function,
      default() {}
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    onCacel: {
      type: Function,
      default() {}
    }

  },

  data() {
    return {
      isActive: true
    }
  },

  methods: {
    activate() {
      this.isActive = true;
    },
    close() {
      this.$emit('close');
    },
    handleConfirm() {
      this.onOk();
      this.close();
    },
    handleCancel() {
      this.onCancle();
      this.close();
    }
  }
}
</script>
