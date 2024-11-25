<script setup lang="ts">
interface Props {
  maxWidth?: string | number;
  width?: string | number;
  maxHeight?: string | number;
  height?: string | number;
  closeOnContentClick?: boolean;
  closable?: boolean;
  closeIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  closeOnContentClick: true,
  closeIcon: "close",
});

const showing = defineModel({
  type: Boolean,
  default: false,
});

const isMounted = ref(false);

const modalOverlay = ref<HTMLDivElement>();

const handleOnClickOverlay = () => {
  if (props.closeOnContentClick) {
    showing.value = false;
  }
};

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
  <teleport v-if="isMounted" to="#modal">
    <transition name="modal">
      <div
        v-if="showing"
        ref="modalOverlay"
        class="modal-overlay"
        :style="{ display: showing ? 'block' : 'none' }"
        @click="handleOnClickOverlay"
      >
        <div
          class="modal__content"
          :style="{
            maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth,
            width: typeof width === 'number' ? width + 'px' : width,
            maxHeight:
              typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight,
            height: typeof height === 'number' ? height + 'px' : height,
          }"
          @click.stop
        >
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal__content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.modal__controls {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
</style>
