const TextAlignMixin = {
  computed: {
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
  }
};

export default TextAlignMixin;