<template>
  <div>
    <header class="p-5">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../../assets/images/brand-logo2.png"
              alt="Logo"
              class="brand-logo"
            />
          </a>
          <i class="fa-solid fa-bars navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"></i>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-white">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Event</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Partnership</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">
                Join US
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  // color: white !important;
  // border: 2px solid white;
  & nav {
    border: 2px solid #1B49BB;
    background: rgba(4, 8, 18, 0.8);
    backdrop-filter: blur(2px);
    padding: 20px;
    .container-fluid {
      .navbar-brand {
        margin: 0;
        padding: 0;
        width: 100px !important;
        .brand-logo {
          width: 200%;
          @media screen and (max-width: 390px) {
            padding-right: 20px;
          }
        }
      }
      .collapse {
        .navbar-nav {
          .nav-item {
            .nav-link {
              color: white !important;
            }
          }
        }
        form {
          button {
            color: white;
            padding: 10px 20px;
            border: 1px solid white;
            background: #1B49BB;
          }
        }
      }
    }
  }
}
</style>
