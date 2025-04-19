//- point10

export const Point10 = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm pt-2">
        <p className=" flex gap-2 items-end">
          10. Родинний стан
          <span className="w-[600px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold text-center self-end">
            одружений
          </span>
        </p>
        <div className="text-sm grid grid-cols-[30%_1fr_20%] pt-2">
          {/* header */}
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-l border-gray-700">
            Ступінь родинного зв'язку (склад сім'ї)
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            П. І. Б.
          </div>
          <div className="font-bold text-center bg-white py-0.5 border-b border-r border-t border-gray-700">
            Рік народження
          </div>
          {/* line */}
          <div className="pl-2 bg-white py-0.5 border-b border-r border-l border-gray-700">
            дружина
          </div>
          <div className="pl-2 text-center bg-white py-0.5 border-b border-r border-gray-700">
            Ковеленко Марина Петровна
          </div>
          <div className="text-center bg-white py-0.5 border-b border-r border-gray-700">
            1985
          </div>
        </div>
      </div>
    </>
  );
};
