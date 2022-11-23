<template>
<footer>
   <section class="newsletter">
        <div class="container">
        <div class="row">
        <div class="col-sm-12">
          <div class="content">
            <h2>Inscription à la newsletter</h2>
            <p>Promotions, nouveaux produits et soldes. Directement dans votre boîte de réception.</p>
          <div class="input-group">
                 <input type="email" class="form-control" placeholder="Adresse E-mail">
                 <span class="input-group-btn">
                 <button class="btn" type="submit"> <b> Je m'abonne</b> </button>
                 </span>
                  </div>
          </div>
        </div>
        </div>
        </div>
        </section>
      <div class="container-fluid">
       <div class="  container condition  ">
        <div class=" foot row align-self-center  ">
        
       <div id="recherche" class="col-xs-12 col-ms-12 col-md-5 col-lg-5"> <a href="#">Recherche</a></div><br>
       <div class="col-xs-12 col-ms-12 col-md-2 col-lg-2"><a href="#">Cantactez-nous</a></div><br>
       <div id="conditions"  class="col-xs-12 col-ms-12 col-md-5 col-lg-5"> <a href="#">Conditions Générales</a></div><br>
       <div class="col-12"><br> </div>
         <div class="col-xs-12 col-ms-12 col-md-4 col-lg-4">  
            <span class="sociale ">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
             </span>
         </div>    
            

             <div class="col-xs-12 col-ms-12 col-md-4 col-lg-4">
             <span class="copie">
             <i class="fa-regular fa-copyright"></i> 2022,<a href="#"> Bijoux Siam</a>
             </span>
            </div><br>

             <div class="col-xs-12 col-ms-12 col-md-4 col-lg-4">
             <span class="bank">
                <img src="../assets/moyen-paiement-prochasse-paypal_2-removebg-preview.png" alt="carte "  width="200" height="50">
            </span>
            </div><br>


          </div>
      </div>
      </div>
    </footer>

</template>

<script>
export default {
  name: 'Footer',
  props: {
   
    titre:String,
    image:String,
  }
}
</script>
<style scoped>
footer {
  background-color: #fff;
  color: gray;
  height: auto;
  margin: 0px 20px 20px 20px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 40px grey;
  font-family: "Times New Roman", Times, serif;
  text-align:center ;
}
.newsletter {
  padding: 50px 0;
}

.newsletter .content {
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}
.newsletter .content h2 {
  color: gray;
  margin-bottom: 20px;
}
.newsletter .content .form-control {
  height: 50px;
  font-size: 12px;

  background-color: rgba(128, 128, 128, 0.548);
  border-radius: 5px;
}
.newsletter .content.form-control:focus {
  box-shadow: none;
  border: 2px solid gray;
}
.newsletter .content .btn {
  min-height: 50px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-weight: 600;
}
.condition a {
  color: gray;
  text-decoration: none;
}
.condition {
  height: 200px;
}
.foot {
  padding-top: 50px;
  padding-bottom: 50px;
}
.sociale a {
  padding: 3px;

}


</style>