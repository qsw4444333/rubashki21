<script setup>

const props = defineProps({
    price: String
});

</script>

<template>
    <div class="catalog-item__block-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="RUB">
        <span itemprop="price" :content="props.price">{{ props.price }}</span>
    </div>
</template>

<style scoped>
    .catalog-item__block-price {
        @apply w-full text-right mb-2;

        span {
            @apply text-4xl text-primary-darker select-text;

            &::after {
                content: " руб.";
            }
        }
    }
</style>