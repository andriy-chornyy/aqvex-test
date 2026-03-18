import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.scss";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};