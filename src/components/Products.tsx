import { useEffect, useState } from "react";
import { fetchingService } from "../services/Fetching";
import { SortingService } from "../services/Sorting";
import { ProductType, FilterType } from "../types/Basic.types";
import Filter from "./Filter";
import NoProduct from "./NoProduct";
import Search from "./Search";

const API_URL = process.env.API_URL!;

const Products = () => {
  const [product, setProduct] = useState<ProductType>([]);
  const [filter, setFilter] = useState<FilterType | string>("");
  const [filteredProduct, setFilteredProduct] = useState<ProductType>([]);
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    fetchingService(API_URL, setProduct);
  }, []);

  useEffect(() => {
    const regex = new RegExp(`^${queryText}`, "gi");
    SortingService(filter, product, setFilteredProduct, regex);
  }, [filter, product, queryText]);

  return (
    <>
      <h1 className="mt-4 text-center text-7xl text-white font-bold tracking-wide">Welcome to Product List</h1>
      <div className="flex gap-4 mx-2 mt-8 mb-4">
        <Search queryText={setQueryText} />
        <Filter getFilter={setFilter} />
      </div>

      <div className="mt-4 mx-2">
        <ul className="grid grid-cols-myCol gap-1">
          {filteredProduct.map((v) => {
            return (
              <li key={v.id} className="bg-slate-300 px-4 rounded text-xl font-bold cursor-pointer hover:bg-slate-200">
                {v.productName}
                <div className="text-base font-normal flex gap-2 my-1">
                  <span className="bg-slate-200 px-2 rounded">Price: {v.price}</span>
                  <span className="bg-orange-300 px-2 rounded">Remaining: {v.unit}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>{filteredProduct.length == 0 && queryText != "" ? <NoProduct /> : null}</div>
    </>
  );
};

export default Products;
