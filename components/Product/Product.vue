<script setup>
    import TheSizeBlock from '~/components/Product/TheSizeBlock.vue';
    import TheVariants from '~/components/Product/TheVariants.vue';
    import TheImgs from '~/components/Product/TheImgs.vue';
    import TheMaterials from './TheMaterials.vue';
    import TheClaps from './TheClaps.vue';
    import ThePrice from './ThePrice.vue';
    import TheBtn from './TheBtn.vue';

    const props = defineProps({
        item: Array
    });

    const activeSize = ref(-1);
    const activeVariant = ref(-1);
    const productVariants = ref(props.item.variants);
    const productSizes = ref(props.item.sizes);
    provide("activeSize", activeSize);
    provide("activeVariant", activeVariant);
    provide("variants", productVariants);
    provide("sizes", productSizes);

    const activeProductPricesGLOBAL = inject("activeProductPricesGLOBAL");

    const product = ref(props.item);
    provide("product", product);

</script>

<template>
    <div itemscope itemtype="https://schema.org/Product" class="catalog-item">
        <TheImgs :imgs="item.imgs" />
        <div class="catalog-item__block-name">
            <h3 itemprop="name">{{ item.name }}</h3>
        </div>
        <TheSizeBlock/>
        <TheVariants/>
        <TheMaterials :material="item.material" />
        <TheClaps :claspType="item.claspType" />
        <ThePrice :price="activeProductPricesGLOBAL[product.id]" />
        <TheBtn />

        <meta itemprop="brand" content="Рубашки21">
        <meta itemprop="sku" :content="item.articul">
        <meta itemprop="availability" content="https://schema.org/InStock">
        <meta itemprop="image" content="">
    </div>
</template>

<style scoped>
    span {
        @apply select-text;
    }

    .catalog-item {
        @apply w-96 bg-white p-4 rounded-2xl shadow-primary transition-all duration-200 border-primary-darker border-2;

        &:hover {
            @apply shadow-primary-xl scale-105 border-primary-darker-xl;
        }

        .catalog-item__block-name {
            @apply mt-2 mb-2;

            h3 {
                @apply text-2xl text-black;
            }
        }
    }
</style>