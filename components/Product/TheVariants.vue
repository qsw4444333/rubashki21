<script setup>
    import TheVariant from './TheVariant.vue';

    const variants = inject("variants");
    const openModal = inject("openModal");
    const activeVariant = inject("activeVariant");
    const activeSize = inject("activeSize");

    const activeProductGLOBAL = inject("activeProductGLOBAL");
    const activeVariantGLOBAL = inject("activeVariantGLOBAL");
    const activeVariantsGLOBAL = inject("activeVariantsGLOBAL");
    const currentProduct = inject("product");

    const openVariantsModal = (id) => {
        activeProductGLOBAL.value = currentProduct.value;

        activeVariantsGLOBAL.value = [];

        for (let variant of currentProduct.value.sizes.find(s => s.id == activeSize.value).existVariants) {
            activeVariantsGLOBAL.value.push(currentProduct.value.variants.find(v => v.id == variant.idVariant));
        }

        openModal('variant');
    };
</script>

<template>
    <div class="catalog-item__block-variants" v-if="activeSize > -1">
        <TheLabel>Выберите вариант</TheLabel>
        <div class="catalog-item__block-variants-inner">
            <TheVariant @click="openVariantsModal(variant.id)" :class="{'activeVariant': activeVariantGLOBAL[currentProduct.id] == variant.id}" v-for="(variant, index) in variants" :key="variant.id" :name="variant.name" :bgClr="variant.bgClr" :textClr="textClr" />
        </div>
    </div>
</template>

<style scoped>
    .catalog-item__block-variants {
        @apply w-full; 

        .catalog-item__block-variants-inner{
            @apply flex gap-2 justify-start items-center overflow-x-auto w-full pb-2 pt-2;

            .activeVariant {
                @apply shadow-primary-xl;
            }
        }
    }
</style>