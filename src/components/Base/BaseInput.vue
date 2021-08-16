<template>
    <div 
        class="mb-4"  
    >
        <label class="block text-gray-700 text-sm font-bold mb-2">
           {{ label }}
        </label>
        <input 
            v-if="type == 'input'"
            :class="width" 
            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            :id="id"
            value=""
            :placeholder="placeholder"
        >
        <textarea
            v-else-if="type == 'textarea'"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            rows="7" 
            type="text"
            :id="id"
            placeholder="placeholder"
        ></textarea>
    </div>
</template>
<script>
export default {
    name:"BaseInput",
    props: {
        placeholder: { type: String, required: false, default: null },
        label: { type: String, required: false, default: null },
        width: { type: String, required: false, default: null },
        id: { type: String, required: false, default: null },
        type: { type: String, required: false, default: null }
    },
}
</script>