<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    console.log('App mounted.');
    if(localStorage.getItem('authenticated') == 'true'){
      this.$router.push('/users');
    }else{
      this.$router.push('/login');
    }
  },
}
</script>

<style>

#app{
  font-family: 'Roboto', sans-serif;
}



</style>
