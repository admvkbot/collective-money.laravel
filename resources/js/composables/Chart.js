//import { ref, onMounted, watch } from 'vue'
import { ref } from 'vue'

export default function (options = {}, callbacks = {}) {
   const getDayWTChartData = (productId) => {
      const chart = ref({})
      //  const getUserRepositories = async () => {
      //    repositories.value = await fetchUserRepositories(user.value)
      //  }


      const connectTgProductChartData = (productId) => axios
         .get("/api/product-tg-day-wt-chart/" + productId, {})
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
      connectTgProductChartData(productId)
      //watch(user, getUserRepositories)

      return chart
   }

   const getDayCostChartData = (productId) => {
      const chart = ref({})
      //  const getUserRepositories = async () => {
      //    repositories.value = await fetchUserRepositories(user.value)
      //  }


      const connectTgProductCostChartData = (productId) => axios
         .get("/api/product-tg-day-cost-chart/" + productId, {})
         .then((r) => {
            chart.value = r.data;
         })
         .catch((err) => {
            console.log(err);
            const registerError = "Ошибка получеения данных графика " + accountId;
            alert(registerError);
         });


      //onMounted(connectGetAllAccounts)
      //console.log(accountId)
      connectTgProductCostChartData(productId)
      //watch(user, getUserRepositories)

      return chart
   }

   const getDayRatingChartData = (productId) => {
      const chart = ref({})

      const connectRatingProductChartData = (productId) => axios
         .get("/api/product-day-rating-chart/" + productId, {})
         .then((r) => {
            chart.value = r.data;
         })
         .catch((err) => {
            console.log(err);
            const registerError = "Ошибка получеения данных графика " + accountId;
            alert(registerError);
         });


      connectRatingProductChartData(productId)

      return chart

   }

   return {
      getDayWTChartData,
      getDayCostChartData,
      getDayRatingChartData,
   }
}