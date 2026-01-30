export enum Page {
  HOME = 'HOME',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  SHURE_BRAND = 'SHURE_BRAND',
  SUPPORT = 'SUPPORT',
  B2B = 'B2B',
  AUDIO_VIDEO = 'AUDIO_VIDEO',
  MOBILE_KIT = 'MOBILE_KIT'
}

export interface NavItem {
  label: string;
  page: Page;
  isPrimary?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isPromo?: boolean;
  rating?: number;
  reviews?: number;
}
