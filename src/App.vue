<script>
import axios from "axios";
import {store} from "./data/store.js";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/partials/Loading.vue";
export default{
  name: "App",
  components:{
    Header,
    Main,
    Footer,
    Loading
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl)
      .then(result => {
        store.resultArrayTotal = [];
        store.resultArrayTotal = result.data.data;
        this.createPrintArray()
        store.isLoading = false;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header titolo="Vite Yu-Gi-Oh! API"/>
  <Loading v-if="store.isLoading"/>
  <div v-else>
    <Main/>
    <Footer @startSearch="getApi"/>
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>