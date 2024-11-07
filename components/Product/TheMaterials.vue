<script setup>

    const props = defineProps({
        material: String
    });

</script>

<template>
    <div class="catalog-item__block-materials">
        <div class="catalog-item__block-material-name">
            <span>Материал:</span>
        </div>
        <div class="catalog-item__block-material">
            <span itemprop="material" :content="props.material">{{ props.material }}</span>
        </div>
    </div>
</template>

<style scoped>
    .catalog-item__block-materials {
        @apply w-full flex items-center justify-start gap-2;

        .catalog-item__block-material-name {
            span {
                @apply text-primary-grey;
            }
        }

        .catalog-item__block-material span {
            @apply select-text
        }
    }
</style>