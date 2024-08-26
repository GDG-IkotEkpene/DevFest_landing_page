<template>
  <div>
    <footer class="footer">
      <div class="flex justify-content-center flex-wrap">
        <Card
          style="width: 35rem; overflow: hidden"
          class="flex align-items-center custom-card justify-content-center font-bold m-4 border-round"
        >
          <template #title>
            <h4>PARTNER WITH US</h4>
          </template>
          <template #content>
            <small class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam
            </small>
            <div class="flex">
              <img src="/src/assets/brandImg/gmail.svg" alt="">

              <div class="m-4">
                <p>GDG Ikot Ekpene</p>
                <p>gdgikotekpene@gmail.com</p>
              </div>
            </div>
          </template>
        </Card>
        <Card
          style="width: 35rem; overflow: hidden"
          class="flex align-items-center justify-content-center font-bold m-4 border-round custom-card-2"
        >
          <template #title>
            <h4>CONNECT WITH US</h4>
          </template>
          <template #content>
            <p class="m-0 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat
            </p>
            <div class="flex">
              <img src="/src/assets/brandImg/linkedin.svg" alt="">
              <img src="/src/assets/brandImg/twitter.svg" alt="" class="mx-3">
              <img src="/src/assets/brandImg/whatsApp.svg" alt="">
            </div>
          </template>
        </Card>
      </div>
      <div class="flex justify-content-around subFooter">
        <p class="m-4 text-center text-muted">
          Copyright &copy; {{ thisYear }} GDGIK. All rights reserved.
        </p>
        <p class="m-4 text-center text-muted">Terms Of Service. Privacy Policy.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const thisYear = computed(() => {
  const yearToday = new Date().getFullYear()
  return yearToday
})
</script>
<style scoped>
.footer {
  background: rgba(8, 33, 69, 1);
  background: -moz-radial-gradient(circle, rgb(47, 47, 60) 0%, rgba(8, 33, 69, 1) 77%);
  background: -webkit-radial-gradient(circle, rgb(97, 96, 115) 0%, rgba(8, 33, 69, 1) 77%);
  background: radial-gradient(circle, rgb(97, 96, 115) 0%, rgba(8, 33, 69, 1) 77%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3b3686",endColorstr="#000000",GradientType=1);
}
.subFooter {
  background: #061b39;
  color: white;
}
:deep(.custom-card) {
  border: 3px solid !important;
  color: rgba(207, 224, 248, 1);
  background: linear-gradient(90deg, #11619f 0%, #063c8d 100%) !important;
}
:deep(.custom-card-2) {
  border: 3px solid !important;
  color: white !important;
background: linear-gradient(90deg, #5b81b6 0%, #adbeda 50%, #386ec0 100%) !important;
}
</style>