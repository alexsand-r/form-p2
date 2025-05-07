//-- itemsSlice

import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const loadEmployeesFromJSON = createAsyncThunk(
  "employee/loadEmployeesFromJSON",
  async () => {
    const response = await fetch("/data.json");
    const data = await response.json(); // массив сотрудников
    //console.log("читаю массив из джесона", data);

    // сортировка по алфавиту по свойству name
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

    return sortedData;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeArr: [],
    selectedEmployee: null, // <--- добавлено
  },
  //
  reducers: {
    // тут оптимизированный редюсерс addEmployee через ... (полная версия в файле 123.jsx)
    addEmployee: (state, action) => {
      // action.payload = formattedValues

      state.employeeArr.push({
        id: nanoid(),

        ...action.payload, //! 🔁 сюда войдут ВСЕ поля, которые ты сейчас вручную перечислял 🧠 🧠 🧠
      });
      //console.log("список работников:", state.employeeArr); // ✅ массив после добавления
    },
    selectEmployeeForView: (state, action) => {
      state.selectedEmployee = action.payload;
      //console.log("рендер для предпросмотра", action.payload);
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
  extraReducers: (builder) => {
    builder.addCase(loadEmployeesFromJSON.fulfilled, (state, action) => {
      state.employeeArr = action.payload;
    });
  },
});

export default employeeSlice.reducer;
export const {
  addEmployee,
  removeEmployee,
  editEmployee,
  selectEmployeeForView,
} = employeeSlice.actions;
