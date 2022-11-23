<template>
     <div class="col ">
        <a href="#">
            <img :src="require(`@/assets/${image}`)" width="50" height="50"> <br>
           
            {{titre}}
              
        </a>
     </div>
</template>
<script>
export default {
  name: 'Logos',
  props: {
    id: Number,
    titre:String,
    image:String,
  }
}
</script>

<style scoped>
/* .col a {
  display: flex;
  align-items: center;
  justify-content: center;

} */
.col a:hover{
  color:#cfa340 ;
} 
.logo-bijoux a {
  text-decoration: none;
  color: #cfa340;
}
</style>