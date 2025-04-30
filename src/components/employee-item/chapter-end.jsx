//--chapter-end
import { useSelector } from "react-redux";

export const ChapterEnd = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в Education", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log("учебное заведение- ", lastEmployee.educationalInstitutions);
  // console.log("профессия-", lastEmployee.profession);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2 pb-5">
        {/* Додаткові відомості */}
        <div>
          <p className=" flex gap-2 items-end">Додаткові відомості</p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.additionalInformation}
          </span>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">
            Дата і причина звільнення (підстава)
          </p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.releaseDateDay}
          </span>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
            {lastEmployee.reasonForDismissalDay}
          </span>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">
            Працівник кадрової служби
          </p>
          <div className="flex items-center gap-x-3">
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-full">
              {lastEmployee.position}
            </span>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-full">
              {lastEmployee.lastNameMiddleName}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">Підпис працівника</p>
          <div className="flex items-center gap-x-3">
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-[300px]"></span>
            <span className="bg-white block border-b border-b-gray-700 pl-4 text-base text-center font-semibold self-end w-full">
              {lastEmployee.dataDocument}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
