
<template>
  <div class="card px-8 py-5">
    <Menubar :model="items" class="flex justify-content-between px-8 Menubar">
      <template #start>
        <img src="/src/assets/brandImg/headerLogo.svg" alt="" class="responsive-img"/>
      </template>
      <template #item="{ item }">
        <router-link v-if="item.to" :to="item.to" class="flex items-center align-items-center">
          <span :class="item.icon"></span>
          <span class="mx-2">{{ item.label }}</span>
        </router-link>
        <span v-else class="text-white flex">
          <span :class="item.icon"></span>
          <span class="mx-2">{{ item.label }}</span>
        </span>
      </template>
      <template #end>
        <div class="card flex justify-center">
          <Button label="Join Us" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: 'About', to: '/about' },
        { label: 'Event', to: '/event' },
        { label: 'Team', to: '/team' },
        { label: 'Blog', to: '/blog' },
        { label: 'Partnership', to: '/partnership' }
      ]
    }
  }
}
</script>
<style scoped>
:deep(.Menubar) {
  border: 1px solid;
  background: #19407a;
  color: white;
}
:deep(.p-menuitem a, .p-menubar-root-list li) {
  text-decoration: none;
  list-style-type: none;
  color: rgba(140, 153, 173, 1);
}
:deep(.p-menuitem a:hover) {
  background-color: transparent !important; /* Remove background on hover */
  color: inherit !important; /* Maintain the original text color on hover */
  text-decoration: none !important; /* Remove underline on hover */
}
:deep(Button) {
  border: 1px solid;
  background: linear-gradient(90deg, #2e76e0 0%, #1060d7 50%, #19407a 100%);
}
.responsive-img {
  max-width: 100%;
  height: 100%;
  /* display: block; */
}

</style>