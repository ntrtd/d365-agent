// @ts-nocheck
import {
  QStringPath,
  QDateTimeOffsetPath,
  QueryObject,
  QId,
  QStringParam,
  QDateTimeOffsetParam,
  QEnumPath,
  QNumberPath,
  QEnumParam,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import type {
  OrganizationHierarchyPublishedId,
  HumanResourcesParametersId,
  PayIntV1LaborUnionsId,
  HcmWorkerPersonIdentificationNumberDualWriteId,
  CourseTypeNotesId,
  EssSystemParametersId,
  BenefitEarningBasisId,
  WorkerPersonDetailsId,
  PayIntV1HcmPersonDetailsId,
  WorkerProfessionalExperienceId,
  LaborUnionsId,
  WorkerEducationId,
  PersonDetailsId,
  LeaveAbsenceParametersId,
  OrganizationHierarchyPublishedV2Id,
  SignLimitParametersId,
  WorkerTimeOffId,
  PayIntV1VariableCompensationTypesId,
  PositionNotificationSubscriptionsId,
  HoursWorkedId,
  HumanResourcesSharedParametersId,
  PayIntV1UnionsId,
  UnionsId,
  WorkerEnrolledBenefitDetailsId,
  PayIntV1EmploymentDetailId,
  PersonCountrySpecificFieldsId,
  TimeAndAttendanceTimeProfileDetailsId,
} from "./MicrosoftDynamicsDataEntitiesModel";
import {
  NoYes,
  HcmFmlaEligibilityPriorityDateType,
  PeriodUnit,
  HcmViewExitingWorkerOption,
  HcmYearsOfServiceDisplay,
  HcmOpenPositionsType,
  HcmFmlaEligibilityPeriodType,
  HcmFmlaCalendarType,
  HrmCompRatingModel,
  LeaveAmountUnit,
  LeaveBalanceCalculationOption,
  LeaveMonthsOfServiceCalculationOption,
  HrmCourseNotesType,
  HcmPersonGender,
  HcmPersonMaritalStatus,
  HrmBlankYesNo,
  HcmEducationCreditBasis,
  HcmWorkerRelationType,
  HrpAuthorityBasis,
  LeaveHalfDayDefinition,
  HrmCompVarPlanTypeType,
  LeaveHoursWorkedType,
  HcmPositionAvailableForAssignment,
  PayrollContributionBasis,
  PayrollDeductionBasis,
  PayrollBenefitRateSource,
  HcmEmploymentType,
  BenefitEmploymentStatus,
  HcmUnitOfNotice,
  JmgDayIdEnum,
  JmgProfileStartCodeBlankPrev,
} from "./MicrosoftDynamicsDataEntitiesModel";

export class QOrganizationHierarchyPublished extends QueryObject {
  public readonly hierarchyType = new QStringPath(
    this.withPrefix("HierarchyType"),
  );
  public readonly childOrganizationName = new QStringPath(
    this.withPrefix("ChildOrganizationName"),
  );
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("validFrom"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("validTo"));
  public readonly relationshipType = new QStringPath(
    this.withPrefix("RelationshipType"),
  );
  public readonly parentOrganizationPartyNumber = new QStringPath(
    this.withPrefix("ParentOrganizationPartyNumber"),
  );
  public readonly childOrganizationPartyNumber = new QStringPath(
    this.withPrefix("ChildOrganizationPartyNumber"),
  );
  public readonly parentOrganizationName = new QStringPath(
    this.withPrefix("ParentOrganizationName"),
  );
}

export const qOrganizationHierarchyPublished =
  new QOrganizationHierarchyPublished();

export class QOrganizationHierarchyPublishedId extends QId<OrganizationHierarchyPublishedId> {
  private readonly params = [
    new QStringParam("HierarchyType", "hierarchyType"),
    new QStringParam("ChildOrganizationName", "childOrganizationName"),
    new QDateTimeOffsetParam("validFrom"),
    new QDateTimeOffsetParam("validTo"),
  ];

  getParams() {
    return this.params;
  }
}

export class QHumanResourcesParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly enableInjuryIllnessIncidentRetention = new QEnumPath(
    this.withPrefix("EnableInjuryIllnessIncidentRetention"),
    NoYes,
  );
  public readonly fmlaEligibilityPriorityDateSequence4 = new QEnumPath(
    this.withPrefix("FMLAEligibilityPriorityDateSequence4"),
    HcmFmlaEligibilityPriorityDateType,
  );
  public readonly fmlaEntitlementStandardHours = new QNumberPath(
    this.withPrefix("FMLAEntitlementStandardHours"),
  );
  public readonly mssExitingWorkersPeriodUnit = new QEnumPath(
    this.withPrefix("MssExitingWorkersPeriodUnit"),
    PeriodUnit,
  );
  public readonly fmlaEligibilityLengthOfEmployment = new QNumberPath(
    this.withPrefix("FMLAEligibilityLengthOfEmployment"),
  );
  public readonly paymentMethodOther = new QEnumPath(
    this.withPrefix("PaymentMethodOther"),
    NoYes,
  );
  public readonly viewExpiringRecordsRange = new QNumberPath(
    this.withPrefix("ViewExpiringRecordsRange"),
  );
  public readonly leavingSoonWorkersPeriodUnit = new QEnumPath(
    this.withPrefix("LeavingSoonWorkersPeriodUnit"),
    PeriodUnit,
  );
  public readonly postalAddressChangePeriod = new QNumberPath(
    this.withPrefix("PostalAddressChangePeriod"),
  );
  public readonly applicationWordDocuTypeId = new QStringPath(
    this.withPrefix("ApplicationWordDocuTypeId"),
  );
  public readonly paymentMethodCheck = new QEnumPath(
    this.withPrefix("PaymentMethodCheck"),
    NoYes,
  );
  public readonly fmlaEntitlementAnniversaryPriorityDateSequence4 =
    new QEnumPath(
      this.withPrefix("FMLAEntitlementAnniversaryPriorityDateSequence4"),
      HcmFmlaEligibilityPriorityDateType,
    );
  public readonly fmlaEntitlementAnniversaryPriorityDateSequence2 =
    new QEnumPath(
      this.withPrefix("FMLAEntitlementAnniversaryPriorityDateSequence2"),
      HcmFmlaEligibilityPriorityDateType,
    );
  public readonly fmlaEntitlementAnniversaryPriorityDateSequence3 =
    new QEnumPath(
      this.withPrefix("FMLAEntitlementAnniversaryPriorityDateSequence3"),
      HcmFmlaEligibilityPriorityDateType,
    );
  public readonly fmlaEntitlementAnniversaryPriorityDateSequence1 =
    new QEnumPath(
      this.withPrefix("FMLAEntitlementAnniversaryPriorityDateSequence1"),
      HcmFmlaEligibilityPriorityDateType,
    );
  public readonly leavingSoonWorkersPeriod = new QNumberPath(
    this.withPrefix("LeavingSoonWorkersPeriod"),
  );
  public readonly injuryIllnessIncidentRetentionDays = new QNumberPath(
    this.withPrefix("InjuryIllnessIncidentRetentionDays"),
  );
  public readonly absenceStatusColor = new QNumberPath(
    this.withPrefix("AbsenceStatusColor"),
  );
  public readonly mssViewExitingWorkerOption = new QEnumPath(
    this.withPrefix("MssViewExitingWorkerOption"),
    HcmViewExitingWorkerOption,
  );
  public readonly yearsOfServiceDisplay = new QEnumPath(
    this.withPrefix("YearsOfServiceDisplay"),
    HcmYearsOfServiceDisplay,
  );
  public readonly fmlaEligibilityPriorityDateSequence3 = new QEnumPath(
    this.withPrefix("FMLAEligibilityPriorityDateSequence3"),
    HcmFmlaEligibilityPriorityDateType,
  );
  public readonly viewExpiredRecordsRange = new QNumberPath(
    this.withPrefix("ViewExpiredRecordsRange"),
  );
  public readonly compensationCompetencyRatingModelId = new QStringPath(
    this.withPrefix("CompensationCompetencyRatingModelId"),
  );
  public readonly fmlaEligibilityPriorityDateSequence2 = new QEnumPath(
    this.withPrefix("FMLAEligibilityPriorityDateSequence2"),
    HcmFmlaEligibilityPriorityDateType,
  );
  public readonly recentHireWorkersPeriod = new QNumberPath(
    this.withPrefix("RecentHireWorkersPeriod"),
  );
  public readonly mssOpenPositionsType = new QEnumPath(
    this.withPrefix("MssOpenPositionsType"),
    HcmOpenPositionsType,
  );
  public readonly defaultIdentificationTypeId = new QStringPath(
    this.withPrefix("DefaultIdentificationTypeId"),
  );
  public readonly fmlaEligibilityPeriodType = new QEnumPath(
    this.withPrefix("FMLAEligibilityPeriodType"),
    HcmFmlaEligibilityPeriodType,
  );
  public readonly fmlaEligibilityPriorityDateSequence1 = new QEnumPath(
    this.withPrefix("FMLAEligibilityPriorityDateSequence1"),
    HcmFmlaEligibilityPriorityDateType,
  );
  public readonly paymentMethodBankDraft = new QEnumPath(
    this.withPrefix("PaymentMethodBankDraft"),
    NoYes,
  );
  public readonly applicationExpirationPeriodUnit = new QEnumPath(
    this.withPrefix("ApplicationExpirationPeriodUnit"),
    PeriodUnit,
  );
  public readonly applicationEmailDocuTypeId = new QStringPath(
    this.withPrefix("ApplicationEmailDocuTypeId"),
  );
  public readonly applicationAttachmentType = new QStringPath(
    this.withPrefix("ApplicationAttachmentType"),
  );
  public readonly applicationExpirationPeriod = new QNumberPath(
    this.withPrefix("ApplicationExpirationPeriod"),
  );
  public readonly electronicDisbursementValidationDisabled = new QEnumPath(
    this.withPrefix("ElectronicDisbursementValidationDisabled"),
    NoYes,
  );
  public readonly identificationTypeDefault = new QNumberPath(
    this.withPrefix("IdentificationTypeDefault"),
  );
  public readonly allowRehireDefault = new QEnumPath(
    this.withPrefix("AllowRehireDefault"),
    NoYes,
  );
  public readonly paymentMethodElectronicPayment = new QEnumPath(
    this.withPrefix("PaymentMethodElectronicPayment"),
    NoYes,
  );
  public readonly mssExitingWorkersPeriod = new QNumberPath(
    this.withPrefix("MssExitingWorkersPeriod"),
  );
  public readonly bankAccountAndRoutingNumberValidationDisabled = new QEnumPath(
    this.withPrefix("BankAccountAndRoutingNumberValidationDisabled"),
    NoYes,
  );
  public readonly fmlaEntitlementUseEligibilityPrioritySequence = new QEnumPath(
    this.withPrefix("FMLAEntitlementUseEligibilityPrioritySequence"),
    NoYes,
  );
  public readonly fmlaEntitlementLeaveCalendarType = new QEnumPath(
    this.withPrefix("FMLAEntitlementLeaveCalendarType"),
    HcmFmlaCalendarType,
  );
  public readonly paymentMethodCash = new QEnumPath(
    this.withPrefix("PaymentMethodCash"),
    NoYes,
  );
  public readonly fmlaEntitlementMilitaryHours = new QNumberPath(
    this.withPrefix("FMLAEntitlementMilitaryHours"),
  );
  public readonly fmlaEligibilityHoursWorked = new QNumberPath(
    this.withPrefix("FMLAEligibilityHoursWorked"),
  );
  public readonly applicationUnsolictedRecruitingId = new QStringPath(
    this.withPrefix("ApplicationUnsolictedRecruitingId"),
  );
  public readonly recentHireWorkersPeriodUnit = new QEnumPath(
    this.withPrefix("RecentHireWorkersPeriodUnit"),
    PeriodUnit,
  );
  public readonly fmlaEntitlementLeaveCalendarStartDate =
    new QDateTimeOffsetPath(
      this.withPrefix("FMLAEntitlementLeaveCalendarStartDate"),
    );
  public readonly benefitDoNotRestrictUpdatesToPlansWithLifeEvent =
    new QEnumPath(
      this.withPrefix("BenefitDoNotRestrictUpdatesToPlansWithLifeEvent"),
      NoYes,
    );
  public readonly benefitExtendedDesigneeRequirements = new QEnumPath(
    this.withPrefix("BenefitExtendedDesigneeRequirements"),
    NoYes,
  );
  public readonly benefitEnrollmentConfirmationDefaultEmailFromAddress =
    new QStringPath(
      this.withPrefix("BenefitEnrollmentConfirmationDefaultEmailFromAddress"),
    );
  public readonly benefitLockConfirmedPlans = new QEnumPath(
    this.withPrefix("BenefitLockConfirmedPlans"),
    NoYes,
  );
  public readonly benefitEnrollmentConfirmationSendEmail = new QEnumPath(
    this.withPrefix("BenefitEnrollmentConfirmationSendEmail"),
    NoYes,
  );
  public readonly benefitEssNewHireEnrollmentPeriod = new QNumberPath(
    this.withPrefix("BenefitEssNewHireEnrollmentPeriod"),
  );
  public readonly benefitFutureBirthDateEligibility = new QEnumPath(
    this.withPrefix("BenefitFutureBirthDateEligibility"),
    NoYes,
  );
  public readonly benefitEnrollmentConfirmationEmailTemplateId =
    new QStringPath(
      this.withPrefix("BenefitEnrollmentConfirmationEmailTemplateId"),
    );
  public readonly exitedWorkersPeriod = new QNumberPath(
    this.withPrefix("ExitedWorkersPeriod"),
  );
  public readonly exitedWorkersPeriodUnit = new QEnumPath(
    this.withPrefix("ExitedWorkersPeriodUnit"),
    PeriodUnit,
  );
  public readonly compensationRatingSource = new QEnumPath(
    this.withPrefix("CompensationRatingSource"),
    HrmCompRatingModel,
  );
  public readonly enableHalfDayDefinition = new QEnumPath(
    this.withPrefix("EnableHalfDayDefinition"),
    NoYes,
  );
  public readonly leaveAmountUnit = new QEnumPath(
    this.withPrefix("LeaveAmountUnit"),
    LeaveAmountUnit,
  );
  public readonly leaveBalanceCalculationOption = new QEnumPath(
    this.withPrefix("LeaveBalanceCalculationOption"),
    LeaveBalanceCalculationOption,
  );
  public readonly leaveMonthsOfServiceCalculationOption = new QEnumPath(
    this.withPrefix("LeaveMonthsOfServiceCalculationOption"),
    LeaveMonthsOfServiceCalculationOption,
  );
}

export const qHumanResourcesParameters = new QHumanResourcesParameters();

export class QHumanResourcesParametersId extends QId<HumanResourcesParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QPayIntV1LaborUnions extends QueryObject {
  public readonly unionId = new QStringPath(this.withPrefix("UnionID"));
  public readonly name = new QStringPath(this.withPrefix("name"));
  public readonly negotiator = new QEnumPath(
    this.withPrefix("negotiator"),
    NoYes,
  );
}

export const qPayIntV1LaborUnions = new QPayIntV1LaborUnions();

export class QPayIntV1LaborUnionsId extends QId<PayIntV1LaborUnionsId> {
  private readonly params = [new QStringParam("UnionID", "unionId")];

  getParams() {
    return this.params;
  }
}

export class QHcmWorkerPersonIdentificationNumberDualWrite extends QueryObject {
  public readonly workerNumber = new QStringPath(
    this.withPrefix("WorkerNumber"),
  );
  public readonly identificationTypeId = new QStringPath(
    this.withPrefix("IdentificationTypeId"),
  );
  public readonly identificationNumber = new QStringPath(
    this.withPrefix("IdentificationNumber"),
  );
  public readonly expirationDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpirationDate"),
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly isPrimary = new QEnumPath(
    this.withPrefix("IsPrimary"),
    NoYes,
  );
  public readonly issuingAgencyId = new QStringPath(
    this.withPrefix("IssuingAgencyId"),
  );
  public readonly issueDate = new QDateTimeOffsetPath(
    this.withPrefix("IssueDate"),
  );
  public readonly partyNumber = new QStringPath(this.withPrefix("PartyNumber"));
  public readonly entryType = new QStringPath(this.withPrefix("EntryType"));
}

export const qHcmWorkerPersonIdentificationNumberDualWrite =
  new QHcmWorkerPersonIdentificationNumberDualWrite();

export class QHcmWorkerPersonIdentificationNumberDualWriteId extends QId<HcmWorkerPersonIdentificationNumberDualWriteId> {
  private readonly params = [
    new QStringParam("WorkerNumber", "workerNumber"),
    new QStringParam("IdentificationTypeId", "identificationTypeId"),
    new QStringParam("IdentificationNumber", "identificationNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QCourseTypeNotes extends QueryObject {
  public readonly courseTypeId = new QStringPath(
    this.withPrefix("CourseTypeId"),
  );
  public readonly notesType = new QEnumPath(
    this.withPrefix("NotesType"),
    HrmCourseNotesType,
  );
  public readonly notes = new QStringPath(this.withPrefix("Notes"));
}

export const qCourseTypeNotes = new QCourseTypeNotes();

export class QCourseTypeNotesId extends QId<CourseTypeNotesId> {
  private readonly params = [
    new QStringParam("CourseTypeId", "courseTypeId"),
    new QEnumParam("NotesType", "notesType"),
  ];

  getParams() {
    return this.params;
  }
}

export class QEssSystemParameters extends QueryObject {
  public readonly key = new QNumberPath(this.withPrefix("Key"));
  public readonly organizationPrivacyStatementUrl = new QStringPath(
    this.withPrefix("OrganizationPrivacyStatementURL"),
  );
  public readonly systemLanguageId = new QStringPath(
    this.withPrefix("SystemLanguageId"),
  );
  public readonly organizationLegalTermsUrl = new QStringPath(
    this.withPrefix("OrganizationLegalTermsURL"),
  );
}

export const qEssSystemParameters = new QEssSystemParameters();

export class QEssSystemParametersId extends QId<EssSystemParametersId> {
  private readonly params = [new QNumberParam("Key", "key")];

  getParams() {
    return this.params;
  }
}

export class QBenefitEarningBasis extends QueryObject {
  public readonly earningCodeId = new QStringPath(
    this.withPrefix("EarningCodeId"),
  );
  public readonly benefitPlanId = new QStringPath(
    this.withPrefix("BenefitPlanId"),
  );
  public readonly benefitOptionId = new QStringPath(
    this.withPrefix("BenefitOptionId"),
  );
  public readonly effective = new QDateTimeOffsetPath(
    this.withPrefix("Effective"),
  );
  public readonly expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration"),
  );
  public readonly benefitId = new QStringPath(this.withPrefix("BenefitId"));
}

export const qBenefitEarningBasis = new QBenefitEarningBasis();

export class QBenefitEarningBasisId extends QId<BenefitEarningBasisId> {
  private readonly params = [
    new QStringParam("EarningCodeId", "earningCodeId"),
    new QStringParam("BenefitPlanId", "benefitPlanId"),
    new QStringParam("BenefitOptionId", "benefitOptionId"),
    new QDateTimeOffsetParam("Effective", "effective"),
    new QDateTimeOffsetParam("Expiration", "expiration"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWorkerPersonDetails extends QueryObject {
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly gender = new QEnumPath(
    this.withPrefix("Gender"),
    HcmPersonGender,
  );
  public readonly numberOfDependents = new QNumberPath(
    this.withPrefix("NumberOfDependents"),
  );
  public readonly veteranStatusId = new QStringPath(
    this.withPrefix("VeteranStatusId"),
  );
  public readonly citizenshipCountryRegion = new QStringPath(
    this.withPrefix("CitizenshipCountryRegion"),
  );
  public readonly isExpatriateRulingApplicable = new QEnumPath(
    this.withPrefix("IsExpatriateRulingApplicable"),
    NoYes,
  );
  public readonly ethnicOriginId = new QStringPath(
    this.withPrefix("EthnicOriginId"),
  );
  public readonly birthDate = new QDateTimeOffsetPath(
    this.withPrefix("BirthDate"),
  );
  public readonly disabledVerificationDate = new QDateTimeOffsetPath(
    this.withPrefix("DisabledVerificationDate"),
  );
  public readonly motherBirthCountryRegion = new QStringPath(
    this.withPrefix("MotherBirthCountryRegion"),
  );
  public readonly expatriateStartDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateStartDate"),
  );
  public readonly nativeLanguageId = new QStringPath(
    this.withPrefix("NativeLanguageId"),
  );
  public readonly education = new QStringPath(this.withPrefix("Education"));
  public readonly maritalStatus = new QEnumPath(
    this.withPrefix("MaritalStatus"),
    HcmPersonMaritalStatus,
  );
  public readonly deceasedDate = new QDateTimeOffsetPath(
    this.withPrefix("DeceasedDate"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly personBirthCountryRegion = new QStringPath(
    this.withPrefix("PersonBirthCountryRegion"),
  );
  public readonly nationalityCountryRegion = new QStringPath(
    this.withPrefix("NationalityCountryRegion"),
  );
  public readonly personBirthCity = new QStringPath(
    this.withPrefix("PersonBirthCity"),
  );
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly fatherBirthCountryRegion = new QStringPath(
    this.withPrefix("FatherBirthCountryRegion"),
  );
  public readonly militaryServiceEndDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceEndDate"),
  );
  public readonly expatriateEndDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateEndDate"),
  );
  public readonly militaryServiceStartDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceStartDate"),
  );
  public readonly isDisabled = new QEnumPath(
    this.withPrefix("IsDisabled"),
    NoYes,
  );
  public readonly isFulltimeStudent = new QEnumPath(
    this.withPrefix("IsFulltimeStudent"),
    NoYes,
  );
  public readonly disabledVeteran = new QEnumPath(
    this.withPrefix("DisabledVeteran"),
    NoYes,
  );
}

export const qWorkerPersonDetails = new QWorkerPersonDetails();

export class QWorkerPersonDetailsId extends QId<WorkerPersonDetailsId> {
  private readonly params = [
    new QStringParam("PersonnelNumber", "personnelNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPayIntV1HcmPersonDetails extends QueryObject {
  public readonly partyNumber = new QStringPath(this.withPrefix("PartyNumber"));
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly militaryServiceEndDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceEndDate"),
  );
  public readonly numberOfDependents = new QNumberPath(
    this.withPrefix("NumberOfDependents"),
  );
  public readonly isExpatriateRulingApplicable = new QEnumPath(
    this.withPrefix("IsExpatriateRulingApplicable"),
    NoYes,
  );
  public readonly isDisabledVeteran = new QEnumPath(
    this.withPrefix("IsDisabledVeteran"),
    NoYes,
  );
  public readonly maritalStatus = new QEnumPath(
    this.withPrefix("MaritalStatus"),
    HcmPersonMaritalStatus,
  );
  public readonly benefitMaritalStatusDate = new QDateTimeOffsetPath(
    this.withPrefix("BenefitMaritalStatusDate"),
  );
  public readonly expatriateRulingValidTo = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateRulingValidTo"),
  );
  public readonly militaryServiceStartDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceStartDate"),
  );
  public readonly expatriateRulingValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateRulingValidFrom"),
  );
  public readonly veteranStatusId = new QStringPath(
    this.withPrefix("VeteranStatusId"),
  );
}

export const qPayIntV1HcmPersonDetails = new QPayIntV1HcmPersonDetails();

export class QPayIntV1HcmPersonDetailsId extends QId<PayIntV1HcmPersonDetailsId> {
  private readonly params = [
    new QStringParam("PartyNumber", "partyNumber"),
    new QDateTimeOffsetParam("ValidFrom", "validFrom"),
    new QDateTimeOffsetParam("ValidTo", "validTo"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWorkerProfessionalExperience extends QueryObject {
  public readonly startDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate"),
  );
  public readonly employerPosition = new QStringPath(
    this.withPrefix("EmployerPosition"),
  );
  public readonly employerName = new QStringPath(
    this.withPrefix("EmployerName"),
  );
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly note = new QStringPath(this.withPrefix("Note"));
  public readonly employerLocation = new QStringPath(
    this.withPrefix("EmployerLocation"),
  );
  public readonly allowContactEmployer = new QEnumPath(
    this.withPrefix("AllowContactEmployer"),
    HrmBlankYesNo,
  );
  public readonly endDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly phone = new QStringPath(this.withPrefix("Phone"));
  public readonly url = new QStringPath(this.withPrefix("URL"));
}

export const qWorkerProfessionalExperience =
  new QWorkerProfessionalExperience();

export class QWorkerProfessionalExperienceId extends QId<WorkerProfessionalExperienceId> {
  private readonly params = [
    new QDateTimeOffsetParam("StartDate", "startDate"),
    new QStringParam("EmployerPosition", "employerPosition"),
    new QStringParam("EmployerName", "employerName"),
    new QStringParam("PersonnelNumber", "personnelNumber"),
  ];

  getParams() {
    return this.params;
  }
}

export class QLaborUnions extends QueryObject {
  public readonly unionId = new QStringPath(this.withPrefix("UnionID"));
  public readonly name = new QStringPath(this.withPrefix("name"));
  public readonly negotiator = new QEnumPath(
    this.withPrefix("negotiator"),
    NoYes,
  );
}

export const qLaborUnions = new QLaborUnions();

export class QLaborUnionsId extends QId<LaborUnionsId> {
  private readonly params = [new QStringParam("UnionID", "unionId")];

  getParams() {
    return this.params;
  }
}

export class QWorkerEducation extends QueryObject {
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly educationDisciplineId = new QStringPath(
    this.withPrefix("EducationDisciplineId"),
  );
  public readonly educationInstitutionId = new QStringPath(
    this.withPrefix("EducationInstitutionId"),
  );
  public readonly educationLevelId = new QStringPath(
    this.withPrefix("EducationLevelId"),
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly duration = new QNumberPath(this.withPrefix("Duration"));
  public readonly durationUnit = new QEnumPath(
    this.withPrefix("DurationUnit"),
    PeriodUnit,
  );
  public readonly creditsEarned = new QNumberPath(
    this.withPrefix("CreditsEarned"),
  );
  public readonly gradePointAverage = new QNumberPath(
    this.withPrefix("GradePointAverage"),
  );
  public readonly creditBasis = new QEnumPath(
    this.withPrefix("CreditBasis"),
    HcmEducationCreditBasis,
  );
  public readonly notes = new QStringPath(this.withPrefix("Notes"));
  public readonly startDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate"),
  );
  public readonly gradeScale = new QStringPath(this.withPrefix("GradeScale"));
  public readonly creditsCompleted = new QNumberPath(
    this.withPrefix("CreditsCompleted"),
  );
  public readonly creditsNeeded = new QNumberPath(
    this.withPrefix("CreditsNeeded"),
  );
  public readonly endDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly secondaryEmphasis = new QStringPath(
    this.withPrefix("SecondaryEmphasis"),
  );
}

export const qWorkerEducation = new QWorkerEducation();

export class QWorkerEducationId extends QId<WorkerEducationId> {
  private readonly params = [
    new QStringParam("PersonnelNumber", "personnelNumber"),
    new QStringParam("EducationDisciplineId", "educationDisciplineId"),
    new QStringParam("EducationInstitutionId", "educationInstitutionId"),
    new QStringParam("EducationLevelId", "educationLevelId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPersonDetails extends QueryObject {
  public readonly partyNumber = new QStringPath(this.withPrefix("PartyNumber"));
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly militaryServiceEndDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceEndDate"),
  );
  public readonly numberOfDependents = new QNumberPath(
    this.withPrefix("NumberOfDependents"),
  );
  public readonly isExpatriateRulingApplicable = new QEnumPath(
    this.withPrefix("IsExpatriateRulingApplicable"),
    NoYes,
  );
  public readonly isDisabledVeteran = new QEnumPath(
    this.withPrefix("IsDisabledVeteran"),
    NoYes,
  );
  public readonly maritalStatus = new QEnumPath(
    this.withPrefix("MaritalStatus"),
    HcmPersonMaritalStatus,
  );
  public readonly expatriateRulingValidTo = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateRulingValidTo"),
  );
  public readonly militaryServiceStartDate = new QDateTimeOffsetPath(
    this.withPrefix("MilitaryServiceStartDate"),
  );
  public readonly expatriateRulingValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("ExpatriateRulingValidFrom"),
  );
  public readonly veteranStatusId = new QStringPath(
    this.withPrefix("VeteranStatusId"),
  );
  public readonly benefitMaritalStatusDate = new QDateTimeOffsetPath(
    this.withPrefix("BenefitMaritalStatusDate"),
  );
}

export const qPersonDetails = new QPersonDetails();

export class QPersonDetailsId extends QId<PersonDetailsId> {
  private readonly params = [
    new QStringParam("PartyNumber", "partyNumber"),
    new QDateTimeOffsetParam("ValidFrom", "validFrom"),
    new QDateTimeOffsetParam("ValidTo", "validTo"),
  ];

  getParams() {
    return this.params;
  }
}

export class QLeaveAbsenceParameters extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly showBirthdayInAbsenceCoordinatorCalendar = new QEnumPath(
    this.withPrefix("ShowBirthdayInAbsenceCoordinatorCalendar"),
    NoYes,
  );
  public readonly showLeaveOfAbsenceInAbsenceCalendar = new QEnumPath(
    this.withPrefix("ShowLeaveOfAbsenceInAbsenceCalendar"),
    NoYes,
  );
  public readonly calendarSickLeaveColor = new QNumberPath(
    this.withPrefix("CalendarSickLeaveColor"),
  );
  public readonly calendarLeaveApprovedColor = new QNumberPath(
    this.withPrefix("CalendarLeaveApprovedColor"),
  );
  public readonly calendarShowWorkerTypeAbsenceCoordinator = new QEnumPath(
    this.withPrefix("CalendarShowWorkerTypeAbsenceCoordinator"),
    HcmWorkerRelationType,
  );
  public readonly leaveBalanceCalculationOption = new QEnumPath(
    this.withPrefix("LeaveBalanceCalculationOption"),
    LeaveBalanceCalculationOption,
  );
  public readonly leaveBalanceExpirationBatchStartTime = new QNumberPath(
    this.withPrefix("LeaveBalanceExpirationBatchStartTime"),
  );
  public readonly showPendingLeaveInManagerCalendar = new QEnumPath(
    this.withPrefix("ShowPendingLeaveInManagerCalendar"),
    NoYes,
  );
  public readonly showOnlyAbsenceInTeamCalendar = new QEnumPath(
    this.withPrefix("ShowOnlyAbsenceInTeamCalendar"),
    NoYes,
  );
  public readonly showOnlyAbsenceInCompanyCalendar = new QEnumPath(
    this.withPrefix("ShowOnlyAbsenceInCompanyCalendar"),
    NoYes,
  );
  public readonly calendarShowWorkerTypeAbsenceManager = new QEnumPath(
    this.withPrefix("CalendarShowWorkerTypeAbsenceManager"),
    HcmWorkerRelationType,
  );
  public readonly leaveAmountUnit = new QEnumPath(
    this.withPrefix("LeaveAmountUnit"),
    LeaveAmountUnit,
  );
  public readonly showLeaveOfAbsenceInTeamCalendar = new QEnumPath(
    this.withPrefix("ShowLeaveOfAbsenceInTeamCalendar"),
    NoYes,
  );
  public readonly calendarLeaveRequestedColor = new QNumberPath(
    this.withPrefix("CalendarLeaveRequestedColor"),
  );
  public readonly calendarCurrentSickColor = new QNumberPath(
    this.withPrefix("CalendarCurrentSickColor"),
  );
  public readonly leaveMonthsOfServiceCalculationOption = new QEnumPath(
    this.withPrefix("LeaveMonthsOfServiceCalculationOption"),
    LeaveMonthsOfServiceCalculationOption,
  );
  public readonly enableReturnToWorkNotice = new QEnumPath(
    this.withPrefix("EnableReturnToWorkNotice"),
    NoYes,
  );
  public readonly showBirthdayInCompanyCalendar = new QEnumPath(
    this.withPrefix("ShowBirthdayInCompanyCalendar"),
    NoYes,
  );
  public readonly showPendingLeaveInCompanyCalendar = new QEnumPath(
    this.withPrefix("ShowPendingLeaveInCompanyCalendar"),
    NoYes,
  );
  public readonly sickLeaveHalfDay = new QEnumPath(
    this.withPrefix("SickLeaveHalfDay"),
    NoYes,
  );
  public readonly calendarShowWorkerTypeGlobal = new QEnumPath(
    this.withPrefix("CalendarShowWorkerTypeGlobal"),
    HcmWorkerRelationType,
  );
  public readonly enableBuyLeavePolicy = new QEnumPath(
    this.withPrefix("EnableBuyLeavePolicy"),
    NoYes,
  );
  public readonly emailTemplateId = new QStringPath(
    this.withPrefix("EmailTemplateId"),
  );
  public readonly calendarLeaveDisable = new QEnumPath(
    this.withPrefix("CalendarLeaveDisable"),
    NoYes,
  );
  public readonly showBirthdayInManagerCalendar = new QEnumPath(
    this.withPrefix("ShowBirthdayInManagerCalendar"),
    NoYes,
  );
  public readonly calendarSickLeaveDisable = new QEnumPath(
    this.withPrefix("CalendarSickLeaveDisable"),
    NoYes,
  );
  public readonly showLeaveOfAbsenceInManagerCalendar = new QEnumPath(
    this.withPrefix("ShowLeaveOfAbsenceInManagerCalendar"),
    NoYes,
  );
  public readonly leaveNumOfDaysBeforeUpload = new QNumberPath(
    this.withPrefix("LeaveNumOfDaysBeforeUpload"),
  );
  public readonly showPendingLeaveInAbsenceCoordinatorCalendar = new QEnumPath(
    this.withPrefix("ShowPendingLeaveInAbsenceCoordinatorCalendar"),
    NoYes,
  );
  public readonly allowManagerSickLeaveIndirect = new QEnumPath(
    this.withPrefix("AllowManagerSickLeaveIndirect"),
    NoYes,
  );
  public readonly showSickLeaveInCompanyCalendar = new QEnumPath(
    this.withPrefix("ShowSickLeaveInCompanyCalendar"),
    NoYes,
  );
  public readonly enableHalfDayDefinition = new QEnumPath(
    this.withPrefix("EnableHalfDayDefinition"),
    NoYes,
  );
  public readonly showOnlyAbsenceInManagerCalendar = new QEnumPath(
    this.withPrefix("ShowOnlyAbsenceInManagerCalendar"),
    NoYes,
  );
  public readonly absenceHierarchyType = new QNumberPath(
    this.withPrefix("AbsenceHierarchyType"),
  );
  public readonly disclosureGuidance = new QStringPath(
    this.withPrefix("DisclosureGuidance"),
  );
  public readonly enableWorkflowForSickLeaveNotice = new QEnumPath(
    this.withPrefix("EnableWorkflowForSickLeaveNotice"),
    NoYes,
  );
  public readonly enableSellLeavePolicy = new QEnumPath(
    this.withPrefix("EnableSellLeavePolicy"),
    NoYes,
  );
  public readonly mandatoryEndDateForSickLeave = new QEnumPath(
    this.withPrefix("MandatoryEndDateForSickLeave"),
    NoYes,
  );
  public readonly endDateOfSickLeave = new QEnumPath(
    this.withPrefix("EndDateOfSickLeave"),
    NoYes,
  );
  public readonly showPendingLeaveInTeamCalendar = new QEnumPath(
    this.withPrefix("ShowPendingLeaveInTeamCalendar"),
    NoYes,
  );
  public readonly leaveCalculationChange = new QEnumPath(
    this.withPrefix("LeaveCalculationChange"),
    NoYes,
  );
  public readonly enableDisclosureGuidance = new QEnumPath(
    this.withPrefix("EnableDisclosureGuidance"),
    NoYes,
  );
  public readonly showBirthdayInTeamCalendar = new QEnumPath(
    this.withPrefix("ShowBirthdayInTeamCalendar"),
    NoYes,
  );
  public readonly showLeaveOfAbsenceInCompanyCalendar = new QEnumPath(
    this.withPrefix("ShowLeaveOfAbsenceInCompanyCalendar"),
    NoYes,
  );
  public readonly calendarShowWorkerTypeManager = new QEnumPath(
    this.withPrefix("CalendarShowWorkerTypeManager"),
    HcmWorkerRelationType,
  );
  public readonly showOnlyAbsenceInAbsenceCoordinatorCalendar = new QEnumPath(
    this.withPrefix("ShowOnlyAbsenceInAbsenceCoordinatorCalendar"),
    NoYes,
  );
  public readonly mssLeaveAndAbsenceRequestEnabled = new QEnumPath(
    this.withPrefix("MssLeaveAndAbsenceRequestEnabled"),
    NoYes,
  );
}

export const qLeaveAbsenceParameters = new QLeaveAbsenceParameters();

export class QLeaveAbsenceParametersId extends QId<LeaveAbsenceParametersId> {
  private readonly params = [new QStringParam("dataAreaId")];

  getParams() {
    return this.params;
  }
}

export class QOrganizationHierarchyPublishedV2 extends QueryObject {
  public readonly hierarchyType = new QStringPath(
    this.withPrefix("HierarchyType"),
  );
  public readonly childOrganizationPartyNumber = new QStringPath(
    this.withPrefix("ChildOrganizationPartyNumber"),
  );
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("validFrom"),
  );
  public readonly relationshipType = new QStringPath(
    this.withPrefix("RelationshipType"),
  );
  public readonly parentOrganizationPartyNumber = new QStringPath(
    this.withPrefix("ParentOrganizationPartyNumber"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("validTo"));
  public readonly childOrganizationName = new QStringPath(
    this.withPrefix("ChildOrganizationName"),
  );
  public readonly parentOrganizationName = new QStringPath(
    this.withPrefix("ParentOrganizationName"),
  );
}

export const qOrganizationHierarchyPublishedV2 =
  new QOrganizationHierarchyPublishedV2();

export class QOrganizationHierarchyPublishedV2Id extends QId<OrganizationHierarchyPublishedV2Id> {
  private readonly params = [
    new QStringParam("HierarchyType", "hierarchyType"),
    new QStringParam(
      "ChildOrganizationPartyNumber",
      "childOrganizationPartyNumber",
    ),
    new QDateTimeOffsetParam("validFrom"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSignLimitParameters extends QueryObject {
  public readonly key = new QNumberPath(this.withPrefix("Key"));
  public readonly signingLimitsForEmployeesOnly = new QEnumPath(
    this.withPrefix("SigningLimitsForEmployeesOnly"),
    NoYes,
  );
  public readonly limitBasis = new QEnumPath(
    this.withPrefix("LimitBasis"),
    HrpAuthorityBasis,
  );
  public readonly requireExplicitSigningLimitRequest = new QEnumPath(
    this.withPrefix("RequireExplicitSigningLimitRequest"),
    NoYes,
  );
}

export const qSignLimitParameters = new QSignLimitParameters();

export class QSignLimitParametersId extends QId<SignLimitParametersId> {
  private readonly params = [new QNumberParam("Key", "key")];

  getParams() {
    return this.params;
  }
}

export class QWorkerTimeOff extends QueryObject {
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly leaveDate = new QDateTimeOffsetPath(
    this.withPrefix("LeaveDate"),
  );
  public readonly leaveAmountUnit = new QEnumPath(
    this.withPrefix("LeaveAmountUnit"),
    LeaveAmountUnit,
  );
  public readonly amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly halfDayDefinition = new QEnumPath(
    this.withPrefix("HalfDayDefinition"),
    LeaveHalfDayDefinition,
  );
}

export const qWorkerTimeOff = new QWorkerTimeOff();

export class QWorkerTimeOffId extends QId<WorkerTimeOffId> {
  private readonly params = [
    new QStringParam("PersonnelNumber", "personnelNumber"),
    new QDateTimeOffsetParam("LeaveDate", "leaveDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPayIntV1VariableCompensationTypes extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly variableCompensationType = new QStringPath(
    this.withPrefix("VariableCompensationType"),
  );
  public readonly description = new QStringPath(this.withPrefix("Description"));
  public readonly type = new QEnumPath(
    this.withPrefix("Type"),
    HrmCompVarPlanTypeType,
  );
}

export const qPayIntV1VariableCompensationTypes =
  new QPayIntV1VariableCompensationTypes();

export class QPayIntV1VariableCompensationTypesId extends QId<PayIntV1VariableCompensationTypesId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("VariableCompensationType", "variableCompensationType"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPositionNotificationSubscriptions extends QueryObject {
  public readonly retailOperationOperationId = new QNumberPath(
    this.withPrefix("RetailOperation_OperationId"),
  );
  public readonly hcmPositionPositionId = new QStringPath(
    this.withPrefix("HcmPosition_PositionId"),
  );
  public readonly displayOrder = new QNumberPath(
    this.withPrefix("DisplayOrder"),
  );
}

export const qPositionNotificationSubscriptions =
  new QPositionNotificationSubscriptions();

export class QPositionNotificationSubscriptionsId extends QId<PositionNotificationSubscriptionsId> {
  private readonly params = [
    new QNumberParam(
      "RetailOperation_OperationId",
      "retailOperationOperationId",
    ),
    new QStringParam("HcmPosition_PositionId", "hcmPositionPositionId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QHoursWorked extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly dateWorked = new QDateTimeOffsetPath(
    this.withPrefix("DateWorked"),
  );
  public readonly type = new QEnumPath(
    this.withPrefix("Type"),
    LeaveHoursWorkedType,
  );
  public readonly hours = new QNumberPath(this.withPrefix("Hours"));
}

export const qHoursWorked = new QHoursWorked();

export class QHoursWorkedId extends QId<HoursWorkedId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("PersonnelNumber", "personnelNumber"),
    new QDateTimeOffsetParam("DateWorked", "dateWorked"),
    new QEnumParam("Type", "type"),
  ];

  getParams() {
    return this.params;
  }
}

export class QHumanResourcesSharedParameters extends QueryObject {
  public readonly key = new QNumberPath(this.withPrefix("Key"));
  public readonly allowCompletedPositionActionDeletion = new QEnumPath(
    this.withPrefix("AllowCompletedPositionActionDeletion"),
    NoYes,
  );
  public readonly checkDepartmentUsageBeforeDeleting = new QEnumPath(
    this.withPrefix("CheckDepartmentUsageBeforeDeleting"),
    NoYes,
  );
  public readonly personnelActionWorker = new QEnumPath(
    this.withPrefix("PersonnelActionWorker"),
    NoYes,
  );
  public readonly trackAda = new QEnumPath(this.withPrefix("TrackADA"), NoYes);
  public readonly personalIdentificationTypeId = new QStringPath(
    this.withPrefix("PersonalIdentificationTypeId"),
  );
  public readonly allowCompletedWorkerActionDeletion = new QEnumPath(
    this.withPrefix("AllowCompletedWorkerActionDeletion"),
    NoYes,
  );
  public readonly nationalIdentificationTypeId = new QStringPath(
    this.withPrefix("NationalIdentificationTypeId"),
  );
  public readonly socialSecurityNumberIdentificationTypeId = new QStringPath(
    this.withPrefix("SocialSecurityNumberIdentificationTypeId"),
  );
  public readonly verifyI9EmplEligibility = new QEnumPath(
    this.withPrefix("VerifyI9EmplEligibility"),
    NoYes,
  );
  public readonly alienIdentificationTypeId = new QStringPath(
    this.withPrefix("AlienIdentificationTypeId"),
  );
  public readonly positionAvailableForAssignmentDefault = new QEnumPath(
    this.withPrefix("PositionAvailableForAssignmentDefault"),
    HcmPositionAvailableForAssignment,
  );
  public readonly personnelActionPosition = new QEnumPath(
    this.withPrefix("PersonnelActionPosition"),
    NoYes,
  );
  public readonly departmentMandatoryForPosition = new QEnumPath(
    this.withPrefix("DepartmentMandatoryForPosition"),
    NoYes,
  );
  public readonly psnJobDescriptionLockOnPositionForecast = new QEnumPath(
    this.withPrefix("PSNJobDescriptionLockOnPositionForecast"),
    NoYes,
  );
}

export const qHumanResourcesSharedParameters =
  new QHumanResourcesSharedParameters();

export class QHumanResourcesSharedParametersId extends QId<HumanResourcesSharedParametersId> {
  private readonly params = [new QNumberParam("Key", "key")];

  getParams() {
    return this.params;
  }
}

export class QPayIntV1Unions extends QueryObject {
  public readonly unionId = new QStringPath(this.withPrefix("UnionId"));
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly entitledToNegotiate = new QEnumPath(
    this.withPrefix("EntitledToNegotiate"),
    NoYes,
  );
}

export const qPayIntV1Unions = new QPayIntV1Unions();

export class QPayIntV1UnionsId extends QId<PayIntV1UnionsId> {
  private readonly params = [new QStringParam("UnionId", "unionId")];

  getParams() {
    return this.params;
  }
}

export class QUnions extends QueryObject {
  public readonly unionId = new QStringPath(this.withPrefix("UnionId"));
  public readonly name = new QStringPath(this.withPrefix("Name"));
  public readonly entitledToNegotiate = new QEnumPath(
    this.withPrefix("EntitledToNegotiate"),
    NoYes,
  );
}

export const qUnions = new QUnions();

export class QUnionsId extends QId<UnionsId> {
  private readonly params = [new QStringParam("UnionId", "unionId")];

  getParams() {
    return this.params;
  }
}

export class QWorkerEnrolledBenefitDetails extends QueryObject {
  public readonly benefitId = new QStringPath(this.withPrefix("BenefitId"));
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly enrollmentStart = new QDateTimeOffsetPath(
    this.withPrefix("EnrollmentStart"),
  );
  public readonly enrollmentEnd = new QDateTimeOffsetPath(
    this.withPrefix("EnrollmentEnd"),
  );
  public readonly benefitDetailValidFrom = new QDateTimeOffsetPath(
    this.withPrefix("BenefitDetailValidFrom"),
  );
  public readonly benefitDetailValidTo = new QDateTimeOffsetPath(
    this.withPrefix("BenefitDetailValidTo"),
  );
  public readonly contributionAmountCur = new QNumberPath(
    this.withPrefix("ContributionAmountCur"),
  );
  public readonly contributionBasis = new QEnumPath(
    this.withPrefix("ContributionBasis"),
    PayrollContributionBasis,
  );
  public readonly partyNumber = new QStringPath(this.withPrefix("PartyNumber"));
  public readonly deductionPriorityNumber = new QNumberPath(
    this.withPrefix("DeductionPriorityNumber"),
  );
  public readonly deductionBasis = new QEnumPath(
    this.withPrefix("DeductionBasis"),
    PayrollDeductionBasis,
  );
  public readonly contributionRateSource = new QEnumPath(
    this.withPrefix("ContributionRateSource"),
    PayrollBenefitRateSource,
  );
  public readonly positionId = new QStringPath(this.withPrefix("PositionId"));
  public readonly overrideLimit = new QEnumPath(
    this.withPrefix("OverrideLimit"),
    NoYes,
  );
  public readonly calculationPriorityNumber = new QNumberPath(
    this.withPrefix("CalculationPriorityNumber"),
  );
  public readonly dataArea = new QStringPath(this.withPrefix("DataArea"));
  public readonly deductionAmountCur = new QNumberPath(
    this.withPrefix("DeductionAmountCur"),
  );
  public readonly note = new QStringPath(this.withPrefix("Note"));
  public readonly deductionRateSource = new QEnumPath(
    this.withPrefix("DeductionRateSource"),
    PayrollBenefitRateSource,
  );
  public readonly isRetirementCatchUp = new QEnumPath(
    this.withPrefix("IsRetirementCatchUp"),
    NoYes,
  );
  public readonly vendAccountNum = new QStringPath(
    this.withPrefix("VendAccountNum"),
  );
}

export const qWorkerEnrolledBenefitDetails =
  new QWorkerEnrolledBenefitDetails();

export class QWorkerEnrolledBenefitDetailsId extends QId<WorkerEnrolledBenefitDetailsId> {
  private readonly params = [
    new QStringParam("BenefitId", "benefitId"),
    new QStringParam("PersonnelNumber", "personnelNumber"),
    new QDateTimeOffsetParam("EnrollmentStart", "enrollmentStart"),
    new QDateTimeOffsetParam("EnrollmentEnd", "enrollmentEnd"),
    new QDateTimeOffsetParam(
      "BenefitDetailValidFrom",
      "benefitDetailValidFrom",
    ),
    new QDateTimeOffsetParam("BenefitDetailValidTo", "benefitDetailValidTo"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPayIntV1EmploymentDetail extends QueryObject {
  public readonly personnelNumber = new QStringPath(
    this.withPrefix("PersonnelNumber"),
  );
  public readonly legalEntityId = new QStringPath(
    this.withPrefix("LegalEntityId"),
  );
  public readonly employmentStartDate = new QDateTimeOffsetPath(
    this.withPrefix("EmploymentStartDate"),
  );
  public readonly employmentEndDate = new QDateTimeOffsetPath(
    this.withPrefix("EmploymentEndDate"),
  );
  public readonly validFrom = new QDateTimeOffsetPath(
    this.withPrefix("ValidFrom"),
  );
  public readonly validTo = new QDateTimeOffsetPath(this.withPrefix("ValidTo"));
  public readonly workerNoticeAmount = new QNumberPath(
    this.withPrefix("WorkerNoticeAmount"),
  );
  public readonly payFrequency = new QNumberPath(
    this.withPrefix("PayFrequency"),
  );
  public readonly employmentType = new QEnumPath(
    this.withPrefix("EmploymentType"),
    HcmEmploymentType,
  );
  public readonly employmentCategoryId = new QStringPath(
    this.withPrefix("EmploymentCategoryId"),
  );
  public readonly lastDateWorked = new QDateTimeOffsetPath(
    this.withPrefix("LastDateWorked"),
  );
  public readonly payFrequencyId = new QStringPath(
    this.withPrefix("PayFrequencyId"),
  );
  public readonly employerNoticeAmount = new QNumberPath(
    this.withPrefix("EmployerNoticeAmount"),
  );
  public readonly reasonCodeId = new QNumberPath(
    this.withPrefix("ReasonCodeId"),
  );
  public readonly employmentTypeId = new QStringPath(
    this.withPrefix("EmploymentTypeId"),
  );
  public readonly transistionDate = new QDateTimeOffsetPath(
    this.withPrefix("TransistionDate"),
  );
  public readonly benefitEmploymentStatus = new QEnumPath(
    this.withPrefix("BenefitEmploymentStatus"),
    BenefitEmploymentStatus,
  );
  public readonly employerUnitOfNotice = new QEnumPath(
    this.withPrefix("EmployerUnitOfNotice"),
    HcmUnitOfNotice,
  );
  public readonly adjustedWorkerStartDate = new QDateTimeOffsetPath(
    this.withPrefix("AdjustedWorkerStartDate"),
  );
  public readonly workerStartDate = new QDateTimeOffsetPath(
    this.withPrefix("WorkerStartDate"),
  );
  public readonly workerUnitOfNotice = new QEnumPath(
    this.withPrefix("WorkerUnitOfNotice"),
    HcmUnitOfNotice,
  );
}

export const qPayIntV1EmploymentDetail = new QPayIntV1EmploymentDetail();

export class QPayIntV1EmploymentDetailId extends QId<PayIntV1EmploymentDetailId> {
  private readonly params = [
    new QStringParam("PersonnelNumber", "personnelNumber"),
    new QStringParam("LegalEntityId", "legalEntityId"),
    new QDateTimeOffsetParam("EmploymentStartDate", "employmentStartDate"),
    new QDateTimeOffsetParam("EmploymentEndDate", "employmentEndDate"),
    new QDateTimeOffsetParam("ValidFrom", "validFrom"),
    new QDateTimeOffsetParam("ValidTo", "validTo"),
  ];

  getParams() {
    return this.params;
  }
}

export class QPersonCountrySpecificFields extends QueryObject {
  public readonly partyNumber = new QStringPath(this.withPrefix("PartyNumber"));
  public readonly mxEmployeeBenefitsId = new QStringPath(
    this.withPrefix("MXEmployeeBenefitsID"),
  );
  public readonly inSalaryFactor = new QStringPath(
    this.withPrefix("INSalaryFactor"),
  );
  public readonly frLastWorkedPaidDay = new QDateTimeOffsetPath(
    this.withPrefix("FRLastWorkedPaidDay"),
  );
  public readonly chEducationCode = new QStringPath(
    this.withPrefix("CHEducationCode"),
  );
  public readonly frEmploymentContractCode = new QStringPath(
    this.withPrefix("FREmploymentContractCode"),
  );
  public readonly auTaxCode = new QStringPath(this.withPrefix("AUTaxCode"));
  public readonly frConventionalCategoricalStatus = new QStringPath(
    this.withPrefix("FRConventionalCategoricalStatus"),
  );
  public readonly sgAccountHolder = new QStringPath(
    this.withPrefix("SGAccountHolder"),
  );
  public readonly mxUnionId = new QStringPath(this.withPrefix("MXUnionID"));
  public readonly chEmployeeTasCanton = new QStringPath(
    this.withPrefix("CHEmployeeTASCanton"),
  );
  public readonly jpSpouseLiveTogether = new QEnumPath(
    this.withPrefix("JPSpouseLiveTogether"),
    NoYes,
  );
  public readonly mxEconomicRegion = new QStringPath(
    this.withPrefix("MXEconomicRegion"),
  );
  public readonly inContributeVoluntaryProvidentFund = new QEnumPath(
    this.withPrefix("INContributeVoluntaryProvidentFund"),
    NoYes,
  );
  public readonly inEmployeeProvidentFundRate = new QNumberPath(
    this.withPrefix("INEmployeeProvidentFundRate"),
  );
  public readonly deiban = new QDateTimeOffsetPath(this.withPrefix("DEIBAN"));
  public readonly arCategoryLevel = new QNumberPath(
    this.withPrefix("ARCategoryLevel"),
  );
  public readonly chTradeAgreement = new QStringPath(
    this.withPrefix("CHTradeAgreement"),
  );
  public readonly inContributeProfessionalTax = new QEnumPath(
    this.withPrefix("INContributeProfessionalTax"),
    NoYes,
  );
  public readonly frSecondmentExpatriate = new QStringPath(
    this.withPrefix("FRSecondmentExpatriate"),
  );
  public readonly frContractualHoursCode = new QStringPath(
    this.withPrefix("FRContractualHoursCode"),
  );
  public readonly itQualification = new QStringPath(
    this.withPrefix("ITQualification"),
  );
  public readonly hkOvertimePayType = new QEnumPath(
    this.withPrefix("HKOvertimePayType"),
    NoYes,
  );
  public readonly esSocialSecurityGroup = new QNumberPath(
    this.withPrefix("ESSocialSecurityGroup"),
  );
  public readonly jpHealthInsuranceMonthlyIncome = new QNumberPath(
    this.withPrefix("JPHealthInsuranceMonthlyIncome"),
  );
  public readonly chLanguage = new QStringPath(this.withPrefix("CHLanguage"));
  public readonly frBirthCounty = new QStringPath(
    this.withPrefix("FRBirthCounty"),
  );
  public readonly inContributeLabourWelfare = new QEnumPath(
    this.withPrefix("INContributeLabourWelfare"),
    NoYes,
  );
  public readonly frAgircStatus = new QStringPath(
    this.withPrefix("FRAgircStatus"),
  );
  public readonly freuCode = new QStringPath(this.withPrefix("FREUCode"));
  public readonly inFathersHusbandsName = new QStringPath(
    this.withPrefix("INFathersHusbandsName"),
  );
  public readonly esNationalIdNumber = new QStringPath(
    this.withPrefix("ESNationalIDNumber"),
  );
  public readonly jpWorkersCompensationInsuranceDate = new QDateTimeOffsetPath(
    this.withPrefix("JPWorkersCompensationInsuranceDate"),
  );
  public readonly mxCostCentre = new QStringPath(
    this.withPrefix("MXCostCentre"),
  );
  public readonly chEmployeeTasReligion = new QEnumPath(
    this.withPrefix("CHEmployeeTASReligion"),
    NoYes,
  );
  public readonly frProfessionalStatus = new QStringPath(
    this.withPrefix("FRProfessionalStatus"),
  );
  public readonly ieiban = new QStringPath(this.withPrefix("IEIBAN"));
  public readonly chEmployeeBvgCode = new QStringPath(
    this.withPrefix("CHEmployeeBVGCode"),
  );
  public readonly chWageContractType = new QStringPath(
    this.withPrefix("CHWageContractType"),
  );
  public readonly debic = new QDateTimeOffsetPath(this.withPrefix("DEBIC"));
  public readonly esTypeOfLeaverPayroll = new QStringPath(
    this.withPrefix("ESTypeOfLeaverPayroll"),
  );
  public readonly inNumberOfChildren = new QNumberPath(
    this.withPrefix("INNumberOfChildren"),
  );
  public readonly esEducationLevel = new QStringPath(
    this.withPrefix("ESEducationLevel"),
  );
  public readonly jpWorkersCompensationInsurance = new QStringPath(
    this.withPrefix("JPWorkersCompensationInsurance"),
  );
  public readonly sgEthnicGroup = new QStringPath(
    this.withPrefix("SGEthnicGroup"),
  );
  public readonly deOccupationNumber = new QDateTimeOffsetPath(
    this.withPrefix("DEOccupationNumber"),
  );
  public readonly esCategoryLevel = new QStringPath(
    this.withPrefix("ESCategoryLevel"),
  );
  public readonly frTermsOfActivityCode = new QStringPath(
    this.withPrefix("FRTermsOfActivityCode"),
  );
  public readonly jpPensionMonthlyIncome = new QNumberPath(
    this.withPrefix("JPPensionMonthlyIncome"),
  );
  public readonly inPaymentCurrency = new QStringPath(
    this.withPrefix("INPaymentCurrency"),
  );
  public readonly frInseeCode = new QStringPath(this.withPrefix("FRInseeCode"));
  public readonly deAdditionalJob = new QDateTimeOffsetPath(
    this.withPrefix("DEAdditionalJob"),
  );
  public readonly cnWorkingDays = new QNumberPath(
    this.withPrefix("CNWorkingDays"),
  );
  public readonly sgContributeCommunityChest = new QEnumPath(
    this.withPrefix("SGContributeCommunityChest"),
    NoYes,
  );
  public readonly nlStandbyEmployee = new QEnumPath(
    this.withPrefix("NLStandbyEmployee"),
    NoYes,
  );
  public readonly luPayslipLanguage = new QStringPath(
    this.withPrefix("LUPayslipLanguage"),
  );
  public readonly arHazardousWork = new QStringPath(
    this.withPrefix("ARHazardousWork"),
  );
  public readonly arSocialWorksAfflliation = new QStringPath(
    this.withPrefix("ARSocialWorksAfflliation"),
  );
  public readonly inProvidentFundNumber = new QStringPath(
    this.withPrefix("INProvidentFundNumber"),
  );
  public readonly hkAccountHolder = new QStringPath(
    this.withPrefix("HKAccountHolder"),
  );
  public readonly inSchoolNumberOfChildren = new QNumberPath(
    this.withPrefix("INSchoolNumberOfChildren"),
  );
  public readonly hkSalaryFactor = new QNumberPath(
    this.withPrefix("HKSalaryFactor"),
  );
  public readonly inLocation = new QStringPath(this.withPrefix("INLocation"));
  public readonly jpOvertimePaytype = new QStringPath(
    this.withPrefix("JPOvertimePaytype"),
  );
  public readonly chEmployeeTasCity = new QStringPath(
    this.withPrefix("CHEmployeeTASCity"),
  );
  public readonly frPopulationWorkCode = new QStringPath(
    this.withPrefix("FRPopulationWorkCode"),
  );
  public readonly jpUniversalPensionNumber = new QStringPath(
    this.withPrefix("JPUniversalPensionNumber"),
  );
  public readonly mxWorkdayId = new QStringPath(this.withPrefix("MXWorkdayID"));
  public readonly myPaymentMethod = new QStringPath(
    this.withPrefix("MYPaymentMethod"),
  );
  public readonly jpSpouseGender = new QStringPath(
    this.withPrefix("JPSpouseGender"),
  );
  public readonly frTerminationDisputeProcess = new QEnumPath(
    this.withPrefix("FRTerminationDisputeProcess"),
    NoYes,
  );
  public readonly esBirthCountry = new QStringPath(
    this.withPrefix("ESBirthCountry"),
  );
  public readonly luMonthlyHours = new QNumberPath(
    this.withPrefix("LUMonthlyHours"),
  );
  public readonly inSalaryCurrency = new QStringPath(
    this.withPrefix("INSalaryCurrency"),
  );
  public readonly jpSpouseBirthDate = new QDateTimeOffsetPath(
    this.withPrefix("JPSpouseBirthDate"),
  );
  public readonly arVacationDaysAmount = new QStringPath(
    this.withPrefix("ARVacationDaysAmount"),
  );
  public readonly sgContributeCdac = new QEnumPath(
    this.withPrefix("SGContributeCDAC"),
    NoYes,
  );
  public readonly myOvertimePayType = new QEnumPath(
    this.withPrefix("MYOvertimePayType"),
    NoYes,
  );
  public readonly auBankLocationCode = new QStringPath(
    this.withPrefix("AUBankLocationCode"),
  );
  public readonly frBirthName = new QStringPath(this.withPrefix("FRBirthName"));
  public readonly esOccupationCode = new QStringPath(
    this.withPrefix("ESOccupationCode"),
  );
  public readonly ieRetirementDate = new QStringPath(
    this.withPrefix("IERetirementDate"),
  );
  public readonly frMultipleEmployers = new QStringPath(
    this.withPrefix("FRMultipleEmployers"),
  );
  public readonly nlDirectorShareHolder = new QEnumPath(
    this.withPrefix("NLDirectorShareHolder"),
    NoYes,
  );
  public readonly chEmployeeTasStCode = new QStringPath(
    this.withPrefix("CHEmployeeTASStCode"),
  );
  public readonly jpPensionReferenceNumber = new QStringPath(
    this.withPrefix("JPPensionReferenceNumber"),
  );
  public readonly esContractOccupation = new QStringPath(
    this.withPrefix("ESContractOccupation"),
  );
  public readonly inuan = new QStringPath(this.withPrefix("INUAN"));
  public readonly deOccName = new QDateTimeOffsetPath(
    this.withPrefix("DEOcc_Name"),
  );
  public readonly jpHealthInsuranceNumber = new QStringPath(
    this.withPrefix("JPHealthInsuranceNumber"),
  );
  public readonly inAadhaar = new QStringPath(this.withPrefix("INAadhaar"));
  public readonly mxMilitaryServiceNumber = new QStringPath(
    this.withPrefix("MXMilitaryServiceNumber"),
  );
  public readonly nlReductionWorkTimeTax = new QEnumPath(
    this.withPrefix("NLReductionWorkTimeTax"),
    NoYes,
  );
  public readonly esbic = new QStringPath(this.withPrefix("ESBIC"));
  public readonly mxWorkPermitNumber = new QStringPath(
    this.withPrefix("MXWorkPermitNumber"),
  );
  public readonly inLegalName = new QStringPath(this.withPrefix("INLegalName"));
  public readonly sgOvertimePayType = new QEnumPath(
    this.withPrefix("SGOvertimePayType"),
    NoYes,
  );
  public readonly myContributeTax = new QEnumPath(
    this.withPrefix("MYContributeTax"),
    NoYes,
  );
  public readonly myWorkingDays = new QNumberPath(
    this.withPrefix("MYWorkingDays"),
  );
  public readonly esProRateType = new QStringPath(
    this.withPrefix("ESProRateType"),
  );
  public readonly gbbsReferenceNo = new QStringPath(
    this.withPrefix("GBBSReferenceNo"),
  );
  public readonly myContributeEpf = new QEnumPath(
    this.withPrefix("MYContributeEPF"),
    NoYes,
  );
  public readonly arNationalId = new QStringPath(
    this.withPrefix("ARNationalID"),
  );
  public readonly esCollectiveAgreementCode = new QStringPath(
    this.withPrefix("ESCollectiveAgreementCode"),
  );
  public readonly arCategoryLevelStartDate = new QDateTimeOffsetPath(
    this.withPrefix("ARCategoryLevelStartDate"),
  );
  public readonly nlLeaverSickOnLastDay = new QEnumPath(
    this.withPrefix("NLLeaverSickOnLastDay"),
    NoYes,
  );
  public readonly arSchedule = new QStringPath(this.withPrefix("ARSchedule"));
  public readonly sgContributeSdl = new QEnumPath(
    this.withPrefix("SGContributeSDL"),
    NoYes,
  );
  public readonly itLegalAddressFiscalCode0101 = new QStringPath(
    this.withPrefix("ITLegalAddressFiscalCode0101"),
  );
  public readonly auWorkState = new QStringPath(this.withPrefix("AUWorkState"));
  public readonly jpEmploymentInsuranceIssueDate = new QDateTimeOffsetPath(
    this.withPrefix("JPEmploymentInsuranceIssueDate"),
  );
  public readonly chWorkCity = new QStringPath(this.withPrefix("CHWorkCity"));
  public readonly jpTaxCategory = new QStringPath(
    this.withPrefix("JPTaxCategory"),
  );
  public readonly inPensionNo = new QStringPath(this.withPrefix("INPensionNo"));
  public readonly inContributeLabourWelfareFund = new QEnumPath(
    this.withPrefix("INContributeLabourWelfareFund"),
    NoYes,
  );
  public readonly arafjp = new QStringPath(this.withPrefix("ARAFJP"));
  public readonly myAccountHolder = new QStringPath(
    this.withPrefix("MYAccountHolder"),
  );
  public readonly cnAccountHolder = new QStringPath(
    this.withPrefix("CNAccountHolder"),
  );
  public readonly inWorkingDaysCode = new QStringPath(
    this.withPrefix("INWorkingDaysCode"),
  );
  public readonly arWorkDayId = new QStringPath(this.withPrefix("ARWorkDayID"));
  public readonly gbniLetter = new QStringPath(this.withPrefix("GBNILetter"));
  public readonly inContributeProvidentFund = new QEnumPath(
    this.withPrefix("INContributeProvidentFund"),
    NoYes,
  );
  public readonly sgContributeSinda = new QEnumPath(
    this.withPrefix("SGContributeSINDA"),
    NoYes,
  );
  public readonly lubic = new QStringPath(this.withPrefix("LUBIC"));
  public readonly inSecondaryNationalIdentifier = new QStringPath(
    this.withPrefix("INSecondaryNationalIdentifier"),
  );
  public readonly jpBankBranchName = new QStringPath(
    this.withPrefix("JPBankBranchName"),
  );
  public readonly arVacationStartDate = new QDateTimeOffsetPath(
    this.withPrefix("ARVacationStartDate"),
  );
  public readonly nlFamilyOfOwner = new QEnumPath(
    this.withPrefix("NLFamilyOfOwner"),
    NoYes,
  );
  public readonly arVacationType = new QStringPath(
    this.withPrefix("ARVacationType"),
  );
  public readonly frTypeOfNoticePeriod = new QStringPath(
    this.withPrefix("FRTypeOfNoticePeriod"),
  );
  public readonly itBirthPlace = new QStringPath(
    this.withPrefix("ITBirthPlace"),
  );
  public readonly jpEmploymentInsuranceNumber = new QStringPath(
    this.withPrefix("JPEmploymentInsuranceNumber"),
  );
  public readonly frCollectiveAgreementCode = new QStringPath(
    this.withPrefix("FRCollectiveAgreementCode"),
  );
  public readonly itLegalAddressCity0101 = new QStringPath(
    this.withPrefix("ITLegalAddressCity0101"),
  );
  public readonly chWorkState = new QStringPath(this.withPrefix("CHWorkState"));
  public readonly esTypeOfStarterPayroll = new QStringPath(
    this.withPrefix("ESTypeOfStarterPayroll"),
  );
  public readonly nlGrossNet = new QStringPath(this.withPrefix("NLGrossNet"));
  public readonly hkContributeMpf = new QEnumPath(
    this.withPrefix("HKContributeMPF"),
    NoYes,
  );
  public readonly esContractEndHolidays = new QNumberPath(
    this.withPrefix("ESContractEndHolidays"),
  );
  public readonly inEmployerProvidentFundRate = new QNumberPath(
    this.withPrefix("INEmployerProvidentFundRate"),
  );
  public readonly inotEntitlement = new QEnumPath(
    this.withPrefix("INOTEntitlement"),
    NoYes,
  );
  public readonly jpSpouseSurname = new QStringPath(
    this.withPrefix("JPSpouseSurname"),
  );
  public readonly arUnionAgreements = new QStringPath(
    this.withPrefix("ARUnionAgreements"),
  );
  public readonly arTaxExempt = new QEnumPath(
    this.withPrefix("ARTaxExempt"),
    NoYes,
  );
  public readonly esProfessionCode = new QStringPath(
    this.withPrefix("ESProfessionCode"),
  );
  public readonly esCompanyContributionCode = new QNumberPath(
    this.withPrefix("ESCompanyContributionCode"),
  );
  public readonly sgContributeEcf = new QEnumPath(
    this.withPrefix("SGContributeECF"),
    NoYes,
  );
  public readonly esNationalIdType = new QStringPath(
    this.withPrefix("ESNationalIDType"),
  );
  public readonly chEmployeeTasTaxCode = new QStringPath(
    this.withPrefix("CHEmployeeTASTaxCode"),
  );
  public readonly jpPensionIssueDate = new QDateTimeOffsetPath(
    this.withPrefix("JPPensionIssueDate"),
  );
  public readonly mxShiftId = new QStringPath(this.withPrefix("MXShiftID"));
  public readonly itLegalAddressRegionProvince0101 = new QStringPath(
    this.withPrefix("ITLegalAddressRegionProvince0101"),
  );
  public readonly arUnionAgreementReference = new QStringPath(
    this.withPrefix("ARUnionAgreementReference"),
  );
  public readonly sgContributeCpf = new QEnumPath(
    this.withPrefix("SGContributeCPF"),
    NoYes,
  );
  public readonly sgContributeMbmf = new QEnumPath(
    this.withPrefix("SGContributeMBMF"),
    NoYes,
  );
  public readonly myContributeSocso = new QEnumPath(
    this.withPrefix("MYContributeSOCSO"),
    NoYes,
  );
  public readonly itBirthPlaceRegionProvince = new QStringPath(
    this.withPrefix("ITBirthPlaceRegionProvince"),
  );
  public readonly chEmployeeAlvCode = new QStringPath(
    this.withPrefix("CHEmployeeALVCode"),
  );
  public readonly inAccountHolder = new QStringPath(
    this.withPrefix("INAccountHolder"),
  );
  public readonly inpan = new QNumberPath(this.withPrefix("INPAN"));
  public readonly chEmployeeAhvCode = new QStringPath(
    this.withPrefix("CHEmployeeAHVCode"),
  );
  public readonly chApprenticeTrainee = new QStringPath(
    this.withPrefix("CHApprenticeTrainee"),
  );
  public readonly esContractStartDate = new QDateTimeOffsetPath(
    this.withPrefix("ESContractStartDate"),
  );
  public readonly jpHealthInsuranceIssueDate = new QDateTimeOffsetPath(
    this.withPrefix("JPHealthInsuranceIssueDate"),
  );
  public readonly arOtherDocuments = new QEnumPath(
    this.withPrefix("AROtherDocuments"),
    NoYes,
  );
  public readonly sgLegalName = new QStringPath(this.withPrefix("SGLegalName"));
  public readonly hkPaymentCurrency = new QStringPath(
    this.withPrefix("HKPaymentCurrency"),
  );
  public readonly mxTaxNumber = new QStringPath(this.withPrefix("MXTaxNumber"));
  public readonly inContributeIncomeTax = new QEnumPath(
    this.withPrefix("INContributeIncomeTax"),
    NoYes,
  );
  public readonly jpBankLocationCode = new QStringPath(
    this.withPrefix("JPBankLocationCode"),
  );
  public readonly mxNationalIdNumber = new QStringPath(
    this.withPrefix("MXNationalIDNumber"),
  );
  public readonly gbSortCode = new QStringPath(this.withPrefix("GBSortCode"));
  public readonly frTermsOfWorkPeriodCode = new QStringPath(
    this.withPrefix("FRTermsOfWorkPeriodCode"),
  );
  public readonly inResignationDate = new QDateTimeOffsetPath(
    this.withPrefix("INResignationDate"),
  );
  public readonly chEmployeeSuvaCode = new QStringPath(
    this.withPrefix("CHEmployeeSUVACode"),
  );
  public readonly chProfessionalPosition = new QStringPath(
    this.withPrefix("CHProfessionalPosition"),
  );
  public readonly iebic = new QStringPath(this.withPrefix("IEBIC"));
  public readonly arVacationDaysType = new QStringPath(
    this.withPrefix("ARVacationDaysType"),
  );
  public readonly chEmployeeKtgCode = new QStringPath(
    this.withPrefix("CHEmployeeKTGCode"),
  );
  public readonly cnTaxCity = new QStringPath(this.withPrefix("CNTaxCity"));
  public readonly ieprsiClass = new QStringPath(this.withPrefix("IEPRSIClass"));
  public readonly luiban = new QStringPath(this.withPrefix("LUIBAN"));
  public readonly inpfLimit = new QNumberPath(this.withPrefix("INPFLimit"));
  public readonly luBirthName = new QStringPath(this.withPrefix("LUBirthName"));
  public readonly inWorkingDaysPerWeek = new QNumberPath(
    this.withPrefix("INWorkingDaysPerWeek"),
  );
  public readonly inEthnicGroup = new QStringPath(
    this.withPrefix("INEthnicGroup"),
  );
  public readonly itLevel = new QStringPath(this.withPrefix("ITLevel"));
  public readonly cnOvertimePaytype = new QStringPath(
    this.withPrefix("CNOvertimePaytype"),
  );
  public readonly inContributeEsi = new QEnumPath(
    this.withPrefix("INContributeESI"),
    NoYes,
  );
  public readonly inVoluntaryProvidentFundRate = new QNumberPath(
    this.withPrefix("INVoluntaryProvidentFundRate"),
  );
  public readonly chForeignerCategory = new QStringPath(
    this.withPrefix("CHForeignerCategory"),
  );
  public readonly jpSpouseFirstName = new QStringPath(
    this.withPrefix("JPSpouseFirstName"),
  );
  public readonly esPaymentCalendarType = new QNumberPath(
    this.withPrefix("ESPaymentCalendarType"),
  );
  public readonly ieAccountHolder = new QStringPath(
    this.withPrefix("IEAccountHolder"),
  );
  public readonly inWorkState = new QStringPath(this.withPrefix("INWorkState"));
  public readonly nlPreviousOwner = new QEnumPath(
    this.withPrefix("NLPreviousOwner"),
    NoYes,
  );
}

export const qPersonCountrySpecificFields = new QPersonCountrySpecificFields();

export class QPersonCountrySpecificFieldsId extends QId<PersonCountrySpecificFieldsId> {
  private readonly params = [new QStringParam("PartyNumber", "partyNumber")];

  getParams() {
    return this.params;
  }
}

export class QTimeAndAttendanceTimeProfileDetails extends QueryObject {
  public readonly dataAreaId = new QStringPath(this.withPrefix("dataAreaId"));
  public readonly timeProfileId = new QStringPath(
    this.withPrefix("TimeProfileId"),
  );
  public readonly weekDay = new QEnumPath(
    this.withPrefix("WeekDay"),
    JmgDayIdEnum,
  );
  public readonly canPayrollCalculationPushProfile = new QEnumPath(
    this.withPrefix("CanPayrollCalculationPushProfile"),
    NoYes,
  );
  public readonly hourPeriodStartSeconds = new QNumberPath(
    this.withPrefix("HourPeriodStartSeconds"),
  );
  public readonly hourPeriodStartRule = new QEnumPath(
    this.withPrefix("HourPeriodStartRule"),
    JmgProfileStartCodeBlankPrev,
  );
  public readonly overtimeFlexLimitSeconds = new QNumberPath(
    this.withPrefix("OvertimeFlexLimitSeconds"),
  );
  public readonly maximumFlexLimitSeconds = new QNumberPath(
    this.withPrefix("MaximumFlexLimitSeconds"),
  );
}

export const qTimeAndAttendanceTimeProfileDetails =
  new QTimeAndAttendanceTimeProfileDetails();

export class QTimeAndAttendanceTimeProfileDetailsId extends QId<TimeAndAttendanceTimeProfileDetailsId> {
  private readonly params = [
    new QStringParam("dataAreaId"),
    new QStringParam("TimeProfileId", "timeProfileId"),
    new QEnumParam("WeekDay", "weekDay"),
  ];

  getParams() {
    return this.params;
  }
}
