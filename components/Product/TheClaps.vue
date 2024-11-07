<script setup>

    const props = defineProps({
        claspType: String
    });

</script>

<template>
    <div class="catalog-item__block-claspTypes">
        <div class="catalog-item__block-claspType-name">
            <span>Вид застёжки:</span>
        </div>
        <div class="catalog-item__block-claspType">
            <span itemprop="claspType" :content="props.claspType">{{ props.claspType }}</span>
        </div>
    </div>
</template>

<style scoped>
    .catalog-item__block-claspTypes {
        @apply w-full flex items-center justify-start gap-2 mb-2;

        .catalog-item__block-claspType-name {
            span {
                @apply text-primary-grey;
            }
        }

        .catalog-item__block-claspType span{
            @apply select-text;
        }
    }
</style>