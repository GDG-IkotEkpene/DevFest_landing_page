<template>
  <section class="py-5 team-section">
    <div class="subCon">
      <div class="row mb-3 con-title">
        <div class="col-12">
          <h2 class="text-white fs-50">TEAM</h2>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur. Vivamus viverra aenean risus etiam.
            Facilisi enim morbi venenatis tellus erat. Donec cras sapien duis turpis elit
            cras at aenean sit. lorem1000
          </p>
        </div>
      </div>

      <div class="row grid">
        <div class="col-lg-3 col-sm-6 mb-4" v-for="(member, index) in teamMembers"
          :key="index"
        >
          <div class="card max-width text-light h-100">
            <div class="hoverCo ">
              <img :src="member.image" class="card-img-top img-hover" :alt="member.name" />
              <div class="hoverCon">
                <img src="@/assets/images/hoverLogo.png" alt="" class="img-fluid">
              </div>
            </div>
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="d-flex lh-1 flex-column justify-content-start">
                <h5 class="fs-6 lh-sm">{{ member.name }}</h5>
                <p class=" fs-15">{{ member.role }}</p>
              </div>
              <div>
               <a :href="member.linkedinUrl" target="_blank" rel="noopener noreferrer">
                <img src="../../../../assets//images/linkdin.png" height="20px" width="20px" alt="" srcset="">
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      teamMembers: [
        {
          name: 'Mfonido Mark',
          role: 'Team Lead',
          image: require('../../../../../public/chapterLeadsImgs/mfon-ido.png'),
          linkedinUrl: 'https://www.linkedin.com/in/mfonido-mark-4baa42120'
        },
        {
          name: 'Chibugo Illoh',
          role: 'Program Manager',
          image: require('../../../../../public/chapterLeadsImgs/chibugo.png'),
          linkedinUrl: 'https://www.linkedin.com/in/chibugo-illoh2807'
        },
        {
          name: 'Emmanuel Michael',
          role: 'Community Moderator',
          image: require('../../../../../public/chapterLeadsImgs/emmanuel.png'),
          linkedinUrl: 'https://www.linkedin.com/in/emmanuel-michael'
        },
        {
          name: 'Godwin Jonathan',
          role: 'Social Media Manager',
          image: require('../../../../../public/chapterLeadsImgs/godwinJonathan.png'),
          linkedinUrl: 'https://www.linkedin.com/in/godwin-jonathan-1a890a168'
        },
        {
          name: 'Godwin Bassey',
          role: 'Design Lead',
          image: require('../../../../../public/chapterLeadsImgs/godwinBassey.png'),
          linkedinUrl: ''
        },
        {
          name: 'Victoria Sampson',
          role: 'Co-Lead WTM GDG Ikot Ekpene',
          image: require('../../../../../public/chapterLeadsImgs/victoria.png'),
          linkedinUrl: 'https://www.linkedin.com/in/victoria-sampson-057aa616b?trk=contact-info'
        },
        {
          name: 'Peter Ime',
          role: 'Community Moderator',
          image: require('../../../../../public/chapterLeadsImgs/peter.png'),
          linkedinUrl: 'https://www.linkedin.com/in/peter-ime-bbb18719b'
        },
        {
          name: 'Happiness Adam',
          role: 'Community Moderator',
          image: require('../../../../../public/chapterLeadsImgs/hapiness.png'),
          linkedinUrl: 'https://www.linkedin.com/in/pinessjw-adam'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
.con-title {
  margin-top: 150px
}
.subCon {
  padding: 20px;
  @media screen and (min-width: 700px) {
    max-width: 1000px;
    margin: 0 auto;
  }
}

.grid {
  .max-width {
    background-color: #0D1533;
  }
  .hoverCo{
    position: relative;
    .hoverCon {
      background-image: linear-gradient(#0D1533,#0D1533);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: 1s;
      position: absolute;
      cursor: pointer;
      width: 100%;
      line-height: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      top: 0;
      opacity: 0.2;
      img {
        visibility: hidden;
      }
    }
    .hoverCon:hover {
    background-size: 100% 100%;
    opacity: 0.8;
    visibility: visible;
    cursor: pointer;
    img {
      visibility: visible;
    }
  }
  }
}

}
</style>
