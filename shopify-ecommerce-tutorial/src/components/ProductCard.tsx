import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { ProductType } from "../types";

// TODO: add logic to diff between singular product, and product with variants

const ProductCard: React.FC<ProductType> = (product) => {
  const defaultVariant = product.variants[0];

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.productType}</p>
      <p>{product.description}</p>
      {product.tags && (
        <ul>
          {product.tags.map((tag) => (
            <li key={`tag-${tag}`}>{tag}</li>
          ))}
        </ul>
      )}
      <GatsbyImage
        image={{
          ...(defaultVariant.image.gatsbyImageData || ({} as any)),
          width: 250,
          height: 250,
        }}
        alt=""
      />

      {product.variants.length > 0 &&
        product.variants.map((variant) => <p>Option: {variant.title}</p>)}
    </div>
  );
};

export default ProductCard;
