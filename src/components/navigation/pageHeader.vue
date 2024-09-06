<template>
  <div>
    <header class="p-5">
      <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../../assets/images/brand-logo.png"
              alt="Logo"
              class="brand-logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Event</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Partnership</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">
                Join us
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

<style scoped>
header{

  & nav {
    & .brand-logo{
      width: 40%;
    }
  }
}
</style>
