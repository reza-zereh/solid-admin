<template>
  <!--
    TODO: Add transition effect
    TODO: Build documentation
  -->
  <div>
    <div class="notification sa-notification" :class="typeClass">
      <button class="delete" @click="close"></button>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    parentId: {
      type: String,
      default: 'sa_notification_container'
    },
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
    }
  },

  computed: {
    typeClass() {
      return `is-${this.type}`;
    }
  },

  methods: {
    close() {
      document.getElementById(this.parentId).removeChild(this.$el);
    },

    autoClose() {
      setTimeout(() => {
        this.close();
      }, this.closeIn * 1000);
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.getElementById(this.parentId).appendChild(this.$el);
    });

    this.autoClose();
  }
}
</script>

