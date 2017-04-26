<template>
  <!-- 
    Main sidebar component. Automatically place right or left side of screen based on `window.isRtl` setting.
    
    NOTE: Except <sa-sidebar-label>, all other components should be placed within <sa-sidebar-menu> component.
   -->
  <div class="" v-if="showSidebar">
    <aside class="menu sa-sidebar" :class="{'sa-is-rtlsidebar': isRtl}">
    
      <sa-sidebar-label>General</sa-sidebar-label>
      <sa-sidebar-menu>
        <sa-sidebar-menuitem to="#1">DASHBOARD</sa-sidebar-menuitem>
      </sa-sidebar-menu> 

      <sa-sidebar-label>Administration</sa-sidebar-label> 
      <sa-sidebar-menu>
        <sa-sidebar-submenu heading="SOLID">
          <sa-sidebar-menuitem>Foo</sa-sidebar-menuitem> 
          <sa-sidebar-menuitem>Bar</sa-sidebar-menuitem> 
        </sa-sidebar-submenu>
      </sa-sidebar-menu>
      
    </aside>
  </div>
</template>

<script>
  import SaSidebarLabel from './SaSidebarLabel.vue';
  import SaSidebarMenu from './SaSidebarMenu.vue';
  import SaSidebarMenuItem from './SaSideMenuItem.vue';
  import SaSidebarSubmenu from './SaSidebarSubmenu.vue';

  export default {
    components: {
      'sa-sidebar-label': SaSidebarLabel,
      'sa-sidebar-menu': SaSidebarMenu,
      'sa-sidebar-menuitem': SaSidebarMenuItem,
      'sa-sidebar-submenu': SaSidebarSubmenu
    },

    data() {
      return {
        isRtl: false,
        showSidebar: true
      }
    },

    mounted() {
      this.isRtl = window.isRtl || false;

      // Listening for `toggleSidebar` event to show/hide the sidebar
      Event.$on('toggleSidebar', () => {
        this.showSidebar = window.showSidebar;
      });
    }
  }
</script>
