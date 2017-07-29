<template >
  <!--
    Message Modal component.

    Usage:
      this.$modal.open({options});

      Types: open, info, success, warning, error
  -->
  <div class="modal sa-modal" v-if="isActive" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="handleCancel"></div>
    <button class="modal-close is-large" @click="handleCancel"></button>
    <div class="modal-card">
      <header class="modal-card-head" v-if="showHeader">
        <p class="modal-card-title" v-text="title" :class="{'has-text-right': isRtl}"></p>
      </header>

      <section class="modal-card-body" :class="{'sa-row-reverse': isRtl}">
        <span class="icon is-medium" :class="typeClass" v-if="icon">
          <i :class="iconClass"></i>
        </span>
        <p>
          {{ content }}
        </p>
      </section>

      <footer class="modal-card-foot" v-if="showFooter"
              :class="{'sa-row-reverse sa-flex-end sa-modal-foot-rtl': isRtl}"
      >
        <slot name="footer">
          <a class="button" :class="[typeClass]" v-if="showOk" @click="handleConfirm">{{ okText }}</a>
          <a class="button" v-if="showCancel" @click="handleCancel">{{ cancelText }}</a>
        </slot>
      </footer>
    </div>
  </div>
</template>


<script>
import ModalMixin from './ModalMixin.js';

export default {
  name: 'MessageModal',

  mixins: [ ModalMixin ],

  data() {
    return {
      isActive: true
    }
  },

  methods: {
    close() {
      this.$emit('messageModalClosed');
      this.isActive = false;
      this.$el.remove();
    }
  },

  mounted() {
    // Appends the modal component to DOM
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
    })
  }

}
</script>
