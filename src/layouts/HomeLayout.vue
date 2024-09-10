<template>
    <div class="main">
      <pageHeader  />
      <slot />
      <pageFooter />
    </div>
  </template>

<script>
import pageHeader from '@/components/navigation/pageHeader.vue'
import pageFooter from '@/components/navigation/pageFooter.vue'
export default {
  components: {
    pageHeader,
    pageFooter
  },
  data () {
    return {
    }
  }
}
</script>

  <style scoped>
.main {
  background-image: url('/src/assets/images/background.svg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}
  </style>
