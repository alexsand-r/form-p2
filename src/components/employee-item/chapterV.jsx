//--chapterV

export const ChapterV = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm pt-2 pb-5">
        <p className="text-sm font-bold">V. ВІДПУСТКИ</p>
        <div className="text-sm grid grid-cols-[25%_1fr_1fr_1fr_1fr]">
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
          <div className="font-bold text-left bg-white px-1 border-b border-r border-t border-gray-700">
            Підстава, наказ N
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
        </div>
        <div>
          <p className=" flex gap-2 items-end">Додаткові відомості</p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end"></span>
        </div>
        <div className="flex gap-3">
          <p className=" flex gap-2 items-end text-nowrap">
            Дата і причина звільнення (підстава)
          </p>
          <span className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-left self-end"></span>
        </div>
      </div>
    </>
  );
};
