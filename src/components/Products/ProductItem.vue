<template>
    <b-card bg-variant="secondary" text-variant="white" :title="product.name"
        tag="article" style="max-width: 20rem;" class="mb-2">
        <b-card-img :src="product.img" alt="Image" top/>
        <b-card-text>
            {{ product.desc }}
        </b-card-text>

        <b-button @click="addToCart" variant="primary" pill class="m-3">Add to Cart</b-button>
        <b-button @click="RemoveFromCart" variant="danger" pill>Remove from Cart</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addProductToCart", {product: this.product});
        },
        RemoveFromCart(){
            this.$store.dispatch("removeProductFromCart", {product: this.product});
        }
    }
}
</script>