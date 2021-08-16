<template>
    <div
        :class="{ 'hidden' : type === 'product'}"
    >
        <div class="flex">
            <div class="w-1/2 m-4">
                <BaseInput
                placeholder="Customer Name"
                label="Fullname *"
                width="w-full"
                id="fullname"
                type="input"
                />
            </div>
            <div class="w-1/2 m-4">
                <BaseInput
                placeholder="Phone Number"
                label="Phone Number *"
                width="w-full"
                id="phone"
                type="input"
                />
            </div>
        </div>
        <div class="flex">
            <div class="w-1/2 m-4">
                <BaseInput
                placeholder="Company Address"
                label="Address"
                width="w-full"
                id="address"
                type="textarea"
                />
            </div>
            <div class="w-1/2 m-4">
                <BaseInput
                    placeholder="Customer Email Address"
                    label="Email ID"
                    width="w-full"
                    id="email"
                    type="input"
                />
                <BaseInput
                    placeholder="Phone Number"
                    label="Pincode"
                    id="pincode"
                    width="w-full"
                    type="input"
                />
            </div>
        </div>
    </div>
    <table 
        :class="{ 'hidden' : type === 'customer'}"
        class="table-fixed w-full"
    >
        <thead>
        <tr>
            <th
            class="uppercase text-xs w-4/6 text-left pl-4 p-3"
            >
            Item
            </th>
            <th
            class="uppercase text-xs w-2/6 "
            >
            Quantity
            </th>
            <th
            class="uppercase text-xs w-1/12 text-left"
            >
            Price $
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.name">
            <td class="text-xs py-5 border-t-2 border-gray-100 pl-4">
            {{item.name}}
            </td>
            <td class="text-xs py-5 border-t-2 border-gray-100 text-center">{{item.Quantity}}</td>
            <td class="text-xs py-5 border-t-2 border-gray-100">{{item.price}}</td>
        </tr>
        <tr>
            <td class="pl-4 py-5">
            <input v-model="item_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Please enter Item Name">
            </td>
            <td class="pl-4 py-5">
            <input v-model="item_quantity" class="shadow appearance-none border rounded w-2/5 m-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="0.00">
            <input v-model="item_price" class="shadow appearance-none border rounded w-2/5 m-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="0.00">
            </td>
            <td>
            <div
                class="border-2 text-center border-blue-300 text-center rounded-md p-2 text-blue-300 w-10 cursor-pointer"
                @click="addProduct"
            >
                <img src="@/assets/img/enter-icon.png"/>
            </div>
            </td>
        </tr>
        <tr>
            <td class="pl-4 py-5 flex">
            <div>
                <input v-model="tax" @keyup="calculateTax()" class="shadow appearance-none border rounded w-24 m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Tax">
                %
            </div>
            <div>
                <input v-model="discount" @keyup="calculateDiscount()" class="shadow appearance-none border rounded w-24 m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Discount">
                %
            </div>
            </td>
            <td class="pl-4 py-5 text-right">
            Sub Total: 
            </td>
            <td class="pl-4 py-5">
            {{total}}
            </td>
        </tr>
        <tr>
            <td class="pl-4 py-5 flex">
            <div
              class="m-4"
            >
                <h5>Tax</h5>
                <span>${{calculated_tax}}</span>
            </div>
            <div
              class="m-4"
            >
                <h5>Discount</h5>
                <span>${{calculated_discout}}</span>
            </div>
            </td>
            <td class="pl-4 py-5">
                <h5>Grand Total</h5>
                <span>${{grandTotal}}</span>
            </td>
            <td class="pl-4 py-5">
                <button
                    v-show="notLoading"
                    @click="submit"
                    type="submit"
                    class="text-white bg-blue-300 float-right m-4 rounded-md w-max py-1 px-2"
                > 
                    <slot name="btn-content">Submit</slot>
                </button>
                <img
                    v-show="loading"
                    src="@/assets/img/Ellipsis.gif"
                />
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import BaseInput from '../BaseInput.vue'
import axios from 'axios'
export default {
    name:'ModalBody',
    data() {
        return {
            notLoading: true,
            loading: false,
            item_name: '',
            item_quantity: '',
            item_price: '',
            items: [],
            total: 0,
            calculated_discout: 0,
            calculated_tax: 0,
            discount: '',
            tax: '',
            grandTotal: 0,
        };
    },
    props: {
        type: { type: String, required: false, default: null },
    },
    components: {
        BaseInput
    },
    methods: {
        addProduct() {
            if(this.item_name == '' || this.item_quantity == '' || this.price == '') {
                console.log('')
            } else {
                const item = {
                    "name": this.item_name,
                    "Quantity": this.item_quantity,
                    "price": this.item_price,
                }
                this.items.push(item);
                this.calculateTotal(this.item_price)
                this.clearField();
            }
        },
        clearField() {
            this.item_name = ''
            this.item_quantity = ''
            this.item_price = ''
        },
        calculateTotal(price) {
            this.total = parseInt(this.total) + parseInt(price)
        },
        calculateTax() {
            if(this.total == 0 || this.total == '') {
                console.log('')
            } else {
                this.calculated_tax = (parseInt(this.tax) / 100) * parseInt(this.total).toFixed(2)
            }
        },
        calculateDiscount() {
            if(this.total == 0 || this.total == '') {
                console.log('')
            } else {
                this.calculated_discout = (parseInt(this.discount) / 100) * parseInt(this.total).toFixed(2)
                this.calculateGrandTotal()
            }
        },
        calculateGrandTotal(){
            this.grandTotal = (parseInt(this.total) + this.calculated_tax) - parseInt(this.calculated_discout);
        },
        async submit(){
            if(this.$store.state.fullname == '' || this.$store.state.phone == '' ||
            this.$store.state.address == '' || this.$store.state.email == '' || this.$store.state.pincode == ''
            ) {
                console.log('Fill up all field')
            }
            else {
                this.notLoading = false
                this.loading = true
                const Invoice = {
                    "fullname": this.$store.state.fullname,
                    "phone": this.$store.state.phone,
                    "address": this.$store.state.address,
                    "email": this.$store.state.email,
                    "pincode": this.$store.state.pincode,
                    "items":  this.items,
                    "tax": this.tax,
                    "discount": this.discount,
                    "subtotal": this.total,
                    "tax_amout": this.calculated_tax,
                    "discount_amount": this.calculated_discout,
                    "grand_total": this.grandTotal,
                }
                try {
                    const response = await axios.post("http://localhost:8080/feed/invoice", Invoice);
                    if(response.status === 201) {
                        location.reload()
                    }
                }
                catch(e) {
                    console.log('error')
                }
            }  
        }
    },
    mounted() {
        // this.$toast.success('Profile saved.')
    }
}
</script>