<template>
  <!--
      Default bulma's menu-item.
  
      Usage:
        <sa-sidebar-menu>
          <sa-sidebar-menuitem to="url" fa-icon="fa-icon" :router-link="true"></sa-sidebar-menuitem>
        </sa-sidebar-menu>
        Or:
        <sa-sidebar-menu>
          <sa-sidebar-submenu>
            <sa-sidebar-menuitem to="url" fa-icon="fa-icon" :router-link="true"></sa-sidebar-menuitem>
          </sa-sidebar-submenu>
        </sa-sidebar-menu>
     -->
  <li @click="itemClicked">
    <router-link :to="to" active-class="is-active" exact  v-if="routerLink">
      <!-- Item's icon - FontAwesome standard class name (ex: fa-search) that should be set on `fa-icon` property' -->
      <span class="icon" v-if="faIcon">
        <i class="fa " :class="faIcon"></i>
      </span>
      {{ text }}
      <slot></slot>
    </router-link>
  
    <a :href="to" :class="{'is-active': isActive}" v-else>
      <span class="icon" v-if="faIcon">
        <i class="fa " :class="faIcon"></i>
      </span>
      {{ text }}
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    'to': {
      default: '#',
      type   : String
    },
    'text': {
      type: String
    },
    'fa-icon': {
      default: '',
      type   : String
    },
    'router-link': {
      default: false,
      type   : Boolean
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
    // <sa-sidebar-menuitem> components to set their `is-active` property
    itemClicked() {
      Event.$emit('sidebarItemClicked', Number(this._uid));

      // DEPRECATED: v-on:click for this component
      // this.$emit('click');
    }
  }
}
</script>
