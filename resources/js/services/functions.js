const strToUriExpr = /[\s]+/g

const getUriFromString = (str) => {
   return str.toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
}

export {
   getUriFromString,
}