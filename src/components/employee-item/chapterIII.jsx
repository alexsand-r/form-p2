//-- chapterIII

export const ChapterIII = () => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold">
          ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК
          ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        </p>
        <div className="text-sm grid grid-cols-[10%_1fr_10%_15%_15%_1fr]">
          {/* header */}
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-l border-gray-700">
            Дата
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Назва структурного підрозділу
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Період навчання
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Вид навчання
          </div>
          <div className="font-bold text-center bg-white p-0.5 border-b border-r border-t border-gray-700">
            Форма навчання
          </div>
          <div className="font-bold text-left bg-white px-1 border-b border-r border-t border-gray-700">
            Назва документа, що посвідчує професійну освіту, ким виданий
          </div>
          {/* line */}
          <div className="pl-2 bg-white py-0.5 border-b border-r border-l border-gray-700">
            01.03.2006
          </div>
          <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-gray-700"></div>
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700">
            2006-2009
          </div>
          <div className="pl-2 bg-white py-0.5 border-b border-r border-gray-700"></div>
          <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-gray-700"></div>
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700"></div>
        </div>
      </div>
    </>
  );
};
