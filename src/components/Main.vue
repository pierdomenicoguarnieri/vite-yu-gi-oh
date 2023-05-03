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
  methods:{
    getCardType(cardType){
      store.cardOffset = 0;
      store.newType = cardType
      this.$emit("newGetApi")
    }
  }
}
</script>

<template>
  <main>
    <div class="pg-main-wrapper p-3">
      <div class="pg-select-wrapper container w-25 mb-3">
        <select class="form-select" aria-label="Default select example">
          <option selected @click="getCardType(null)">All cards</option>
          <option
            v-for="cardType in store.listType"
            :value="cardType"
            :key="cardType"
            @click="getCardType(cardType)">{{cardType}}</option>
        </select>
      </div>
      <div class="container bg-white p-3">
        <div class="pg-card-counter bg-dark text-white p-3">
          <span class="fs-3">{{store.resultArrayTotal.length}} cards founded, now viewing cards from {{store.cardOffset + 1}} to {{store.cardNumber + store.cardOffset}}</span>
        </div>
        <div class="row row-cols-5 m-0">
          <Card
            v-for="card in store.printArray"
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