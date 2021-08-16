<template>
  <div 
    v-for="invoice in getInvoice" 
    :key="invoice._id"
    class="rounded p-4 custom-shadow w-full">
    <!-- Invoice Heading -->
    <div class="flex justify-between mb-6">
      <div>
        <h1 class="font-normal uppercase">Invoice</h1>
        <p class="font-light text-sm my-1"># INV{{invoice.pincode}}</p>
        <div class="font-light text-xs">{{new Date(invoice.createdAt).toLocaleString()}}</div>
      </div>
      <div class="customer-print">
        <div class="text-right">
          <p class="text-xs uppercase">Customer Details</p>
          <h2 class="uppercase font-normal my-1">{{invoice.fullname}}</h2>
          <p class="text-xs font-light">{{invoice.email}}</p>
        </div>
        <div class="ml-2 w-28">
          <div
            class="border-2 flex border-blue-300 text-center cursor-pointer rounded-md p-2 text-blue-300"
            onclick="window.print()"
          >
            <span>Print</span>
            <img src="@/assets/img/printer-blue.png"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Start invoice table -->
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th
            class="uppercase text-xs w-4/6 text-left py-3 border-t-2 border-b-2 border-gray-300 pl-4"
          >
            Item
          </th>
          <th
            class="uppercase text-xs w-2/6 py-3 border-t-2 border-b-2 border-gray-300"
          >
            Quantity
          </th>
          <th
            class="uppercase text-xs w-1/12 text-left py-3 border-t-2 border-b-2 border-gray-300"
          >
            Price $
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in invoice.items" :key="item.name">
          <td class="text-xs py-5 border-b-2 border-gray-100 pl-4">
            {{item.name}}
          </td>
          <td class="text-xs py-5 border-b-2 border-gray-100 text-center">{{item.Quantity}}</td>
          <td class="text-xs py-5 border-b-2 border-gray-100">{{item.price}}</td>
        </tr>
        <!-- Total -->
        <tr>
          <td></td>
          <td class="text-xs py-2 text-center">Sub Total</td>
          <td class="text-xs py-2">{{invoice.subtotal}}</td>
        </tr>
        <tr>
          <td></td>
          <td class="text-xs py-2 text-center">Tax ({{invoice.tax}})</td>
          <td class="text-xs py-2">{{invoice.tax_amout}}</td>
        </tr>
        <tr>
          <td></td>
          <td class="text-xs py-2 text-center">Discount ({{invoice.discount}})</td>
          <td class="text-xs py-2">-{{invoice.discount_amount}}</td>
        </tr>
        <tr>
          <td></td>
          <td class="text-xs py-2 text-center">Grand Total</td>
          <td class="text-xs py-2">{{invoice.grand_total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetails",
  computed:{
    getInvoice() {
      return [this.$store.state.invoice];
    }
  }
};
</script>

<style scoped>
.invoice-title {
  font-weight: 300;
}

img {
  margin-left: 1rem;
}

span {
  margin-inline-start: 1rem;
}

.custom-shadow {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}

.customer-print {
  display: flex;
}
</style>
