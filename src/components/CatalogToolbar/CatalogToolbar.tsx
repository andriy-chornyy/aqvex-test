import { useState } from 'react';
import './CatalogToolbar.scss';

interface CatalogToolbarProps {
  totalCount: number;
  onSortChange: (sortType: string) => void;
}

export const CatalogToolbar = ({ totalCount, onSortChange }: CatalogToolbarProps) => {
  const [isAsc, setIsAsc] = useState(false);

  const handleToggle = () => {
    const nextValue = !isAsc;
    setIsAsc(nextValue);
    onSortChange(nextValue ? 'popularity-asc' : 'popularity-desc');
  };

  return (
    <div className="catalog-toolbar">
      <div className="products-count">
        <span className="total-number">{totalCount}</span> товаров
      </div>

      <div className="sort-container" onClick={handleToggle} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <div className="sort-icon-main">
          <img src="icons/sort-up-down.svg" alt="sort" />
        </div>
        
        <div className="select-wrapper">
          <span className="sort-select">
            По популярности
          </span>
          
          <div className={`select-arrow ${isAsc ? 'asc' : 'desc'}`}>
            <img src="icons/arrow-down.svg" alt="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};