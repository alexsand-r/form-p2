// 11-12
import { useSelector } from "react-redux";
export const Point11a12 = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
  return (
    <>
      <div className="px-2 text-sm pt-2">
        <p className=" flex gap-2 items-end">
          11. Місце фактичного проживання (область, місто, район, вулиця, N
          будинку, квартири, номер контактного телефону, поштовий індекс)
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {employeeItem.actualPlaceOfResidence}
        </span>
        <p className=" flex gap-2 items-end">
          12. Місце проживання за державною реєстрацією
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {employeeItem.placeOfResidenceRegistration}
        </span>
        <p className=" flex gap-2 items-end">
          Паспорт: серія{" "}
          <span className="uppercase w-[70px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {employeeItem.passportSeries}
          </span>{" "}
          N{" "}
          <span className="w-[70px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {employeeItem.passportNumber}
          </span>
          ким виданий{" "}
        </p>
        <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
          {employeeItem.byWhomIssued}
        </span>{" "}
        <div className="w-30 flex items-end gap-x-3">
          <p className="text-nowrap">дата видачі</p>
          <span className="w-full bg-white block border-b border-b-gray-700 px-4  text-base font-semibold text-left self-end">
            {employeeItem.dateOfIssue}
          </span>{" "}
        </div>
      </div>
    </>
  );
};
