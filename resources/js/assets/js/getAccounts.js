//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getAllAccounts() {
  const accounts = ref([])
//  const getUserRepositories = async () => {
//    repositories.value = await fetchUserRepositories(user.value)
//  }


  const connectGetAllAccounts = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   axios
     .get("/api/get-accounts", {})
     .then((r) => {
         //console.log(r.data)
         accounts.value = r.data;
         //accounts.value = [{id: 1, name: 'qqqt', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
     })
     .catch((err) => {
       console.log(err);
       const registerError = "Ошибка получеения списка аккаунтов";
       alert(registerError);
     });
 });


  //onMounted(connectGetAllAccounts)
  connectGetAllAccounts()
  //watch(user, getUserRepositories)

  return accounts
}