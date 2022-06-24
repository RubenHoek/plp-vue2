<template>
  <div id="app">
    <NavbarVue />
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import NavbarVue from "./components/NavbarVue.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  components: {
    NavbarVue,
    ShoppingCart
  },
  mounted(){
    if (localStorage.productsInCart) {
      this.$store.dispatch('cartItemsFromLocalStorage', localStorage.productsInCart);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
