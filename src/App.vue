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
      axios.get(store.apiUrl, {
        params:{
          type: store.newType
        }
      })
      .then(result => {
        store.resultArrayTotal = [];
        store.resultArrayTotal = result.data.data;
        if(store.listType.length === 0){
          store.resultArrayTotal.forEach(element =>{
            if(!store.listType.includes(element.type)){
              store.listType.push(element.type)
            }
          })
        }
        this.createPrintArray()
        store.isLoading = false;
      })
    },
    createPrintArray(){
      store.isLoading = true;
      store.printArray = [];
      store.printArray.push(...store.resultArrayTotal.slice(store.cardOffset, (store.cardNumber + store.cardOffset)));
      store.isLoading = false;
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
    <Main @newGetApi="getApi"/>
    <Footer @startSearch="createPrintArray"/>
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>