//--six-seven-eight-nine.jsx
import { useSelector } from "react-redux";

export const Point67 = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в тайтле", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст

  // useEffect(() => {
  //   console.log("вывожу в стаж роботи: - ", lastEmployee);
  // }, [lastEmployee]);

  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="flex items-end">
          6. Останнє місце роботи
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.lastPlaceOfWork}
          </span>
          посада (професія)
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.positionProfession}
          </span>{" "}
        </p>
        <p className="flex items-end">
          7. Стаж роботи станом на
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.workExperience}
          </span>
          Загальний
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.genaralDay}
          </span>{" "}
          днів
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.genaralMounth}
          </span>{" "}
          місяців
          <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.genaralYears}
          </span>{" "}
          років,
        </p>
        <div className="flex justify-end pr-15">
          <p className="flex items-end">
            що дає право на надбавку за вислугу років
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {lastEmployee.serviceDays}
            </span>{" "}
            днів
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {lastEmployee.monthsOfService}
            </span>{" "}
            місяців
            <span className="w-[50px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
              {lastEmployee.yearsOfService}
            </span>{" "}
            років.
          </p>
        </div>
      </div>
    </>
  );
};
