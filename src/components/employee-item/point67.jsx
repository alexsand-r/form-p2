//--six-seven-eight-nine.jsx
import { useSelector } from "react-redux";

export const Point67 = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного

  return (
    <>
      <div className="px-2 text-sm pt-2">
        <p className="flex items-end">
          6. Останнє місце роботи
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.lastPlaceOfWork}
          </span>
          посада (професія)
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.positionProfession}
          </span>{" "}
        </p>
        <p className="flex items-end">
          7. Стаж роботи станом на
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.workExperience}
          </span>
          Загальний
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.genaralDay}
          </span>{" "}
          днів
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.genaralMounth}
          </span>{" "}
          місяців
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.genaralYears}
          </span>{" "}
          років,
        </p>
        <div className="flex justify-end pr-15">
          <p className="flex items-end">
            що дає право на надбавку за вислугу років
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {employeeItem.serviceDays}
            </span>{" "}
            днів
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {employeeItem.monthsOfService}
            </span>{" "}
            місяців
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {employeeItem.yearsOfService}
            </span>{" "}
            років.
          </p>
        </div>
      </div>
    </>
  );
};
