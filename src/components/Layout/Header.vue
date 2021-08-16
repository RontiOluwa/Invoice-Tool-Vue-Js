<template>
  <nav class="p-6 w-full flex text-white relative">
    <div class="logo">Dashboard</div>
    <button class="add-new btn" type="button" @click="showModal">+</button>

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:body>
        Modal Content
      </template>
    </Modal>
  </nav>
</template>

<script>
import Modal from "../Base/Modal.vue";

export default {
  name: "Navbar",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
nav {
  justify-content: space-between;
  background-color: #336399;
}

.add-new {
  position: absolute;
  right: 1rem;
  bottom: -2rem;
  width: 3rem;
  height: 3rem;
  background-color: #fb64a4;
  border-radius: 100%;
  display: grid;
  place-content: center;
  font-size: 2rem;
  font-weight: 300;
}
</style>
