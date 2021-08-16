<template>
  <div>
    <navbar />
    <div class="flex content">
      <sidebar />
      <invoice-box />
    </div>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
import Navbar from "../components/Layout/Header.vue";
import Sidebar from "../components/Layout/Sidebar.vue";
import InvoiceBox from "../components/Layout/InvoiceBox.vue";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Navbar,
    Sidebar,
    InvoiceBox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  height: calc(100vh - 3.5rem);
}
</style>
