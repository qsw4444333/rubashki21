<script setup>
    import Logo from '~/components/Logo.vue';
    import TheLine from '~/components/Icons/TheLine.vue';
    import IconViber from  '~/components/Icons/IconViber.vue';
    import IconWhatsApp from '~/components/Icons/IconWhatsApp.vue';
    import TheCategory from '~/components/TheCategory.vue';
    import TheImg from '~/components/Product/TheImg.vue';


    const SEO = inject("SEO");

    useSeoMeta({
        title: SEO.value.index.title,
        ogTitle: SEO.value.index.ogTitle,
        description: SEO.value.index.description,
        ogDescription: SEO.value.index.ogDescription,
        ogImage: SEO.value.index.ogImage,
    });

    const categories = [
        {
            name: 'Детские рубашки',
            link: '/detskie-rubashki',
            sizeTable: 'kids',
            img: 'detskie-rubashki-prev.webp',
        },
        {
            name: 'Подростковые рубашки',
            link: '/podrostkovye-rubashki',
            sizeTable: 'teenage',
            img: 'podrostkovie-rubashki.webp',
        }
    ];

    const links = {
        viber: '',
        whatsapp: '',
    };

    const activeTableSize = ref('kids');
    setTimeout(function(){
        activeTableSize.value = 'teenage';
        setTimeout(function(){
            activeTableSize.value = '';
        }, 200);
    }, 200);
    
    provide("activeTableSize", activeTableSize);

</script>

<template>
    <BlackBlock />
    <TheTableSize v-if="activeTableSize == 'kids'" tableSizeType="kids" />
    <TheTableSize v-if="activeTableSize == 'teenage'" tableSizeType="teenage" />
    <div class="content">
        <div class="content-inner">
            <div class="left-content">
                <header class="header">
                        <div class="header-inner">
                            <Logo width="230px" height="50px" bg_clr="#0F0F0F" text_clr="#FFF"/>
                            <div class="header-inner__item-socials">
                                <NuxtLink :to="viber_url" class="header-inner__item header-inner__item-social">
                                    <IconViber width="20px" height="20px" clr="#FFF" />
                                </NuxtLink>
                                <NuxtLink :to="whatsapp_url" class="header-inner__item header-inner__item-social">
                                    <IconWhatsApp width="20px" height="20px" clr="#FFF" />
                                </NuxtLink>
                            </div>
                        </div>
                </header>
                <div class="main-sergio-block">
                        <div class="main-sergio-block-inner">
                            <div class="main-sergio-block__img">
                                <TheImg class="main-sergio-block__img" img="sergei.webp"/>
                            </div>
                            <div class="main-sergio-block__name">
                                <h1>Сергеев Сергей Святославович</h1>
                            </div>
                        </div>
                        <div class="main-sergio-block__text">
                            <p>Я Сергеев Сергей Святославович. Индивидуальный предприниматель с 1999г.<br>Более 20 лет занимаюсь продажей мужских, подростковых и дестких рубашек. Предлагаю вашему выбору школьные рубашки разных размеров - от детских до взрослых. Все рубашки приталенные (полуприталенные) на хлопчато бумажной основе, есть и с добавлением лайкры (стрейтч).<br>Доставка в разные районы обсуждается индивидуально. Оплата (наличные или переводом) после примерки, при получении</p>
                        </div>
                </div>
            </div>
            <div class="right-content">
                    <div class="right-content-inner">
                        <h1>Рубашки</h1>
                        <div class="right-content-choicer">
                            <TheCategory v-for="(category, index) in categories" :name="category.name" :img="category.img" :link="category.link" :sizeTable="category.sizeTable" />
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        @apply w-full h-[100vh];

        .content-inner {
            @apply w-full max-h-full h-full flex items-start justify-center;

            .left-content {
                @apply h-full relative flex flex-col items-center justify-start;
                flex: 0 0 50%;

                .main-sergio-block {
                    @apply w-full flex justify-center flex-wrap;
                    
                    .main-sergio-block-inner {
                        @apply w-96 flex flex-col justify-center bg-primary p-4 rounded-2xl transition-shadow shadow-primary;

                        .main-sergio-block__img {
                            @apply flex justify-center w-[352px] h-[352px] overflow-hidden rounded-2xl;

                            img {
                                @apply rounded-2xl w-[352px] h-[352px] transition-transform duration-200;
                            }
                        }

                        .main-sergio-block__name {
                            @apply text-center pt-2;

                            h1 {
                                @apply text-2xl text-white;
                            }
                        }

                        &:hover {
                            @apply shadow-primary-xl;
                        }
                    }
                }

                .main-sergio-block__text {
                    @apply mt-4 text-center p-2 rounded-2xl pt-5 pb-5;

                    flex: 0 0 95%;

                    p {
                        @apply text-black tracking-widest;
                    }
                }
            }

            .right-content {
                @apply h-full bg-primary relative z-10;
                flex: 0 0 50%;

                .right-content-inner {
                    @apply max-w-full h-full p-10 pt-0 pb-32 ml-0 flex flex-col justify-center;


                    h1 {
                        @apply text-white text-6xl text-center;
                    }

                    .right-content-choicer {
                        @apply flex items-center justify-center gap-6 mt-4;
                    }
                }
            }
        }
    }

    .header {
        @apply relative mb-5 z-10;

        .header-inner { 
            @apply w-auto;
         }
    }
</style>