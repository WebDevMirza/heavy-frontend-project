import { Dispatch, SetStateAction } from "react";

export type ProductType = {
  id: number;
  productName: string;
  price: number;
  unit: number;
}[];

export type SetFilterType = {
  getFilter: Dispatch<SetStateAction<string>>;
};

export type SearchPropsType = {
  queryText: Dispatch<SetStateAction<string>>;
};

export type FilterType = "productName" | "price" | "unit";
