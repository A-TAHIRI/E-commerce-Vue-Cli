<template>
<div class="col-ms-12 col-md-6 col-lg-6  carte">
<img class="imgcarte" :src="require(`@/assets/${image}`)" alt=""  >

</div>


</template>
<style>
.carte{
    margin: 20px ;
    border-radius: 10px;
    background-color:#fff ;
    box-shadow: 0px 0px 40px gray;
    width: 400px;
    height: 200px;
    padding: 0px;
}
.imgcarte{
    width: 400px;
    height: 200px;
    border-radius: 10px;
}

</style>
<script>
export default {
  name: 'Carte',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>
