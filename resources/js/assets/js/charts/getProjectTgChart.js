//import { ref, onMounted, watch } from 'vue'
import { ref } from 'vue'

export default function getChartData(topPosition, type) {
   const chart = ref({})
   //  const getUserRepositories = async () => {
   //    repositories.value = await fetchUserRepositories(user.value)
   //  }


   const connectTgProjectChartData = (projectId) => axios
      .post("/api/get-project-tg-chart/" + topPosition, {
         type: type,         
      })
      .then((r) => {
         //console.log(r.data)
         chart.value = r.data;
         //accounts.value = [{id: 1, name: 'qqqt', email: 'dfdf@dfdd.gg'}, {id: 2, name: 'eee', email: 'eee@dfdd.gg'}];
      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получеения данных графика " + accountId;
         alert(registerError);
      });


   //onMounted(connectGetAllAccounts)
   //console.log(accountId)
   connectTgProjectChartData(topPosition, type)
   //watch(user, getUserRepositories)

   return chart
}