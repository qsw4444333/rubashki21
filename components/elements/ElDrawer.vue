<script setup lang="ts">
const showing = defineModel<boolean>({
  default: false,
});

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>
<template>
  <slot
    name="activator"
    :props="{
      onClick: () => (showing = !showing),
      style: { cursor: 'pointer' },
    }"
  />
  <teleport v-if="isMounted" to="#drawer">
    <transition name="drawer">
      <div
        class="drawer-overlay"
        :style="{ display: showing ? 'block' : 'none' }"
      >
        <div
          :class="{ '!translate-x-0 z-40 ': showing }"
          class="fixed top-0 bottom-0 right-0 max-w-[500px] w-full h-full bg-white -z-30 transition-transform duration-300 translate-x-full rounded-l-2xl"
        >
          <div class="absolute -left-24 top-0 bottom-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-24 h-24 stroke-white transition-all cursor-pointer hover:stroke-primary hover:rotate-12"
              @click="showing = false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>
<style>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
