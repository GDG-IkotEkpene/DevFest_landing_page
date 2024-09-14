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
  background-image: linear-gradient(rgb(10,10,10,0.8),rgb(10,10,10,0.8),rgb(10,10,10,0.8)), url('/src/assets/images/heroBg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 900px;
    width: 100%;
}
  </style>
