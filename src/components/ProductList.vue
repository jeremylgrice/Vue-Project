<template>
    <div>
        <div v-if="loading">
            <img src="https://i.imgur.com/JfPpwOA.gif" >
            <br>
            <span> Loading... </span>
        </div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }}
                <button @click="addProductToCart(product)">Add to cart</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            loading: false
        }
    },
    computed: {
        products () {
            return this.$store.getters.availableProducts;
        }
    },
    methods: {
        addProductToCart (product) {
            this.$store.dispatch('addProductToCart', product);
        }
    },
    created () {
        this.loading = true;
        this.$store.dispatch('fetchProducts').then(() => {
            this.loading = false;
        })
    },
}
</script>

<style>
li {
  list-style-type: none;
}
</style>
