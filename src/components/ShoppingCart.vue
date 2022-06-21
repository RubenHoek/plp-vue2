<template>
    <b-modal id="shopping-cart" ok-only modal-title="Shopping Cart">
        <p>Shopping cart</p>
        <ProductCartItem v-for="product in productsInCart" :key="product.id" :product="product"/>
    </b-modal>
</template>

<script>
import ProductCartItem from './Products/ProductCartItem.vue'
import { mapState } from 'vuex'

export default {
    name: 'ShoppingCart',
    components: {
        ProductCartItem,
    },
    computed: mapState({
        productsInCart: state => state.productsInCart,
    })
}
</script>