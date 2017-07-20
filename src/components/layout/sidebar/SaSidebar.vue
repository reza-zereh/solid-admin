<template>
  <!-- 
    Main sidebar component. Automatically place right or left side of screen based on `window.isRtl` setting.
    
    NOTE: Except <sa-sidebar-userview> and <sa-sidebar-label>, all other components should be placed within <sa-sidebar-menu> component.
    TODO: Add transition effect for showing/hiding
  -->
  <div>
    <transition :name="isRtl ? 'sa-sidebar-rtl-anm' : 'sa-sidebar-ltr-anm'">
      <aside class="menu sa-sidebar" :class="{'sa-is-rtlsidebar': isRtl}" v-if="showSidebar">
        <sa-sidebar-userview backgroundSrc="/public/images/userview.jpg" 
                             profileSrc="/public/images/profile.jpg" 
                             username="John Doe" 
                             email="ironcladgeek@hotmail.com"
        >
        </sa-sidebar-userview>
  
        <sa-sidebar-label>General</sa-sidebar-label>
        <sa-sidebar-menu>
          <sa-sidebar-menuitem to="/#" fa-icon="fa-tachometer" @click="dashboard()">Dashboard</sa-sidebar-menuitem>
          <sa-sidebar-menuitem to="form" fa-icon="fa-file-text-o" :router-link="true">Form</sa-sidebar-menuitem>
          <sa-sidebar-menuitem to="#mails" fa-icon="fa-envelope-o">Mails</sa-sidebar-menuitem>
        </sa-sidebar-menu>
  
        <sa-sidebar-label>Administration</sa-sidebar-label>
  
        <sa-sidebar-menu>
          <sa-sidebar-submenu heading="System" fa-icon="fa-cog">
            <sa-sidebar-menuitem>Settings</sa-sidebar-menuitem>
            <sa-sidebar-menuitem>Tools</sa-sidebar-menuitem>
            <sa-sidebar-menuitem>Users</sa-sidebar-menuitem>
          </sa-sidebar-submenu>
  
          <sa-sidebar-submenu heading="Catalog" fa-icon="fa-tags">
            <sa-sidebar-menuitem>Categories</sa-sidebar-menuitem>
            <sa-sidebar-menuitem>Products</sa-sidebar-menuitem>
            <sa-sidebar-menuitem>Gift Cards</sa-sidebar-menuitem>
            <sa-sidebar-menuitem>Vochers</sa-sidebar-menuitem>
          </sa-sidebar-submenu>
        </sa-sidebar-menu>
  
      </aside>
    </transition>
    <transition name="sa-sidebar-modal-background-anm">
      <div class="modal-background is-hidden-tablet sa-sidebar-modal-background" @click="hideSidebar()" v-if="showSidebar"></div>
    </transition>
  </div>
</template>

<script>
import SaSidebarLabel from './SaSidebarLabel.vue';
import SaSidebarMenu from './SaSidebarMenu.vue';
import SaSidebarMenuItem from './SaSidebarMenuItem.vue';
import SaSidebarSubmenu from './SaSidebarSubmenu.vue';
import SaSidebarUserView from './SaSidebarUserView.vue';

export default {
  name: 'Sidebar',
  components: {
    'sa-sidebar-label': SaSidebarLabel,
    'sa-sidebar-menu': SaSidebarMenu,
    'sa-sidebar-menuitem': SaSidebarMenuItem,
    'sa-sidebar-submenu': SaSidebarSubmenu,
    'sa-sidebar-userview': SaSidebarUserView
  },

  methods: {
    hideSidebar() {
      this.$store.commit('setSidebarVisibility', false);
    },

    // example method to show handling click event for 'sa-sidebar-menuitem' component
    dashboard() {
      console.log('dashboard clicked!');
    }
  },

  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    },

    // Determines if the screen is right-to-left or not by reading its value from the global store
    isRtl() {
      return this.$store.state.isRtl;
    }
  }
}
</script>
