//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProductData(productId) {
   const product = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }
   //console.log(1);


   //const connectGetProduct = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetProduct = () => axios
      .get(`/api/get-product/${productId}`, {})
      .then((r) => {
         product.value = r.data;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения данных проекта";
         alert(registerError);
      });
   //});


   //onMounted(connectGetAllAccounts)
   connectGetProduct()
   //watch(user, getUserRepositories)

   return product
}