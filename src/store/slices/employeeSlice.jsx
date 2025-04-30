//-- itemsSlice

import { createSlice, nanoid } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeArr: [],
    selectedEmployee: null, // <--- добавлено
  },
  reducers: {
    addEmployee: (state, action) => {
      // action.payload = formattedValues

      state.employeeArr.push({
        id: nanoid(),
        // nameOfEnterprise: action.payload.nameOfEnterprise,
        // edrpoy: action.payload.edrpoy,
        // dateOfCompletion: action.payload.dateOfCompletion,
        // personnelNumber: action.payload.personnelNumber,
        // individualIdentificationNumber:
        //   action.payload.individualIdentificationNumber,
        // sex: action.payload.sex,
        // typeOfWork: action.payload.typeOfWork,
        // photoOfWorker: action.payload.photoOfWorker,
        // name: action.payload.name,
        // firstName: action.payload.firstName,
        // lastName: action.payload.lastName,
        // dateOfBirth: action.payload.dateOfBirth,
        // education: action.payload.education,
        // citizenship: action.payload.citizenship,
        // educationalInstitutions: action.payload.educationalInstitutions, // ✅ для таблицы учебные заведения
        // profession: action.payload.profession, // ✅ для таблицы профессия специальность
        // postgraduateProfessional: action.payload.postgraduateProfessional, // ✅ для таблицы післядипломна професійна підготовка: навчання
        // graduateSchool: action.payload.graduateSchool, // ✅  аспірантурі
        // adjunct: action.payload.adjunct, // ✅ ад'юнктурі
        // doctoralStudies: action.payload.doctoralStudies, // ✅ для тдокторантурі
        // //-
        // lastPlaceOfWork: action.payload.lastPlaceOfWork, // останее місце роботи
        // positionProfession: action.payload.positionProfession, // посада (професія)
        // workExperience: action.payload.workExperience, // Стаж роботи  станом на
        // genaralDay: action.payload.genaralDay, // загальний стаж днів
        // genaralMounth: action.payload.genaralMounth, // загальний стаж місяців
        // genaralYears: action.payload.genaralYears, // загальний стаж років
        // serviceDays: action.payload.serviceDays, // вислуга днів
        // monthsOfService: action.payload.monthsOfService, // вислуга місяців
        // yearsOfService: action.payload.yearsOfService, // вислуга років
        // releaseDate: action.payload.releaseDate, // Дата звільнення
        // reasonForDismissal: action.payload.reasonForDismissal, // Причина звільнення
        // informationAboutReceivingPension:
        //   action.payload.informationAboutReceivingPension, // Відомості про отримання пенсії
        // maritalStatus: action.payload.maritalStatus, //  Родинний стан
        // familyComposition: action.payload.familyComposition, // ✅ для таблиця для симейного стану
        // actualPlaceOfResidence: action.payload.actualPlaceOfResidence, // Місце проживання: 👉
        // placeOfResidenceRegistration:
        //   action.payload.placeOfResidenceRegistration, // Місце проживання за державною реєстрацією
        // passportSeries: action.payload.passportSeries, // Паспорт: серія
        // passportNumber: action.payload.passportNumber, // Паспорт: N :
        // byWhomIssued: action.payload.byWhomIssued, // byWhomIssued
        // dateOfIssue: action.payload.dateOfIssue, // дата видачі
        // //ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        // accountingGroup: action.payload.accountingGroup, // Група обліку
        // eligibilityMilitary: action.payload.eligibilityMilitary, // Придатність до військової служби
        // categoriaGroup: action.payload.categoriaGroup, // Категорія обліку
        // nameOfDistrictMilitary: action.payload.nameOfDistrictMilitary, // Назва райвійськкомату за місцем реєстрації
        // composition: action.payload.composition, // Склад:
        // nameDistrictActual: action.payload.nameDistrictActual, // Назва райвійськкомату за місцем фактичного проживання
        // militaryRank: action.payload.militaryRank, // Військове звання
        // stayingSpecialRegistration: action.payload.stayingSpecialRegistration, // Перебування на спеціальному обліку
        // militaryAccountingSpecialty: action.payload.militaryAccountingSpecialty, // Військово-облікова спеціальність N

        // // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        // onTheJob: action.payload.onTheJob, // ✅ для таблиця ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ

        // // IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
        // assignmentAndTransfer: action.payload.assignmentAndTransfer, // ✅ для таблиця ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ

        // // V. ВІДПУСТКИ VACATIONS
        // vacations: action.payload.vacations, // ✅ для таблиця ВІДПУСТКИ

        // // Додаткові відомості
        // additionalInformation: action.payload.additionalInformation, // Додаткові відомості
        // releaseDateDay: action.payload.releaseDateDay, // Дата звільнення
        // reasonForDismissalDay: action.payload.reasonForDismissalDay, // причина звільнення
        // position: action.payload.position, // посада
        // lastNameMiddleName: action.payload.lastNameMiddleName, //  Прізвище, ім'я по батькові
        // dataDocument: action.payload.dataDocument, // дата документу
        ...action.payload, //! 🔁 сюда войдут ВСЕ поля, которые ты сейчас вручную перечислял 🧠 🧠 🧠
      });
      console.log("список работников:", state.employeeArr); // ✅ массив после добавления
    },
    selectEmployeeForView: (state, action) => {
      state.selectedEmployee = action.payload;
      console.log("рендер для предпросмотра", action.payload);
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

        // ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
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

        // IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
        assignmentAndTransfer, //  ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ

        // V. ВІДПУСТКИ VACATIONS
        vacations,

        // Додаткові відомості
        additionalInformation, // Додаткові відомості
        releaseDateDay, // Дата звільнення
        reasonForDismissalDay, // причина звільнення
        position, // посада
        lastNameMiddleName, //  Прізвище, ім'я по батькові
        dataDocument, // дата документу
      } = action.payload;
      const itemToEdit = state.employeeArr.find((el) => el.id === id);
      if (itemToEdit) {
        itemToEdit.nameOfEnterprise = nameOfEnterprise;
        itemToEdit.edrpoy = edrpoy;
        itemToEdit.dateOfCompletion = dateOfCompletion;
        itemToEdit.personnelNumber = personnelNumber;
        itemToEdit.individualIdentificationNumber =
          individualIdentificationNumber;
        itemToEdit.sex = sex;
        itemToEdit.typeOfWork = typeOfWork;
        itemToEdit.photoOfWorker = photoOfWorker;
        itemToEdit.name = name;
        itemToEdit.firstName = firstName;
        itemToEdit.lastName = lastName;
        itemToEdit.dateOfBirth = dateOfBirth;
        itemToEdit.education = education;
        itemToEdit.citizenship = citizenship;

        itemToEdit.educationalInstitutions = educationalInstitutions;
        itemToEdit.profession = profession;
        itemToEdit.postgraduateProfessional = postgraduateProfessional;
        itemToEdit.graduateSchool = graduateSchool;
        itemToEdit.adjunct = adjunct;
        itemToEdit.doctoralStudies = doctoralStudies;
        itemToEdit.lastPlaceOfWork = lastPlaceOfWork; // останее місце роботи
        itemToEdit.positionProfession = positionProfession; // посада (професія)
        itemToEdit.workExperience = workExperience; // Стаж роботи  станом на
        itemToEdit.genaralDay = genaralDay; // загальний стаж днів
        itemToEdit.genaralMounth = genaralMounth; // загальний стаж місяців
        itemToEdit.genaralYears = genaralYears; // загальний стаж років
        itemToEdit.serviceDays = serviceDays; // вислуга днів
        itemToEdit.monthsOfService = monthsOfService; // вислуга місяців
        itemToEdit.yearsOfService = yearsOfService; // вислуга років
        itemToEdit.releaseDate = releaseDate; // Дата звільнення
        itemToEdit.reasonForDismissa = reasonForDismissa; // Причина звільнення
        itemToEdit.informationAboutReceivingPension =
          informationAboutReceivingPension; // Відомості про отримання пенсії
        itemToEdit.maritalStatus = maritalStatus; // родинний стан
        itemToEdit.familyComposition = familyComposition; // таблица для родинний стан
        itemToEdit.actualPlaceOfResidence = actualPlaceOfResidence; // Місце проживання:
        itemToEdit.placeOfResidenceRegistration = placeOfResidenceRegistration; // Місце проживання за державною реєстрацією
        itemToEdit.passportSeries = passportSeries; // Паспорт: серія
        itemToEdit.passportNumber = passportNumber; // Паспорт: N :
        itemToEdit.byWhomIssued = byWhomIssued; // byWhomIssued
        itemToEdit.dateOfIssue = dateOfIssue; // дата видачі

        // II ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
        itemToEdit.accountingGroup = accountingGroup; // Група обліку
        itemToEdit.eligibilityMilitary = eligibilityMilitary; // Придатність до військової служби
        itemToEdit.categoriaGroup = categoriaGroup; // Категорія обліку
        itemToEdit.nameOfDistrictMilitary = nameOfDistrictMilitary; // Назва райвійськкомату за місцем реєстрації
        itemToEdit.composition = composition; // Склад:
        itemToEdit.nameDistrictActual = nameDistrictActual; // Назва райвійськкомату за місцем фактичного проживання
        itemToEdit.militaryRank = militaryRank; // Військове звання
        itemToEdit.stayingSpecialRegistration = stayingSpecialRegistration; // Перебування на спеціальному обліку
        itemToEdit.militaryAccountingSpecialty = militaryAccountingSpecialty; // Військово-облікова спеціальність N

        // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
        itemToEdit.onTheJob = onTheJob; // таблица ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ

        // IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
        itemToEdit.assignmentAndTransfer = assignmentAndTransfer; //  ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ

        // V. ВІДПУСТКИ VACATIONS
        itemToEdit.vacations = vacations; // . ВІДПУСТКИ VACATIONS--- посмотри как я начал испарвлять

        // Додаткові відомості
        itemToEdit.additionalInformation = additionalInformation; // Додаткові відомості
        itemToEdit.releaseDateDay = releaseDateDay; // Дата звільнення
        itemToEdit.reasonForDismissalDay = reasonForDismissalDay; // причина звільнення
        itemToEdit.position = position; // посада
        itemToEdit.lastNameMiddleName = lastNameMiddleName; //  Прізвище, ім'я по батькові
        itemToEdit.dataDocument = dataDocument; // дата документу
      }

      console.log("Click on Edit btn");
    },
  },
});

export default employeeSlice.reducer;
export const {
  addEmployee,
  removeEmployee,
  editEmployee,
  selectEmployeeForView,
} = employeeSlice.actions;
