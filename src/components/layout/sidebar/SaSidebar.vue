<template>
  <!-- 
    Main sidebar component. Automatically place right or left side of screen based on `window.isRtl` setting.
    
    NOTE: Except <sa-sidebar-userview> and <sa-sidebar-label>, all other components should be placed within <sa-sidebar-menu> component.

    TODO: Document the new way (dynamically) making sidebar's item 
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
  
        <!-- Rendering sidebar's items -->
        <template v-for="(node, index) in items">
          <!-- Sidebar's Label -->
          <sa-sidebar-label v-if="node.type === 'label'" :key="index" :text="node.text"></sa-sidebar-label>

          <!-- Sidebar's Menu  -->
          <sa-sidebar-menu v-else-if="node.type === 'menu'" :key="index">

            <template v-for="(item, tag) in node.items">
              <!-- Sidebar's Label -->
              <sa-sidebar-label v-if="item.type === 'label'" :key="tag" :text="item.text"></sa-sidebar-label>
              <!-- Sidebar's Item (Hyperlink) -->
              <sa-sidebar-menuitem v-else-if="item.type === 'link'" :key="tag"
                                   :to="item.to" :text="item.text" :fa-icon="item.icon" 
                                   :router-link="item.routerLink"
              >
              </sa-sidebar-menuitem>
              <!-- Sidebar's SubMenu -->
              <sa-sidebar-submenu v-else-if="item.type === 'submenu'" :key="tag"
                                  :heading="item.text" :fa-icon="item.icon"
              >
                <!-- Sidebar's Item (Hyperlink) -->
                <sa-sidebar-menuitem v-for="(leaf, iter) in item.items" :key="iter"
                                     :to="leaf.to" :text="leaf.text" :fa-icon="leaf.icon" 
                                     :router-link="leaf.routerLink"
                >
                </sa-sidebar-menuitem>
              </sa-sidebar-submenu>

            </template>
          </sa-sidebar-menu>
        </template>

      <!-- Deprecated way of building sidebar's items:

          <sa-sidebar-label>General</sa-sidebar-label>
          <sa-sidebar-menu>
            <sa-sidebar-menuitem to="/" fa-icon="fa-tachometer" :router-link="true" @click="dashboard()">Dashboard</sa-sidebar-menuitem>
          </sa-sidebar-menu>
    
          <sa-sidebar-menu>
            <sa-sidebar-submenu heading="System" fa-icon="fa-cog">
              <sa-sidebar-menuitem>Settings</sa-sidebar-menuitem>
            </sa-sidebar-submenu>
          </sa-sidebar-menu>
      -->
  
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

import isRtl from '../../global/mixin/isRtl.js';
import SidebarItems from '../../global/config/SidebarItems.js';

export default {
  name: 'Sidebar',
  mixins: [ isRtl ],
  components: {
    'sa-sidebar-label'   : SaSidebarLabel,
    'sa-sidebar-menu'    : SaSidebarMenu,
    'sa-sidebar-menuitem': SaSidebarMenuItem,
    'sa-sidebar-submenu' : SaSidebarSubmenu,
    'sa-sidebar-userview': SaSidebarUserView
  },

  data: () => ({
    items: SidebarItems
  }),

  methods: {
    hideSidebar() {
      this.$store.commit('setSidebarVisibility', false);
    }
  },

  computed: {
    showSidebar() {
      return this.$store.state.showSidebar;
    }
  }
}
</script>
