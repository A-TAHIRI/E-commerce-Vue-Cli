<template>

<div class=" container  Cartes Cadeaux">
        <div class="row justify-content-center">
            <div class="col-ms-12 col-md-6 col-lg-6 carte ">
                <img class="imgcarte" src= "../assets/carte8.png"    alt=""  >
                <span class="cadeaux">...€</span>
                </div>
                
                <div class="col-ms-12 col-md-6 col-lg-6  carte ">
                    <img class="imgcarte" src= "../assets/carte1.png"    alt=""  >
                    
            </div>
            <div class="col-ms-12 col-md-12 col-lg-12  ajoutcadeaux">
                      
            </div>

        </div>
       
       
    </div>
    <div class=" container  Cartes Cadeaux">
        <div class="row justify-content-center">
         <Carte  v-for="(carte,index) in cartes" :key="index" :id="carte.id"  :image="carte.image"/>

        </div>
       
    </div>
</template>
<script>
import Carte from '@/components/Carte.vue'

export default {
    name: 'Cartes Cadeaux',
    components: {
    Carte,
    },
    props: {

    },
    data(){
        return {
            cartes:[

                {
                    id:1,
                    image:'carte7.png',
                },

                {
                    id:2,
                    image:'carte6.png',
                },
                {
                    id:3,
                  
                    image:'carte2.png',
                },
                {
                    id:4,
                   
                    image:'carte3.png',
                },
                {
                    id:5,
                   
                    image:'carte4.png',
                },
                {
                    id:6,
                   
                    image:'carte5.png',
                },


            ],

           
        }
    },
}
</script>
<style scoped>
.cadeaux{
    z-index: 2;
   margin-top: 160px;
   margin-left: -390px;
    position: absolute;
    font: 2rem CMU-serif;
   
   
}
.ajoutcadeaux{
    margin: 20px ;
    border-radius: 10px;
    background-color:#fff ;
    box-shadow: 0px 0px 40px gray;
   width: 830px;
   height: 500px;
    padding: 0px;
}
</style>
