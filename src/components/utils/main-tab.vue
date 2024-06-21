<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white py-4 px-4 rounded-[4px]">
        <span
          v-for="(item, idx) in tabs"
          :class="[idx === activeTab ? 'bg-neutral-1100 text-white rounded-[4px]' : '']"
          class="flex gap-2 items-center p-2"
          :key="idx"
          role="button"
          @click="activateCurrentTab(idx)"
        >
          <icon :icon="item.icon" />
          <span>{{ item.label }}</span>
        </span>
      </div>
      <div class="col-span-2 bg-white py-4 px-4 rounded-[4px]">
        <slot :activeTab="activeTab" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
      required: true
    },
    currentTab: {
      default: 0,
      type: Number,
      required: false
    },
    currentName: {
      default: 'naira',
      type: String
    }
  },

  data() {
    return {
      activeTab: 0,
      selectedIndex: 0,
      activeName: 'naira'
    }
  },

  methods: {
    activateCurrentTab(index) {
      this.activeTab = index
      this.selectedIndex = index
    }

    // handleClick(tab, event) {
    //   console.log(tab, event);
    //   this.activeTab = tab._data.index;
    //   this.activeName = tab.name;
    // },
  },

  watch: {
    currentTab: {
      handler: function (val) {
        this.activeTab = val
        this.selectedIndex = val
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style></style>
