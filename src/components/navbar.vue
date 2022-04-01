/* eslint-disable vue/require-v-for-key */
<template>
<div class="menu">
  <p>
      navbar
  </p>
  <div v-for="item in menu" class="menu-elements" :key="item">
      <div>{{item}}</div>
  </div>
  <div class="logout" @click="logout">
      logout
  </div>
</div>
</template>

<script>
export default {
 data: function () {
   return {
     menu: ['Menu element 1','Menu element 2','Menu element 3']
   }
 },
 methods: {
   logout: function () {
     localStorage.removeItem('authenticated');
     this.$router.push('/login')
   }
 }

}
</script>

<style>
.menu{
height: 100%; 
 width: 250px; 
position: fixed; 
z-index: 1000; 
top: 0;
left: 0;
background-color: rgb(228, 228, 232); 
overflow-x: hidden; 
padding-top: 30px; 
padding-left: 30px;
font-size: 20px;
font-weight: bolder;
}

.menu-elements{
    margin-top: 30px;
}

.logout{
    margin-top: 100%;
    cursor: pointer;
}
</style>