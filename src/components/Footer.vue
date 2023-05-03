<script>
import {store} from "../data/store.js";
export default {
  name: "Footer",
  data(){
    return{
      store
    }
  },
  methods:{
    nextPrev(value){
      store.cardOffset += value;
      this.$emit("startSearch");
    }
  }
}
</script>

<template>
  <footer>
    <div class="pg-buttons-container d-flex justify-content-center py-3">
      <button class="btn btn-primary me-2" @click="nextPrev(-store.cardNumber)" v-if="store.cardOffset">Prev</button>
      <button class="btn btn-primary" @click="nextPrev(store.cardNumber)" v-if="store.printArray.length === store.cardNumber">Next</button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer{
    background-color: #D48F38;
  }
</style>