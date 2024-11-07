<script setup>
    const isBlackBlock = inject('isBlackBlock');
    const closeModal = inject('closeModal');
</script>

<template>
    <div class="black-block" :class='{"black-block-opened": isBlackBlock}' @click="closeModal">
    </div>
</template>

<style scoped>
    .black-block {
        @apply fixed left-0 right-0 top-0 bottom-0 bg-black opacity-0 -z-10 transition-opacity duration-200;
    }

    .black-block-opened {
        @apply opacity-65 z-30;
    }
</style>