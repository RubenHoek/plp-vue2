<template>
    <b-card no-body class="product-card shadow-sm mb-3">
        <b-row no-gutters>
            <b-col md="5" align-self="center">
                <b-card-img :src="product.img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="7">
                <b-card-body :title="product.name" :sub-title="product.category">
                    <b-card-text text-tag="div">
                        <div><b>Quantity:</b> {{ product.quantity }}</div>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
        }
    }
}
</script>