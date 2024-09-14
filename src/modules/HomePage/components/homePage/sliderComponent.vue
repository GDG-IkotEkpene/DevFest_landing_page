<template>
  <div>
    <vue-marquee-slider class="py-5 slider" id="marquee-slider" :speed="50000" :width="60">
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.url" />
      </div>
    </vue-marquee-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { url: require('../../../../../public/heroSliders/1.png') },
        { url: require('../../../../../public/heroSliders/2.png') },
        { url: require('../../../../../public/heroSliders/3.png') },
        { url: require('../../../../../public/heroSliders/4.png') },
        { url: require('../../../../../public/heroSliders/5.png') },
        { url: require('../../../../../public/heroSliders/6.png') },
        { url: require('../../../../../public/heroSliders/7.png') },
        { url: require('../../../../../public/heroSliders/8.png') },
        { url: require('../../../../../public/heroSliders/9.png') },
        { url: require('../../../../../public/heroSliders/10.png') },
        { url: require('../../../../../public/heroSliders/11.png') },
        { url: require('../../../../../public/heroSliders/12.png') }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.slider {
  .image-container {
    display: inline-block;
    background: #021C5C;
    border-radius: 200px;
    overflow: hidden;
    margin: 5px;
    transition: background-color 0.3s ease;
  }

  .image-container:hover {
    background-color: transparent;
  }

  img {
    display: block;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;
    width: 100%;
  }

  img:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.5);
  }
}
</style>
