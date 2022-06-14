//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getProjectData(projectId) {
   const project = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }
   //console.log(1);


   //const connectGetProject = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetProject = () => axios
      .get(`/api/get-project/${projectId}`, {})
      .then((r) => {
         project.value = r.data;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения данных проекта";
         alert(registerError);
      });
   //});


   //onMounted(connectGetAllAccounts)
   connectGetProject()
   //watch(user, getUserRepositories)

   return project
}