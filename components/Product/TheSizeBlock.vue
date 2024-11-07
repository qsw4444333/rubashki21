<script setup>
import TheLabel from './TheLabel.vue';

const activeSize = inject("activeSize");
const product = inject("product");
const sizes = inject("sizes");
const variants = inject("variants");
const activeVariantsGLOBAL = inject("activeVariantsGLOBAL");
const activeVariantGLOBAL = inject("activeVariantGLOBAL");
const activeSizesGLOBAL = inject("activeSizesGLOBAL");

const choiceActiveSize = (id) => {
    if (activeSize.value == id) {
        activeSize.value = -1;
        variants.value = product.value.variants;

        activeSizesGLOBAL.value[product.value.id] = -1;

        activeVariantsGLOBAL.value = [];
        activeVariantGLOBAL.value[product.value.id] = -1;
        return;
    }

    const size = sizes.value.find(s => s.id == id);
    let newVariants = [];

    if ("existVariants" in size) {
        for (let variant of size.existVariants) {
            newVariants.push(product.value.variants.find(v => v.id == variant.idVariant));
        }
    }

    activeVariantGLOBAL.value[product.value.id] = -1;
    activeSizesGLOBAL.value[product.value.id] = id;
    activeVariantsGLOBAL.value = newVariants;
    variants.value = newVariants;
    activeSize.value = id;
};

</script>

<template>
    <div class="catalog-item__block-sizes">
        <TheLabel>Выберите размер</TheLabel>
        <div class="catalog-item__block-sizes-inner">
            <div class="catalog-item__size" :class="{'catalog-item__size-active': activeSize === size.id}" @click="choiceActiveSize(size.id)" v-for="(size, index) in sizes" :key="size.id">
                <span itemprop="size" :content="size.seoSize">{{ size.size }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.catalog-item__block-sizes {
    @apply mb-2;

    .catalog-item__block-sizes-inner{
        @apply flex flex-wrap gap-2;

        .catalog-item__size {
            @apply p-2 pr-3 pl-3 bg-black rounded-2xl transition-all duration-200 cursor-pointer shadow-primary;

            span {
                @apply text-white select-none;
            }


            &:hover {
                @apply bg-primary-darker-xl shadow-primary-xl;
            }
        }

        .catalog-item__size-active {
            @apply bg-primary-darker shadow-primary-xl;

            &:hover {
                @apply bg-primary-darker;
            }
        }
    }
}
</style>