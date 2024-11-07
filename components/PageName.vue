<script setup>

    const props = defineProps({
        name: String
    });

</script>

<template>
    <div class="content-name">
        <div>
            <h1>{{ props.name }}</h1>
        </div>
    </div>
</template>

<style scoped>
    .content-name {
        @apply text-left mb-9;

        div {
            @apply rounded-2xl p-4 bg-black w-fit shadow-primary;

            h1 {
                @apply text-4xl text-white;
            }
        }
    }
</style>