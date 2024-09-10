<template>
  <div class="container ">
    <h3 class="text-uppercase text-white">Partners</h3>
    <div class="py-4">
      <div class="row text-center">
        <div class="col-sm my-4">
          <a href="https://www.remita.net" target="_blank">
            <img
              src="../../../../assets/images/partners/remita.svg"
              alt="Remita Logo"
              class="img-fluid"
            />
          </a>
        </div>
        <div class="col-sm my-4">
          <a href="https://whogohost.ng/" target="_blank">
            <img
              src="../../../../assets/images/partners/whogohost.svg"
              alt="Whogohost Nigeria logo"
              class="img-fluid"
            />
          </a>
        </div>
        <div class="col-sm my-4">
          <a href="https://www.propel.community/" target="_blank">
            <img
              src="../../../../assets/images/partners/propel.svg"
              alt="Propel Community Logo"
              class="img-fluid"
            />
          </a>
        </div>
        <div class="col-sm my-4">
          <a href="#" target="_blank">
            <img
              src="../../../../assets/images/partners/osca.svg"
              alt="OSCA Ikot Ekpene Logo"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/harmonyos-sans");
.container {
  h3{
    font-family: "HarmonyOS Sans", sans-serif;
    letter-spacing: .2em;
  }
  .row {
    a {
      img {
        height: 55px;
        filter: grayscale(100%);
        transition: filter 0.3s ease;
      }
      img:hover {
        filter: grayscale(0);
      }
    }
  }
}
</style>
