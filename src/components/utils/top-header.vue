<template>
    <div class="grid grid-cols-2 items-center">
      <div class="w-full">
        <h1 class="text-[20px] font-bold leading-tight">{{ title }}</h1>
        <h6 class="text-[14px] font-regular text-neutral-700 leading-tight tracking-wide">{{ desc }}</h6>
      </div>
      <!-- <div class="flex gap-4 w-full">
        <Search class=""/>
        <Filters />
        <button v-if="hasButton" class="btn-brand w-full" @click="$emit('btnFunc')">
          {{ buttonText }}
        </button>
      </div> -->
    </div>
  </template>
  
  <script>
  import Filters from '../filters/filter.vue'
  import Search from '../filters/search.vue'
  export default {
    components: {
      Filters,
      Search
    },
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      buttonText: {
        type: String,
        default: 'Button'
      },
      desc: {
        type: String,
        default: 'Description'
      },
      hasButton: {
        type: Boolean,
        default: true
      },
      hasFilter: {
        type: Boolean,
        default: true
      },
      hasSearch: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style></style>
  