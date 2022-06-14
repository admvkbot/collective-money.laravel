//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProjectBlocks(projectId) {
   const blocks = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }
   //console.log(1);


   //const connectGetProjectBlocks = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetProjectBlocks = () => axios
      .get(`/api/get-blocks/${projectId}`, {})
      .then((r) => {
         blocks.value = r.data;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения блоков timeline";
         alert(registerError);
      });
   //});


   //onMounted(connectGetAllAccounts)
   connectGetProjectBlocks()
   //watch(user, getUserRepositories)

   return blocks
}