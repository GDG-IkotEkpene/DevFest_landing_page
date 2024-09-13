<template>
  <div class="container mt-4">
    <section class="eventSubCon">
      <!-- Tab Navigation -->
       <h2 class="text-event mb-3">Events</h2>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: selectedTab === 'featured' }" @click="selectedTab = 'featured'">
            Featured Event
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: selectedTab === 'upcoming' }" @click="selectedTab = 'upcoming'">
            Upcoming Events
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: selectedTab === 'past' }" @click="selectedTab = 'past'">
            Past Events
          </a>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content mt-2">
        <div v-if="selectedTab === 'featured'">
          <!-- Featured Event Card -->
          <div class="card">
            <img src="../../../../assets//images/event-image.png" class="card-img-top" alt="Google IO Extended 2024">
            <div class="card-body text-white bg-dark">
              <h5 class="card-title">Google IO Extended 2024</h5>
              <h6 class="mt-4 theme">Theme: Scaling the future</h6>
              <p class="card-text mt-2 ">
                Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
              </p>
              <div class="d-flex justify-content-between gap-4">
                <button class="btn btn-primary">Register</button>
                <button class="btn  learn">Learn more</button>

              </div>
            </div>
          </div>
        </div>

        <div class="upcoming" v-else-if="selectedTab === 'upcoming'">
          <section class="row">
            <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <h5 class="card-title">Google IO Extended 2024</h5>
                <h6 class="theme">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <h5 class="card-title">Google IO Extended 2024</h5>
                <h6 class="theme">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <h5 class="card-title">Google IO Extended 2024</h5>
                <h6 class="theme">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          </section>
        </div>

        <div v-else class="past">
          <section class="row">
            <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <!-- <h5 class="card-title">Google IO Extended 2024</h5> -->
                <h6 class="theme mt-4">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <!-- <h5 class="card-title">Google IO Extended 2024</h5> -->
                <h6 class="theme mt-4">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          <div class="card p-4 col-lg-4 col-sm-6">
              <img src="../../../../assets/images/google.png" class="card-img-top" alt="Google IO Extended 2024">
              <div class="card-body text-white">
                <!-- <h5 class="card-title">Google IO Extended 2024</h5> -->
                <h6 class="theme mt-4">Theme: Scaling the future</h6>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vivamus aenean risus...
                </p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-primary">Register</button>
                </div>
              </div>
          </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedTab: 'featured'
    }
  }
}
</script>

<style lang="scss" scoped>

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.card-body {
  background-color: #212529;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.learn {
    background-color: #021C5C;
    color: white;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}

.btn {
  width: 100%;
}

.text-white {
  color: #fff;
}

.eventSubCon {
  padding: 20px;
  @media screen and (min-width: 700px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  .nav-tabs {
    border: none;
  .nav-link {
    color: #4E69AA;
    transition: 0.5s;
  }
    .nav-link.active {
    color: #0d6efd;
    background-color: #040608;
    border: none;
  }
  .nav-link:hover {
    border: none;
    cursor: pointer;
  }
}

  .text-event {
    font-size: 23px;
    color: #BCCDF8;
    letter-spacing: 5px;
  }

  .tab-content {
    border: 1px solid #4E69AA;
    padding: 20px;
    border-radius: 10px;
    .card{
    border: none;
    }
    .upcoming, .past {
      .card {
        background-color: #0D1533;
      }
      .card-body {
        background-color: #0D1533;
        padding: 0;
      }
      .card-title {
        margin-top: 25px;
        color: #BCCDF8;
      }
      .theme {
        color: #C2CDDE;
      }
    }
  }
}
</style>
