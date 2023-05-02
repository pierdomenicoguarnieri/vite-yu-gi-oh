<script>
import axios from "axios";
import {store} from "./data/store.js";
import Header from "./components/Header.vue";
export default{
  name: "App",
  components:{
    Header,
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <Header/>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>