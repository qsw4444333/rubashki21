<script setup>
    import Modal from '~/components/Modal/Modal.vue';

    const activeSize = inject("activeSize");
    const activeVariant = inject("activeVariantGLOBAL");
    const sizes = inject("activeSizesGLOBAL");
    const product = inject("activeProductGLOBAL");
    const variants = inject("activeVariantsGLOBAL");
    const activeProductPricesGLOBAL = inject("activeProductPricesGLOBAL");
    
    const setActiveVariant = (id) => {
        if (activeVariant.value[product.value.id] == id) {
            activeVariant.value[product.value.id] = -1;
            activeProductPricesGLOBAL.value[product.value.id] = product.value.price;
            return;
        }

        activeProductPricesGLOBAL.value[product.value.id] = product.value.sizes.find(s => s.id == sizes.value[product.value.id]).existVariants.find(v => v.idVariant == id).price;
        activeVariant.value[product.value.id] = id;
    };


</script>

<template>
    <Modal activeKey="variant" name="Выберите вариант товара">
        <div class="modal-variants">
            <div class="modal-variant__item" :class="{'modal-variant__item-active': activeVariant[product.id] == variant.id}" v-for="(variant, index) in variants" :key="variant.id" @click="setActiveVariant(variant.id)">
                <div class="modal-variant__item-active-icon" v-if="activeVariant[product.id] == variant.id">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.8125 7.97266L6.5625 11.7227L12.1875 3.28516" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="modal-variant__item-img">
                    <NuxtImg loading="lazy" :src="variant.img"/>
                </div>
                <div class="modal-variant__item-name">
                    <span>{{ variant.name }}</span>
                </div>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
    .modal-variants {
        @apply flex flex-wrap items-center justify-start gap-7 pt-6;

        .modal-variant__item {
            @apply relative cursor-pointer transition-all scale-100 border-white border-2 rounded-2xl;
            filter: none; 
            -webkit-filter: blur(0); 
            -moz-filter: blur(0); 
            -ms-filter: blur(0);
            filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');

            &:hover {
                @apply scale-110;
            }

            .modal-variant__item-img {
                @apply w-44 h-56;

                img {
                    @apply w-full h-full rounded-2xl;
                }
            }

            .modal-variant__item-name {
                @apply w-full text-center;
            }

            .modal-variant__item-active-icon {
                @apply hidden rounded-2xl bg-black absolute -top-3 -right-3 p-2;
            }
        }

        .modal-variant__item-active {
            @apply scale-110 rounded-2xl border-primary border-2;

            .modal-variant__item-active-icon {
                @apply block;
            }
        }
    }
</style>