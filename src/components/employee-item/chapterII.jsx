//chapterII - ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК

import { useSelector } from "react-redux";

export const ChapterII = () => {
  //const { employeeArr } = useSelector((state) => state.employee); //👉 рендерю массив
  const { selectedEmployee } = useSelector((state) => state.employee); //👉 рендерю отдельный елемент

  //console.log("вывожу в хедере", employeeArr);
  //const employeeItem = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  const employeeItem = selectedEmployee || {}; // пустой объект, если нет выбранного
  return (
    <>
      <div className="px-2 text-sm pt-2 ">
        <h2 className="text-sm font-bold">
          ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        </h2>
        <div className="flex gap-3 justify-between">
          <div className="flex-1/2">
            <p className="flex text-nowrap items-end">
              Група обліку{" "}
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.accountingGroup}
              </span>{" "}
            </p>
            <p className="flex text-nowrap items-end">
              Категорія обліку
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.categoriaGroup}
              </span>{" "}
            </p>
            <p className="flex text-nowrap items-end">
              Склад
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.composition}
              </span>{" "}
            </p>
            <p className="flex text-nowrap items-end">
              Військове звання
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.militaryRank}
              </span>{" "}
            </p>
            <p className="flex text-nowrap items-end">
              Військово-облікова спеціальність N
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.militaryAccountingSpecialty}
              </span>{" "}
            </p>
          </div>
          <div className="flex-1/2">
            <p className="flex text-nowrap items-end">
              Придатність до військової служби
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.eligibilityMilitary}
              </span>{" "}
            </p>
            <div>
              <p className="flex text-nowrap items-end">
                Назва райвійськкомату за місцем реєстрації
              </p>
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.nameOfDistrictMilitary}
              </span>{" "}
            </div>
            <div>
              <p className="flex text-nowrap items-end">
                Назва райвійськкомату за місцем фактичного проживання
              </p>
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.nameDistrictActual}
              </span>{" "}
            </div>
            <p className="flex text-nowrap items-end">
              Перебування на спеціальному обліку
              <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end">
                {employeeItem.stayingSpecialRegistration}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
