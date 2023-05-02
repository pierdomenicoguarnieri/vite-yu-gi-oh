<script>
import Crad from "./partials/Card.vue";
export default {
  name: "Main",
  components:{
    Card,
  }
}
</script>

<template>
  <main>
    <div class="row row-cols-5">
      <div class="col">
        <Card/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>