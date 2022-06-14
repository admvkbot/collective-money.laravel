//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getAllSocials() {
   const socials = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   //const connectGetAllsocials = () => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetAllsocials = () => axios
      .get("/api/get-socials", {})
      .then((r) => {
         //console.log(r.data)
         socials.value = r.data;
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения списка аккаунтов в соцсетях";
         alert(registerError);
      });
   //});


   //onMounted(connectGetAllsocials)
   connectGetAllsocials()
   //watch(user, getUserRepositories)

   return socials
}