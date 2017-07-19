<template >
  <!--
    Modal component.

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
      >
      </sa-modal>  

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
        <slot></slot>
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
    content: {
      type: String
    },
    type: {
      type: String,
      default: 'info'
    },
    icon: {
      type: String
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
    onCancel: {
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
    close() {
      this.$emit('modalClosed');
      this.isActive = false;
      this.$el.remove();
    },
    handleConfirm() {
      this.onOk();
      this.close();
    },
    handleCancel() {
      this.onCancel();
      this.close();
    }
  },

  computed: {
    // Determines if the screen is right-to-left or not by reading its value from the global store
    isRtl() {
      return this.$store.state.isRtl;
    },
    // Generates full class name for fontawesome icon
    iconClass() {
      return `fa ${this.icon}`;
    },
    // Generates full class name for bulma types (e.g: is-success)
    typeClass() {
      return `is-${this.type}`;
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
