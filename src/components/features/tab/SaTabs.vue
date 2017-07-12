<template>
  <!--
      Tabs component. Tab headr and content come from child `<sa-tabe-pane>` component.
    -->
  <div>
    <!-- Tabs name -->
    <div class="tabs is-boxed">
      <ul :class="{ 'sa-row-reverse': isRtl }">
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a @click="tabClicked(tab)">
            {{tab.name}}
          </a>
        </li>
      </ul>
    </div>
  
    <!-- Tabs content -->
    <div :class="{ 'has-text-right': isRtl}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tabs: []
    }
  },

  created() {
    // Get this component's children (inner tab)
    this.tabs = this.$children;
  },

  computed: {
    // Determines if the screen is right-to-left or not by reading its value from the global store
    isRtl() {
      return this.$store.state.isRtl;
    }
  },

  methods: {
    // looping through all tabs to specify the active one
    tabClicked(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    },
  }
}
</script>