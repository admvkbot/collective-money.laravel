import Swal from "sweetalert2";
import { ref } from 'vue'

export default function confirmModal(id, title, text) {
   const confirm = ref()
   Swal.fire({
      title: title,
      text: text,
      /*icon: 'warning',*/
      showCancelButton: true,
      /*confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',*/
      confirmButtonText: 'Удалить',
      cancelButtonText: 'Отменить',
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
         confirmButton: 'btn bg-gradient-success ml-3',
         cancelButton: 'btn bg-gradient-danger'
      },
   }).then((result) => {
      if (result.isConfirmed) {
         confirm.value = id
      }
   }).catch(() => {
      confirm.value = 0
   })
   return confirm
}