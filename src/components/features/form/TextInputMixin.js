const TextInputMixin = {
  props: {
    label      : { required: true },
    name       : { default : '' },
    id         : { default : '' },
    placeholder: { default : '' },
    required   : { default : false, type: Boolean },
    disabled   : { default : false, type: Boolean },
    value      : { default : '' },
    color      : { default : '' },
    flow       : { default : 'vertical' },
    textAlign  : { default : '', type   : String }
  },

  computed: {
    // Determines if the screen is right-to-left or not by reading its value from the global store
    isRtl() {
      return this.$store.state.isRtl;
    },

    /**
     * determines text-alignment based on 'text-align' prop if set
     * otherwise, it follows the layout direction (isRtl)
     * @return {String}
     */
    textAlignClass() {
      if (this.textAlign === 'right') {
        return 'has-text-right';
      }
      else if(this.textAlign === '' && this.isRtl) {
        return 'has-text-right';
      }
      else if(this.textAlign === '' || this.textAlign === 'left') {
        return 'has-text-left';
      }
    }
  },

  methods: {
    // adding v-model support for this custom component
    updateValue(value) {
      this.$refs.input.value = value;
      this.$emit('input', value);
    }
  }
};

export default TextInputMixin;