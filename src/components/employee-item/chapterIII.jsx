//-- chapterIII
import { useSelector } from "react-redux";

export const ChapterIII = () => {
  const { employeeArr } = useSelector((state) => state.employee);
  //console.log("вывожу в Education", employeeArr);

  const lastEmployee = employeeArr[employeeArr.length - 1] || {}; // чтобы не было ошибки если массив пуст
  // console.log("учебное заведение- ", lastEmployee.educationalInstitutions);
  // console.log("профессия-", lastEmployee.profession);
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold">
          ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК
          ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        </p>
        <div className="text-sm grid grid-cols-[10%_1fr_10%_15%_15%_1fr] mb-0.5">
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Дата
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Назва структурного підрозділу
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Період навчання
            <div className="flex justify-between">
              <div className="pl-1.5">з</div>
              <div className="pr-1.5">по</div>
            </div>
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Вид навчання
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Форма навчання
          </div>
          <div className="font-bold text-center bg-white px-1 border-b border-r border-t border-gray-700">
            Назва документа, що посвідчує професійну освіту, ким виданий
          </div>
        </div>

        {/* тут мапить наверное */}
        {Array.isArray(lastEmployee.onTheJob) &&
          lastEmployee.onTheJob.map((job, index) => (
            <div
              key={index}
              className=" bg-gray-100 grid grid-cols-[10%_1fr_10%_15%_15%_1fr] gap-y-0.5 mb-0.5"
            >
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
                {job.dateOfstudy}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {job.nameStructuralUnit}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                <div className="flex justify-between flex-wrap">
                  <div>{job.trainingPeriodWith}</div>

                  <div>{job.trainingPeriod}</div>
                </div>
              </div>

              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {job.typeOfTraining}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {job.formOfStudy}
              </div>
              <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
                {job.documentCertifyingProfessional}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
