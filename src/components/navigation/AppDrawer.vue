<template>
  <div>
    <div class="bg-neutral-1100 w-[300px] h-screen overflow-y-auto fixed top-0 left-0 pb-4">
      <div class="text-center my-8">
        <span class="flex justify-center"> 
          <!-- <img src="@/assets/img/brandLogoLight.png" class="w-32" /> -->
        </span>
      </div>
      <ul class="flex flex-col gap-3">
        <li v-for="(item, idx) in menu" :key="idx">
          <span
            @click="menuFunc(item)"
            role="button"
            class="flex justify-between items-center py-[12px] px-3 ml-6 rounded-tl-lg rounded-bl-lg"
            :class="[ parentName === item.parent ? 'bg-neutral-200 text-neutral-1100' : 'text-white' ]"
          >
            <span class="flex items-center gap-2">
              <icon :icon="item.icon" class="text-[15px]" />
              <span class="capitalize text-[16px] block font-medium">{{ item.label }}</span>
            </span>
            <span v-if="item.hasChildren" role="button">
              <icon icon="prime:angle-right" class="text-2xl" />
            </span>
          </span>
          <div v-if="subMenu === item.parent" class="ml-4">
            <span v-for="(subMenu, idx) in item.children" :key="idx">
              <router-link
                :to="subMenu.href"
                class="text-white flex justify-between items-center py-[16px] px-3 ml-6 rounded-tl-lg rounded-bl-lg"
              >
                <span class="flex items-center gap-2">
                  <icon :icon="subMenu.icon" class="text-[15px]" />
                  <span class="capitalize text-[16px] block">{{ subMenu.label.split("-").join(' ') }}</span>
                </span>
              </router-link>
            </span>
          </div>
        </li>
      </ul>
      <hr class="my-6" />
      <span class="text-white flex justify-between items-center py-[16px] px-3 ml-6" role="button">
        <span class="flex items-center gap-2">
          <icon icon="tabler:logout" class="text-[14px]" />
          <span class="capitalize">Logout</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  data(){
    return {
      subMenu: null
    }
  },

  methods: {
    menuFunc(value) {
      value.hasChildren ? this.toggleSubMenu(value) : this.$router.push(value.href)
    },

    toggleSubMenu(value){
      this.subMenu = this.subMenu === null ? value.parent : null
    }
  },

  computed: {
    parentName() {
      return this.$route.meta.parent
    }
  }
}
</script>

<style></style>
