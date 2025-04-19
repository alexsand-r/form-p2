//-- header

export const Header = ({ data }) => {
  return (
    <>
      <div className="flex gap-4 justify-between items-end bg-gray-50 p-2">
        <div className="w-[50%] pb-1">
          <p className="text-center bg-white">прорпораопр</p>
          <span className="block w-full h-[1px] bg-gray-900"></span>
          <p className="text-[10px] text-center">
            Найменування підприємства (установи, організації)
          </p>
          <div className="flex items-end gap-2">
            <div>
              <p className="whitespace-nowrap text-sm">Код ЄДРПОУ</p>
            </div>
            <p className="text-center border-b border-gray-900 w-full bg-white">
              88898989
            </p>
          </div>
        </div>
        <div className="w-[43%] ">
          <h2 className="text-xs font-bold text-center">Типова форма N П-2</h2>
          <div className="flex flex-col leading-none">
            <p>ЗАТВЕРДЖЕНО</p>
            <p>наказом Держкомстату та Міністерства оборони</p>
            <p>України</p>
            <p>від 25 грудня 2009 р. N 495/656</p>
          </div>
        </div>
      </div>
    </>
  );
};

// <p className="text-center bg-white">{data.enterprise}</p>

{
  /* <p className="text-center border-b border-gray-900 w-full bg-white">
  {data.edrpoy}
</p>; */
}
