import { useSelector } from "react-redux";

export const Point1234 = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  console.log("вывожу в хедере", employeeArr);
  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  return (
    <>
      <div className="px-2 bg-gray-100 text-sm">
        <p className="flex items-end">
          1. Прізвище{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {lastEmployee.name}
          </span>
          Ім'я{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {lastEmployee.firstName}
          </span>{" "}
          По батькові{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {lastEmployee.lastName}
          </span>
        </p>
        <p className="flex items-end">
          2. Дата народження{" "}
          <span className="w-[170px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            {lastEmployee.dateOfBirth}
          </span>{" "}
          3. Громадянство{" "}
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold uppercase">
            {lastEmployee.citizenship}
          </span>
        </p>
        <p className="flex items-end">
          4. Освіта (базова загальна середня, повна загальна середня,
          професійно-технічна, неповна вища, базова вища, повна вища){" "}
        </p>
        <p className="w-full text-center bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
          {lastEmployee.education}
        </p>
      </div>
    </>
  );
};
