<template>
    <div>
        <b-row>
            <b-col v-for="product in products" :key="product.id" lg="4" md="8" sm="12"
                class="d-flex justify-content-center">
                <ProductItem :product="product" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
    name: 'ProductsContainer',
    components: {
        ProductItem
    },
    props: {
        products: {
            type: Array,
        }
    }
}
</script>