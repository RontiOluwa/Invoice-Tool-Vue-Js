import { createStore } from "vuex" 

const store =  createStore({
  state: {
    fullname: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    invoice: '',
  },
  mutations: {
    //syncrous
    updateEmail(state, data) {
        state.email = data
    },
    updateName(state, data) {
        state.fullname = data
    },
    updatePhone(state, data) {
        state.phone = data
    },
    updateAddress(state, data) {
        state.address = data
    },
    updatePincode(state, data) {
        state.pincode = data
    },
    updateIvoice(state, data) {
        state.invoice = data
    },
  },
});

export default store