<template>
  <div>
    <heroSection/>
    <aboutUs/>
    <eventSection/>
    <photoGallery/>
    <teamSection/>
    <partnersSection/>
  </div>
</template>

<script>
import heroSection from '../components/homePage/heroSection.vue'
import aboutUs from '../components/homePage/aboutUs.vue'
import eventSection from '../components/homePage/eventSection.vue'
import photoGallery from '../components/homePage/photoGallery.vue'
import teamSection from '../components/homePage/teamSection.vue'
import partnersSection from '../components/homePage/partnersSection.vue'
export default {
  components: {
    heroSection,
    aboutUs,
    eventSection,
    photoGallery,
    teamSection,
    partnersSection
  }
}
</script>

<style scoped>

</style>
