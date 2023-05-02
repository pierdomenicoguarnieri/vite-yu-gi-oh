<script>
import {store} from "../data/store.js";
import Card from "./partials/Card.vue";
export default {
  name: "Main",
  components:{
    Card,
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>
  <main>
    <div class="pg-main-wrapper p-3">
      <div class="container bg-white p-3">
        <div class="pg-card-counter bg-dark text-white p-3">
          <span class="fs-3">You found {{store.resultArray.length}} cards</span>
        </div>
        <div class="row row-cols-5 m-0">
          <Card
            v-for="card in store.resultArray"
            :key="card.id" 
            :name="card.name"
            :type="card.type"
            :img="card.card_images"
            />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    background-color: #D48F38;
    .pg-card-counter{
      margin:0 12px;
    }
  }
</style>