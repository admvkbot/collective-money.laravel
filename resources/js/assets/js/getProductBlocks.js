//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProductBlocks(productId) {
   const blocks = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }
   //console.log(1);


   //const connectGetProductBlocks = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetProductBlocks = () => axios
      .get(`/api/get-blocks/${productId}`, {})
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
   connectGetProductBlocks()
   //watch(user, getUserRepositories)

   return blocks
}