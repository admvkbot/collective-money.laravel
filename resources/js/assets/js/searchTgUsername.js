import { ref } from 'vue'

export default function searchTgUsername(query, toOut) {
   const tgUser = ref([])

   const connectSearchTgUsername = (query, toOut) => axios
      .post("/api/search-tg-username", { query: query })
      .then((r) => {
         if (r.data && !toOut) {
            tgUser.value = {
               id: r.data.id,
               username: r.data.username,
            }
         } else if (toOut) {
            tgUser.value = {
               id: null,
               username: query,
            }
         } else {
            tgUser.value = {
               id: null,
               username: '',
            }
         }

      })
      .catch((err) => {
         console.log(err);
         const registerError = "Ошибка получения результатов поиска Tg пользователя";
         alert(registerError);
      });

   connectSearchTgUsername(query, toOut)

   return tgUser
}