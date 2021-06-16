import { Product } from "types";

export const fetcher = async () => {
  const response = await fetch(`backend/api/products`);

  const result: Product[] = await response.json();

  return result;
};
