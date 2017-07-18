<template >
  <div class="modal sa-modal" v-if="isActive" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="handleCancel"></div>
    <button class="modal-close is-large" @click="handleCancel"></button>
    <div class="modal-card">
      <header class="modal-card-head" v-if="showHeader">
        <p class="modal-card-title" v-text="title"></p>
      </header>

      <section class="modal-card-body">
        <span class="icon is-medium" v-if="icon">
          <i :class="iconClass"></i>
        </span>
        <p>
          {{ content }}
        </p>
        <slot></slot>
      </section>

      <footer class="modal-card-foot" v-if="showFooter">
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
    activate() {
      this.isActive = true;
    },
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
    iconClass() {
      return `fa ${this.icon}`;
    },
    typeClass() {
      return `is-${this.type}`;
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
    })
  }

}
</script>
