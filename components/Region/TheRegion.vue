<script setup>

    const props = defineProps({
        name: String
    });

</script>

<template>
    <div class="region-block">
        <span>{{ props.name }}</span>
    </div>
</template>

<style scoped>

    .region-block {
        @apply p-4 rounded-2xl bg-primary-darker shadow-primary text-center transition-shadow duration-200 cursor-pointer;

        span {
            @apply text-white;
        }

        &:hover {
            @apply shadow-primary-xl;
        }
    }

</style>