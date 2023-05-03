<script>
export default {
  name: "Header",
  props:{
    titolo: String
  }
}
</script>

<template>
  <header class="bg-white">
    <div class="container h-100 d-flex align-items-center">
      <img src="/yugioh.svg" class="h-25 me-3" alt="Logo Yu-Gi-Oh">
      <h1>{{titolo}}</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header{
    height: 100px;
  }
</style>