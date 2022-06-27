//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getIndexesByProductId(product_id) {
   const indexes = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   //const connectGetIndexes = (product_id) => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetIndexes = (product_id) => axios
      .get("/api/get-indexes/" + product_id, {})
      .then((r) => {
         let str = '';
         r.data.forEach(element => {
            str += `${element.field}\n`
         });
         indexes.value = str;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения индексов";
         alert(registerError);
      });
   //});


   connectGetIndexes(product_id)

   return indexes
}