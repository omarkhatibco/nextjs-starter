export interface Image {
  src: string;
  alt: string;
}

export interface Product {
  productDetailsLink: string;
  image: Image;
  name: string;
  shortName: string;
  productId: string;
  sku: string;
  manufacturer: string;
  currentPrice: number;
  currentPriceFormated: string;
  basePriceFormated?: any;
  baseAmountWithUnit?: any;
  insteadPriceLabel: string;
  currency: string;
  oldPriceFormated?: any;
  score: number;
  model: string;
  viewed: boolean;
  category: string;
}
