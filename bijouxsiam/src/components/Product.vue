<template>
 
            <fieldset  class=" col-ms-12 col-md-5 col-lg-3  fieldset" >
             <article class="f1"> 
              
              <a href="#">
                <img id="photo1" :src="require(`@/assets/${image}`)" alt="bijoux" height="">  
              <!-- <img id="photo2" :src="require(`@/assets/${image2}`)" alt="bijoux" height=""> -->
            </a>
             </article >
                <button  v-if="quantity>0"  @click="quantity -=1; bar++; count++ ;(increment()); (ajouter())   " class=" ajouter" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
             </svg> </button>

              <article class="non">
                
                <a href="#">
                  <span>
                   {{description}}
                  </span>
                  <br>
                  <span class="prix"> Prix: {{prix}}€ {{quantity}} {{count}} {{(count*prix).toFixed(2) }}  </span><br>
                <span>
                   <button id="voirplus" type="button"  class="btn btn-secondary ">Voir Plus</button>
                </span>
                </a>
               </article>
               <span v-if="quantity === 0">
                 Rupture de stock
                </span>
                <!-- <span> 
                 
                  {{ajt}}
                {{totalPrix}}
                {{ totalProducts }}
              </span> -->
            </fieldset>
              
              <!-- <h4> Total des produits:{{ totalProducts }}</h4> 
            <h5> Total Prix:{{totalPrix}} €</h5> 
         -->


</template>


<script>
export default {
  name: 'Products',
  props: {
    id: Number,
    titre:String,
    image:String,
    prix:Number,
    quantity:Number,
    description:Number,
    count:Number,
   
   

  },
  data(){
          return {
              products:[],
              ajt:17,
              bar:0
            
          }
    },
    methods:{
      increment(){
        return this.ajt++;
      }

    },
    computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        // sum += product.quantity
        // return sum
        return sum + product.quantity;
      }, 0);
    },

    // ajouter(){
    //   return this.$store.state.ajout;
     
    // },
    // total_prix(){
    //   return this.$store.getters. TotalPrix;
    // },

    totalPrix() {
      return this.products.reduce((total, count,prix) => {
        return total+ (count*prix);
      }, 0);
    },
  },
 
 
}
</script>
<style scoped>

.fieldset {
  color: #000;
  background-color: #fff;
  margin: 50px ;
  border-radius: 10px;
  box-shadow: 0px 0px 40px gray;
  text-align: center;
  font-family: "Times New Roman", Times, serif;

}
article.f1 {
  background-size: 100% 100%;
}

.f1 #photo1 {
  cursor: pointer;
  height: 100%;
  width: 100%;
  /* opacity:1;
  transition:all .5s ease-out 0s;
  z-index: 1; */
}
/* .f1:hover #photo1{
  opacity:0;
  z-index: 0;
} */


/* .f1 #photo2 {
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  transition:all .5s ease-out 0s;
  z-index: 0;

}
.f1:hover #photo2{
  opacity:1;
  z-index: 1;
} */



#voirplus {
  visibility: hidden;
  margin-bottom: 5px;
}
.non a:hover #voirplus {
  visibility: visible;
}
.non a {
  color: gray;
  text-decoration: none;
}
.non a:hover {
  color: gray;
}
button {
  border: 0px;
  background-color: #fff;
}


article img {
  border-radius: 10px;
}
article {
  align-items: center;
}

.ajouter {
  color: gray;
}
.ajouter :hover {
  color: gray;
}


</style>