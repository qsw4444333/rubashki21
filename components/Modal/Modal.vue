<script setup>
    const props = defineProps({activeKey: String, name: String});
    const modals = inject('modals');
    const activeModal = inject('activeModal');
    const closeModal = inject('closeModal');

    const isModalBlock = ref(0);

    watch(activeModal, function(newActiveModal){
        if (newActiveModal != "default" && modals.value[activeModal.value] && activeModal.value == props.activeKey) {
            isModalBlock.value = 1;
        }
        else {
            isModalBlock.value = 0;
        }
    });
</script>


<template>
    <div class="modal-block" :class="{ 'modal-block-active': isModalBlock}">
        <div class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="modal-inner">
            <h5>{{ props.name }}</h5>
            <slot></slot>
        </div>
    </div>
</template>

<style>
.modal-block {
    @apply fixed bg-white rounded-3xl opacity-0 w-[600px] p-6 pt-3 top-1/2 left-1/2 -translate-y-[20%] -translate-x-[20%] -z-10;
    transition: opacity .2s ease, transform .2s ease;

    .modal-close {
        @apply absolute top-2 right-2 cursor-pointer transition-transform;

        &:hover {
            @apply rotate-12;
        }
    }

    .modal-inner {
        @apply w-full h-full;
        
        h5 {
            @apply text-center mb-2 text-black select-none text-lg;
        }
    }
}

.modal-block-active {
    @apply opacity-100 -translate-y-[50%] -translate-x-[50%] z-50;
}
</style>