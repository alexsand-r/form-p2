//-- chapterIV

export const ChapterIV = () => {
  return (
    <>
      <div className="px-2 bg-[var(--main-bg-color)] text-sm pt-2">
        <p className="text-sm font-bold">IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ</p>
        <div className="text-sm grid grid-cols-[10%_1fr_10%_10%_10%_17%_13%]">
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
          <div className="font-bold text-left bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
          </div>
          <div className="font-bold text-left bg-white px-1 border-b border-r border-t border-gray-700">
            Підпис працівника
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
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700"></div>
        </div>
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
