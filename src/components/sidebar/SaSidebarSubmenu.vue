<template>
  <!-- 
    Sidebar's sub-menu component.
    
    NOTE 1: It should be placed within a <sa-sidebar-menu> component to work properly.
    NOTE 2: `heading` property is required.
   -->
  <li>
    <a @click="expanded = !expanded">
      <!-- Item's icon - FontAwesome standard class name (ex: fa-search) that should be set on `fa-icon` property' -->
      <span class="icon" v-if="faIcon">
        <i class="fa " :class="faIcon"></i>
      </span>
      {{heading}}

      <!--
        TODO: Only show `<` or `>` icons if sub-menu has item(s) instead of showing them always
       -->
      <span :class="className" v-if="isRtl">
        <i class="fa fa-angle-left" :class="{'fa-rotate-270': expanded}"></i>
      </span>
      
      <span :class="className" v-if="!isRtl">
        <i class="fa fa-angle-right" :class="{'fa-rotate-90': expanded}"></i>
      </span>
    </a>

    <!-- Submenu items go here -->
    <transition name="sa-submenu-anm">
      <ul v-show="expanded" class="sa-sidebar-submenu">
        <slot></slot> 
      </ul>
    </transition>
  </li>
</template>

<script>
  export default {
    props: {
      'heading': {
        required: true,
        type: String
      },
      'fa-icon': {
        default: false 
      }
    },

    data() {
      return {
        isRtl: false,
        expanded: false
      }
    },

    mounted() {
      // Read `window.isRtl` at startup
      this.getWindowIsRtl();
      
      // Listening for `toggleDirecion` event to change the direction of sidebar
      Event.$on('toggleDirection', () => {
        this.getWindowIsRtl();
      });
    },

    computed: {
      className() {
        return this.isRtl ? 'is-pulled-left' : 'is-pulled-right';
      }
    },
    
    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>
