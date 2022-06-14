//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProjectTypes() {
   const types = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   //const connectGetProjectTypes = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   //const connectGetProjectTypes = () => {
   const connectGetProjectTypes = () => axios
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
   connectGetProjectTypes()
   //watch(user, getUserRepositories)

   return types
}