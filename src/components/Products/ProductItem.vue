<template>
    <b-card bg-variant="secondary" text-variant="white" :title="product.name"
        tag="article" style="max-width: 20rem;" class="mb-2">
        <b-card-img :src="product.img" alt="Image" top/>
        <b-card-text>
            {{ product.desc }}
        </b-card-text>

        <b-button @click="addProductToCart({product: product})" variant="primary" pill class="m-3">Add to Cart</b-button>
        <b-button @click="removeProductFromCart({product: product})" variant="danger" pill>Remove from Cart</b-button>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        ...mapActions(["addProductToCart", "removeProductFromCart"]),
    }
}
</script>