//--chapterV
import { useSelector } from "react-redux";

export const ChapterV = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в Education", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log("учебное заведение- ", lastEmployee.educationalInstitutions);
  // console.log("профессия-", lastEmployee.profession);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2 pb-5">
        <p className="text-sm font-bold">V. ВІДПУСТКИ</p>
        <div className="text-sm grid grid-cols-[25%_1fr_1fr_1fr_1fr] mb-0.5">
          {/* header */}
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Вид відпустки
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            За який період
          </div>

          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Дата початку відпустки
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Дата закінчення відпустки
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
          </div>
        </div>
        {/* line */}
        {Array.isArray(lastEmployee.vacations) &&
          lastEmployee.vacations.map((el, index) => (
            <div
              key={index}
              className=" bg-gray-100 grid grid-cols-[25%_1fr_1fr_1fr_1fr] gap-y-0.5 mb-0.5"
            >
              <div className="text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {el.typeOfVacation}
              </div>
              <div className="flex justify-between bg-white py-0.5 border-b border-r border-t border-gray-700">
                <div className="pl-1 text-center ">{el.forWhatPeriodStart}</div>
                <span>/</span>
                <div className="pr-1 text-center ">{el.forWhatPeriodEnd}</div>
              </div>

              <div className="text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.vacationStartDate}
              </div>
              <div className="text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.vacationEndDate}
              </div>
              <div className="text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {el.groundOrder}
              </div>
            </div>
          ))}
        {/* Додаткові відомості */}
      </div>
    </>
  );
};
