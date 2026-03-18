import { useState, useMemo } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const { visibleItems, totalPages } = useMemo(() => {
    const total = Math.ceil(items.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const sliced = items.slice(start, start + itemsPerPage);
    
    return {
      visibleItems: sliced,
      totalPages: total
    };
  }, [items, currentPage, itemsPerPage]);

  const resetPagination = () => setCurrentPage(1);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    visibleItems,
    resetPagination
  };
}