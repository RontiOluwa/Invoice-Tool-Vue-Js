<template>
  <section class="overflow-auto">
    <h1 class="invoice-caption">Invoice details</h1>
    <invoice-details />
  </section>
</template>

<script>
import InvoiceDetails from "./InvoiceDetails.vue";

export default {
  name: "InvoiceBox",
  components: {
    InvoiceDetails,
  },
};
</script>

<style scoped>
section {
  width: 75vw;
  padding: 1rem;
}

h1.invoice-caption {
  font-weight: 400;
  font-size: 0.7rem;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
}
</style>
