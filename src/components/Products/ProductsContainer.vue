<template>
    <div>
        <p>Product Container</p>
        <ProductItem/>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
    name: 'ProductsContainer',
    components: {
        ProductItem
    }
}
</script>