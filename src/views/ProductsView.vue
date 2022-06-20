<template>
    <div>
        <p>Products page</p>
        <ProductsContainer/>
    </div>
</template>

<script>
import ProductsContainer from '../components/Products/ProductsContainer.vue'

export default {
    name: 'ProductsView',
    components: {
        ProductsContainer
    }
}
</script>