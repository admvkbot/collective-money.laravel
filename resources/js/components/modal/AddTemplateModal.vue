<template>
    <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="card card-plain">
              <div class="card-header pb-0 text-left">
                <component :is="title.variant" class="font-weight-bolder text-info text-gradient">{{ title.text }}</component>
                <p class="mb-0">{{ title.description }}</p>
              </div>
              <div class="card-body">
                <form role="form text-left">

                  <div v-for="field in fields" :key="field.id">
                     <label>{{ field.fieldName }}</label>
                     <div class="input-group mb-3">
                        <input :type="field.type" class="form-control" :placeholder="field.fieldPlaceholder" v-model="out[field.id].value">
                     </div>
                  </div>

                  <div class="text-center">
                    <button type="button" class="btn btn-round bg-gradient-info btn-lg w-100 mt-4 mb-0" @click.prevent="$emit('modalData', sendData())">{{ button.text }}</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AddTemplateModal",
  setup() {
     const r = [];
    fields.forEach((e)=>{r.push({value: ''})});
    //const r = [{value: ''}, {value: ''}, {value: ''}];
    console.log(r);
    return {
       out: r
    } 
  },
  props: {
    title: {
      type: Object,
      default: () => {},
      variant: {
        validator(value) {
          return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
        },
      },
      text: String,
      description: String,
    },
    fields: {
      type: Array,
      default: [
         {
            id: Number,
            fieldName: String,
            fieldPlaceholder: String,
            value: String,
            type: String
         }
      ],
    },
    button: {
      type: Object,
      default: () => {},
      text: String,
    },
  },
  emits: [
     'modalData',
  ],  
  methods: {
     sendData() {
        console.log(this.out);
        return "11111";
     }
  }
};
</script>
