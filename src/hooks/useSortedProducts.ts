import { useState, useMemo } from 'react';
import type { Product } from '../types/product';

export const useSortedProducts = (products: Product[]) => {
  const [sortType, setSortType] = useState<string>('popularity-desc');

  const sortedProducts = useMemo(() => {
    const items = [...products];

    switch (sortType) {
      case 'popularity-desc':
        return items.sort((a, b) => b.rating - a.rating);
      
      case 'popularity-asc':
        return items.sort((a, b) => a.rating - b.rating);
      
      default:
        return items;
    }
  }, [products, sortType]);

  return { sortedProducts, setSortType };
};