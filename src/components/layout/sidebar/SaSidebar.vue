<template>
  <!-- 
    Main sidebar component. Automatically place right or left side of screen based on `window.isRtl` setting.
    
    NOTE: Except <sa-sidebar-userview> and <sa-sidebar-label>, all other components should be placed within <sa-sidebar-menu> component.
    TODO: Add transition effect for showing/hiding
   -->
  <div class="" v-if="showSidebar">
    <aside class="menu sa-sidebar" :class="{'sa-is-rtlsidebar': isRtl}">
      <sa-sidebar-userview 
        backgroundSrc="/public/images/userview.jpg"
        profileSrc="/public/images/profile.jpg"
        username="John Doe"
        email="ironcladgeek@hotmail.com"
      >
      </sa-sidebar-userview>
      
      <sa-sidebar-label>General</sa-sidebar-label>
      <sa-sidebar-menu>
        <sa-sidebar-menuitem to="#dashboard" fa-icon="fa-tachometer" @click="dashboard()">Dashboard</sa-sidebar-menuitem>
        <sa-sidebar-menuitem to="#logs" fa-icon="fa-file-text-o">Logs</sa-sidebar-menuitem>
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
      'sa-sidebar-label'    : SaSidebarLabel,
      'sa-sidebar-menu'     : SaSidebarMenu,
      'sa-sidebar-menuitem' : SaSidebarMenuItem,
      'sa-sidebar-submenu'  : SaSidebarSubmenu,
      'sa-sidebar-userview': SaSidebarUserView
    },

    data() {
      return {
        isRtl: false,
        showSidebar: true
      }
    },

    mounted() {
      // Read `window.isRtl` at startup
      this.getWindowIsRtl();

      // Listening for `toggleSidebar` event to show/hide the sidebar
      Event.$on('toggleSidebar', () => {
        this.showSidebar = window.showSidebar;
      });

      // Listening for `toggleDirecion` event to change the direction of sidebar
      Event.$on('toggleDirection', () => {
        this.getWindowIsRtl();
      });
    },

    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      },

      // example method to show handling click event for 'sa-sidebar-menuitem' component
      dashboard() {
        console.log('dashboard clicked!');
      }
    }
  }
</script>
