const ModalMixin = {
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
      default () {}
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
      default () {}
    }

  },

  methods: {
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
};

export default ModalMixin;