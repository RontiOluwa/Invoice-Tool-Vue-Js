<template>
  <section class="h-full overflow-auto">
    <div class="px-2 py-4">
      <SearchInput />
    </div>
    <div class="px-6">Invoices - 54</div>
    <div class="py-4">
      <InvoiceTab
        v-for="item in invoice" 
        :key="item._id"
        :pincode="item.pincode"
        :fullname="item.fullname"
        :total="item.subtotal"
        :date="new Date(item.createdAt).toLocaleString()"
        :item="item.items.length"
        @click="getInvoice(item._id)"
      />
    </div>
  </section>
</template>

<script>
import SearchInput from "../Base/SearchInput.vue";
import InvoiceTab from "./Invoice.vue";
import axios from 'axios'
export default {
  name: "Sidebar",
  data() {
      return {
        invoice: [],
      };
  },
  components: {
    SearchInput,
    InvoiceTab,
  },
  methods:{
    async getInvoice(id){
      try {
          const response = await axios.get(process.env.VUE_APP_SECRET+'feed/invoice/'+id+'');
          this.$store.commit('updateIvoice', response.data.invoice)
      }
      catch(e) {
          console.log(1)
      }
    }
  },
  async created(){
    try {
        const response = await axios.get(process.env.VUE_APP_SECRET+'feed/invoices');
        this.invoice = response.data.invoice
        this.getInvoice(response.data.invoice[0]._id)
    }
    catch(e) {
        console.log(1)
    }
  }
};
</script>

<style scoped>
section {
  width: 25vw;
  background-color: #2f3740;
  color: white;
}

.search-box {
  padding: 1rem;
}
</style>
