<template>
  <form class="flex">
    <img src="@/assets/img/search-icon.png"/>
    <input type="search" name="search" id="search" placeholder="Search..." />
  </form>
</template>

<script>
export default {
  name: "searchInput",
};
</script>

<style scoped>
form {
  padding: 0.8rem;
  border-radius: 50px;
  border: none;
  outline: 0;
  width: 100%;
  background-color: #353e48;
  color: white;
}

input{
  width: 100%;
  margin-left: 1rem;
  background: inherit;
}

img {
  height: 1rem;
  margin: 0.3rem;
}

textarea:focus, input:focus{
    outline: none;
}

input::placeholder {
  color: #778495;
}
</style>
