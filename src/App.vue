<script>
import axios from "axios";
import {store} from "./data/store.js";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default{
  name: "App",
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + "?num=120&offset=0")
      .then(result => {
        store.resultArray = result.data.data;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>