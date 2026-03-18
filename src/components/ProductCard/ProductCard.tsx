import './ProductCard.scss';
import type { Product } from '../../types/product';
import statusOk from '/icons/status.svg';
import statusZero from '/icons/status-zero.svg';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const oldPrice = `${product.old_price}`;
  const newPrice = `${product.price} грн`;
  const infoText = `${product.name}`;
  const rating = `${product.rating}`;
  const isAvailable = product.in_stock;

  const hasMultipleVolumes = product.volumes && product.volumes.length > 1;

  return (
    <div className="product-card">
      <div className="img-container">
        <img 
          src="images/product-card-img.png" 
          alt={product.name} 
          className="product-card__image" 
        />
      </div>

      <div className="info-container">
        <div className="price-container">
          <div className="price old-price">
            {oldPrice}
          </div>

          <div className="price new-price">
            {newPrice}
          </div>

          <div className="badge">
            <div className="discount-badge">
              {product.discount_percent}%
            </div>
          </div>
        </div>

        <div className="info-rating-info">
          <p className="info-text">
            {infoText}
          </p>

          <div className="stars-rating-box">
            <div className="stars-box">
              {[...Array(5)].map((_, index) => (
                <img 
                  key={index} 
                  src="icons/star.svg" 
                  alt="star" 
                  className="star-icon" 
                />
              ))}
            </div>
            <p className="rating-text">
              {rating}
            </p>
          </div>
        </div>

        <div className="status-category-container">
          <div className="status-box">
            <img 
              className="status-icon"
              src={isAvailable ? "icons/status.svg" : "icons/status-zero.svg"} 
              alt={isAvailable ? "В наличии" : "Нет в наличии"} 
            />
            <p className="status-text"> 
              {isAvailable ? "В наличии" : "Нет в наличии"}
            </p>
          </div>

          <div className="category-icon">
            <img src="icons/category-icon.svg" alt="category" />
          </div>

          <div className="category-box">
            <p>{product.category}</p>
          </div>
        </div>

        <div className="product-actions">
          {hasMultipleVolumes && (
            <div className="select-wrapper">
              <select 
                className="action-select" 
                defaultValue={product.selected_volume_id}
                onChange={(e) => console.log("Выбран ID:", e.target.value)}
              >
                {product.volumes.map((volume) => (
                  <option key={volume.id} value={volume.id}>
                    {volume.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button className={`add-to-cart ${!hasMultipleVolumes ? 'add-to-cart--full' : ''}`}>
            <img src="icons/shopping-cart.svg" alt="" className="cart-icon-img" /> 
            <span className="add-to-cart-text">В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};