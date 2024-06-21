<template>
  <div>
    <app-drawer :menu="menu" />
    <div id="main" class="lg:ml-[300px] md:ml-[300px]">
      <app-header :menu="menu" class="" />
      <div class="px-6 py-6 bg-neutral-200 min-h-screen">
        <!-- <div>
          {{ breadcrumb }}
        </div> -->
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from '@/api/menuItems'
import AppDrawer from '@/components/navigation/AppDrawer.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
export default {
  components: { AppDrawer, AppHeader },
  data() {
    return {
      menu
    }
  },
  mounted() {
    console.log(this.$route);
  },

  computed:{
    // breadcrumb(){
    //   console.log(this.$router);
    //   return true
    // }
  }
}
</script>

<style></style>
