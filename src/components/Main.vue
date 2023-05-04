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
      store,
      cardType: null
    }
  },
  methods:{
    getCardType(){
      store.cardOffset = 0;
      store.newType = this.cardType.length ? this.cardType : null;
      this.$emit("newGetApi")
    }
  }
}
</script>

<template>
  <main>
    <div class="pg-main-wrapper p-3">
      <div class="pg-select-wrapper container w-25 mb-3">
        <select v-model="cardType" @change="getCardType" class="form-select" aria-label="Default select example" aria-placeholder="Select a type">
          <option value="">All cards</option>
          <option
            v-for="cardType in store.listType"
            :value="cardType"
            :key="cardType">{{cardType}}</option>
        </select>
      </div>
      <div class="container bg-white p-3">
        <div class="pg-card-counter bg-dark text-white p-3">
          <span v-if="store.resultArrayTotal.length > store.cardNumber" class="fs-3">{{store.resultArrayTotal.length}} cards founded, now viewing cards from {{store.cardOffset + 1}} to {{store.cardNumber + store.cardOffset}}</span>
          <span v-else class="fs-3">{{store.resultArrayTotal.length}} cards founded, now viewing cards from {{store.cardOffset + 1}} to {{store.resultArrayTotal.length}}</span>
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