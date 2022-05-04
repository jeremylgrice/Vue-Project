<template>
  <div id="app">
    <h1> Product List </h1>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  li {
      list-style-type: none;
      margin-bottom: 30px;
  }
</style>
