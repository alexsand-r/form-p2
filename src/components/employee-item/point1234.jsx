export const Point1234 = () => {
  return (
    <>
      <div className="px-2 bg-gray-50 text-sm">
        <p className="flex items-end">
          1. Прізвище{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            Коновалов
          </span>
          Ім'я{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            Олена
          </span>{" "}
          По батькові{" "}
          <span className="w-[200px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            Петровна
          </span>
        </p>
        <p className="flex items-end">
          2. Дата народження{" "}
          <span className="w-[170px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            20.05.1958
          </span>{" "}
          3. Громадянство{" "}
          <span className="w-[250px] bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
            Украинец
          </span>
        </p>
        <p className="flex items-end">
          4. Освіта (базова загальна середня, повна загальна середня,
          професійно-технічна, неповна вища, базова вища, повна вища){" "}
        </p>
        <p className="w-full bg-white block border-b border-b-gray-700 pl-4 text-base font-semibold">
          повна середня
        </p>
      </div>
    </>
  );
};
