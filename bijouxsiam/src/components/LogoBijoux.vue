<template>
   <div id="getFixed"  class=" logobar container-fluid  ">
        <div class="row   logo-bijoux  ">
           
          <Logo v-for="(logo,index) in logos" :key="index" :id="logo.id" :titre="logo.titre" :image="logo.image" />

      </div>
     </div>
     <p class="gratuite">Livraison gratuite pour les commandes supérieures à 50 €</p>
     <div class= "container-fluid  texte-center divvideo">
          <div class="row align-items-center">
              <div class="col-mx-12 col-ms-12 col-md-4 col-lg-4 ">
                 <p class="coeur">FAITES-VOUS PLAISIR  </p> 
                 <p  id ="coeur"  class="coeur">Nos sélections coup de coeur </p>
               </div>
            <div class=" col-mx-12 col-ms-12 col-md-4 col-lg-4">
                      
            <video class="video" controls src="@/assets/vidéo1.mp4"  autoplay loop muted></video>
          </div>
        </div>
    </div>
      
</template>
<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'LogoBijoux',
  components: {
  Logo,
  },
  props: {

  },
  data(){
      return {
          logos:[
              {
                  id:1,
                  titre:'Collier',
                  image:'f1.png',
              },
              {
                  id:2,
                  titre:'B.d\'orielle',
                  image:'f2.png',
              },
              {
                  id:3,
                  titre:'Bracelet',
                  image:'f3.png',
              },
              {
                  id:4,
                  titre:'Bague',
                  image:'f4.png',
              },
              {
                  id:5,
                  titre:'B.cheville',
                  image:'f5.png',
              },
              {
                  id:6,
                  titre:'Montre',
                  image:'Montere.png',
              },
          ],
      }
  },
}
</script>

<style scoped>
.gratuite {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1rem;
  /* color: #e6782f; */
  font-style: oblique;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  
}



.logobar {
  /* position: sticky; */

  top: 0px;
  margin: 0px;
  padding: 0px;
}
.video {
  border-radius: 10px;
  box-shadow: 0px 0px 40px gray;
  width: 310px;
  height: 310px;
  padding: 5px;
  margin: 10px;
  text-align: center;
}
.logo-bijoux {
  color: #cfa340;
  height: auto;
  /* padding-left: 30px;
  padding-right: 30px; */
  background-color: #513e35;
  margin: 10px 0px 0px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 40px gray;
  text-align: center;

 font-family: "Times New Roman", Times, serif;
}

.coeur {
  font-style: oblique;
  font-size: 1.2;
  /* font-weight: bold; */
  margin: 0px;
  color: gray;
  /* text-shadow: gray 0px 0px 2px;*/
  font-family: "Times New Roman", Times, serif;
}

.divvideo{
  text-align: center;
}





</style>