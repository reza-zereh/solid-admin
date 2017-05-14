<template>
  <div class="sa-main-content" :class="className">
    <!-- Sample content -->
    <div class="columns">

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Component
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        
      </div>
      
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Component
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Save</a>
            <a class="card-footer-item">Edit</a>
            <a class="card-footer-item">Delete</a>
          </footer>
        </div>
        
      </div>

    </div> 
    <sa-tabs>
      <sa-tab-pane name="Picture">
        <h1>Something about pictures</h1>
      </sa-tab-pane>
      <sa-tab-pane name="Music">
        <h1>Something about musics</h1>
      </sa-tab-pane>
      <sa-tab-pane name="Video" :selected="true">
        <h1>Something about videos</h1>
        <sa-input label="Comment" name="comment" id="comment" ></sa-input>
      </sa-tab-pane>

    </sa-tabs>
  </div> 
</template>

<script>
  import SaTabs from '../../features/tab/SaTabs.vue';
  import SaTabPane from '../../features/tab/SaTabPane.vue';
  import SaInput from '../../features/form/SaInput.vue';

  export default {
    components: {
      'sa-tabs': SaTabs,
      'sa-tab-pane': SaTabPane,
      'sa-input': SaInput
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

    computed: {
      className() {
        if (this.showSidebar) {
          return this.isRtl ? 'sa-is-rtlcontent' : 'sa-is-ltrcontent';
        }

        return 'sa-content-nosidebar';
      }
    },
    
    methods: {
      getWindowIsRtl() {
        this.isRtl = window.isRtl || false;
      }
    }
  }
</script>
