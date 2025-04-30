import { useSelector } from "react-redux";

export const Point1234 = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)]  text-sm">
        <p className="flex items-end">
          1. Прізвище{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {employeeItem.name}
          </span>
          Ім'я{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {employeeItem.firstName}
          </span>{" "}
          По батькові{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {employeeItem.lastName}
          </span>
        </p>
        <p className="flex items-end">
          2. Дата народження{" "}
          <span className="w-[170px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {employeeItem.dateOfBirth}
          </span>{" "}
          3. Громадянство{" "}
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {employeeItem.citizenship}
          </span>
        </p>
        <p className="flex items-end">
          4. Освіта (базова загальна середня, повна загальна середня,
          професійно-технічна, неповна вища, базова вища, повна вища){" "}
        </p>
        <p className="w-full text-center bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
          {employeeItem.education}
        </p>
      </div>
    </>
  );
};
