<template>
  <div class="cover">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-white">PARTNER WITH US</h5>
              <p class="card-text my-20">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div class="d-flex align-items-center">
                <div>
                  <img
                    src="../../assets/images/gmailLogo.svg"
                    alt=""
                    class="img-flui"
                  />
                </div>
                <div class="text-within">
                  <p>GDG IKOT EKPENE</p>
                  <p>GDGIKOTEKPENE@GMAIL.COM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-white">CONNECT WITH US</h5>
              <p class="card-text my-20">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div class="d-flex py-3">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter mx-3"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-linkedin mx-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="p-4 mt-5">
      <div class="container">
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <div> <sup>&copy;</sup> {{ currentYear }} GDGIK. All rights reserved</div>
      <div>Terms of Service || Privacy Policy</div>
    </div>
  </div>
</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      return () {
      }
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  background: #021c5c;
  opacity: 0.7;
  backdrop-filter: blur(5px);
  padding-top: 48px;
}
.card {
  padding: 44px 36px;
  border: 2px solid #1b49bb;
  background: #040712;
  opacity: 0.8;
  backdrop-filter: blur(2px);
}
footer {
  background: #1a3d90;
  color: white;
}
.my-20 {
  margin: 20px 0;
}
.text-within {
  p {
    margin: 0 15px;
    font-size: 13px;
  }
}
.fa-brands {
  font-size: 50px;
  cursor: pointer;
}
</style>
