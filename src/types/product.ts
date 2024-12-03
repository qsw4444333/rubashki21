export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export type ExistVariant = {
  idVariant: number;
  amount: number;
  price: number;
};

export type ProductSize = {
  id: number;
  size: number;
  seoSize: Size;
  totalAmount: number;
  existVariants: ExistVariant[];
};

export type Variant = {
  id: number;
  name: string;
  bgClr: string;
  textClr: string;
  articule: string;
  totalAmount: number;
  img: string;
};

export type Product = {
  id: number;
  name: string;
  sizes: ProductSize[];
  variants: Variant[];
  material: string;
  claspType: string;
  price: string | number;
  imgs: {
    img1: string;
    img2: string;
  };
  articul: string;
};
