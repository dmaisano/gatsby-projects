import { graphql, PageProps } from "gatsby";
import React from "react";
import { ProductType } from "../types";
import ProductCard from "../components/ProductCard";

type IndexPageProps = {
  products: {
    nodes: ProductType[];
  };
};

// markup
const IndexPage = ({ data: { products } }: PageProps<IndexPageProps>) => {
  return (
    <main>
      <h1>store</h1>

      {products.nodes.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </main>
  );
};

export const query = graphql`
  query Products {
    products: allShopifyProduct {
      nodes {
        id
        title
        description
        productType
        tags
        variants {
          id
          title
          price
          sku
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;
