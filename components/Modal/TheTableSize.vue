<script setup>
    import Modal from '~/components/Modal/Modal.vue';


    const props = defineProps({
        tableSizeType: String
    });

    const modals = inject('modals');
    const activeModal = inject('activeModal');
    let name = "Таблица размеров подростковых рубашек";

    if (props.tableSizeType == 'kids') {
        name = "Таблица размеров детских рубашек"
    }
    else {
        name = "Таблица размеров подростковых рубашек";
    }

</script>

<template>
    <Modal activeKey="tableSize" :name="name">
        <NuxtImg preload v-if="props.tableSizeType == 'kids'" src="kids_table.svg" />
        <NuxtImg preload v-if="props.tableSizeType == 'teenage'" src="teenage_table.svg" />
    </Modal>
</template>

<style scoped>
    img {
        width: 100%;
        height: 90%;
        border-radius: 10px;
    }
</style>