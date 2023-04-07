import { ChangeEvent } from "react";
import { SetFilterType } from "../types/Basic.types";

const Filter = ({ getFilter }: SetFilterType) => {
  const filterHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    getFilter(e.target.value);
  };

  return (
    <>
      <div>
        <label className="text-slate-300" htmlFor="filter">
          Sort by:{" "}
        </label>
        <select defaultValue="" onChange={filterHandle} className="rounded px-1" name="filter" id="filter">
          <option value="">-- Select One --</option>
          <option value="productName">Product Name</option>
          <option value="price">Price</option>
          <option value="unit">Unit</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
