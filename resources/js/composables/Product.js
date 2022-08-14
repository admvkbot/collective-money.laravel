//import { test } from '../services/functions'

//import { ref, onMounted, watch } from 'vue'
import { ref, onMounted, onUpdated } from 'vue'
import router from '../router';
import { useLoading } from "vue-loading-overlay";
import Chart from "@/composables/Chart";

const { getDayWTChartData, getDayRatingChartData, getDayCostChartData } = Chart();

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
               product.value.chartTgCost = getDayCostChartData(productId)
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


   const getProductActivityTypes = () => {
      const type = ref([])
      const connectGetProductTypesData = () => {
         axios
            .get("/api/product-activity-types", {})
            .then((r) => {
               type.value = r.data;
               //console.log('type1: ', type.value)
            })
            .catch((err) => {
               console.log(err);
               const registerError = "Ошибка получения типов активностей продукта";
               alert(registerError);
               //router.push({ name: "Products" })
            })
      }
      connectGetProductTypesData()
      //setTimeout(()=>{console.log('type2: ', type.value)}, 3000);
      return type
   }


   const getProductActivities = (productId, activeOnly, maxRows) => {
      const activity = ref({})
      const $loading = useLoading();
      let loader;
      const submit = () => {
         loader = $loading.show({});
      };
      const connectGetData = (productId, activeOnly, maxRows) => {
         submit();
         axios
            .post("/api/product-activities/" + productId, { is_active: activeOnly, max: maxRows })
            .then((r) => {
               activity.value = r.data;
            })
            .catch((err) => {
               console.log(err);
               const registerError = "Ошибка получения активностей продукта";
               alert(registerError);
            })
            .finally(() => {
               loader.hide();
            });
      }
      connectGetData(productId, activeOnly, maxRows)

      return activity
   }

   return {
      getProductData,
      getProductActivityTypes,
      getProductActivities,
   }
}