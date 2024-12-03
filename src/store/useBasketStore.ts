import type { Product } from "~/types/product";

export type BasketItem = {
  product: Product;
  size: string | number | null;
  variant: string | number | null;
  count: number;
};

export const useBasketStore = () => {
  const basket = useState<BasketItem[]>("basket", () => []);

  const increaseItemBasket = (product_id: number) => {
    const itemIndex = basket.value.findIndex(
      (item) => item.product.id === product_id
    );

    if (itemIndex !== -1) {
      basket.value[itemIndex].count += 1;
    }
  };

  const decreaseItemBasket = (product_id: number) => {
    const itemIndex = basket.value.findIndex(
      (item) => item.product.id === product_id
    );

    if (itemIndex !== -1) {
      const item = basket.value[itemIndex];

      if (item.count > 1) {
        item.count -= 1;
      } else {
        basket.value.splice(itemIndex, 1);
      }
    }
  };

  const removeFromBasket = (product_id: number) => {
    basket.value = basket.value.filter(
      (item) => item.product.id !== product_id
    );
  };

  const addToBasket = (item: Omit<BasketItem, "count">) => {
    if (
      !!basket.value.find(
        (basket_item) => basket_item.product.id == item.product.id
      )
    ) {
      const itemIndex = basket.value.findIndex(
        (basket_item) => basket_item.product.id === item.product.id
      );
      const count = basket.value[itemIndex].count;

      basket.value[itemIndex] = {
        ...item,
        count: count,
      };
    } else {
      basket.value = [...basket.value, { ...item, count: 1 }];
    }
  };

  return {
    basket,
    addToBasket,
    removeFromBasket,
    increaseItemBasket,
    decreaseItemBasket,
  };
};
