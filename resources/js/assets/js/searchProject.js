import { ref } from 'vue'

export default function searchProject(query) {
   const project = ref([])

   const connectSearchProject = (query) => axios
      .post("/api/search-project", { query: query })
      .then((r) => {
         if (r.data) {
            project.value = {
               id: r.data.id,
               name: r.data.name,
            }
         } else {
            project.value = {
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
   connectSearchProject(query)
   //watch(user, getUserRepositories)

   return project
}