<template>
  <div>
  <div v-show="prompt" class="notify">
       Wrong username or password
   </div>
  <div class="form">
      <h3 class="heading">SIGN IN TO YOUR ACCOUNT</h3>
      <div>
      <div class="input-div"><input type="text" v-model="username" placeholder="Username" class="input" /></div>
      <div class="input-div"><input type="password" v-model="password" placeholder="**********" class="input" /></div>
      <div class="signed-checkbox">
        <input type="checkbox" id="signed" name="signed" value="">
        <label for="signed"> keep me signed in</label><br>
      </div>  
      <button class="btn" @click="login">SIGN IN</button>
      </div>    
  </div>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      username : '',
      password : '',
      prompt: false,
      countDown: 5,
    }
  },methods:{
    countDownTimer() {
      if(this.countDown > 0) {
          setTimeout(() => {
              this.countDown -= 1
              this.countDownTimer()
          }, 1000)}
          else{
            this.prompt = false;
            this.countDown = 5;
          }
   },
    login : function(){
      if(this.username==='admin' && this.password==='1234'){
        localStorage.setItem('authenticated','true');
        this.$router.push('/users');
    }
    else{
       this.prompt=true;
       this.countDownTimer();
    }
  }
  }
}
</script>

<style>

.form{
  text-align: center;
  padding-top: 10%; 
}

.heading{
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Roboto', sans-serif;
}


.input-div{
  margin-top: 15px;
}

.input{
  height:  30px;
  width: 250px;
  background-color: rgb(188, 235, 243);
  border: 0;
  padding-left: 10px;
}

.signed-checkbox{
  margin-top: 15px;
  width: 250px;
  margin-left: 36.5%;
}

.btn{
  height: 40px;
  width: 255px;
  background-color: rgb(101, 150, 255);
  color: rgb(255, 255, 255);
  border: 0;
  margin-top: 25px;
  font-size: 15px;
}
 .notify{
  position: fixed;
  width: 250px;
  height: 50px;
  overflow: hidden;
  z-index: 1052;
  text-align: center;
  background-color: rgb(255, 155, 155);
  color: rgb(255, 255, 255);
  padding-top: 25px;
  margin-left: 40%;
 }
</style>