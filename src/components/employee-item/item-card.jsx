//- tem-card.jsx

import { EducationalInstitutions } from "./educational-institutions";
import { GeneralInformation } from "./general-information";
import { PostGraduate } from "./post-graduate-training";
import { Profession } from "./profession";
import { TitleCompany } from "./title-company";
import { Point67 } from "../../components/employee-item/point67";
import { Point89 } from "../../components/employee-item/point89";
import { Point10 } from "../../components/employee-item/point10";
import { Point11a12 } from "../../components/employee-item/point11a12";
import { ChapterII } from "../../components/employee-item/chapterII";
import { ChapterIII } from "../../components/employee-item/chapterIII";
import { ChapterIV } from "../../components/employee-item/chapterIV";
import { ChapterV } from "../../components/employee-item/chapterV";
import { End } from "./end";

export const ItemCard = () => {
  return (
    <>
      <div className="shadow-md">
        {/* шапка формы: название предприятия и код едрпоу */}
        <TitleCompany />

        {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
        <GeneralInformation />

        {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
        <EducationalInstitutions />

        {/* Спеціальність / професія -- profession */}
        <Profession />

        {/* post-graduate training (після дипломна підготовка) */}
        <PostGraduate />

        {/* 6. Останнє місце роботи 7. Стаж роботи */}
        <Point67 />

        {/* 8. Дата звільнення  9. Причини звільнення  */}
        <Point89 />

        {/* 10. Родинний стан */}
        <Point10 />

        {/* 11 - 12. паспортни данни */}
        <Point11a12 />

        {/* ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК */}
        <ChapterII />

        {/* ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
        <ChapterIII />

        {/* ІV. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
        <ChapterIV />

        {/* V. ВІДПУСТКИ */}
        <ChapterV />

        {/* Додаткові відомості */}
        <End />
      </div>
    </>
  );
};
