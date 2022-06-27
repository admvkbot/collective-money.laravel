//import { test } from '../services/functions'

//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'


export default function (options = {}, callbacks = {}) {
   const getAccountData = (productId) => {
      const account = ref({})
      //  const getUserRepositories = async () => {
      //    repositories.value = await fetchUserRepositories(user.value)
      //  }
   
   
      //const connectGetAccountData = (accountId) => axios.get("/sanctum/csrf-cookie").then((response) => {
      const connectGetAccountData = (productId) => axios
         .get("/api/get-account-data/" + productId, {})
         .then((r) => {
            //console.log(r.data)
            account.value = r.data;
            //accounts.value = [{id: 1, name: 'qqqt', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
         })
         .catch((err) => {
            console.log(err);
            const registerError = "Ошибка получеения данных продукта " + productId;
            alert(registerError);
         });
      //});
   
   
      //onMounted(connectGetAllAccounts)
      //console.log(accountId)
      connectGetAccountData(accountId)
      //watch(user, getUserRepositories)
   
      return account
   }

   return {
      getAccountData,
   }
}