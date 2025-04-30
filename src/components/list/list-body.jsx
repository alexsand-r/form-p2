//-- list-body
import { useSelector } from "react-redux";
import { selectEmployeeForView } from "../../store/slices/employeeSlice";
import { useDispatch } from "react-redux";

export const ListBody = ({ setItemToEdit }) => {
  const { employeeArr } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between mb-5">
        <h2>ОСОБОВА КАРТКА ПРАЦІВНИКА</h2>
        <h2>Типова форма N П-2</h2>
      </div>

      {/* header table */}
      <div className="px-2 bg-gray-100 text-sm py-2 mb-4 shadow-md">
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
      {/* body table */}
      <div className="px-2 bg-gray-100 text-sm py-2 shadow-md flex flex-col gap-0.5 mb-4">
        {/* element  */}
        {employeeArr.map((el, index) => (
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
                переглянути
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
                редагувати
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="bg-blue-400 p-0.5 text-white fixed top-[3%] right-[10%] cursor-pointer hover:bg-blue-500 transition-bg duration-300"
      >
        додати працівника
      </button>
    </>
  );
};
