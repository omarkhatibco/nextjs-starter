import { createContext, useContext } from "react";
import { Product } from "types";
import { ExtraProps } from "../Item";

export const ItemContext = createContext<Partial<Product & ExtraProps>>({});

export const useItem = () => {
  return useContext(ItemContext);
};
