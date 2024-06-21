<template>
  <div>
    <footer class="site-footer tw-bg-secondary-color lg:tw-px-12 md:tw-px-8 tw-px-6 tw-py-6">
      <div class="">
        <div class="tw-grid lg:tw-grid-cols-3 md:tw-cols-2 tw-cols-1 tw-gap-8">
          <div class="">
            <img src="@/assets/logo.svg" alt="" />
            <h6 class="tw-text-primary-color">About</h6>
            <p class="tw-text-white tw-text-xs tw-tracking-wide tw-leading-normal">
              I have rich experience in developing web apps and building and customization of
              websites etc. I am proficient in UI/UX, HTML5, CSS3, Vanilla JavaScript, Bootstrap5,
              VueJs, Ionic, NuxtJs. I love to talk with you about our unique approach. Feel free to
              contact me writing an email with your project idea.
            </p>
          </div>

          <div class="">
            <h6 class="tw-text-primary-color">Skill Set</h6>
            <ul class="tw-flex tw-flex-col">
              <li><a class="tw-text-xs tw-text-gray-300">Web Development</a></li>
              <li><a class="tw-text-xs tw-text-gray-300">UI/UX</a></li>
              <li><a class="tw-text-xs tw-text-gray-300">Directing</a></li>
              <li><a class="tw-text-xs tw-text-gray-300">Acting</a></li>
              <li><a class="tw-text-xs tw-text-gray-300">MCing</a></li>
              <li><a class="tw-text-xs tw-text-gray-300">Spoken Word</a></li>
            </ul>
          </div>

          <div class="">
            <h6 class="tw-text-primary-color">Quick Links</h6>
            <ul class="tw-flex tw-flex-col tw-gap-1">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/projects">Projects</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </div>
        </div>
        <hr class="tw-my-5" />
      </div>
      <div class="">
        <div class="tw-flex lg:tw-flex-row md:tw-flex-row tw-flex-col tw-justify-between tw-gap-2">
          <p class="tw-text-primary-color tw-text-xs">
            <!-- Copyright &copy; 2021 All Rights Reserved by <a href="#">Dynastiy</a>. -->
            Copyright &copy; {{ thisYear }} Dynastiy. All rights reserved.
          </p>

          <ul class="tw-flex tw-gap-2">
            <li>
              <a class="tw-text-primary-color" href="https://web.facebook.com/min.dynarex"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a class="tw-text-primary-color" href="https://twitter.com/dy_code"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li>
              <a class="tw-text-primary-color" href="https://github.com/Dynastiy"><i class="fa fa-github"></i></a>
            </li>
            <li>
              <a class="tw-text-primary-color" href="https://www.linkedin.com/in/emmanuel-michael-1467ab17b/"
                ><i class="fa fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a class="tw-text-primary-color" href="mailto: emmanuel77michael@gmail.com"
                ><i class="fa fa-envelope"></i
              ></a>
            </li>
          </ul>
        </div>
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
