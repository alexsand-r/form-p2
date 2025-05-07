// -- initialValues значение полей формы вынес из формика
export const initialValues = {
  nameOfEnterprise: "", // название предприятия
  edrpoy: "", // код ЕДРПОУ
  //-- general-information
  dateOfCompletion: "", // дата заполнения
  personnelNumber: "", // табельный номер
  individualIdentificationNumber: "", // Індивідуальний ідентифікаційний номер
  sex: "", // стать працивника
  typeOfWork: "", // Вид роботи (основна, за сумісництвом)
  photoOfWorker: "", // Фото робітника
  name: "", // призвище
  firstName: "", // ім'я
  lastName: "", // по батькови
  dateOfBirth: "", // дата рождения
  education: "", // освита
  citizenship: "", // громадянство
  //-
  // для добавления учебного заведения
  educationalInstitutions: [
    {
      name: "",
      documentNumber: "",
      graduationYear: "",
    },
  ],
  profession: [
    {
      profes: "",
      qualification: "",
      formOfStudy: "",
    },
  ],

  //--Післядипломна професійна підготовка (аспірантурі      ад'юнктурі      докторантурі)
  graduateSchool: "", // аспірантурі
  adjunct: "", // ад'юнктурі
  doctoralStudies: "", // докторантурі

  postgraduateProfessional: [
    {
      name: "",
      documentNumber: "",
      graduationYear: "",
      academicBegree: "",
    },
  ],
  // пункти 6-7
  lastPlaceOfWork: "", // останее місце роботи
  positionProfession: "", // посада (професія)
  workExperience: "", // Стаж роботи  станом на
  genaralDay: "", // загальний стаж днів
  genaralMounth: "", // загальний стаж місяців
  genaralYears: "", // загальний стаж років
  serviceDays: "", // вислуга днів
  monthsOfService: "", // вислуга місяців
  yearsOfService: "", // вислуга років
  // пункти 8-9
  releaseDate: "", // Дата звільнення
  reasonForDismissal: "", // Причина звільнення
  informationAboutReceivingPension: "", // Відомості про отримання пенсії
  // пункти 10 родинний звязок
  maritalStatus: "", //  Родинний стан
  familyComposition: [
    {
      degreeOfFamilyRelationship: "",
      fullName: "",
      yearOfBirth: "",
    },
  ],
  // 11 -12 Місце проживання
  actualPlaceOfResidence: "", // Місце проживання:
  placeOfResidenceRegistration: "", // Місце проживання за державною реєстрацією
  passportSeries: "", // Паспорт: серія
  passportNumber: "", // Паспорт: N :
  byWhomIssued: "", // byWhomIssued
  dateOfIssue: "", // дата видачі

  //ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
  accountingGroup: "", // Група обліку
  eligibilityMilitary: "", // Придатність до військової служби
  categoriaGroup: "", // Категорія обліку
  nameOfDistrictMilitary: "", // Назва райвійськкомату за місцем реєстрації
  composition: "", // Склад:
  nameDistrictActual: "", // Назва райвійськкомату за місцем фактичного проживання
  militaryRank: "", // Військове звання
  stayingSpecialRegistration: "", // Перебування на спеціальному обліку
  militaryAccountingSpecialty: "", // Військово-облікова спеціальність N

  // ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
  onTheJob: [
    {
      dateOfstudy: "", // дата окончания обучения
      nameStructuralUnit: "", // Назва структурного підрозділу
      trainingPeriodWith: "", // Період навчання з
      trainingPeriod: "", // Період навчання по
      typeOfTraining: "", // Вид навчання
      formOfStudy: "", // форма навчання на виробництви
      documentCertifyingProfessional: "", // Назва документа, що посвідчує професійну освіту, ким виданий
    },
  ],
  // IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
  assignmentAndTransfer: [
    {
      dateOfstudy: "", // дата окончания обучения
      nameStructuralUnit: "", // Назва структурного підрозділу
      professionName: "", // професія назва
      codeForCP: "", // код за КП
      salary: "", // Розряд (оклад)
      groundOrder: "", //Підстава, наказ N
      employeeSignatur: "", //Підпис працівника
    },
  ],

  //V. ВІДПУСТКИ VACATIONS
  vacations: [
    {
      typeOfVacation: "", // Вид відпустки
      forWhatPeriodStart: "", // За який період с
      forWhatPeriodEnd: "", // За який період по
      vacationStartDate: "", // Дата початку відпустки
      vacationEndDate: "", //  Дата закінчення відпустки
      groundOrder: "", //Підстава, наказ N
    },
  ],

  // Додаткові відомості
  additionalInformation: "", // Додаткові відомості
  releaseDateDay: "", // Дата звільнення
  reasonForDismissalDay: "", // причина звільнення
  position: "", // посада
  lastNameMiddleName: "", //  Прізвище, ім'я по батькові
  dataDocument: "", // дата документу
  //employeeСard: "", // П І Б  работника в конце формы
};
