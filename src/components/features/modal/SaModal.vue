<template >
  <!--
    Regular Modal component.

    Usage:
      <sa-modal title="Custom title"
                content="Modal message"
                :show-header="true/false"
                :show-footer="true/false"
                type="success/info/error/warning"
                ok-text="Confirm"
                :show-ok="true"
                cancel-text="Cancel"
                :show-cancel="true"
                icon="fa-icon"
                onOk="callback()"
                onCancel="callback()"
                text-align="left/right"
      >
      </sa-modal>  

    Note: 
      This modal component IS VISIBLE (is-active) by default and you have to 
      control its visibility on parent component level via v-if/v-show directive.
  -->
  <div class="modal is-active sa-modal">
    <div class="modal-background" @click="handleCancel"></div>
    <button class="modal-close is-large" @click="handleCancel"></button>
    <div class="modal-card">
      <header class="modal-card-head" v-if="showHeader">
        <p class="modal-card-title" v-text="title" :class="{'has-text-right': isRtl}"></p>
      </header>

      <section class="modal-card-body" :class="textAlignClass">
        <span class="icon is-medium" :class="typeClass" v-if="icon">
          <i :class="iconClass"></i>
        </span>
        <p v-if="content">
          {{ content }}
        </p>
        <div>
        <slot></slot>
        </div>
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
  name: 'Modal',

  mixins: [ ModalMixin ],

  methods: {
    close() {
      this.$emit('modalClosed');
    }
  },
}
</script>
