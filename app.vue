<script setup>
const basket = ref({
  products: [],
  amount: 0,
  total: 0,
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
    if (
      p.id == product.id &&
      p.size.id == product.size.id &&
      p.variant.id == product.variant.id &&
      p.price == product.price
    ) {
      basket.value.products.find(
        (prod) =>
          prod.id == p.id &&
          prod.size.id == p.size.id &&
          prod.variant.id == p.variant.id &&
          prod.price == p.price
      ).quantity += 1;
      totalPrice();
      totalAmount();
      return;
    }
  }

  product.quantity = 1;
  basket.value.products.push(product);
  totalPrice();
  totalAmount();
};

const removeProducts = (product) => {
  basket.value.products = basket.value.products.filter((p) => {
    return !(
      p.id === product.id &&
      p.size.id === product.size.id &&
      p.variant.id === product.variant.id
    );
  });
  totalPrice();
  totalAmount();
};

const removeProduct = (pr) => {
  const product = basket.value.products.find(
    (p) =>
      p.id == pr.id && p.size.id == pr.size.id && p.variant.id == pr.variant.id
  );
  product.quantity--;

  if (product.quantity == 0) {
    removeProducts(pr);
  }

  totalPrice();
  totalAmount();
};

const clearBasket = () => {
  basket.value.products = [];
  basket.value.amount = 0;
  basket.value.total = 0;
};

const isBasket = ref(0);

provide("isBasket", isBasket);
provide("basket", basket);
provide("clearBasket", clearBasket);
provide("removeProduct", removeProduct);
provide("removeProducts", removeProducts);
provide("addProduct", addProduct);
provide("totalAmount", totalAmount);
provide("totalPrice", totalPrice);

const isBlackBlock = ref(0);
const animTimeout = 200;

const openBasket = () => {
  isBlackBlock.value = 1;
  setTimeout(function () {
    isBasket.value = 1;
  }, animTimeout);
};

provide("openBasket", openBasket);
provide("isBlackBlock", isBlackBlock);

const width = ref(0);

onMounted(() => {
  width.value = window.innerWidth;
});

const IS_MOBILE = width.value < 1000;
provide("IS_MOBILE", IS_MOBILE);
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
    <div id="modal" />
    <div id="drawer" />
  </nuxt-layout>
</template>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a,
p,
span,
li,
th,
td,
input,
label,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "RuslanDisplay", sans-serif;
  @apply text-black;
}

span,
img {
  @apply select-none;
}

body {
  @apply relative;
}

body::before {
  background: url("./public/bg.svg") no-repeat center center;
  background-size: cover;
  content: " ";
  height: 100%;
  position: fixed;
  left: 0;
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
