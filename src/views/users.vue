<template>
  <div class="main">
      <navbar />
      <div class="users-content">
        <div class="headinguser">
          <h1><u>USERS</u></h1>
        </div>
        <div class="users">
          <div v-for="user in users" :key="user.id">
              <usercard :user="user" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import usercard from '../components/usercard.vue'
import userData from '../data.js'
export default {
  data() {
    return {
      users: []
    }
  },
components :{
  navbar: navbar,
  usercard: usercard
},
created() {
    fetch("https://api.npms.io/v2/search?q=vue")
    .then(response => console.log(response))
    .then(data => {
      this.users = userData
      console.log(data) 
    });
}
}
</script>

<style>
.main{
  display: flex;
  justify-content: flex-end;
}

.users-content{
  width: 100%;
}

.headinguser{
 margin-left: 90%;
}

.users{
  margin-left: 20%;
  display: flex;
  flex-flow: wrap;
}


</style>