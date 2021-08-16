<template>
  <div
    class="modal-backdrop fixed inset-0 bg-opacity-30 bg-black flex justify-center items-center"
  >
    <div class="modal bg-white rounded-lg overflow-x-auto w-3/5">
      <header
        class="modal-header border-b-2 border-gray-200"
      >
        <div class="flex p-4 justify-between items-center relative text-black">
          <slot name="header">
            <h5 class="font-semibold">Create Invoice</h5>
            <span class="order absolute text-sm left-40">ORDER NO:  1234</span>
          </slot>
          <button type="button" class="w-4" @click="close">
            <img src="@/assets/img/cancel.svg" alt="close modal" />
          </button>
        </div>
        <Header :type="type" @next="next" @previous="previous"/>
      </header>

      <section class="modal-body text-black px-2 py-1">
        <Body :type="type"/>
      </section>

      <footer 
        v-if="type == 'customer'"
        class="modal-footer justify-end p-4"
      >
        <button
          type="submit"
          class="text-white bg-blue-300 float-right m-4 rounded-md w-max py-1 px-2"
          @click="next"
        >
          <slot name="btn-content">Proceed</slot>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import Body from './Modal/Body.vue'
import Header from './Modal/Header.vue'

export default {
  name: "Modal",
  data() {
    return {
      type: 'customer'
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    next() {
      this.type = 'product'
      this.$store.commit('updateEmail', document.getElementById('email').value)
      this.$store.commit('updateName', document.getElementById('fullname').value)
      this.$store.commit('updatePhone', document.getElementById('phone').value)
      this.$store.commit('updateAddress', document.getElementById('address').value)
      this.$store.commit('updatePincode', document.getElementById('pincode').value)
    },
    previous() {
      this.type = 'customer'
    }
  },
  components: {
   Header, Body
  },
};
</script>

<style>
.order {
  color: #b0b4b8;
}

.bg {
  background: #f3f4f6;
}

.light-blue {
  color: #66a7ff;
}

.skip{
  height: 1rem;
  margin: 0.2rem;
  margin-left: 0.7rem;
}
</style>