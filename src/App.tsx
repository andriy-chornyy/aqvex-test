import { useEffect, useState, useMemo } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const { sortedProducts, setSortType } = useSortedProducts(filteredProducts);

  const { visibleItems, totalPages, currentPage, setCurrentPage } = 
    usePagination(sortedProducts, 12);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: Product[] = await fetchProducts();
        
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Ошибка формата данных товаров");
        }
      } catch {
        setError("Не удалось загрузить товары");
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
    return (
      <div className="loader-container">
        <span className="loader-text">Загрузка товаров...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="App">
      <Header />

      <main>
        <Search onSearch={ setSearchQuery}/>

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