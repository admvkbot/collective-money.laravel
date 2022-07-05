export function convertMessageTableDate(dateRaw) {
   const date = new Date(dateRaw);
   const dateString = date.toLocaleDateString();
   const timeString = date.toLocaleTimeString();
   return { date: dateString, time: timeString }
}