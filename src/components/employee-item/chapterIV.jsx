//-- chapterIV
import { useSelector } from "react-redux";

export const ChapterIV = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в Education", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log("учебное заведение- ", lastEmployee.educationalInstitutions);
  // console.log("профессия-", lastEmployee.profession);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold">IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ</p>
        <div className="text-sm grid grid-cols-[10%_1fr_10%_10%_10%_17%_13%] mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Дата
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Назва структурного підрозділу
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Професія, посада назва
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Професія, посада код за КП*
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Розряд (оклад)
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підпис працівника
          </div>
        </div>
        {/* line */}
        {Array.isArray(lastEmployee.assignmentAndTransfer) &&
          lastEmployee.assignmentAndTransfer.map((el, index) => (
            <div
              key={index}
              className=" bg-gray-100 grid grid-cols-[10%_1fr_10%_10%_10%_17%_13%] gap-y-0.5 mb-0.5"
            >
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {el.dateOfstudy}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.nameStructuralUnit}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.professionName}
              </div>

              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.codeForCP}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.salary}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.groundOrder}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.employeeSignatur}
              </div>
            </div>
          ))}
        <p className="text-[11px]">
          * Відповідно до Класифікатора професій ДК 003-2005, затвердженого
          наказом Держстандарту України від 26.12.2005 N 375, з урахуванням
          позначки кваліфікаційного рівня (6 знаків, наприклад, код професії
          "муляр" - 7122.2).
        </p>
      </div>
    </>
  );
};
