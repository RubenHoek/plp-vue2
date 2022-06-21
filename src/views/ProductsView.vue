<template>
    <div>
        <p>Products page</p>
        <ProductsContainer :products="ProductData"/>
    </div>
</template>

<script>
import ProductsContainer from '../components/Products/ProductsContainer.vue'
import ProductData from '@/store/dataMocked/ProductData'

export default {
    name: 'ProductsView',
    components: {
        ProductsContainer
    },
    data() {
        return{
            ProductData
        }
    }
}
</script>