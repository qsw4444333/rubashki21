<script setup>
import Product from '~/components/Product/Product.vue';

const props = defineProps({
    products: Array
});
</script>

<template>
    <div class="catalog">
        <div class="catalog-inner">
            <Product v-for="(item, index) in props.products" :key="item.articul" :item="item"/>
        </div>
    </div>
</template>

<style scoped>
    .catalog {
        @apply w-full;

        .catalog-inner {
            @apply flex items-start flex-wrap justify-start gap-10;
        }
    }
</style>