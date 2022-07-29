const strToUriExpr = /[\s]+/g

const getUriFromString = (str) => {
   return str.toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
}

const getRating = (metric) => {
   return (metric.num_id / metric.num_all + metric.num_wtb / metric.num_wts) * 100
}

const dateToText = (dateStr) => {
   const date = new Date(dateStr);
   let day = date.getDate();
   day = day < 10 ? `0${day}` : day;
   let month = date.getMonth();
   month = month < 10 ? `0${month}` : month;
   const year = date.getFullYear();
   return `${day}.${month}.${year}`;
}

export {
   getUriFromString,
   getRating,
   dateToText,
}