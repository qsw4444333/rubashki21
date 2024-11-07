<script setup>
    import Logo from "~/components/Logo.vue";
    import IconViber from "~/components/Icons/IconViber.vue";
    import IconWhatsApp from "~/components/Icons/IconWhatsApp.vue";

    const props = defineProps({
        whatsapp_url: String,
        viber_url: String,
        width: String,
        height: String,
        bg_clr: String,
        text_clr: String
    });

    const activeHeaderLink = inject("activeHeaderLink");
    const openModal = inject("openModal");

</script>

<template>
    <header>
        <div class="header-inner">
            <div class="header-inner-left">
                <div class="header-inner__item" @click="openModal('tableSize')">
                    <span>Таблица размеров</span>
                </div>
            </div>
            <div class="header-inner-right">
                <NuxtLink to="/" class="header-inner__item">
                    <Logo :width="width" :height="height" :bg_clr="bg_clr" :text_clr="text_clr" />
                </NuxtLink>
                <div class="header-inner__item-socials">
                    <NuxtLink :to="viber_url" class="header-inner__item header-inner__item-social">
                        <IconViber width="20px" height="20px" clr="#FFF" />
                    </NuxtLink>
                    <NuxtLink :to="whatsapp_url" class="header-inner__item header-inner__item-social">
                        <IconWhatsApp width="20px" height="20px" clr="#FFF" />
                    </NuxtLink>
                </div>
                <div class="header-inner__item"><NuxtLink :class="{'header-inner__item-active': activeHeaderLink == 'kids'}" to="/detskie-rubashki">Детские рубашки</NuxtLink></div>
                <div class="header-inner__item"><NuxtLink :class="{'header-inner__item-active': activeHeaderLink == 'teenage'}" to="/podrostkovye-rubashki">Подростковые рубашки</NuxtLink></div>
                <div class="header-inner__item"><NuxtLink :class="{'header-inner__item-active': activeHeaderLink == 'index'}" to="/">Главная</NuxtLink></div>
            </div>
        </div>
    </header>
</template>

<style>
    header {
        @apply absolute top-0 left-0 right-0 pt-1 z-30;

        .header-inner {
            @apply w-7xl m-auto flex items-center gap-6 justify-between;
            
            .header-inner-left, .header-inner-right{
                @apply flex items-center gap-4 h-full justify-between;
            }

            .header-inner-left {
                @apply justify-end flex-auto;
            }

            .header-inner__item-socials {
                @apply flex gap-1 items-center;

                .header-inner__item-social {
                    @apply rounded-full bg-primary-darker transition-colors duration-200 p-2 cursor-pointer shadow-primary;

                    svg {
                        @apply transition-colors duration-200;
                    }

                    &:hover {
                        @apply bg-primary-darker-xl;

                        svg {
                            @apply fill-default-darker;
                        }
                    }
                }
            }

            .header-inner__item a {
                @apply transition-colors duration-200 text-sm;
                
                &:hover {
                    @apply text-primary;
                }
            }

            a.header-inner__item-active{
                @apply text-primary-darker underline decoration-2;

                &:hover {
                    @apply text-primary-darker-xl;
                }
            }
        }
    }

    span{
        @apply cursor-pointer transition-colors text-sm;

        &:hover{
            @apply text-primary;
        }
    }

</style>