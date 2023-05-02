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
      <div class="pg-card-info h-100 d-flex flex-column justify-content-between">
        <h5>{{name}}</h5>
        <span>{{type}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pg-card{
  .pg-card-info{
    background-color: #D48F38;
    min-height: 100px;
  }
}
</style>