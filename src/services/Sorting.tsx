// Sorting service

import React, { SetStateAction } from "react";
import { ProductType } from "../types/Basic.types";

const SortingService = (
  filter: string,
  product: ProductType,
  setFilteredProduct: React.Dispatch<SetStateAction<ProductType>>,
  regex: RegExp
) => {
  switch (filter) {
    case "productName":
      let sortbyProduct = [...product].sort((a, b) => {
        if (a.productName < b.productName) {
          return -1;
        }
        if (a.productName > b.productName) {
          return 1;
        } else {
          return 0;
        }
      });
      setFilteredProduct(query(sortbyProduct, regex));

      break;

    case "price":
      let sortbyPrice = [...product]
        .sort((a, b) => {
          if (a.productName < b.productName) {
            return -1;
          }
          if (a.productName > b.productName) {
            return 1;
          } else {
            return 0;
          }
        })
        .sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          } else {
            return 0;
          }
        });
      setFilteredProduct(query(sortbyPrice, regex));
      break;

    case "unit":
      let sortByUnit = [...product]
        .sort((a, b) => {
          if (a.productName < b.productName) {
            return -1;
          }
          if (a.productName > b.productName) {
            return 1;
          } else {
            return 0;
          }
        })
        .sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          } else {
            return 0;
          }
        })
        .sort((a, b) => {
          if (a.unit < b.unit) {
            return -1;
          }
          if (a.unit > b.unit) {
            return 1;
          } else {
            return 0;
          }
        });
      setFilteredProduct(query(sortByUnit, regex));
      break;

    default:
      setFilteredProduct(query(product, regex));
      break;
  }
};

const query = (sortbyWhat: ProductType, regex: RegExp) => {
  return [...sortbyWhat].filter((v) => {
    return v.productName.match(regex);
  });
};

export { SortingService };
