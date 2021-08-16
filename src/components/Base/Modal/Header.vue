<template>
    <div :class="{ 'hidden' : type === 'product'}" class="p-4 flex text-black">
        <span class="text-sm w-11/12">CUSTOMER DETAILS</span>
        <div
        @click="next"
        class="flex w-20 text-center rounded-md p-2 text-blue-300 bg cursor-pointer"
        >
            <span>SKIP</span>
            <img class="skip"  src="@/assets/img/skip-icon.png"/>
        </div>
    </div>
    <div :class="{ 'hidden' : type === 'customer'}" class="flex p-4 text-black justify-between mb-6">
        <div>
            <h1 class="font-normal uppercase">PRODUCT DETAILS</h1>
        </div>
        <div class="customer-print flex">
            <div class="text-right">
            <p class="text-xs uppercase">Customer Details</p>
            <h2 class="uppercase font-normal my-1">{{fullname}}</h2>
            <p class="text-xs font-light">{{email}}</p>
            </div>
            <div class="ml-2 w-16">
            <div
                class="flex text-center rounded-md p-2 cursor-pointer"
                @click="previous"
            >
                <img src="@/assets/img/edit.png"/>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"BaseInput",
    props: {
        type: { type: String, required: false, default: null },
    },
    computed: {
        fullname: function () {
            return this.$store.state.fullname
        },
        email: function () {
        return this.$store.state.email
        }
    },
    methods: {
        next() {
            this.$emit("next");
            this.$store.commit('updateEmail', document.getElementById('email').value)
            this.$store.commit('updateName', document.getElementById('fullname').value)
            this.$store.commit('updatePhone', document.getElementById('phone').value)
            this.$store.commit('updateAddress', document.getElementById('address').value)
            this.$store.commit('updatePincode', document.getElementById('pincode').value)
        },
        previous() {
            this.$emit("previous")
        }
    },
    mounted(){
        console.log(this.email);
    }
}
</script>