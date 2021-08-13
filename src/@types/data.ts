export type Photo = {
  url: string;
  main: boolean;
};

export type Product = {
  title: string;
  unit: string;
  value: number;
  description: string;
  review: string;
  nutrition: string;
  photos: Photo[];
};
