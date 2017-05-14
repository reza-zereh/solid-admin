<template>
  <!--
    Form's inout component with standard HTML5 attributes
  -->
  <div class="field" :class="{'has-text-right': isRtl}">
    <label class="label">{{label}}</label>
    <p class="control">
      <input class="input" type="text" :name="name" :id="id" :placeholder="placeholder" :class="{'has-text-right': isRtl}">
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      'label': { required: true },
      'name': { default: ''},
      'id': { default: ''},
      'placeholder': { default: ''}
    },

    data() {
      return {
        isRtl: false
      }
    },
    
    mounted() {
      // Read `window.isRtl` at startup
      this.getWindowIsRtl();
      
      // Listening for `toggleDirecion` event to change the direction of input
      Event.$on('toggleDirection', () => {
        this.getWindowIsRtl();
      });
    },

    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>  