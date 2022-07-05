const strToUriExpr = /[\s]+/g

const getUriFromString = (str) => {
   return str.toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
}

const getRating = (metric) => {
   return (metric.num_id / metric.num_all + metric.num_wtb / metric.num_wts) * 100
}

export {
   getUriFromString,
   getRating,
}