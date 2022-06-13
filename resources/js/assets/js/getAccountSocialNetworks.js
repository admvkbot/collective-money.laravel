//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'

export default function getAccountSocialNetworks(account_Id) {
   const socialNetworks = ref([])
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   //const connectGetAccountSocialNetworks = (account_Id) => axios.get("/sanctum/csrf-cookie").then((response) => {
   const connectGetAccountSocialNetworks = (account_Id) => axios
      .get("/api/get-social-networks/" + account_Id, {})
      .then((r) => {
         //console.log(r.data)
         socialNetworks.value = r.data;
         //socialNetworks.value = [{id: 1, name: 'qqqt', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения списка поддерживаемых соцсетей";
         alert(registerError);
      });
   //});


   //onMounted(connectGetAccountSocialNetworks)
   connectGetAccountSocialNetworks(account_Id)
   //watch(user, getUserRepositories)

   return socialNetworks
}