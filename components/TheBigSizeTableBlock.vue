<script setup>

    const props = defineProps({
        sizeTable: String
    });

</script>

<template>
    <div class="w-full flex justify-end flex-wrap">
        <h2>Таблица размеров <span v-if="props.sizeTable == 'kids'" class="cursor-text">детских</span><span class="cursor-text" v-if="props.sizeTable == 'teenage'">подростковых</span> рубашек</h2>
        <NuxtImg preload v-if="props.sizeTable == 'kids'" src="kids_table.svg" />
        <NuxtImg preload v-if="props.sizeTable == 'teenage'" src="teenage_table.svg" />
    </div>
</template>

<style scoped>
    h2 {
        @apply text-28;

        span {
            @apply text-28 text-primary select-text;
        }
    }

    img {
        @apply w-[590px];
    }
</style>