import { useEffect, useState } from "react";
import { fetchProducts } from "./api/products";
import type { Product } from "./types/product";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { Pagination } from "./components/Pagination";
import { CatalogToolbar } from "./components/CatalogToolbar";
import { Search } from "./components/Search";
import { usePagination } from "./hooks/usePagination";
import { useSortedProducts } from "./hooks/useSortedProducts";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sortedProducts, setSortType } = useSortedProducts(products);

  const { visibleItems, totalPages, currentPage, setCurrentPage } = 
    usePagination(sortedProducts, 12);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: Product[] = await fetchProducts();
        
        console.log("Данные в App:", data);

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Ожидался массив товаров, но пришло:", data);
        }

      } catch (error) {
        console.error("He удалось загрузить товары:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleSortChange = (type: string) => {
    setSortType(type);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="container">
      <Header />

      <main>
        <Search />

        <CatalogToolbar 
          totalCount={products.length} 
          onSortChange={handleSortChange} 
        />

        <ProductList products={visibleItems} />
        
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
      </main>

      <Footer />
    </div>
  );
};