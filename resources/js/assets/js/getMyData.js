
import { ref } from 'vue'

export default function getMyData() {
   const myData = ref([]);
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   const connectGetMyData = () => axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
         .get("/api/get-my", {})
         .then((r) => {
            //console.log(r.data)
            myData.value = r.data;
         })
         .catch((err) => {
            console.log(err);
            const registerError = "Ошибка получеения основных данных";
            console.log(registerError);
         });
   });


   //onMounted(connectGetAllsocials)
   connectGetMyData()
   //watch(user, getUserRepositories)

   return myData
}