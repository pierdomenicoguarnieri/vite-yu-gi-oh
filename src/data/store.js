import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  resultArrayTotal: [],
  printArray: [],
  listType: [],
  newType: null,
  cardNumber: 20,
  cardOffset: 0,
  isLoading: true
})