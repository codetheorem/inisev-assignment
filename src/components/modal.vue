<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
      <div class="content">
        <div><img :src="user.image" width="200" /></div>
        <div>
        <div class="close" @click="close">X</div>
        <div class="details">
          <p>{{user.name}}</p>
          <p><a :href="`mailto:${user.email}?subject = We are hiring&body = Hello, ${user.name}`">{{user.email}}</a></p>
          <p>{{user.phone}}</p>
          <p>{{user.address.city}},{{user.address.street}}</p>
          <p>{{user.website}}</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['closemodal','user'],
    methods: {
      close() {
        this.closemodal();
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index: 10000;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .details{
    padding: 30px;
    font-weight: bolder;
  }

  .close{
    text-align: right;
    padding-right: 20px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
  }
</style>