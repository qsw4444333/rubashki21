<script setup>
    const props = defineProps({
        name: String,
        img: String,
        link: String,
        sizeTable: String
    });

    const openModal = inject("openModal");
    const activeTableSize = inject("activeTableSize");

    const setModal = () => {
        activeTableSize.value = props.sizeTable;
        openModal('tableSize')
    };
</script>

<template>
    <div class="category-block__item">
        <div class="category-block__item-body">
            <div class="category-block__item-img">
                <NuxtImg :src="props.img" />
            </div>
            <div class="category-block__item-name">
                <span>{{ props.name }}</span>
            </div>
            <div class="category-block__item-sizeTable" @click="setModal">
                <div>
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4367 7.63188H7.67943M5.4367 9.42606H7.67943M5.4367 11.2202H7.67943M9.47361 11.6688H10.8192C11.1761 11.6688 11.5184 11.527 11.7708 11.2747C12.0231 11.0223 12.1649 10.68 12.1649 10.3232V4.1081C12.1649 3.4293 11.6595 2.85337 10.9831 2.79715C10.7594 2.7786 10.5355 2.76265 10.3115 2.74931M10.3115 2.74931C10.3512 2.87794 10.3707 3.0118 10.3707 3.14642C10.3707 3.26538 10.3234 3.37947 10.2393 3.46359C10.1552 3.54771 10.0411 3.59496 9.92216 3.59496H7.23088C6.98328 3.59496 6.78233 3.39402 6.78233 3.14642C6.78233 3.00827 6.80327 2.8749 6.84214 2.74931M10.3115 2.74931C10.1422 2.20029 9.6303 1.80078 9.02506 1.80078H8.12797C7.84045 1.80085 7.5605 1.89297 7.32912 2.06365C7.09774 2.23434 6.92708 2.47462 6.84214 2.74931M6.84214 2.74931C6.61727 2.76306 6.39359 2.77921 6.16992 2.79715C5.49351 2.85337 4.98815 3.4293 4.98815 4.1081V5.38915M4.98815 5.38915H2.96969C2.5983 5.38915 2.29688 5.69057 2.29688 6.06197V12.7902C2.29688 13.1616 2.5983 13.463 2.96969 13.463H8.80079C9.17219 13.463 9.47361 13.1616 9.47361 12.7902V6.06197C9.47361 5.69057 9.17219 5.38915 8.80079 5.38915H4.98815ZM4.09106 7.63188H4.09584V7.63666H4.09106V7.63188ZM4.09106 9.42606H4.09584V9.43085H4.09106V9.42606ZM4.09106 11.2202H4.09584V11.225H4.09106V11.2202Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span>Таблица размеров</span>
            </div>
        </div>
        <NuxtLink :to="props.link" class="category-block__item-btn">
            <span>Перейти</span>
            <div>
                <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 1L25 6M25 6L20 11M25 6H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>

    .category-block__item {
        @apply w-96 h-[70vh];

        .category-block__item-body {
            @apply relative w-full h-full;

            .category-block__item-img {
                @apply absolute left-0 right-0 top-0 bottom-0;

                img {
                    @apply w-full h-full object-cover rounded-2xl;
                }
            }

            .category-block__item-name {
                @apply absolute bottom-3 p-4 rounded-2xl bg-black-500 left-3 right-3 text-center;

                span {
                    @apply text-white text-18 cursor-default;
                }
            }

            .category-block__item-sizeTable {
                @apply absolute top-1 right-1 pl-2 pr-2 p-1 bg-black flex items-center gap-2 rounded-2xl cursor-pointer transition-all duration-200;

                span {
                    @apply text-white;
                    padding-top: 2px;

                    &:hover {
                        @apply text-white;
                    }
                }

                &:hover {
                    @apply shadow-primary-xl;
                }
            }
        }

        .category-block__item-btn {
            @apply flex items-center justify-around w-full p-4 rounded-2xl bg-primary-darker mt-2 text-center text-white transition-all shadow-primary;

            span {
                @apply text-white pt-1;
                flex: 0 0 90%;
            }

            &:hover {
                @apply bg-primary-darker-xl shadow-primary-xl;
            }
        }
    }

</style>