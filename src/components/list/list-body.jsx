//-- list-body

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEmployeeForView } from "../../store/slices/employeeSlice";
import { useDispatch } from "react-redux";
import { Search } from "../search";

export const ListBody = ({ setItemToEdit }) => {
  const { employeeArr } = useSelector((state) => state.employee);
  const searchText = useSelector((state) => state.search.text);
  const dispatch = useDispatch();
  const filteredEmployees = employeeArr.filter((el) => {
    const fullName = `${el.name} ${el.firstName} ${el.lastName}`.toLowerCase();
    const id = el.individualIdentificationNumber.toString();
    return fullName.includes(searchText) || id.includes(searchText);
  });

  return (
    <>
      <button
        type="button"
        className="bg-blue-400 py-0.5 px-1 rounded-md text-white fixed top-[3%] right-[10%] cursor-pointer hover:bg-blue-500 transition-bg duration-300 z-50"
      >
        <Link to="/form" className="block w-full h-full">
          додати працівника
        </Link>
      </button>
      {/* header */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2  w-full px-2 bg-white text-sm mb-4 z-30">
        <div className="flex items-center justify-between max-w-[824px] mx-auto pt-4 mb-4">
          <div className="bg-white">
            <h2>ОСОБОВА КАРТКА ПРАЦІВНИКА</h2>
            <h2>Типова форма N П-2</h2>
          </div>
          <div className="">
            <Search />
          </div>
        </div>

        {/* header table */}
        <div className="px-2 mx-auto max-w-[824px] bg-[var(--main-bg-color)] text-sm py-2 shadow-md">
          <div className="text-sm grid grid-cols-[6%_1fr_15%_15%_15%]">
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
              №
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              П.І.Б.
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              Іден код
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              переглянути
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              редагувати
            </div>
          </div>
        </div>
      </div>

      {/* body table */}
      <div className="px-2 bg-[var(--main-bg-color)] text-sm py-2 shadow-md flex flex-col gap-0.5 mb-4 mt-30 max-w-[824px] mx-auto">
        {/* element  */}
        {filteredEmployees.map((el, index) => (
          <div
            key={el.id}
            className="text-sm grid grid-cols-[6%_1fr_15%_15%_15%]"
          >
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
              <span>{index + 1}</span>
            </div>
            <div className="capitalize flex gap-3 pl-2 font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              <span>{el.name}</span>
              <span>{el.firstName}</span>
              <span>{el.lastName}</span>
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              {/* 2545125698 */}
              {el.individualIdentificationNumber}
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              <button
                onClick={() => dispatch(selectEmployeeForView(el))}
                type="button"
                className="cursor-pointer bg-green-500 px-1 text-white hover:bg-green-600 transition-bg duration-300"
              >
                <Link to="/itemCard" className="block w-full h-full">
                  переглянути
                </Link>
              </button>
            </div>
            <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
              <button
                onClick={() => {
                  const editedItem = { ...el }; // ✅ коротко, копируем весь объект
                  console.log("Передаём в editItem:", editedItem);
                  setItemToEdit(editedItem);
                }}
                type="button"
                className="cursor-pointer bg-amber-500 px-1 text-white hover:bg-amber-600 transition-bg duration-300"
              >
                <Link to="/form" className="block w-full h-full">
                  редагувати
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
