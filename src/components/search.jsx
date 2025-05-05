//-- search.jsx
import search from "../../public/search.svg";
import { useDispatch } from "react-redux";
import { setSearchText } from "../store/slices/searchSlice";

export const Search = () => {
  const dispatch = useDispatch();

  const hendleSearchText = (e) => {
    const searchText = e.target.value.trim();
    dispatch(setSearchText(searchText));
    console.log("вывожу поиск ", searchText);
  };
  return (
    <>
      <div className="mx-auto w-[300px]">
        <div className="relative">
          <input
            onChange={hendleSearchText}
            className="shadow-md text-base bg-gray-50 border-2 border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 w-full px-2.5 py-0.5"
            name="search"
            type="text"
            id="search"
            placeholder="Введіть прізвище або іден код ..."
          />
          <img
            src={search}
            alt="icon-search"
            className="w-6 h-6 absolute top-1/2 right-2 transform -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
};
