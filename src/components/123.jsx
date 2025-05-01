   // тут полностью редюсер addEmployee: с закоментированными свойствами


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