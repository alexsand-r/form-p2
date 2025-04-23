//- tem-card.jsx

import { Header } from "../../components/employee-item/header";
import { Title } from "../../components/employee-item/title";
import { Point1234 } from "../../components/employee-item/point1234";
import { Education } from "../../components/employee-item/education";
import { Point5 } from "../../components/employee-item/point5";
// import { Point67 } from "../../components/employee-item/point67";
// import { Point89 } from "../../components/employee-item/point89";
// import { Point10 } from "../../components/employee-item/point10";
// import { Point11a12 } from "../../components/employee-item/point11a12";
// import { ChapterII } from "../../components/employee-item/chapterII";
// import { ChapterIII } from "../../components/employee-item/chapterIII";
// import { ChapterIV } from "../../components/employee-item/chapterIV";
// import { ChapterV } from "../../components/employee-item/chapterV";

export const ItemCard = () => {
  return (
    <>
      <div className="shadow-md bg-gray-100">
        <Header />
        <Title />
        <Point1234 />
        <Education />
        <Point5 />
        {/* <Point67 />
        <Point89 />
        <Point10 />
        <Point11a12 />
        <ChapterII />
        <ChapterIII />
        <ChapterIV />
        <ChapterV />  */}
      </div>
    </>
  );
};
