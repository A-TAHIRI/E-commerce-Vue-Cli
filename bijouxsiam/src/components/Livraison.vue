<template>


<div class=" container">
          <div class="livraison row">
          <span class="col">
            <img src="@/assets/livraison.png" alt="Livraison" >
            <p id="livrai">Livraison partout en France</p>
          </span>

          <span class="col">
             <img src="@/assets/sécurité.png" alt="Paiment">
             <p id="paiement"> Paiement sécurisé 100%</p>
          </span>
          <span class="col">
            <img src="@/assets/synchroniser.png" alt="Echanges">
            <p id="Échanges">Échanges et remboursements</p>
         </span>
        </div>

        </div>   
</template>
<script>
export default {
  name: 'Livaison',
  props: {
   
    titre:String,
    image:String,
  }
}
</script>
<style scoped>
.livraison {
  font-size: medium;
  color: #e6782f;
  font-style: oblique;
  margin: 80px 10px 80px 10px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  
}
.livraison #livrai {
  padding-top: 15px;
}
.livraison #paiement {
  padding-top: 15px;
}
.livraison #Échanges {
  padding-top: 15px;
}

</style>