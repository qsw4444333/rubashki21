import type { Product } from "~/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Детская руабшка белая",
    sizes: [
      {
        id: 8,
        size: 29,
        seoSize: "XS",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 300,
          },
          {
            idVariant: 4,
            amount: 2,
            price: 330,
          },
        ],
      },
      {
        id: 9,
        size: 30,
        seoSize: "S",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 400,
          },
          {
            idVariant: 4,
            amount: 2,
            price: 500,
          },
        ],
      },
      {
        id: 10,
        size: 31,
        seoSize: "M",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 600,
          },
          {
            idVariant: 4,
            amount: 2,
            price: 700,
          },
        ],
      },
      {
        id: 11,
        size: 32,
        seoSize: "L",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 800,
          },
          {
            idVariant: 4,
            amount: 2,
            price: 900,
          },
        ],
      },
      {
        id: 12,
        size: 33,
        seoSize: "XL",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 1000,
          },
        ],
      },
      {
        id: 13,
        size: 34,
        seoSize: "XXL",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 4,
            amount: 3,
            price: 1100,
          },
        ],
      },
      {
        id: 14,
        size: 35,
        seoSize: "XXXL",
        totalAmount: 0,
        existVariants: [
          {
            idVariant: 3,
            amount: 3,
            price: 1200,
          },
        ],
      },
    ],
    variants: [
      {
        id: 3,
        name: "Зеленый",
        bgClr: "green",
        textClr: "#FFF",
        articule: "",
        totalAmount: 30,
        img: "/products/1-1.webp",
      },
      {
        id: 4,
        name: "Красный",
        bgClr: "red",
        textClr: "#FFF",
        articule: "",
        totalAmount: 30,
        img: "/products/1-1.webp",
      },
    ],
    material: "Хлопок, эластен",
    claspType: "Кнопки, заклепки",
    price: "699",
    imgs: {
      img1: "/products/1-1.webp",
      img2: "/products/1-1.webp",
    },
    articul: "rewrwe",
  },
  {
    id: 2,
    name: "Детская руабшка белая",
    sizes: [
      {
        id: 1,
        size: 29,
        seoSize: "XS",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 1,
            amount: 3,
            price: 100,
          },
          {
            idVariant: 2,
            amount: 2,
            price: 200,
          },
        ],
      },
      {
        id: 2,
        size: 30,
        seoSize: "S",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 1,
            amount: 3,
            price: 300,
          },
          {
            idVariant: 2,
            amount: 2,
            price: 400,
          },
        ],
      },
      {
        id: 3,
        size: 31,
        seoSize: "M",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 2,
            amount: 3,
            price: 500,
          },
          {
            idVariant: 1,
            amount: 2,
            price: 600,
          },
        ],
      },
      {
        id: 4,
        size: 32,
        seoSize: "L",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 1,
            amount: 3,
            price: 700,
          },
          {
            idVariant: 2,
            amount: 2,
            price: 800,
          },
        ],
      },
      {
        id: 5,
        size: 33,
        seoSize: "XL",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 2,
            amount: 3,
            price: 900,
          },
        ],
      },
      {
        id: 6,
        size: 34,
        seoSize: "XXL",
        totalAmount: 3,
        existVariants: [
          {
            idVariant: 1,
            amount: 3,
            price: 1000,
          },
        ],
      },
      {
        id: 7,
        size: 35,
        seoSize: "XXXL",
        totalAmount: 0,
        existVariants: [
          {
            idVariant: 2,
            amount: 3,
            price: 1100,
          },
        ],
      },
    ],
    variants: [
      {
        id: 1,
        name: "Зеленый",
        bgClr: "green",
        textClr: "#FFF",
        articule: "",
        totalAmount: 30,
        img: "/products/1-1.webp",
      },
      {
        id: 2,
        name: "Красный",
        bgClr: "red",
        textClr: "#FFF",
        articule: "",
        totalAmount: 30,
        img: "/products/1-1.webp",
      },
    ],
    material: "Хлопок, эластен",
    claspType: "Кнопки, заклепки",
    price: "699",
    imgs: {
      img1: "/products/1-1.webp",
      img2: "/products/1-1.webp",
    },
    articul: "rewrwe",
  },
];

export default products;
