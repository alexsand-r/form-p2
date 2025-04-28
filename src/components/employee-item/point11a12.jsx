// 11-12
import { useSelector } from "react-redux";
export const Point11a12 = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в тайтле", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст

  // useEffect(() => {
  //   console.log("вывожу в стаж роботи: - ", lastEmployee);
  // }, [lastEmployee]);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className=" flex gap-2 items-end">
          11. Місце фактичного проживання (область, місто, район, вулиця, N
          будинку, квартири, номер контактного телефону, поштовий індекс)
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {lastEmployee.actualPlaceOfResidence}
        </span>
        <p className=" flex gap-2 items-end">
          12. Місце проживання за державною реєстрацією
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {lastEmployee.placeOfResidenceRegistration}
        </span>
        <p className=" flex gap-2 items-end">
          Паспорт: серія{" "}
          <span className="uppercase w-[70px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.passportSeries}
          </span>{" "}
          N{" "}
          <span className="w-[70px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.passportNumber}
          </span>
          ким виданий{" "}
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {lastEmployee.byWhomIssued}
        </span>{" "}
        <div className="w-30 flex items-end gap-x-3">
          <p className="text-nowrap">дата видачі</p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.dateOfIssue}
          </span>{" "}
        </div>
      </div>
    </>
  );
};
