<template>
    <div id="getFixed"  class=" logobar container-fluid  ">
         <div class="row   logo-bijoux  ">
            
           <Logo v-for="(logo,index) in logos" :key="index" :id="logo.id" :titre="logo.titre" :image="logo.image" />
 
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
 
 
 
 
 .logobar {
   /* position: sticky; */
 
   top: 0px;
   margin: 0px;
   padding: 0px;
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
 
 
 
 
 </style>