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
    <div>
      <transition name="fade">
        <div
          v-if="showing"
          class="drawer-overlay"
          @click="showing = false"
        ></div>
      </transition>

      <transition name="slide">
        <div
          v-if="showing"
          class="fixed top-0 bottom-0 right-0 max-w-[500px] w-full h-full bg-white z-40 transition-transform rounded-l-2xl"
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
      </transition>
    </div>
  </teleport>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

.drawer-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
