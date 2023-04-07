import { ChangeEvent } from "react";
import { SearchPropsType } from "../types/Basic.types";

const Search = ({ queryText }: SearchPropsType) => {
  const query = (e: ChangeEvent<HTMLInputElement>) => {
    queryText(e.target.value);
  };

  return (
    <>
      <label className="text-slate-300" htmlFor="search">
        Search:{" "}
      </label>
      <input
        onChange={query}
        className="rounded px-4 w-[400px]"
        type="text"
        name="search"
        id="search"
        placeholder="Ex: Lemon"
      />
    </>
  );
};

export default Search;
