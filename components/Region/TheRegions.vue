<script setup>
    import TheRegion from './TheRegion.vue';

    const props = defineProps({
        regions: Array
    });


</script>

<template>
    <div class="regions-block">
        <h2>Регионы доставки</h2>
        <div class="regions-block-inner">
            <TheRegion v-for="(region, index) in props.regions" :name="region" :key="index" />
        </div>
    </div>
</template>

<style scoped>
    .regions-block {
        flex: 0 0 40%;

        h2 {
            @apply text-28;
        }

        .regions-block-inner {
            @apply flex items-center justify-start flex-wrap gap-3 mt-5;
        }
    }
</style>