import { ref } from 'vue'

export default function searchProduct(query) {
   const product = ref([])

   const connectSearchProduct = (query) => axios
      .post("/api/search-product", { query: query })
      .then((r) => {
         if (r.data) {
            product.value = {
               id: r.data.id,
               name: r.data.name,
            }
         } else {
            product.value = {
               id: null,
               name: '',
            }
         }
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получения результатов поиска проекта";
         alert(registerError);
      });
   //});
   //};


   //onMounted(connectGetAllAccounts)
   connectSearchProduct(query)
   //watch(user, getUserRepositories)

   return product
}