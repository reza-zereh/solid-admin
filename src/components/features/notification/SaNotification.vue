<template>
  <!--
        Notification component.
    
        Usage:
          this.$notification.method({props});
          methods: open, info, error, success, warning
    
        Props:
          content  : content to display
          type     : notification type (primary, success, info, warning, danger)
          closeIn  : auto close notification in specified seconds. (default: 3)
          width    : width of notification in percentage
          showClose: display close button or not
    
        TODO: Add transition effect
        TODO: Build documentation
      -->
  <div class="notification sa-notification" :class="[typeClass, showClose ? '' : 'p1_25']" :style="widthSize">
    <button class="delete" @click="close" v-if="showClose"></button>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    closeIn: {
      type: Number,
      default: 3
    },
    width: {
      type: Number,
      default: null
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    parentId: 'sa__notification__container',
    isClosed: false
  }),

  computed: {
    typeClass() {
      return `is-${this.type}`;
    },

    widthSize() {
      if (this.width > 10) {
        return `width: ${this.width}%;`;
      }
    }
  },

  methods: {
    // Remove notification element from DOM if this isn't already closed explicitly by 'x' button
    close() {
      if (!this.isClosed) {
        this.isClosed = true;
        document.getElementById(this.parentId).removeChild(this.$el);
      }
    },

    // Auto close the notification after the specified seconds
    autoClose() {
      setTimeout(() => {
        this.close();
      }, this.closeIn * 1000);
    }
  },

  mounted() {
    // Append notification element to the DOM
    this.$nextTick(() => {
      document.getElementById(this.parentId).appendChild(this.$el);
    });

    this.autoClose();
  }
}
</script>

