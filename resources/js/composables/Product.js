//import { test } from '../services/functions'

//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'
import router from '../router';
import { useLoading } from "vue-loading-overlay";
import Chart from "@/composables/Chart";

const { getDayWTChartData, getDayRatingChartData } = Chart();

export default function (options = {}, callbacks = {}) {
   const getProductData = (productNameUri) => {
      const product = ref({})
      const $loading = useLoading();
      let loader;
      const submit = () => {
         loader = $loading.show({});
      };
      const connectGetProductData = (productNameUri) => {
         submit();
         axios
            .get("/api/product-data/" + productNameUri, {})
            .then((r) => {
               const productId = r.data.id;
               if (!productId) {
                  router.push({ name: "Products" })
               }
               product.value = r.data;
               product.value.chartTg = getDayWTChartData(productId)
               product.value.chartRating = getDayRatingChartData(productId)
            })
            .catch((err) => {
               console.log(err);
               const registerError = "Ошибка получения данных продукта " + productNameUri;
               alert(registerError);
               router.push({ name: "Products" })
            })
            .finally(() => {
               loader.hide();
            });
      }
      connectGetProductData(productNameUri)

      return product
   }

   return {
      getProductData,
   }
}