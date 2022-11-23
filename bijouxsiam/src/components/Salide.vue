<template>
    <div class="carousel-item active" data-bs-interval="5000">
                  <img
                  :src="require(`@/assets/${image}`)"
                    class="d-block w-100 imgcarosel"
                    alt="colier"
                    width=""
                    height="500"
                  />
                  <div class="carousel-caption d-none d-md-block    ">
                    
                       <h5> <a href="#"><b>{{titre}}</b></a> </h5>
                      
                  </div>
                </div>
                 
                <!-- <div class="carousel-item" data-bs-interval="2000">
                  
                  <img
                  :src="require(`@/assets/${image}`)"                                       
                    class="d-block w-100 imgcarosel"
                    alt="b.orielle"
                    width=""
                    height="500"
                  />
                  <div class="carousel-caption d-none d-md-block">
                  
                    <h5> <a href="#"><b>{{titre}}</b></a> </h5>
                    
                  </div>
                </div>
                <div class="carousel-item ">
                  <img
                  :src="require(`@/assets/${image}`)"
                    class="d-block w-100 imgcarosel"
                    alt="bague"
                    width=""
                    height="500"
                  />
                  <div class="carousel-caption d-none d-md-block  ">
                    <h5 > <a href="#"><B>{{titre}}</B></a> </h5>
                  </div>
                  
                </div> -->
</template>

<script>
export default {
  name: 'Slides',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>
<style scoped>
.imgcarosel {
  border-radius: 40px;
  width: auto;
  height: auto;
}

</style>