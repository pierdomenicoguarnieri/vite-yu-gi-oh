<script>
export default {
  name: "Card",
  props:{
    name: String,
    type: String,
    img: Array
  }
}
</script>

<template>
  <div class="col mb-5">
    <div class="pg-card text-center">
      <div class="pg-img-wrapper">
        <img class="w-100" :src="img[0].image_url" :alt="name">
      </div>
      <div class="pg-card-info h-100 d-flex p-2 flex-column justify-content-between">
        <h5 class="text-white">{{name}}</h5>
        <span>{{type}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col{
  transition: all .2s;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
}
.col:hover{
  transform: scale(1.05);
}
.pg-card{
  box-shadow: 0 0 10px rgba(#000, 0.4);
  .pg-card-info{
    background-color: #D48F38;
    min-height: 150px;
  }
}
</style>