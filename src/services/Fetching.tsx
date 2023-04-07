import React, { SetStateAction } from "react";
import { ProductType } from "../types/Basic.types";

//   fetch json from api
const fetchingService = async (url: string, setProduct: React.Dispatch<SetStateAction<ProductType>>) => {
  await fetch(url)
    .then((v) => {
      return v.json();
    })
    .then((data) => {
      setProduct(data);
    })
    .catch((err) => {
      console.log("Data fetch problem occurs");
    });
};

export { fetchingService };
