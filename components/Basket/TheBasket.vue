<script setup>

const basket = inject("basket");

onMounted(() => {

    if (localStorage.getItem("basket") === undefined) {
        const basketData = {
            products: basket.value.products,
            amount: basket.value.amount,
            total: basket.value.total
        };

        localStorage.setItem('basket', JSON.stringify(basketData)); 
    }

    else {
        let cookieBasket = JSON.parse(localStorage.getItem("basket"));
        basket.products = cookieBasket.products;
        basket.amount = cookieBasket.amount;
        basket.total = cookieBasket.total;
    }
});

</script>

<template>

</template>

<style scoped>

</style>