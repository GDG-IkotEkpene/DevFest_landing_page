<template>
  <div class="sticky top-0">
    <div class="bg-white py-[20.5px] border-l border-neutral-300 px-6 flex justify-between items-center">
      <span class="font-bold text-2xl capitalize">{{ routeName.split('-').join(' ') }}</span>
      <div class="flex gap-3 items-center">
        <!-- <Search class="border-none bg-neutral-300" /> -->
        <!-- <span class="flex gap-3">
          <icon icon="ph:bell" />
          <icon icon="ph:chat-centered" />
          <icon icon="ph:gear-six" />
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Search from '../Filters/Search.vue'

export default {
  // components: { Search },
  computed: {
    routeName() {
      return this.$route.meta.name
    }
  }
}
</script>

<style></style>
