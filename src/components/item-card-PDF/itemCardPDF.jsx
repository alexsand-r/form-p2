// ItemCardPDF.jsx
import React from "react";
import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import TimesNewRoman from "../../fonts/Times-New-Roman.ttf"; // путь к файлу
import { TitleCompanyPDF } from "./item-card-PDF-el/title-company-PDF";
//import Roboto from "../../fonts/Roboto-Regular.ttf";
import { GeneralInformationPDF } from "./item-card-PDF-el/general-Information-PDF";
import { EducationalInstitutionsPDF } from "./item-card-PDF-el/educational-institutions-PDF";
import { ProfessionPDF } from "./item-card-PDF-el/profession-PDF";
import { PostGraduatePDF } from "./item-card-PDF-el/post-graduate-PDF";
import { Point67PDF } from "./item-card-PDF-el/point67-PDF";
import { Point89PDF } from "./item-card-PDF-el/point89-PDF";
import { Point10PDF } from "./item-card-PDF-el/point10-PDF";
import { Point11a12PDF } from "./item-card-PDF-el/point11a12-PDF";
import { ChapterIIPDF } from "./item-card-PDF-el/chapterII-PDF";
import { ChapterIIIPDF } from "./item-card-PDF-el/chapterIII-PDF";
import { ChapterIVPDF } from "./item-card-PDF-el/chapterIV-PDF";
import { ChapterVPDF } from "./item-card-PDF-el/chapterV-PDF";
import { EndPDF } from "./item-card-PDF-el/end-PDF";

// Регистрируем шрифт
Font.register({
  family: "TimesNewRoman",
  src: TimesNewRoman,
});

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 10,
    fontFamily: "TimesNewRoman",
  },
  section: {
    marginBottom: 10,
  },
});

export const ItemCardPDF = ({ data }) => {
  //console.log("PDF data:", data); // 👉 здесь лог будет в браузерной консоли

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* шапка формы: название предприятия и код едрпоу */}
        <View style={styles.section}>
          <TitleCompanyPDF data={data.titleCompany} />
        </View>
        {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
        <View style={styles.section}>
          <GeneralInformationPDF data={data.generalInformation} />
        </View>
        {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
        <View style={styles.section}>
          <EducationalInstitutionsPDF data={data.educationalInstitutions} />
        </View>
        {/* Спеціальність / професія -- profession */}
        <View style={styles.section}>
          <ProfessionPDF data={data.profession} />
        </View>
        {/* post-graduate training (після дипломна підготовка) */}
        <View style={styles.section}>
          <PostGraduatePDF data={data} />
        </View>
        {/* 6. Останнє місце роботи 7. Стаж роботи */}
        <View style={styles.section}>
          <Point67PDF data={data} />
        </View>
        {/* 8. Дата звільнення  9. Причини звільнення  */}
        <View style={styles.section}>
          <Point89PDF data={data} />
        </View>
        {/* 10. Родинний стан */}
        <View style={styles.section}>
          <Point10PDF data={data} />
        </View>
        {/* 11 - 12. паспортни данни */}
        <View style={styles.section}>
          <Point11a12PDF data={data} />
        </View>
        {/* ІІ. ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК */}
        <View style={styles.section}>
          <ChapterIIPDF data={data} />
        </View>
        {/* ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
        <View style={styles.section}>
          <ChapterIIIPDF data={data} />
        </View>
        {/* ІV. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ) */}
        <View style={styles.section}>
          <ChapterIVPDF data={data} />
        </View>
        {/* V. ВІДПУСТКИ */}
        <View style={styles.section}>
          <ChapterVPDF data={data} />
        </View>
        {/* Додаткові відомості */}
        <View style={styles.section}>
          <EndPDF data={data} />
        </View>
      </Page>
    </Document>
  );
};
