<template>
  <div class="container">
    <section class="row text-center text-white">
      <div
        class="col-sm-6 col-md-12 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="d-flex justify-content-evenly gap-3 text-uppercase sub-text">
          <p>Learn</p>
          <p>Connect</p>
          <p>Build</p>
        </div>
        <h1 class="display-4 fw-bold typing">
          Ignite Tomorrow's Tech with GDG Ikot Ekpene
        </h1>
        <p class="col-md-8 fs-sm-6 fs-5 hero-subtext my-4 text-center">
          Join GDG Ikot Ekpene to learn new skills, build innovative projects, and connect with passionate tech enthusiasts.
        </p>
        <div class="cta d-flex gap-2 text-center">
          <a class="btn btn-primary btn-sm px-5 py-3 fw-medium" type="button">Join Us</a>
          <a class="btn btn-primary btn-sm px-4 py-3 fw-medium" type="button">
            Featured Event
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/harmonyos-sans');

.container{
  .sub-text{
    letter-spacing: 0.2em;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'HarmonyOS Sans', sans-serif;
    color: #4E69AA;
    @media screen and (max-width: 768px) {
      font-size: 1.105rem;
    }
  }
  .fw-bold {
    color: #d3ddf7;
    font-weight: 500;
    font-size: 4.25rem;
    width: 927.38px;
    line-height: 1.105;
    @media screen and (max-width: 768px) {
      font-size: 1.875rem;
      width: 70%;
    }
  }
  .hero-subtext{
    line-height: 1.103;
    color: #9BB6F8;
    font-family: 'HarmonyOS Sans';
    font-weight: 400;
    width: 832.18px;
    @media screen and (max-width: 768px) {
      line-height: 1;
      font-size: 1rem;
      width: 55%;
    }
  }
  .cta{
    a:nth-of-type(2){
      background: transparent
    }
  }
}
</style>
