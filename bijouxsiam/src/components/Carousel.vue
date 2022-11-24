<template>
 
 <div class="carosel container-fluid ">
            <div class="divcarosel  container-fluid ">
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide "
                data-bs-ride="carousel"
                
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class=" divcarousel carousel-inner">
                  
                    <Salide v-for="(salide,index) in salides" :key="index" :id="salide.id" :titre="salide.titre" :image="salide.image" />
                
                
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          
 
</template>


<script>
import Salide from '@/components/Salide.vue'

export default {
    name: 'Carousel',
    components: {
    Salide,
    },
    props: {

    },
    data(){
        return {
            salides:[
                {
                    id:1,
                    titre:'Collier',
                    image:'6.jpg',
                },
                {
                    id:2,
                    titre:'B.d\'orielle',
                    image:'2+.png',
                },
                {
                    id:3,
                    titre:'Bague',
                    image:'7.jpg',
                },
            ],
        }
    },
}
</script>
<style >

.divcarousel {
  border-radius: 40px;
}
.carousel{
  margin: 0px;
}
.divcarosel h5 a {
  background-color: #000;
  text-decoration: none;
  color: #cfa340;
  border-radius: 200px;
  padding: 10px 20px;
}
.divcarosel h5 a:hover {
  color: #cfa340;
}
h5 a:hover {
  color: #000;
}
</style>