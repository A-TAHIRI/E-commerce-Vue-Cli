 
<template>
    <div class="Bijouxvue">
  
      
      <LogoBijoux/>
     
      <div class=" divfieldset container-fluid">
            <div   class="row justify-content-center  ">
              
              <Product v-for="(product,index) in products" 
              :key="index" :id="product.id" :description="product.description" 
                :prix="product.prix"    :image="product.image"  :image2="product.image2"
                 :quantity="product.quantity" :count="product.count"/>
             
            </div>
      </div>
      <Livraison />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
 
  import LogoBijoux from '@/components/LogoBijoux.vue'
  
  import Product from '@/components/Product.vue'
  import Livraison from '@/components/Livraison.vue'
  import axios from 'axios'
  
  export default {
    name:'Cartes Cadeaux',
    components: {
      LogoBijoux,

      Product,
      Livraison,
    },
    
    data(){
          return {
              products:[],
              errors: []
          }
    },

    // Fetches Details when the component is created.
    created() {
      axios.get(`http://localhost:8080/products.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.products = response.data.products
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
      
  }

  </script>
<style scoped>
.divfieldset {
  padding: 20px;
}
</style>