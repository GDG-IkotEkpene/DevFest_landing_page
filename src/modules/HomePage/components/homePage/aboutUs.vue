<template>
  <div class="container my-5">
    <section class="py-5">
      <div class="text-white" >
        <h3 class="text-uppercase fw-400 fs-4 mb-3">about</h3>
        <p class="mb-4 col-sm-6 col-md-11 fw-500">
          GDG Ikot Ekpene is a thriving hub for tech enthusiasts and
          professionals dedicated to fostering innovation, collaboration, and
          learning within the community. Our mission is to empower individuals
          with the skills and knowledge needed to navigate and shape the future
          of technology.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase">Objective</h5>
              <hr class="text-white my-4">
              <p class="card-text">
                Inspire passion for technology through engaging events, educating members, and fostering collaboration by providing valuable resources.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase">Vision</h5>
              <hr class="text-white my-4">
              <p class="card-text">
                To cultivate a vibrant tech community that empowers individuals to learn, build, and connect, driving innovation and positive change.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase">Mission</h5>
              <hr class="text-white my-4">
              <p class="card-text my-20">
                To be a leading force in the tech community, creating opportunities for growth and development while shaping the future of technology in our region.
              </p>
            </div>
          </div>
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
  font-family: 'HarmonyOS Sans', sans-serif;
  .fs-4{
    letter-spacing: .2em;
  }
  .card{
    background: #021C5C;
    border: 2px solid #4E69AA;
    border-radius: 1px;
    padding: 1.875em 1.625em;
    color: hsla(223, 69%, 90%, 0.5);
  .card-title{
      color: #D3DDF6;
    }
  }
  .card:hover{
      background-color: transparent;
      border: 0;
      transition: .3s ease;
  }
}
</style>
