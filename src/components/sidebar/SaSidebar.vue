<template>
  <div class="" v-if="showSidebar">
    <aside class="menu sa-sidebar" :class="{'sa-is-rtl': isRtl}">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
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
