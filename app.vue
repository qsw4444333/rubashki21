<script setup>
  const basket = ref({
      products: [],
      amount: 0,
      total: 0
  });

  const totalPrice = () => {
    let total = 0;

    for (let product of basket.value.products) {
      total += product.price * product.quantity;
    }
    
    basket.value.total = total;
  };

  const totalAmount = () => {
      let amount = 0;

      for (let product of basket.value.products) {
        amount += product.quantity;
      }

      basket.value.amount = amount;
  };

  const addProduct = (product) => {
    for (let p of basket.value.products) {
      if (p.id == product.id && p.size.id == product.size.id && p.variant.id == product.variant.id && p.price == product.price) {
        basket.value.products.find(prod => prod.id == p.id && prod.size.id == p.size.id && prod.variant.id == p.variant.id && prod.price == p.price).quantity += 1;
        totalPrice();
        totalAmount();
        return;
      }
    }

    product.quantity = 1;
    basket.value.products.push(product);
    totalPrice();
    totalAmount();
    console.log(basket.value);
  };

  const removeProducts = (product) => {
    basket.value.products = basket.value.products.filter((p) => {return !(p.id === product.id && p.size.id === product.size.id && p.variant.id === product.variant.id)});
    totalPrice();
    totalAmount();
  };

  const removeProduct = (pr) => {
      const product = basket.value.products.find(p => p.id == pr.id && p.size.id == pr.size.id && p.variant.id == pr.variant.id);
      console.log(pr);
      console.log("PRODUCT: ", product);
      product.quantity--;

      if (product.quantity == 0) {
        removeProducts(pr);
      }

      console.log("AFTER REMOVE: ", basket.value.products);

      totalPrice();
      totalAmount();
  };

  const clearBasket = () => {
      basket.value.products = [];
      basket.value.amount = 0;
      basket.value.total = 0;
  };

  const isBasket = ref(0);

  const SEO = ref({
    index: {
      title: 'Рубашки 21 | Главная',
      description: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogTitle: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      ogDescription: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogImage: ''
    },
    detskieRubashki: {
      title: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      description: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogTitle: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      ogDescription: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogImage: ''
    },    
    podrostkovieRubashki: {
      title: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      description: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogTitle: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      ogDescription: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogImage: ''
    },
    checkout: {
      title: 'Рубашки 21 | Оформление заказа',
      description: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogTitle: 'Рубашки 21 | Купите школьные и повседневные рубашки в Чебоксарах',
      ogDescription: 'Мы предоставляем на выбор большой каталог школьных и повседневых рубашек на любой вкус и цвет. Рубашки21 продоставляет вам лучшие цены, лучшее качество и большой выбор товаров. Мы находимся в Чебоксарах, доставляем по следующим районам:',
      ogImage: ''
    },
  });

  provide("SEO", SEO);
  provide("isBasket", isBasket);
  provide("basket", basket);
  provide("clearBasket", clearBasket);
  provide("removeProduct", removeProduct);
  provide("removeProducts", removeProducts);
  provide("addProduct", addProduct);
  provide("totalAmount", totalAmount);
  provide("totalPrice", totalPrice);

  const regions = ['Чебоксары', 'Новочебоксарск', 'Козловка', 'Урмары', 'Вурнары', 'Воротынец', 'Новые тарьялы'];
  provide("regions", regions);

  const isBlackBlock = ref(0);
  const modals = ref({"variant": 0, "tableSize": 0, "default": 0});
  const activeModal = ref("default");
  const animTimeout = 200;

  const openModal = (newModal) => {
    isBlackBlock.value = 1; 
    setTimeout(function(){
      activeModal.value = newModal;
      modals.value[activeModal.value] = 1;
    }, animTimeout);
  }

  const openBasket = () => {
    isBlackBlock.value = 1;
    setTimeout(function(){
      isBasket.value = 1;
    }, animTimeout);
  };

  const closeBasket = () => {
    isBasket.value = 0;
    setTimeout(function() {
      isBlackBlock.value = 0;
    }, animTimeout);
  };

  const closeModal = () => {
    modals.value[activeModal.value] = 0; 
    activeModal.value = "default";
    isBasket.value = 0;
    setTimeout(function(){
      isBlackBlock.value = 0;
    }, animTimeout);
  }

  provide("openBasket", openBasket);
  provide("closeBasket", closeBasket);
  provide("activeModal", activeModal);
  provide("modals", modals);
  provide("isBlackBlock", isBlackBlock);
  provide("openModal", openModal);
  provide("closeModal", closeModal);

  const phone = '79379573099';
  provide("phone", phone);

  const width = ref(0);

  onMounted(() => {
    width.value = window.innerWidth;
  });

  const IS_MOBILE = width.value < 1000;
  provide("IS_MOBILE", IS_MOBILE);

</script>

<template>
  <NuxtPage />
</template>

<style>
  *, *::after, *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a, p, span, li, th, td, input, label, h1, h2, h3, h4, h5, h6{
    font-family: 'RuslanDisplay', sans-serif;
    @apply text-black;
  }

  span, img{
    @apply select-none;
  }

  body {
    @apply relative;
  }

  body::before {
    background: url('./public/bg.svg') no-repeat center center;
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;
    background-size: cover;

    @apply fixed w-full h-full left-0 right-0;
  }

  #__nuxt {
    @apply relative;
  }
</style>