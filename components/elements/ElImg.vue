<script setup lang="ts">
interface Props {
  img: string;
  width?: string | number;
  height?: string | number;
}

defineProps<Props>();

let isImageLoaded = ref(false);

const imageLoaded = () => {
  isImageLoaded.value = true;
};
</script>

<template>
  <div class="img">
    <nuxt-img
      :src="img"
      :width="width"
      :height="height"
      loading="lazy"
      @load="imageLoaded"
    />
    <div
      class="block__img-loading"
      :style="{ width: width, height: height }"
      v-if="!isImageLoaded"
    >
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.img {
  @apply relative overflow-hidden;

  img {
    @apply w-full rounded-2xl h-full;
    object-fit: scale-down;
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
