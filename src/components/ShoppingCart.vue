<template>
    <div>
        <h1>Shopping Cart</h1>
        <div>
            <ul v-if="total > 0">
                <li :key="product.id" v-for="product in products">
                    Product: {{product.title}}
                    <br>
                    Price: ${{product.price}}
                    <br>
                    Quantity: {{product.quantity}}
                </li>
            </ul>
            <span><b>Total</b>: ${{total}}</span>
            <br>
            <span v-if="total===0">Your shopping cart is empty</span>
            <br>
            <button :disabled="total===0">Checkout</button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            products () {
                return this.$store.getters.cartProducts
            },
            total () {
                return this.$store.getters.cartTotal
            }
        }
    }
</script>
