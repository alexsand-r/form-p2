// src/utils/getPdfData.js
// тут данные полей для формирования файла пдф
export const getPdfData = (selectedEmployee) => {
  return {
    // {/* шапка формы: название предприятия и код едрпоу */}
    titleCompany: {
      nameOfEnterprise: selectedEmployee?.nameOfEnterprise,
      edrpoy: selectedEmployee?.edrpoy,
    },
    // {/* I ЗАГАЛЬНІ ВІДОМОСТІ  general information */}
    generalInformation: {
      dateOfCompletion: selectedEmployee?.dateOfCompletion,
      personnelNumber: selectedEmployee?.personnelNumber,
      individualIdentificationNumber:
        selectedEmployee?.individualIdentificationNumber,
      sex: selectedEmployee?.sex,
      typeOfWork: selectedEmployee?.typeOfWork,
      photoOfWorker: selectedEmployee?.photoOfWorker,
      name: selectedEmployee?.name,
      firstName: selectedEmployee?.firstName,
      lastName: selectedEmployee?.lastName,
      dateOfBirth: selectedEmployee?.dateOfBirth,
      education: selectedEmployee?.education,
      citizenship: selectedEmployee?.citizenship,
    },
    // {/* Навчальні заклади  educationalInstitutions (навчальні заклади)*/}
    educationalInstitutions:
      selectedEmployee?.educationalInstitutions?.map((institution) => ({
        name: institution?.name,
        documentNumber: institution?.documentNumber,
        graduationYear: institution?.graduationYear,
      })) || [],
    // {/* Спеціальність / професія -- profession */}
    profession:
      selectedEmployee?.profession?.map((item) => ({
        profes: item?.profes,
        qualification: item?.qualification,
        formOfStudy: item?.formOfStudy,
      })) || [],

    //{/* post-graduate training (після дипломна підготовка) */}
    graduateSchool: selectedEmployee?.graduateSchool,
    adjunct: selectedEmployee?.adjunct,
    doctoralStudies: selectedEmployee?.doctoralStudies,

    postgraduateProfessional:
      selectedEmployee?.postgraduateProfessional?.map((item) => ({
        name: item?.name,
        documentNumber: item?.documentNumber,
        graduationYear: item?.graduationYear,
        academicBegree: item?.academicBegree,
      })) || [],

    //{/* 6. Останнє місце роботи 7. Стаж роботи */}
    lastPlaceOfWork: selectedEmployee?.lastPlaceOfWork,
    positionProfession: selectedEmployee?.positionProfession,
    workExperience: selectedEmployee?.workExperience,
    genaralDay: selectedEmployee?.genaralDay,
    genaralMounth: selectedEmployee?.genaralMounth,
    genaralYears: selectedEmployee?.genaralYears,
    serviceDays: selectedEmployee?.serviceDays,
    monthsOfService: selectedEmployee?.monthsOfService,
    yearsOfService: selectedEmployee?.yearsOfService,

    // {/* 8. Дата звільнення  9. Причини звільнення  */}
    releaseDate: selectedEmployee?.releaseDate,
    reasonForDismissal: selectedEmployee?.reasonForDismissal,
    informationAboutReceivingPension:
      selectedEmployee?.informationAboutReceivingPension,

    // {/* 10. Родинний стан */}
    maritalStatus: selectedEmployee?.maritalStatus,

    familyComposition:
      selectedEmployee?.familyComposition?.map((member) => ({
        degreeOfFamilyRelationship: member?.degreeOfFamilyRelationship,
        fullName: member?.fullName,
        yearOfBirth: member?.yearOfBirth,
      })) || [],

    //    {/* 11 - 12. паспортни данни */}
    actualPlaceOfResidence: selectedEmployee?.actualPlaceOfResidence,
    placeOfResidenceRegistration:
      selectedEmployee?.placeOfResidenceRegistration,
    passportSeries: selectedEmployee?.passportSeries,
    passportNumber: selectedEmployee?.passportNumber,
    byWhomIssued: selectedEmployee?.byWhomIssued,
    dateOfIssue: selectedEmployee?.dateOfIssue,

    //  ВІДОМОСТІ ПРО ВІЙСЬКОВИЙ ОБЛІК
    accountingGroup: selectedEmployee?.accountingGroup,
    eligibilityMilitary: selectedEmployee?.eligibilityMilitary,
    categoriaGroup: selectedEmployee?.categoriaGroup,
    nameOfDistrictMilitary: selectedEmployee?.nameOfDistrictMilitary,
    composition: selectedEmployee?.composition,
    nameDistrictActual: selectedEmployee?.nameDistrictActual,
    militaryRank: selectedEmployee?.militaryRank,
    stayingSpecialRegistration: selectedEmployee?.stayingSpecialRegistration,
    militaryAccountingSpecialty: selectedEmployee?.militaryAccountingSpecialty,

    //-- ІІІ. ПРОФЕСІЙНА ОСВІТА НА ВИРОБНИЦТВІ (ЗА РАХУНОК ПІДПРИЄМСТВА-РОБОТОДАВЦЯ)
    onTheJob:
      selectedEmployee?.onTheJob?.map((item) => ({
        dateOfstudy: item?.dateOfstudy,
        nameStructuralUnit: item?.nameStructuralUnit,
        trainingPeriodWith: item?.trainingPeriodWith,
        trainingPeriod: item?.trainingPeriod,
        typeOfTraining: item?.typeOfTraining,
        formOfStudy: item?.formOfStudy,
        documentCertifyingProfessional: item?.documentCertifyingProfessional,
      })) || [],

    // IV. ПРИЗНАЧЕННЯ І ПЕРЕВЕДЕННЯ
    assignmentAndTransfer:
      selectedEmployee?.assignmentAndTransfer?.map((item) => ({
        dateOfstudy: item?.dateOfstudy,
        nameStructuralUnit: item?.nameStructuralUnit,
        professionName: item?.professionName,
        codeForCP: item?.codeForCP,
        salary: item?.salary,
        groundOrder: item?.groundOrder,
        employeeSignatur: item?.employeeSignatur,
      })) || [],

    //V. ВІДПУСТКИ VACATIONS
    vacations:
      selectedEmployee?.vacations?.map((item) => ({
        typeOfVacation: item?.typeOfVacation,
        forWhatPeriodStart: item?.forWhatPeriodStart,
        forWhatPeriodEnd: item?.forWhatPeriodEnd,
        vacationStartDate: item?.vacationStartDate,
        vacationEndDate: item?.vacationEndDate,
        groundOrder: item?.groundOrder,
      })) || [],

    // end
    additionalInformation: selectedEmployee?.additionalInformation,
    releaseDateDay: selectedEmployee?.releaseDateDay,
    reasonForDismissalDay: selectedEmployee?.reasonForDismissalDay,
    position: selectedEmployee?.position,
    lastNameMiddleName: selectedEmployee?.lastNameMiddleName,
    dataDocument: selectedEmployee?.dataDocument,
  };
};
