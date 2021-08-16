<template>
  <div
    class="border-b-2 border-gray-700 py-4 px-6 cursor-pointer hover:bg-gray-900"
  >
    <div class="flex justify-between">
      <h2 class="text-xs mb-1">Inv. # - {{pincode}}</h2>
      <p class="text-xs light-grey">{{date}}</p>
    </div>
    <div class="flex justify-between">
      <div>
        <p class="text-xs">Items - {{item}}</p>
        <p class="text-xs light-blue">{{fullname}}</p>
      </div>
      <div class="grid items-end text-xs">${{total}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceTab",
  props: {
      pincode: { type: String, required: false, default: null },
      fullname: { type: String, required: false, default: null },
      total: { type: String, required: false, default: null },
      item: { type: String, required: false, default: null },
      date: { type: String, required: false, default: null },
  },
  mounted(){
    console.log(this.fullname)
  }
};
</script>

<style scoped>
div {
  color: white;
}
.light-grey{
  color: #57626e;
}
.light-blue{
  color: #486b98;
}
</style>
