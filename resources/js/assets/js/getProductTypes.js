//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProductTypes() {
   const types = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   //const connectGetProductTypes = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   //const connectGetProductTypes = () => {
   const connectGetProductTypes = () => axios
      .get("/api/get-types", {})
      .then((r) => {
         types.value = r.data;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения типов проектов";
         alert(registerError);
      });
   //});
   //};


   //onMounted(connectGetAllAccounts)
   connectGetProductTypes()
   //watch(user, getUserRepositories)

   return types
}