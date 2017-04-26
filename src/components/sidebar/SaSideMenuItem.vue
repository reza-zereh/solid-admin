<template>
  <!--
    Default bulma's menu-item.

    NOTE: Should be placed within a <sa-sidebar-menu> or <sa-sidebar-submenu> to work properly.
   -->
  <li>
    <a :href="to" :class="{'is-active': isActive}" @click="itemClicked">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      'to': {
        default: '#',
        type: String
      }
    },

    data() {
      return {
        isActive: false
      }
    },
    
    mounted() {
      // Listening for `sidebarItemClicked` event to activate or deactivate `is-active`
      // Activate only original event dispather is same as listener
      Event.$on('sidebarItemClicked', (eventDispatcherId) => {
        this.isActive = (this._uid === eventDispatcherId) ? true : false;
      });
    },

    methods: {
      // Fires and event and pass it's unique id to notify all other 
      // <sa-sidebar-menuitem> component that it has been clicked to change `is-active`
      itemClicked() {
        Event.$emit('sidebarItemClicked', Number(this._uid));
      }
    }
  }
</script>
