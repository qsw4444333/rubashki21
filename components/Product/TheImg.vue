<script setup>
const props = defineProps({
    img: String
});

let isImageLoaded = ref(0);

const imageLoaded = () => {
    isImageLoaded.value = 1;
}

</script>

<template>
    <div class="img">
        <NuxtImg loading="lazy" :src="img" @load="imageLoaded" />
        <div class="block__img-loading" v-if="!isImageLoaded">
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.img {
    @apply relative h-56 overflow-hidden;
    width: calc(50% - 10px);

    img {
        @apply w-full rounded-2xl h-full;
    }

    .block__img-loading {
        @apply absolute left-0 right-0 bottom-0 top-0 bg-primary rounded-2xl overflow-hidden border-2 border-white;
        
        div:first-child {
            @apply absolute top-0 left-0 bg-white opacity-20 blur-xl w-full h-full rotate-90 transition-all duration-200;
            animation: move 1.5s linear infinite;
        }
    }

    &:hover {
        .block__img-hover {
            @apply opacity-100;
        } 
    }
}

@keyframes move {
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(120%);
    }
}

</style>