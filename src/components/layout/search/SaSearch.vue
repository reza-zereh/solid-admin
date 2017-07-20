<template>
  <!--
    Searchbar component.

    TODO: form action link, submit, focused on show
   -->
  <transition name="sa-search-anm">
    <nav class="nav nav-fixed sa-search-nav" v-if="show">
      <div class="sa-search-wrapper">
        <form action="/#search" method="post">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Search..." :class="{'has-text-right': isRtl}">

              <span class="icon sa-search-close"
                :class="{'is-left':isRtl, 'is-right': !isRtl}"  @click="show = false">
                <i class="fa fa-times"></i>
              </span>

              <span class="icon" :class="{'is-right':isRtl, 'is-left': !isRtl}">
                <i class="fa fa-search"></i>
              </span>

            </p>
          </div>
        </form>
      </div>
    </nav>
  </transition>
</template>

<script>
  export default {
    data() {
      return{
        show: false
      }
    },

    created() {
      // Attach eventListener for `ESC` keydown to deactive the searchbar if it's active
      window.addEventListener('keydown', (e) => {
        if(this.show) {
          if(e.keyCode == 27) 
            this.show = false;
        }
      });
    },

    mounted() {
      // Listening for `showSearchbar` event to activate the searchbar
      Event.$on('showSearchbar', () => {
        this.show = true;
      });
    },
    
    computed: {
      // Determines if the screen is right-to-left or not by reading its value from the global store
      isRtl() {
        return this.$store.state.isRtl;
      }
    }
  }
</script>
