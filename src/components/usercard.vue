<template>
<div class="maincard">
  <div class="usercard" @click="showModal">
    <div class="img__wrap">
      <img :src="user.image" width="200" class="userimg" >
      <div class="img__description">
        <p><b>{{user.name}}</b></p>
        <p>{{user.address.city}}</p>
        </div>
    </div>
  </div>
  <div v-show="modalshow">
    <modal :closemodal="closeModal" :user="user" />
  </div>
</div>
</template>

<script>
import modal from './modal.vue'
export default {
    props: ['user'],
    components: {
        modal: modal
    },
    data() {
        return {
            modalshow: false
        }
    },
    methods: {
        showModal() {
            this.modalshow = true;
        },
        closeModal() {
            this.modalshow = false;
        }
    }
}
</script>

<style>
.usercard{
 margin: 30px;
}

.userimg{
 border-radius: 5%;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.img__wrap {
  position: relative;
  height: 300px;
  width: 200px;
}

.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  width: 200px;
  height: 300px;
  border-radius: 5%;
  text-align: center;
  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.maincard{
 animation: fadeInAnimation ease 3s
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
</style>