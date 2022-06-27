import { test } from '../services/functions'

export default function (options = {}, callbacks = {}) {
   const strToUri = () => {
      return test
   }

   return {
      strToUri,
   }
}