import { IGatsbyImageData } from "gatsby-plugin-image";

export type ProductType = {
  id: string;
  title: string;
  description?: string;
  productType?: string;
  tags?: string[];
  variants?: ProductVariantType[];
};

export type ProductVariantType = {
  id: string;
  title: string;
  price: string;
  sku: string;
  image?: {
    gatsbyImageData: IGatsbyImageData;
  };
};
