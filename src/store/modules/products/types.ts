export enum ProductTypes {
  LOAD_REQUEST = '@product/LOAD_REQUEST',
  LOAD_SUCCESS = '@product/LOAD_SUCCESS',
  LOAD_FAILURE = '@product/LOAD_FAILURE',
}

export interface Photo {
  url: string;
  main: boolean;
}

export interface Product {
  title: string;
  unit: string;
  value: number;
  description: string;
  review: number;
  nutrition: string;
  photos: Photo[];
}

export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}
