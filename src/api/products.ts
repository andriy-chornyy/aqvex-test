import axios from 'axios';
import type { ProductsResponse } from '../types/product';

const API_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products';

export const fetchProducts = async () => {
  const response = await axios.get<ProductsResponse>(API_URL);

  return response.data.data.products;
};