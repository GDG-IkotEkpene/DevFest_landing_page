<template>
    <div class="lg:p-4 auth md:p-4  lg:bg-neutral-200 md:bg-neutral-200 bg-white flex overflow-y-auto justify-center items-center h-screen">
      <div class=" bg-white md:bg-white rounded-lg lg:w-5/12 md:w-5/12 w-full py-8 px-8">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style>
  /* .auth {
    background:url("../assets/img/bbbg.png"),  url("../assets/img/frame.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  } */
  </style>
  