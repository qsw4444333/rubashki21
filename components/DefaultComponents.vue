<script setup>
    import Header from "~/components/Header/Header.vue";
    import TheLine from "~/components/Icons/TheLine.vue";
    import TheTableSize from '~/components/Modal/TheTableSize.vue';
    import BlackBlock from './Modal/BlackBlock.vue';
    import TheVariant from './Modal/TheVariant.vue';


    const props = defineProps({
        tableSizeType: String,
    });

    const links = {
        whatsapp: '',
        viber: ''
    };

    const colors = {
        logo: {
            bg_clr: '#0F0F0F',
            text_clr: '#FFF',
            width: '240px',
            height: '50px',
        }
    };

</script>

<template>
    <Header
        :whatsapp_url="links.whatsapp"
        :viber_url="links.viber"
        width="230px"
        height="50px"
        :bg_clr="colors.logo.bg_clr"
        :text_clr="colors.logo.text_clr" />

    <TheLine />
    <BlackBlock />
    <TheTableSize :tableSizeType="props.tableSizeType" />
    <TheVariant />
</template>
