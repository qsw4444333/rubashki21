<script setup>
    import TheImg from './TheImg.vue';

    const props = defineProps({
        imgs: Array
    });
</script>

<template>
    <div class="catalog-item__block-imgs">
        <TheImg :img="imgs.img1" />
        <TheImg :img="imgs.img2" />
    </div>
</template>

<style scoped>
    .catalog-item__block-imgs {
        @apply flex w-full flex-wrap gap-3;
    }
</style>