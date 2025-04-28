//-- itemsSlice

import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeArr: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      // action.payload = formattedValues
      if (
        action.payload.nameOfEnterprise !== "" &&
        action.payload.edrpoy !== ""
      ) {
        state.employeeArr.push({
          id: nanoid(),
          nameOfEnterprise: action.payload.nameOfEnterprise,
          edrpoy: action.payload.edrpoy,
          dateOfCompletion: action.payload.dateOfCompletion,
          personnelNumber: action.payload.personnelNumber,
          individualIdentificationNumber:
            action.payload.individualIdentificationNumber,
          sex: action.payload.sex,
          typeOfWork: action.payload.typeOfWork,
          photoOfWorker: action.payload.photoOfWorker,
          name: action.payload.name,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          dateOfBirth: action.payload.dateOfBirth,
          education: action.payload.education,
          citizenship: action.payload.citizenship,
          educationalInstitutions: action.payload.educationalInstitutions, // ✅ для таблицы учебные заведения
          profession: action.payload.profession, // ✅ для таблицы профессия специальность
          postgraduateProfessional: action.payload.postgraduateProfessional, // ✅ для таблицы післядипломна професійна підготовка: навчання
          graduateSchool: action.payload.graduateSchool, // ✅  аспірантурі
          adjunct: action.payload.adjunct, // ✅ ад'юнктурі
          doctoralStudies: action.payload.doctoralStudies, // ✅ для тдокторантурі
          //-
          lastPlaceOfWork: action.payload.lastPlaceOfWork, // останее місце роботи
          positionProfession: action.payload.positionProfession, // посада (професія)
          workExperience: action.payload.workExperience, // Стаж роботи  станом на
          genaralDay: action.payload.genaralDay, // загальний стаж днів
          genaralMounth: action.payload.genaralMounth, // загальний стаж місяців
          genaralYears: action.payload.genaralYears, // загальний стаж років
          serviceDays: action.payload.serviceDays, // вислуга днів
          monthsOfService: action.payload.monthsOfService, // вислуга місяців
          yearsOfService: action.payload.yearsOfService, // вислуга років
          releaseDate: action.payload.releaseDate, // Дата звільнення
          reasonForDismissal: action.payload.reasonForDismissal, // Причина звільнення
          informationAboutReceivingPension:
            action.payload.informationAboutReceivingPension, // Відомості про отримання пенсії
          maritalStatus: action.payload.maritalStatus, //  Родинний стан
          familyComposition: action.payload.familyComposition, // ✅ для таблиця для симейного стану
          actualPlaceOfResidence: action.payload.actualPlaceOfResidence, // Місце проживання: 👉
          placeOfResidenceRegistration:
            action.payload.placeOfResidenceRegistration, // Місце проживання за державною реєстрацією
          passportSeries: action.payload.passportSeries, // Паспорт: серія
          passportNumber: action.payload.passportNumber, // Паспорт: N :
          byWhomIssued: action.payload.byWhomIssued, // byWhomIssued
          dateOfIssue: action.payload.dateOfIssue, // дата видачі
          //ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
          accountingGroup: action.payload.accountingGroup, // Група обліку
          eligibilityMilitary: action.payload.eligibilityMilitary, // Придатність до військової служби
          categoriaGroup: action.payload.categoriaGroup, // Категорія обліку
          nameOfDistrictMilitary: action.payload.nameOfDistrictMilitary, // Назва райвійськкомату за місцем реєстрації
          composition: action.payload.composition, // Склад:
          nameDistrictActual: action.payload.nameDistrictActual, // Назва райвійськкомату за місцем фактичного проживання
          militaryRank: action.payload.militaryRank, // Військове звання
          stayingSpecialRegistration: action.payload.stayingSpecialRegistration, // Перебування на спеціальному обліку
          militaryAccountingSpecialty:
            action.payload.militaryAccountingSpecialty, // Військово-облікова спеціальність N

          // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
          onTheJob: action.payload.onTheJob, // ✅ для таблиця ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ
        });
        console.log("список работников:", state.employeeArr); // ✅ массив после добавления
      } else {
        console.log("все поля должны быть заполнены");
      }
    },
    removeEmployee: (state, action) => {
      state.employeeArr = state.employeeArr.filter(
        (el) => el.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      const {
        id,
        nameOfEnterprise,
        dateOfCompletion,
        edrpoy,
        personnelNumber,
        individualIdentificationNumber,
        sex,
        typeOfWork,
        photoOfWorker,
        name,
        firstName,
        lastName,
        dateOfBirth,
        education,
        citizenship,
        educationalInstitutions,
        profession,
        postgraduateProfessional,
        graduateSchool, // аспірантурі
        adjunct, // ад'юнктурі
        doctoralStudies, // докторантурі
        lastPlaceOfWork, // останее місце роботи
        positionProfession, // посада (професія)
        workExperience, // Стаж роботи  станом на
        genaralDay, // загальний стаж днів
        genaralMounth, // загальний стаж місяців
        genaralYears, // загальний стаж років
        serviceDays, // вислуга днів
        monthsOfService, // вислуга місяців
        yearsOfService, // вислуга років
        releaseDate, // Дата звільнення
        reasonForDismissa, // Причина звільнення
        informationAboutReceivingPension, // Відомості про отримання пенсії
        maritalStatus, // родинний стан
        familyComposition, // таблица для семейного стану
        actualPlaceOfResidence, // Місце проживання:
        placeOfResidenceRegistration, // Місце проживання за державною реєстрацією
        passportSeries, // Паспорт: серія
        passportNumber, // Паспорт: N :
        byWhomIssued, // byWhomIssued
        dateOfIssue, // дата видачі

        //ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        accountingGroup, // Група обліку
        eligibilityMilitary, // Придатність до військової служби
        categoriaGroup, // Категорія обліку
        nameOfDistrictMilitary, // Назва райвійськкомату за місцем реєстрації
        composition, // Склад:
        nameDistrictActual, // Назва райвійськкомату за місцем фактичного проживання
        militaryRank, // Військове звання
        stayingSpecialRegistration, // Перебування на спеціальному обліку
        militaryAccountingSpecialty, // Військово-облікова спеціальність N

        // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        onTheJob, // ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ
      } = action.payload;
      const itemToEdit = state.employeeArr.find((el) => el.id === id);
      if (itemToEdit) {
        itemToEdit.nameOfEnterprise = nameOfEnterprise;
        itemToEdit.edrpoy = edrpoy;
        itemToEdit.edrpoy = dateOfCompletion;
        itemToEdit.edrpoy = personnelNumber;
        itemToEdit.edrpoy = individualIdentificationNumber;
        itemToEdit.edrpoy = sex;
        itemToEdit.edrpoy = typeOfWork;
        itemToEdit.edrpoy = photoOfWorker;
        itemToEdit.edrpoy = name;
        itemToEdit.edrpoy = firstName;
        itemToEdit.edrpoy = lastName;
        itemToEdit.edrpoy = dateOfBirth;
        itemToEdit.edrpoy = education;
        itemToEdit.edrpoy = citizenship;
        itemToEdit.edrpoy = educationalInstitutions;
        itemToEdit.edrpoy = profession;
        itemToEdit.edrpoy = postgraduateProfessional;
        itemToEdit.edrpoy = graduateSchool;
        itemToEdit.edrpoy = adjunct;
        itemToEdit.edrpoy = doctoralStudies;
        itemToEdit.edrpoy = lastPlaceOfWork; // останее місце роботи
        itemToEdit.edrpoy = positionProfession; // посада (професія)
        itemToEdit.edrpoy = workExperience; // Стаж роботи  станом на
        itemToEdit.edrpoy = genaralDay; // загальний стаж днів
        itemToEdit.edrpoy = genaralMounth; // загальний стаж місяців
        itemToEdit.edrpoy = genaralYears; // загальний стаж років
        itemToEdit.edrpoy = serviceDays; // вислуга днів
        itemToEdit.edrpoy = monthsOfService; // вислуга місяців
        itemToEdit.edrpoy = yearsOfService; // вислуга років
        itemToEdit.edrpoy = releaseDate; // Дата звільнення
        itemToEdit.edrpoy = reasonForDismissa; // Причина звільнення
        itemToEdit.edrpoy = informationAboutReceivingPension; // Відомості про отримання пенсії
        itemToEdit.edrpoy = maritalStatus; // родинний стан
        itemToEdit.edrpoy = familyComposition; // таблица для родинний стан
        itemToEdit.edrpoy = actualPlaceOfResidence; // Місце проживання:
        itemToEdit.edrpoy = placeOfResidenceRegistration; // Місце проживання за державною реєстрацією
        itemToEdit.edrpoy = passportSeries; // Паспорт: серія
        itemToEdit.edrpoy = passportNumber; // Паспорт: N :
        itemToEdit.edrpoy = byWhomIssued; // byWhomIssued
        itemToEdit.edrpoy = dateOfIssue; // дата видачі

        // II ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        itemToEdit.edrpoy = accountingGroup; // Група обліку
        itemToEdit.edrpoy = eligibilityMilitary; // Придатність до військової служби
        itemToEdit.edrpoy = categoriaGroup; // Категорія обліку
        itemToEdit.edrpoy = nameOfDistrictMilitary; // Назва райвійськкомату за місцем реєстрації
        itemToEdit.edrpoy = composition; // Склад:
        itemToEdit.edrpoy = nameDistrictActual; // Назва райвійськкомату за місцем фактичного проживання
        itemToEdit.edrpoy = militaryRank; // Військове звання
        itemToEdit.edrpoy = stayingSpecialRegistration; // Перебування на спеціальному обліку
        itemToEdit.edrpoy = militaryAccountingSpecialty; // Військово-облікова спеціальність N

        // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        itemToEdit.edrpoy = onTheJob; // таблица ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ
      }
      console.log("Click on Edit btn");
    },
  },
});

export default employeeSlice.reducer;
export const { addEmployee, removeEmployee, editEmployee } =
  employeeSlice.actions;
