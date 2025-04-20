// @ts-nocheck

export enum NoYes {
  No = "No",
  Yes = "Yes",
}

export enum LeaveAmountUnit {
  Hours = "Hours",
  Days = "Days",
}

export enum HcmPersonGender {
  None = "None",
  Male = "Male",
  Female = "Female",
  NonSpecific = "NonSpecific",
}

export enum HcmUnitOfNotice {
  Week = "Week",
  Month = "Month",
}

export enum HcmPersonMaritalStatus {
  None = "None",
  Married = "Married",
  Single = "Single",
  Widowed = "Widowed",
  Divorced = "Divorced",
  Cohabiting = "Cohabiting",
  RegisteredPartnership = "RegisteredPartnership",
  Separated = "Separated",
  CivilPartnership = "CivilPartnership",
}

export enum PayrollBenefitRateSource {
  Benefit = "Benefit",
  Custom = "Custom",
}

export enum PayrollDeductionBasis {
  FixedAmount = "FixedAmount",
  PercentOfEarnings = "PercentOfEarnings",
  ProductiveHours = "ProductiveHours",
  AllHours = "AllHours",
  RegularPortionOfAllPay = "RegularPortionOfAllPay",
  RegularHours = "RegularHours",
  RegularEarnings = "RegularEarnings",
  TotalHours = "TotalHours",
}

export enum PayrollContributionBasis {
  FixedAmount = "FixedAmount",
  PercentOfEarnings = "PercentOfEarnings",
  ProductiveHours = "ProductiveHours",
  AllHours = "AllHours",
  RegularPortionOfAllPay = "RegularPortionOfAllPay",
  RegularHours = "RegularHours",
  RegularEarnings = "RegularEarnings",
  TotalHours = "TotalHours",
}

export enum HcmEmploymentType {
  Employee = "Employee",
  Contractor = "Contractor",
}

export enum PeriodUnit {
  Day = "Day",
  Month = "Month",
  Year = "Year",
  All = "All",
}

export enum HcmFmlaEligibilityPriorityDateType {
  SeniorityDate = "SeniorityDate",
  AdjustedStartDate = "AdjustedStartDate",
  StartDate = "StartDate",
  EmploymentStartDate = "EmploymentStartDate",
}

export enum HcmViewExitingWorkerOption {
  ViewNone = "ViewNone",
  ViewDirectReports = "ViewDirectReports",
  ViewExtendedReports = "ViewExtendedReports",
}

export enum HcmYearsOfServiceDisplay {
  EmploymentStartDate = "EmploymentStartDate",
  AdjustedStartDate = "AdjustedStartDate",
  SeniorityDate = "SeniorityDate",
}

export enum HcmOpenPositionsType {
  DirectReportsOnly = "DirectReportsOnly",
  ExtendedReports = "ExtendedReports",
  Both = "Both",
  None = "None",
}

export enum HcmFmlaEligibilityPeriodType {
  Months = "Months",
  Weeks = "Weeks",
}

export enum HcmFmlaCalendarType {
  CalendarYear = "CalendarYear",
  TwelveMonthMeasuredForward = "TwelveMonthMeasuredForward",
  RollingCalendar = "RollingCalendar",
  FixedCalendarAny = "FixedCalendarAny",
  FixedCalendarWorker = "FixedCalendarWorker",
}

export enum HrmCompRatingModel {
  CompRating = "CompRating",
  SkillRating = "SkillRating",
}

export enum LeaveBalanceCalculationOption {
  Today = "Today",
  AccrualPeriod = "AccrualPeriod",
}

export enum LeaveMonthsOfServiceCalculationOption {
  EndOfMonth = "EndOfMonth",
  StartOfNextMonth = "StartOfNextMonth",
}

export enum HcmWorkerRelationType {
  Both = "Both",
  Employee = "Employee",
  Contractor = "Contractor",
}

export enum LeaveHalfDayDefinition {
  None = "None",
  FirstHalf = "FirstHalf",
  SecondHalf = "SecondHalf",
}

export enum HrmCourseNotesType {
  Notes = "Notes",
  TargetGroup = "TargetGroup",
  Objective = "Objective",
  Topics = "Topics",
}

export enum HrmBlankYesNo {
  Blank = "Blank",
  Yes = "Yes",
  No = "No",
}

export enum HcmEducationCreditBasis {
  Blank = "Blank",
  Semester = "Semester",
  Quarter = "Quarter",
  Trimester = "Trimester",
  Term = "Term",
  Other = "Other",
}

export enum BenefitEmploymentStatus {
  None = "None",
  Employed = "Employed",
  Terminated = "Terminated",
  Retired = "Retired",
  Leave = "Leave",
  Layoff = "Layoff",
  Cobra = "Cobra",
  Severance = "Severance",
  Deceased = "Deceased",
  TmpLayoff = "TmpLayoff",
}

export enum LeaveHoursWorkedType {
  Regular = "Regular",
  Overtime = "Overtime",
}

export enum HrpAuthorityBasis {
  Job = "Job",
  Compensation = "Compensation",
}

export enum HrmCompVarPlanTypeType {
  Cash = "Cash",
  NoneCash = "NoneCash",
}

export enum JmgDayIdEnum {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Special = "Special",
}

export enum HcmPositionAvailableForAssignment {
  Always = "Always",
  Never = "Never",
}

export enum JmgProfileStartCodeBlankPrev {
  Blank = "Blank",
  Prev = "Prev",
}

export enum AxType {
  Container = "Container",
  Date = "Date",
  Enum = "Enum",
  Guid = "Guid",
  Int32 = "Int32",
  Int64 = "Int64",
  Real = "Real",
  Record = "Record",
  String = "String",
  Time = "Time",
  UtcDateTime = "UtcDateTime",
  Void = "Void",
}

export interface OrganizationHierarchyPublished {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HierarchyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  hierarchyType: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildOrganizationName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  childOrganizationName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `validFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `validTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelationshipType` |
   * | Type | `Edm.String` |
   */
  relationshipType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentOrganizationPartyNumber` |
   * | Type | `Edm.String` |
   */
  parentOrganizationPartyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildOrganizationPartyNumber` |
   * | Type | `Edm.String` |
   */
  childOrganizationPartyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentOrganizationName` |
   * | Type | `Edm.String` |
   */
  parentOrganizationName: string | null;
}

export type OrganizationHierarchyPublishedId = {
  hierarchyType: string;
  childOrganizationName: string;
  validFrom: string;
  validTo: string;
};

export interface EditableOrganizationHierarchyPublished
  extends Pick<
      OrganizationHierarchyPublished,
      "hierarchyType" | "childOrganizationName" | "validFrom" | "validTo"
    >,
    Partial<
      Pick<
        OrganizationHierarchyPublished,
        | "relationshipType"
        | "parentOrganizationPartyNumber"
        | "childOrganizationPartyNumber"
        | "parentOrganizationName"
      >
    > {}

export interface HumanResourcesParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableInjuryIllnessIncidentRetention` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableInjuryIllnessIncidentRetention: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityPriorityDateSequence4` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEligibilityPriorityDateSequence4: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementStandardHours` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  fmlaEntitlementStandardHours: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MssExitingWorkersPeriodUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  mssExitingWorkersPeriodUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityLengthOfEmployment` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  fmlaEligibilityLengthOfEmployment: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodOther` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  paymentMethodOther: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ViewExpiringRecordsRange` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  viewExpiringRecordsRange: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeavingSoonWorkersPeriodUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  leavingSoonWorkersPeriodUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PostalAddressChangePeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  postalAddressChangePeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationWordDocuTypeId` |
   * | Type | `Edm.String` |
   */
  applicationWordDocuTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodCheck` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  paymentMethodCheck: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementAnniversaryPriorityDateSequence4` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEntitlementAnniversaryPriorityDateSequence4: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementAnniversaryPriorityDateSequence2` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEntitlementAnniversaryPriorityDateSequence2: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementAnniversaryPriorityDateSequence3` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEntitlementAnniversaryPriorityDateSequence3: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementAnniversaryPriorityDateSequence1` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEntitlementAnniversaryPriorityDateSequence1: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeavingSoonWorkersPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  leavingSoonWorkersPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InjuryIllnessIncidentRetentionDays` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  injuryIllnessIncidentRetentionDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AbsenceStatusColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  absenceStatusColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MssViewExitingWorkerOption` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmViewExitingWorkerOption` |
   */
  mssViewExitingWorkerOption: HcmViewExitingWorkerOption | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `YearsOfServiceDisplay` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmYearsOfServiceDisplay` |
   */
  yearsOfServiceDisplay: HcmYearsOfServiceDisplay | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityPriorityDateSequence3` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEligibilityPriorityDateSequence3: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ViewExpiredRecordsRange` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  viewExpiredRecordsRange: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompensationCompetencyRatingModelId` |
   * | Type | `Edm.String` |
   */
  compensationCompetencyRatingModelId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityPriorityDateSequence2` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEligibilityPriorityDateSequence2: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecentHireWorkersPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  recentHireWorkersPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MssOpenPositionsType` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmOpenPositionsType` |
   */
  mssOpenPositionsType: HcmOpenPositionsType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultIdentificationTypeId` |
   * | Type | `Edm.String` |
   */
  defaultIdentificationTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityPeriodType` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPeriodType` |
   */
  fmlaEligibilityPeriodType: HcmFmlaEligibilityPeriodType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityPriorityDateSequence1` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType` |
   */
  fmlaEligibilityPriorityDateSequence1: HcmFmlaEligibilityPriorityDateType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodBankDraft` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  paymentMethodBankDraft: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationExpirationPeriodUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  applicationExpirationPeriodUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationEmailDocuTypeId` |
   * | Type | `Edm.String` |
   */
  applicationEmailDocuTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationAttachmentType` |
   * | Type | `Edm.String` |
   */
  applicationAttachmentType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationExpirationPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  applicationExpirationPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElectronicDisbursementValidationDisabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  electronicDisbursementValidationDisabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IdentificationTypeDefault` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  identificationTypeDefault: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowRehireDefault` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowRehireDefault: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodElectronicPayment` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  paymentMethodElectronicPayment: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MssExitingWorkersPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  mssExitingWorkersPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BankAccountAndRoutingNumberValidationDisabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  bankAccountAndRoutingNumberValidationDisabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementUseEligibilityPrioritySequence` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  fmlaEntitlementUseEligibilityPrioritySequence: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementLeaveCalendarType` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmFMLACalendarType` |
   */
  fmlaEntitlementLeaveCalendarType: HcmFmlaCalendarType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodCash` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  paymentMethodCash: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementMilitaryHours` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  fmlaEntitlementMilitaryHours: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEligibilityHoursWorked` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  fmlaEligibilityHoursWorked: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationUnsolictedRecruitingId` |
   * | Type | `Edm.String` |
   */
  applicationUnsolictedRecruitingId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecentHireWorkersPeriodUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  recentHireWorkersPeriodUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FMLAEntitlementLeaveCalendarStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  fmlaEntitlementLeaveCalendarStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitDoNotRestrictUpdatesToPlansWithLifeEvent` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  benefitDoNotRestrictUpdatesToPlansWithLifeEvent: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitExtendedDesigneeRequirements` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  benefitExtendedDesigneeRequirements: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitEnrollmentConfirmationDefaultEmailFromAddress` |
   * | Type | `Edm.String` |
   */
  benefitEnrollmentConfirmationDefaultEmailFromAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitLockConfirmedPlans` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  benefitLockConfirmedPlans: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitEnrollmentConfirmationSendEmail` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  benefitEnrollmentConfirmationSendEmail: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitEssNewHireEnrollmentPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  benefitEssNewHireEnrollmentPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitFutureBirthDateEligibility` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  benefitFutureBirthDateEligibility: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitEnrollmentConfirmationEmailTemplateId` |
   * | Type | `Edm.String` |
   */
  benefitEnrollmentConfirmationEmailTemplateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExitedWorkersPeriod` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  exitedWorkersPeriod: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExitedWorkersPeriodUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  exitedWorkersPeriodUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompensationRatingSource` |
   * | Type | `Microsoft.Dynamics.DataEntities.HrmCompRatingModel` |
   */
  compensationRatingSource: HrmCompRatingModel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableHalfDayDefinition` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableHalfDayDefinition: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveAmountUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveAmountUnit` |
   */
  leaveAmountUnit: LeaveAmountUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveBalanceCalculationOption` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveBalanceCalculationOption` |
   */
  leaveBalanceCalculationOption: LeaveBalanceCalculationOption | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveMonthsOfServiceCalculationOption` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveMonthsOfServiceCalculationOption` |
   */
  leaveMonthsOfServiceCalculationOption: LeaveMonthsOfServiceCalculationOption | null;
}

export type HumanResourcesParametersId = string | { dataAreaId: string };

export interface EditableHumanResourcesParameters
  extends Pick<
      HumanResourcesParameters,
      | "fmlaEntitlementStandardHours"
      | "fmlaEligibilityLengthOfEmployment"
      | "viewExpiringRecordsRange"
      | "postalAddressChangePeriod"
      | "leavingSoonWorkersPeriod"
      | "injuryIllnessIncidentRetentionDays"
      | "absenceStatusColor"
      | "viewExpiredRecordsRange"
      | "recentHireWorkersPeriod"
      | "applicationExpirationPeriod"
      | "identificationTypeDefault"
      | "mssExitingWorkersPeriod"
      | "fmlaEntitlementMilitaryHours"
      | "fmlaEligibilityHoursWorked"
      | "fmlaEntitlementLeaveCalendarStartDate"
      | "benefitEssNewHireEnrollmentPeriod"
      | "exitedWorkersPeriod"
    >,
    Partial<
      Pick<
        HumanResourcesParameters,
        | "enableInjuryIllnessIncidentRetention"
        | "fmlaEligibilityPriorityDateSequence4"
        | "mssExitingWorkersPeriodUnit"
        | "paymentMethodOther"
        | "leavingSoonWorkersPeriodUnit"
        | "applicationWordDocuTypeId"
        | "paymentMethodCheck"
        | "fmlaEntitlementAnniversaryPriorityDateSequence4"
        | "fmlaEntitlementAnniversaryPriorityDateSequence2"
        | "fmlaEntitlementAnniversaryPriorityDateSequence3"
        | "fmlaEntitlementAnniversaryPriorityDateSequence1"
        | "mssViewExitingWorkerOption"
        | "yearsOfServiceDisplay"
        | "fmlaEligibilityPriorityDateSequence3"
        | "compensationCompetencyRatingModelId"
        | "fmlaEligibilityPriorityDateSequence2"
        | "mssOpenPositionsType"
        | "defaultIdentificationTypeId"
        | "fmlaEligibilityPeriodType"
        | "fmlaEligibilityPriorityDateSequence1"
        | "paymentMethodBankDraft"
        | "applicationExpirationPeriodUnit"
        | "applicationEmailDocuTypeId"
        | "applicationAttachmentType"
        | "electronicDisbursementValidationDisabled"
        | "allowRehireDefault"
        | "paymentMethodElectronicPayment"
        | "bankAccountAndRoutingNumberValidationDisabled"
        | "fmlaEntitlementUseEligibilityPrioritySequence"
        | "fmlaEntitlementLeaveCalendarType"
        | "paymentMethodCash"
        | "applicationUnsolictedRecruitingId"
        | "recentHireWorkersPeriodUnit"
        | "benefitDoNotRestrictUpdatesToPlansWithLifeEvent"
        | "benefitExtendedDesigneeRequirements"
        | "benefitEnrollmentConfirmationDefaultEmailFromAddress"
        | "benefitLockConfirmedPlans"
        | "benefitEnrollmentConfirmationSendEmail"
        | "benefitFutureBirthDateEligibility"
        | "benefitEnrollmentConfirmationEmailTemplateId"
        | "exitedWorkersPeriodUnit"
        | "compensationRatingSource"
        | "enableHalfDayDefinition"
        | "leaveAmountUnit"
        | "leaveBalanceCalculationOption"
        | "leaveMonthsOfServiceCalculationOption"
      >
    > {}

export interface PayIntV1LaborUnions {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnionID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `negotiator` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  negotiator: NoYes | null;
}

export type PayIntV1LaborUnionsId = string | { unionId: string };

export interface EditablePayIntV1LaborUnions
  extends Partial<Pick<PayIntV1LaborUnions, "name" | "negotiator">> {}

export interface HcmWorkerPersonIdentificationNumberDualWrite {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkerNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  workerNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IdentificationTypeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  identificationTypeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IdentificationNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  identificationNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpirationDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expirationDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPrimary` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isPrimary: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IssuingAgencyId` |
   * | Type | `Edm.String` |
   */
  issuingAgencyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IssueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  issueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyNumber` |
   * | Type | `Edm.String` |
   */
  partyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryType` |
   * | Type | `Edm.String` |
   */
  entryType: string | null;
}

export type HcmWorkerPersonIdentificationNumberDualWriteId = {
  workerNumber: string;
  identificationTypeId: string;
  identificationNumber: string;
};

export interface EditableHcmWorkerPersonIdentificationNumberDualWrite
  extends Pick<
      HcmWorkerPersonIdentificationNumberDualWrite,
      | "workerNumber"
      | "identificationTypeId"
      | "identificationNumber"
      | "expirationDate"
      | "issueDate"
    >,
    Partial<
      Pick<
        HcmWorkerPersonIdentificationNumberDualWrite,
        | "description"
        | "isPrimary"
        | "issuingAgencyId"
        | "partyNumber"
        | "entryType"
      >
    > {}

export interface CourseTypeNotes {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourseTypeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  courseTypeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NotesType` |
   * | Type | `Microsoft.Dynamics.DataEntities.HrmCourseNotesType` |
   */
  notesType: HrmCourseNotesType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  notes: string | null;
}

export type CourseTypeNotesId = {
  courseTypeId: string;
  notesType: HrmCourseNotesType | null;
};

export interface EditableCourseTypeNotes
  extends Pick<CourseTypeNotes, "courseTypeId">,
    Partial<Pick<CourseTypeNotes, "notesType" | "notes">> {}

export interface EssSystemParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Key` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  key: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrganizationPrivacyStatementURL` |
   * | Type | `Edm.String` |
   */
  organizationPrivacyStatementUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemLanguageId` |
   * | Type | `Edm.String` |
   */
  systemLanguageId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrganizationLegalTermsURL` |
   * | Type | `Edm.String` |
   */
  organizationLegalTermsUrl: string | null;
}

export type EssSystemParametersId = number | { key: number };

export interface EditableEssSystemParameters
  extends Partial<
    Pick<
      EssSystemParameters,
      | "organizationPrivacyStatementUrl"
      | "systemLanguageId"
      | "organizationLegalTermsUrl"
    >
  > {}

export interface BenefitEarningBasis {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EarningCodeId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  earningCodeId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitPlanId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  benefitPlanId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitOptionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  benefitOptionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Effective` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  effective: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expiration: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitId` |
   * | Type | `Edm.String` |
   */
  benefitId: string | null;
}

export type BenefitEarningBasisId = {
  earningCodeId: string;
  benefitPlanId: string;
  benefitOptionId: string;
  effective: string;
  expiration: string;
};

export interface EditableBenefitEarningBasis
  extends Pick<
      BenefitEarningBasis,
      | "earningCodeId"
      | "benefitPlanId"
      | "benefitOptionId"
      | "effective"
      | "expiration"
    >,
    Partial<Pick<BenefitEarningBasis, "benefitId">> {}

export interface WorkerPersonDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Gender` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmPersonGender` |
   */
  gender: HcmPersonGender | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfDependents` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  numberOfDependents: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VeteranStatusId` |
   * | Type | `Edm.String` |
   */
  veteranStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CitizenshipCountryRegion` |
   * | Type | `Edm.String` |
   */
  citizenshipCountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsExpatriateRulingApplicable` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isExpatriateRulingApplicable: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EthnicOriginId` |
   * | Type | `Edm.String` |
   */
  ethnicOriginId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BirthDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  birthDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisabledVerificationDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  disabledVerificationDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MotherBirthCountryRegion` |
   * | Type | `Edm.String` |
   */
  motherBirthCountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NativeLanguageId` |
   * | Type | `Edm.String` |
   */
  nativeLanguageId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Education` |
   * | Type | `Edm.String` |
   */
  education: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaritalStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmPersonMaritalStatus` |
   */
  maritalStatus: HcmPersonMaritalStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeceasedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deceasedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonBirthCountryRegion` |
   * | Type | `Edm.String` |
   */
  personBirthCountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NationalityCountryRegion` |
   * | Type | `Edm.String` |
   */
  nationalityCountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonBirthCity` |
   * | Type | `Edm.String` |
   */
  personBirthCity: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FatherBirthCountryRegion` |
   * | Type | `Edm.String` |
   */
  fatherBirthCountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceEndDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateEndDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDisabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isDisabled: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsFulltimeStudent` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isFulltimeStudent: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisabledVeteran` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  disabledVeteran: NoYes | null;
}

export type WorkerPersonDetailsId = string | { personnelNumber: string };

export interface EditableWorkerPersonDetails
  extends Pick<
      WorkerPersonDetails,
      | "numberOfDependents"
      | "birthDate"
      | "disabledVerificationDate"
      | "expatriateStartDate"
      | "deceasedDate"
      | "validTo"
      | "validFrom"
      | "militaryServiceEndDate"
      | "expatriateEndDate"
      | "militaryServiceStartDate"
    >,
    Partial<
      Pick<
        WorkerPersonDetails,
        | "gender"
        | "veteranStatusId"
        | "citizenshipCountryRegion"
        | "isExpatriateRulingApplicable"
        | "ethnicOriginId"
        | "motherBirthCountryRegion"
        | "nativeLanguageId"
        | "education"
        | "maritalStatus"
        | "personBirthCountryRegion"
        | "nationalityCountryRegion"
        | "personBirthCity"
        | "fatherBirthCountryRegion"
        | "isDisabled"
        | "isFulltimeStudent"
        | "disabledVeteran"
      >
    > {}

export interface PayIntV1HcmPersonDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  partyNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceEndDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfDependents` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  numberOfDependents: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsExpatriateRulingApplicable` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isExpatriateRulingApplicable: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDisabledVeteran` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isDisabledVeteran: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaritalStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmPersonMaritalStatus` |
   */
  maritalStatus: HcmPersonMaritalStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitMaritalStatusDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  benefitMaritalStatusDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateRulingValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateRulingValidTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateRulingValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateRulingValidFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VeteranStatusId` |
   * | Type | `Edm.String` |
   */
  veteranStatusId: string | null;
}

export type PayIntV1HcmPersonDetailsId = {
  partyNumber: string;
  validFrom: string;
  validTo: string;
};

export interface EditablePayIntV1HcmPersonDetails
  extends Pick<
      PayIntV1HcmPersonDetails,
      | "partyNumber"
      | "validFrom"
      | "validTo"
      | "militaryServiceEndDate"
      | "numberOfDependents"
      | "benefitMaritalStatusDate"
      | "expatriateRulingValidTo"
      | "militaryServiceStartDate"
      | "expatriateRulingValidFrom"
    >,
    Partial<
      Pick<
        PayIntV1HcmPersonDetails,
        | "isExpatriateRulingApplicable"
        | "isDisabledVeteran"
        | "maritalStatus"
        | "veteranStatusId"
      >
    > {}

export interface WorkerProfessionalExperience {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  startDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerPosition` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  employerPosition: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  employerName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerLocation` |
   * | Type | `Edm.String` |
   */
  employerLocation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowContactEmployer` |
   * | Type | `Microsoft.Dynamics.DataEntities.HrmBlankYesNo` |
   */
  allowContactEmployer: HrmBlankYesNo | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  endDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Phone` |
   * | Type | `Edm.String` |
   */
  phone: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `URL` |
   * | Type | `Edm.String` |
   */
  url: string | null;
}

export type WorkerProfessionalExperienceId = {
  startDate: string;
  employerPosition: string;
  employerName: string;
  personnelNumber: string;
};

export interface EditableWorkerProfessionalExperience
  extends Pick<
      WorkerProfessionalExperience,
      | "startDate"
      | "employerPosition"
      | "employerName"
      | "personnelNumber"
      | "endDate"
    >,
    Partial<
      Pick<
        WorkerProfessionalExperience,
        "note" | "employerLocation" | "allowContactEmployer" | "phone" | "url"
      >
    > {}

export interface LaborUnions {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnionID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `negotiator` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  negotiator: NoYes | null;
}

export type LaborUnionsId = string | { unionId: string };

export interface EditableLaborUnions
  extends Partial<Pick<LaborUnions, "name" | "negotiator">> {}

export interface WorkerEducation {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EducationDisciplineId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  educationDisciplineId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EducationInstitutionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  educationInstitutionId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EducationLevelId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  educationLevelId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Duration` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  duration: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.PeriodUnit` |
   */
  durationUnit: PeriodUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreditsEarned` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  creditsEarned: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GradePointAverage` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  gradePointAverage: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreditBasis` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmEducationCreditBasis` |
   */
  creditBasis: HcmEducationCreditBasis | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  startDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GradeScale` |
   * | Type | `Edm.String` |
   */
  gradeScale: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreditsCompleted` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  creditsCompleted: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreditsNeeded` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  creditsNeeded: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  endDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecondaryEmphasis` |
   * | Type | `Edm.String` |
   */
  secondaryEmphasis: string | null;
}

export type WorkerEducationId = {
  personnelNumber: string;
  educationDisciplineId: string;
  educationInstitutionId: string;
  educationLevelId: string;
};

export interface EditableWorkerEducation
  extends Pick<
      WorkerEducation,
      | "personnelNumber"
      | "educationDisciplineId"
      | "educationInstitutionId"
      | "educationLevelId"
      | "duration"
      | "creditsEarned"
      | "gradePointAverage"
      | "startDate"
      | "creditsCompleted"
      | "creditsNeeded"
      | "endDate"
    >,
    Partial<
      Pick<
        WorkerEducation,
        | "description"
        | "durationUnit"
        | "creditBasis"
        | "notes"
        | "gradeScale"
        | "secondaryEmphasis"
      >
    > {}

export interface PersonDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  partyNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceEndDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfDependents` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  numberOfDependents: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsExpatriateRulingApplicable` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isExpatriateRulingApplicable: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDisabledVeteran` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isDisabledVeteran: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaritalStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmPersonMaritalStatus` |
   */
  maritalStatus: HcmPersonMaritalStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateRulingValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateRulingValidTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MilitaryServiceStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  militaryServiceStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpatriateRulingValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  expatriateRulingValidFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VeteranStatusId` |
   * | Type | `Edm.String` |
   */
  veteranStatusId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitMaritalStatusDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  benefitMaritalStatusDate: string;
}

export type PersonDetailsId = {
  partyNumber: string;
  validFrom: string;
  validTo: string;
};

export interface EditablePersonDetails
  extends Pick<
      PersonDetails,
      | "partyNumber"
      | "validFrom"
      | "validTo"
      | "militaryServiceEndDate"
      | "numberOfDependents"
      | "expatriateRulingValidTo"
      | "militaryServiceStartDate"
      | "expatriateRulingValidFrom"
      | "benefitMaritalStatusDate"
    >,
    Partial<
      Pick<
        PersonDetails,
        | "isExpatriateRulingApplicable"
        | "isDisabledVeteran"
        | "maritalStatus"
        | "veteranStatusId"
      >
    > {}

export interface LeaveAbsenceParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowBirthdayInAbsenceCoordinatorCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showBirthdayInAbsenceCoordinatorCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowLeaveOfAbsenceInAbsenceCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showLeaveOfAbsenceInAbsenceCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarSickLeaveColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  calendarSickLeaveColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarLeaveApprovedColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  calendarLeaveApprovedColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarShowWorkerTypeAbsenceCoordinator` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmWorkerRelationType` |
   */
  calendarShowWorkerTypeAbsenceCoordinator: HcmWorkerRelationType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveBalanceCalculationOption` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveBalanceCalculationOption` |
   */
  leaveBalanceCalculationOption: LeaveBalanceCalculationOption | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveBalanceExpirationBatchStartTime` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  leaveBalanceExpirationBatchStartTime: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowPendingLeaveInManagerCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showPendingLeaveInManagerCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowOnlyAbsenceInTeamCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showOnlyAbsenceInTeamCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowOnlyAbsenceInCompanyCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showOnlyAbsenceInCompanyCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarShowWorkerTypeAbsenceManager` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmWorkerRelationType` |
   */
  calendarShowWorkerTypeAbsenceManager: HcmWorkerRelationType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveAmountUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveAmountUnit` |
   */
  leaveAmountUnit: LeaveAmountUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowLeaveOfAbsenceInTeamCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showLeaveOfAbsenceInTeamCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarLeaveRequestedColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  calendarLeaveRequestedColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarCurrentSickColor` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  calendarCurrentSickColor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveMonthsOfServiceCalculationOption` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveMonthsOfServiceCalculationOption` |
   */
  leaveMonthsOfServiceCalculationOption: LeaveMonthsOfServiceCalculationOption | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableReturnToWorkNotice` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableReturnToWorkNotice: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowBirthdayInCompanyCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showBirthdayInCompanyCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowPendingLeaveInCompanyCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showPendingLeaveInCompanyCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SickLeaveHalfDay` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sickLeaveHalfDay: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarShowWorkerTypeGlobal` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmWorkerRelationType` |
   */
  calendarShowWorkerTypeGlobal: HcmWorkerRelationType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableBuyLeavePolicy` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableBuyLeavePolicy: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailTemplateId` |
   * | Type | `Edm.String` |
   */
  emailTemplateId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarLeaveDisable` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  calendarLeaveDisable: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowBirthdayInManagerCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showBirthdayInManagerCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarSickLeaveDisable` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  calendarSickLeaveDisable: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowLeaveOfAbsenceInManagerCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showLeaveOfAbsenceInManagerCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveNumOfDaysBeforeUpload` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  leaveNumOfDaysBeforeUpload: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowPendingLeaveInAbsenceCoordinatorCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showPendingLeaveInAbsenceCoordinatorCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowManagerSickLeaveIndirect` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowManagerSickLeaveIndirect: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowSickLeaveInCompanyCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showSickLeaveInCompanyCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableHalfDayDefinition` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableHalfDayDefinition: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowOnlyAbsenceInManagerCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showOnlyAbsenceInManagerCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AbsenceHierarchyType` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  absenceHierarchyType: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisclosureGuidance` |
   * | Type | `Edm.String` |
   */
  disclosureGuidance: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableWorkflowForSickLeaveNotice` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableWorkflowForSickLeaveNotice: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableSellLeavePolicy` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableSellLeavePolicy: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MandatoryEndDateForSickLeave` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mandatoryEndDateForSickLeave: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDateOfSickLeave` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  endDateOfSickLeave: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowPendingLeaveInTeamCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showPendingLeaveInTeamCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveCalculationChange` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  leaveCalculationChange: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnableDisclosureGuidance` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  enableDisclosureGuidance: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowBirthdayInTeamCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showBirthdayInTeamCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowLeaveOfAbsenceInCompanyCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showLeaveOfAbsenceInCompanyCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarShowWorkerTypeManager` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmWorkerRelationType` |
   */
  calendarShowWorkerTypeManager: HcmWorkerRelationType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowOnlyAbsenceInAbsenceCoordinatorCalendar` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  showOnlyAbsenceInAbsenceCoordinatorCalendar: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MssLeaveAndAbsenceRequestEnabled` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  mssLeaveAndAbsenceRequestEnabled: NoYes | null;
}

export type LeaveAbsenceParametersId = string | { dataAreaId: string };

export interface EditableLeaveAbsenceParameters
  extends Pick<
      LeaveAbsenceParameters,
      | "calendarSickLeaveColor"
      | "calendarLeaveApprovedColor"
      | "leaveBalanceExpirationBatchStartTime"
      | "calendarLeaveRequestedColor"
      | "calendarCurrentSickColor"
      | "leaveNumOfDaysBeforeUpload"
      | "absenceHierarchyType"
    >,
    Partial<
      Pick<
        LeaveAbsenceParameters,
        | "showBirthdayInAbsenceCoordinatorCalendar"
        | "showLeaveOfAbsenceInAbsenceCalendar"
        | "calendarShowWorkerTypeAbsenceCoordinator"
        | "leaveBalanceCalculationOption"
        | "showPendingLeaveInManagerCalendar"
        | "showOnlyAbsenceInTeamCalendar"
        | "showOnlyAbsenceInCompanyCalendar"
        | "calendarShowWorkerTypeAbsenceManager"
        | "leaveAmountUnit"
        | "showLeaveOfAbsenceInTeamCalendar"
        | "leaveMonthsOfServiceCalculationOption"
        | "enableReturnToWorkNotice"
        | "showBirthdayInCompanyCalendar"
        | "showPendingLeaveInCompanyCalendar"
        | "sickLeaveHalfDay"
        | "calendarShowWorkerTypeGlobal"
        | "enableBuyLeavePolicy"
        | "emailTemplateId"
        | "calendarLeaveDisable"
        | "showBirthdayInManagerCalendar"
        | "calendarSickLeaveDisable"
        | "showLeaveOfAbsenceInManagerCalendar"
        | "showPendingLeaveInAbsenceCoordinatorCalendar"
        | "allowManagerSickLeaveIndirect"
        | "showSickLeaveInCompanyCalendar"
        | "enableHalfDayDefinition"
        | "showOnlyAbsenceInManagerCalendar"
        | "disclosureGuidance"
        | "enableWorkflowForSickLeaveNotice"
        | "enableSellLeavePolicy"
        | "mandatoryEndDateForSickLeave"
        | "endDateOfSickLeave"
        | "showPendingLeaveInTeamCalendar"
        | "leaveCalculationChange"
        | "enableDisclosureGuidance"
        | "showBirthdayInTeamCalendar"
        | "showLeaveOfAbsenceInCompanyCalendar"
        | "calendarShowWorkerTypeManager"
        | "showOnlyAbsenceInAbsenceCoordinatorCalendar"
        | "mssLeaveAndAbsenceRequestEnabled"
      >
    > {}

export interface OrganizationHierarchyPublishedV2 {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HierarchyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  hierarchyType: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildOrganizationPartyNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  childOrganizationPartyNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `validFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelationshipType` |
   * | Type | `Edm.String` |
   */
  relationshipType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentOrganizationPartyNumber` |
   * | Type | `Edm.String` |
   */
  parentOrganizationPartyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `validTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildOrganizationName` |
   * | Type | `Edm.String` |
   */
  childOrganizationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentOrganizationName` |
   * | Type | `Edm.String` |
   */
  parentOrganizationName: string | null;
}

export type OrganizationHierarchyPublishedV2Id = {
  hierarchyType: string;
  childOrganizationPartyNumber: string;
  validFrom: string;
};

export interface EditableOrganizationHierarchyPublishedV2
  extends Pick<
      OrganizationHierarchyPublishedV2,
      "hierarchyType" | "childOrganizationPartyNumber" | "validFrom" | "validTo"
    >,
    Partial<
      Pick<
        OrganizationHierarchyPublishedV2,
        | "relationshipType"
        | "parentOrganizationPartyNumber"
        | "childOrganizationName"
        | "parentOrganizationName"
      >
    > {}

export interface SignLimitParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Key` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  key: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SigningLimitsForEmployeesOnly` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  signingLimitsForEmployeesOnly: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LimitBasis` |
   * | Type | `Microsoft.Dynamics.DataEntities.HrpAuthorityBasis` |
   */
  limitBasis: HrpAuthorityBasis | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequireExplicitSigningLimitRequest` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  requireExplicitSigningLimitRequest: NoYes | null;
}

export type SignLimitParametersId = number | { key: number };

export interface EditableSignLimitParameters
  extends Partial<
    Pick<
      SignLimitParameters,
      | "signingLimitsForEmployeesOnly"
      | "limitBasis"
      | "requireExplicitSigningLimitRequest"
    >
  > {}

export interface WorkerTimeOff {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  leaveDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeaveAmountUnit` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveAmountUnit` |
   */
  leaveAmountUnit: LeaveAmountUnit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HalfDayDefinition` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveHalfDayDefinition` |
   */
  halfDayDefinition: LeaveHalfDayDefinition | null;
}

export type WorkerTimeOffId = { personnelNumber: string; leaveDate: string };

export interface EditableWorkerTimeOff
  extends Pick<WorkerTimeOff, "personnelNumber" | "leaveDate" | "amount">,
    Partial<Pick<WorkerTimeOff, "leaveAmountUnit" | "halfDayDefinition">> {}

export interface PayIntV1VariableCompensationTypes {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VariableCompensationType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  variableCompensationType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Microsoft.Dynamics.DataEntities.HrmCompVarPlanTypeType` |
   */
  type: HrmCompVarPlanTypeType | null;
}

export type PayIntV1VariableCompensationTypesId = {
  dataAreaId: string;
  variableCompensationType: string;
};

export interface EditablePayIntV1VariableCompensationTypes
  extends Pick<
      PayIntV1VariableCompensationTypes,
      "dataAreaId" | "variableCompensationType"
    >,
    Partial<Pick<PayIntV1VariableCompensationTypes, "description" | "type">> {}

export interface PositionNotificationSubscriptions {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RetailOperation_OperationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  retailOperationOperationId: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HcmPosition_PositionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  hcmPositionPositionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  displayOrder: number;
}

export type PositionNotificationSubscriptionsId = {
  retailOperationOperationId: number;
  hcmPositionPositionId: string;
};

export interface EditablePositionNotificationSubscriptions
  extends Pick<
    PositionNotificationSubscriptions,
    "retailOperationOperationId" | "hcmPositionPositionId" | "displayOrder"
  > {}

export interface HoursWorked {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateWorked` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  dateWorked: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Microsoft.Dynamics.DataEntities.LeaveHoursWorkedType` |
   */
  type: LeaveHoursWorkedType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hours` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  hours: number;
}

export type HoursWorkedId = {
  dataAreaId: string;
  personnelNumber: string;
  dateWorked: string;
  type: LeaveHoursWorkedType | null;
};

export interface EditableHoursWorked
  extends Pick<
      HoursWorked,
      "dataAreaId" | "personnelNumber" | "dateWorked" | "hours"
    >,
    Partial<Pick<HoursWorked, "type">> {}

export interface HumanResourcesSharedParameters {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Key` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  key: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowCompletedPositionActionDeletion` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowCompletedPositionActionDeletion: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckDepartmentUsageBeforeDeleting` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  checkDepartmentUsageBeforeDeleting: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelActionWorker` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  personnelActionWorker: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrackADA` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  trackAda: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonalIdentificationTypeId` |
   * | Type | `Edm.String` |
   */
  personalIdentificationTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllowCompletedWorkerActionDeletion` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  allowCompletedWorkerActionDeletion: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NationalIdentificationTypeId` |
   * | Type | `Edm.String` |
   */
  nationalIdentificationTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SocialSecurityNumberIdentificationTypeId` |
   * | Type | `Edm.String` |
   */
  socialSecurityNumberIdentificationTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VerifyI9EmplEligibility` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  verifyI9EmplEligibility: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlienIdentificationTypeId` |
   * | Type | `Edm.String` |
   */
  alienIdentificationTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PositionAvailableForAssignmentDefault` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmPositionAvailableForAssignment` |
   */
  positionAvailableForAssignmentDefault: HcmPositionAvailableForAssignment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelActionPosition` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  personnelActionPosition: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepartmentMandatoryForPosition` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  departmentMandatoryForPosition: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PSNJobDescriptionLockOnPositionForecast` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  psnJobDescriptionLockOnPositionForecast: NoYes | null;
}

export type HumanResourcesSharedParametersId = number | { key: number };

export interface EditableHumanResourcesSharedParameters
  extends Partial<
    Pick<
      HumanResourcesSharedParameters,
      | "allowCompletedPositionActionDeletion"
      | "checkDepartmentUsageBeforeDeleting"
      | "personnelActionWorker"
      | "trackAda"
      | "personalIdentificationTypeId"
      | "allowCompletedWorkerActionDeletion"
      | "nationalIdentificationTypeId"
      | "socialSecurityNumberIdentificationTypeId"
      | "verifyI9EmplEligibility"
      | "alienIdentificationTypeId"
      | "positionAvailableForAssignmentDefault"
      | "personnelActionPosition"
      | "departmentMandatoryForPosition"
      | "psnJobDescriptionLockOnPositionForecast"
    >
  > {}

export interface PayIntV1Unions {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntitledToNegotiate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  entitledToNegotiate: NoYes | null;
}

export type PayIntV1UnionsId = string | { unionId: string };

export interface EditablePayIntV1Unions
  extends Partial<Pick<PayIntV1Unions, "name" | "entitledToNegotiate">> {}

export interface Unions {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnionId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  unionId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntitledToNegotiate` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  entitledToNegotiate: NoYes | null;
}

export type UnionsId = string | { unionId: string };

export interface EditableUnions
  extends Partial<Pick<Unions, "name" | "entitledToNegotiate">> {}

export interface WorkerEnrolledBenefitDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  benefitId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnrollmentStart` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  enrollmentStart: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnrollmentEnd` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  enrollmentEnd: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitDetailValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  benefitDetailValidFrom: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitDetailValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  benefitDetailValidTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContributionAmountCur` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  contributionAmountCur: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContributionBasis` |
   * | Type | `Microsoft.Dynamics.DataEntities.PayrollContributionBasis` |
   */
  contributionBasis: PayrollContributionBasis | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyNumber` |
   * | Type | `Edm.String` |
   */
  partyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeductionPriorityNumber` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  deductionPriorityNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeductionBasis` |
   * | Type | `Microsoft.Dynamics.DataEntities.PayrollDeductionBasis` |
   */
  deductionBasis: PayrollDeductionBasis | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContributionRateSource` |
   * | Type | `Microsoft.Dynamics.DataEntities.PayrollBenefitRateSource` |
   */
  contributionRateSource: PayrollBenefitRateSource | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PositionId` |
   * | Type | `Edm.String` |
   */
  positionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OverrideLimit` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  overrideLimit: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalculationPriorityNumber` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  calculationPriorityNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataArea` |
   * | Type | `Edm.String` |
   */
  dataArea: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeductionAmountCur` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  deductionAmountCur: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeductionRateSource` |
   * | Type | `Microsoft.Dynamics.DataEntities.PayrollBenefitRateSource` |
   */
  deductionRateSource: PayrollBenefitRateSource | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsRetirementCatchUp` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  isRetirementCatchUp: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VendAccountNum` |
   * | Type | `Edm.String` |
   */
  vendAccountNum: string | null;
}

export type WorkerEnrolledBenefitDetailsId = {
  benefitId: string;
  personnelNumber: string;
  enrollmentStart: string;
  enrollmentEnd: string;
  benefitDetailValidFrom: string;
  benefitDetailValidTo: string;
};

export interface EditableWorkerEnrolledBenefitDetails
  extends Pick<
      WorkerEnrolledBenefitDetails,
      | "benefitId"
      | "personnelNumber"
      | "enrollmentStart"
      | "enrollmentEnd"
      | "benefitDetailValidFrom"
      | "benefitDetailValidTo"
      | "contributionAmountCur"
      | "deductionPriorityNumber"
      | "calculationPriorityNumber"
      | "deductionAmountCur"
    >,
    Partial<
      Pick<
        WorkerEnrolledBenefitDetails,
        | "contributionBasis"
        | "partyNumber"
        | "deductionBasis"
        | "contributionRateSource"
        | "positionId"
        | "overrideLimit"
        | "dataArea"
        | "note"
        | "deductionRateSource"
        | "isRetirementCatchUp"
        | "vendAccountNum"
      >
    > {}

export interface PayIntV1EmploymentDetail {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonnelNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  personnelNumber: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LegalEntityId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  legalEntityId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmploymentStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  employmentStartDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmploymentEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  employmentEndDate: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidFrom` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validFrom: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidTo` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  validTo: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkerNoticeAmount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  workerNoticeAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayFrequency` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  payFrequency: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmploymentType` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmEmploymentType` |
   */
  employmentType: HcmEmploymentType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmploymentCategoryId` |
   * | Type | `Edm.String` |
   */
  employmentCategoryId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastDateWorked` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  lastDateWorked: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayFrequencyId` |
   * | Type | `Edm.String` |
   */
  payFrequencyId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerNoticeAmount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  employerNoticeAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReasonCodeId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  reasonCodeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmploymentTypeId` |
   * | Type | `Edm.String` |
   */
  employmentTypeId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransistionDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  transistionDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenefitEmploymentStatus` |
   * | Type | `Microsoft.Dynamics.DataEntities.BenefitEmploymentStatus` |
   */
  benefitEmploymentStatus: BenefitEmploymentStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerUnitOfNotice` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmUnitOfNotice` |
   */
  employerUnitOfNotice: HcmUnitOfNotice | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdjustedWorkerStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  adjustedWorkerStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkerStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  workerStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WorkerUnitOfNotice` |
   * | Type | `Microsoft.Dynamics.DataEntities.HcmUnitOfNotice` |
   */
  workerUnitOfNotice: HcmUnitOfNotice | null;
}

export type PayIntV1EmploymentDetailId = {
  personnelNumber: string;
  legalEntityId: string;
  employmentStartDate: string;
  employmentEndDate: string;
  validFrom: string;
  validTo: string;
};

export interface EditablePayIntV1EmploymentDetail
  extends Pick<
      PayIntV1EmploymentDetail,
      | "personnelNumber"
      | "legalEntityId"
      | "employmentStartDate"
      | "employmentEndDate"
      | "validFrom"
      | "validTo"
      | "workerNoticeAmount"
      | "payFrequency"
      | "lastDateWorked"
      | "employerNoticeAmount"
      | "reasonCodeId"
      | "transistionDate"
      | "adjustedWorkerStartDate"
      | "workerStartDate"
    >,
    Partial<
      Pick<
        PayIntV1EmploymentDetail,
        | "employmentType"
        | "employmentCategoryId"
        | "payFrequencyId"
        | "employmentTypeId"
        | "benefitEmploymentStatus"
        | "employerUnitOfNotice"
        | "workerUnitOfNotice"
      >
    > {}

export interface PersonCountrySpecificFields {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  partyNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXEmployeeBenefitsID` |
   * | Type | `Edm.String` |
   */
  mxEmployeeBenefitsId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INSalaryFactor` |
   * | Type | `Edm.String` |
   */
  inSalaryFactor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRLastWorkedPaidDay` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  frLastWorkedPaidDay: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEducationCode` |
   * | Type | `Edm.String` |
   */
  chEducationCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FREmploymentContractCode` |
   * | Type | `Edm.String` |
   */
  frEmploymentContractCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AUTaxCode` |
   * | Type | `Edm.String` |
   */
  auTaxCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRConventionalCategoricalStatus` |
   * | Type | `Edm.String` |
   */
  frConventionalCategoricalStatus: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGAccountHolder` |
   * | Type | `Edm.String` |
   */
  sgAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXUnionID` |
   * | Type | `Edm.String` |
   */
  mxUnionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeTASCanton` |
   * | Type | `Edm.String` |
   */
  chEmployeeTasCanton: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPSpouseLiveTogether` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  jpSpouseLiveTogether: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXEconomicRegion` |
   * | Type | `Edm.String` |
   */
  mxEconomicRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeVoluntaryProvidentFund` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeVoluntaryProvidentFund: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INEmployeeProvidentFundRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inEmployeeProvidentFundRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DEIBAN` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deiban: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARCategoryLevel` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  arCategoryLevel: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHTradeAgreement` |
   * | Type | `Edm.String` |
   */
  chTradeAgreement: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeProfessionalTax` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeProfessionalTax: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRSecondmentExpatriate` |
   * | Type | `Edm.String` |
   */
  frSecondmentExpatriate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRContractualHoursCode` |
   * | Type | `Edm.String` |
   */
  frContractualHoursCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITQualification` |
   * | Type | `Edm.String` |
   */
  itQualification: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HKOvertimePayType` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  hkOvertimePayType: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESSocialSecurityGroup` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  esSocialSecurityGroup: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPHealthInsuranceMonthlyIncome` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  jpHealthInsuranceMonthlyIncome: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHLanguage` |
   * | Type | `Edm.String` |
   */
  chLanguage: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRBirthCounty` |
   * | Type | `Edm.String` |
   */
  frBirthCounty: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeLabourWelfare` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeLabourWelfare: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRAgircStatus` |
   * | Type | `Edm.String` |
   */
  frAgircStatus: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FREUCode` |
   * | Type | `Edm.String` |
   */
  freuCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INFathersHusbandsName` |
   * | Type | `Edm.String` |
   */
  inFathersHusbandsName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESNationalIDNumber` |
   * | Type | `Edm.String` |
   */
  esNationalIdNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPWorkersCompensationInsuranceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  jpWorkersCompensationInsuranceDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXCostCentre` |
   * | Type | `Edm.String` |
   */
  mxCostCentre: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeTASReligion` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  chEmployeeTasReligion: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRProfessionalStatus` |
   * | Type | `Edm.String` |
   */
  frProfessionalStatus: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IEIBAN` |
   * | Type | `Edm.String` |
   */
  ieiban: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeBVGCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeBvgCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHWageContractType` |
   * | Type | `Edm.String` |
   */
  chWageContractType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DEBIC` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  debic: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESTypeOfLeaverPayroll` |
   * | Type | `Edm.String` |
   */
  esTypeOfLeaverPayroll: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INNumberOfChildren` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inNumberOfChildren: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESEducationLevel` |
   * | Type | `Edm.String` |
   */
  esEducationLevel: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPWorkersCompensationInsurance` |
   * | Type | `Edm.String` |
   */
  jpWorkersCompensationInsurance: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGEthnicGroup` |
   * | Type | `Edm.String` |
   */
  sgEthnicGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DEOccupationNumber` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deOccupationNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESCategoryLevel` |
   * | Type | `Edm.String` |
   */
  esCategoryLevel: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRTermsOfActivityCode` |
   * | Type | `Edm.String` |
   */
  frTermsOfActivityCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPPensionMonthlyIncome` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  jpPensionMonthlyIncome: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INPaymentCurrency` |
   * | Type | `Edm.String` |
   */
  inPaymentCurrency: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRInseeCode` |
   * | Type | `Edm.String` |
   */
  frInseeCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DEAdditionalJob` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deAdditionalJob: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CNWorkingDays` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  cnWorkingDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeCommunityChest` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeCommunityChest: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLStandbyEmployee` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlStandbyEmployee: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LUPayslipLanguage` |
   * | Type | `Edm.String` |
   */
  luPayslipLanguage: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARHazardousWork` |
   * | Type | `Edm.String` |
   */
  arHazardousWork: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARSocialWorksAfflliation` |
   * | Type | `Edm.String` |
   */
  arSocialWorksAfflliation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INProvidentFundNumber` |
   * | Type | `Edm.String` |
   */
  inProvidentFundNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HKAccountHolder` |
   * | Type | `Edm.String` |
   */
  hkAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INSchoolNumberOfChildren` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inSchoolNumberOfChildren: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HKSalaryFactor` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  hkSalaryFactor: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INLocation` |
   * | Type | `Edm.String` |
   */
  inLocation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPOvertimePaytype` |
   * | Type | `Edm.String` |
   */
  jpOvertimePaytype: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeTASCity` |
   * | Type | `Edm.String` |
   */
  chEmployeeTasCity: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRPopulationWorkCode` |
   * | Type | `Edm.String` |
   */
  frPopulationWorkCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPUniversalPensionNumber` |
   * | Type | `Edm.String` |
   */
  jpUniversalPensionNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXWorkdayID` |
   * | Type | `Edm.String` |
   */
  mxWorkdayId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYPaymentMethod` |
   * | Type | `Edm.String` |
   */
  myPaymentMethod: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPSpouseGender` |
   * | Type | `Edm.String` |
   */
  jpSpouseGender: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRTerminationDisputeProcess` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  frTerminationDisputeProcess: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESBirthCountry` |
   * | Type | `Edm.String` |
   */
  esBirthCountry: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LUMonthlyHours` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  luMonthlyHours: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INSalaryCurrency` |
   * | Type | `Edm.String` |
   */
  inSalaryCurrency: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPSpouseBirthDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  jpSpouseBirthDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARVacationDaysAmount` |
   * | Type | `Edm.String` |
   */
  arVacationDaysAmount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeCDAC` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeCdac: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYOvertimePayType` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  myOvertimePayType: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AUBankLocationCode` |
   * | Type | `Edm.String` |
   */
  auBankLocationCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRBirthName` |
   * | Type | `Edm.String` |
   */
  frBirthName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESOccupationCode` |
   * | Type | `Edm.String` |
   */
  esOccupationCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IERetirementDate` |
   * | Type | `Edm.String` |
   */
  ieRetirementDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRMultipleEmployers` |
   * | Type | `Edm.String` |
   */
  frMultipleEmployers: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLDirectorShareHolder` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlDirectorShareHolder: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeTASStCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeTasStCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPPensionReferenceNumber` |
   * | Type | `Edm.String` |
   */
  jpPensionReferenceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESContractOccupation` |
   * | Type | `Edm.String` |
   */
  esContractOccupation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INUAN` |
   * | Type | `Edm.String` |
   */
  inuan: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DEOcc_Name` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  deOccName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPHealthInsuranceNumber` |
   * | Type | `Edm.String` |
   */
  jpHealthInsuranceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INAadhaar` |
   * | Type | `Edm.String` |
   */
  inAadhaar: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXMilitaryServiceNumber` |
   * | Type | `Edm.String` |
   */
  mxMilitaryServiceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLReductionWorkTimeTax` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlReductionWorkTimeTax: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESBIC` |
   * | Type | `Edm.String` |
   */
  esbic: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXWorkPermitNumber` |
   * | Type | `Edm.String` |
   */
  mxWorkPermitNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INLegalName` |
   * | Type | `Edm.String` |
   */
  inLegalName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGOvertimePayType` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgOvertimePayType: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYContributeTax` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  myContributeTax: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYWorkingDays` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  myWorkingDays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESProRateType` |
   * | Type | `Edm.String` |
   */
  esProRateType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GBBSReferenceNo` |
   * | Type | `Edm.String` |
   */
  gbbsReferenceNo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYContributeEPF` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  myContributeEpf: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARNationalID` |
   * | Type | `Edm.String` |
   */
  arNationalId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESCollectiveAgreementCode` |
   * | Type | `Edm.String` |
   */
  esCollectiveAgreementCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARCategoryLevelStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  arCategoryLevelStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLLeaverSickOnLastDay` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlLeaverSickOnLastDay: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARSchedule` |
   * | Type | `Edm.String` |
   */
  arSchedule: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeSDL` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeSdl: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITLegalAddressFiscalCode0101` |
   * | Type | `Edm.String` |
   */
  itLegalAddressFiscalCode0101: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AUWorkState` |
   * | Type | `Edm.String` |
   */
  auWorkState: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPEmploymentInsuranceIssueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  jpEmploymentInsuranceIssueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHWorkCity` |
   * | Type | `Edm.String` |
   */
  chWorkCity: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPTaxCategory` |
   * | Type | `Edm.String` |
   */
  jpTaxCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INPensionNo` |
   * | Type | `Edm.String` |
   */
  inPensionNo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeLabourWelfareFund` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeLabourWelfareFund: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARAFJP` |
   * | Type | `Edm.String` |
   */
  arafjp: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYAccountHolder` |
   * | Type | `Edm.String` |
   */
  myAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CNAccountHolder` |
   * | Type | `Edm.String` |
   */
  cnAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INWorkingDaysCode` |
   * | Type | `Edm.String` |
   */
  inWorkingDaysCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARWorkDayID` |
   * | Type | `Edm.String` |
   */
  arWorkDayId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GBNILetter` |
   * | Type | `Edm.String` |
   */
  gbniLetter: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeProvidentFund` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeProvidentFund: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeSINDA` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeSinda: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LUBIC` |
   * | Type | `Edm.String` |
   */
  lubic: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INSecondaryNationalIdentifier` |
   * | Type | `Edm.String` |
   */
  inSecondaryNationalIdentifier: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPBankBranchName` |
   * | Type | `Edm.String` |
   */
  jpBankBranchName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARVacationStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  arVacationStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLFamilyOfOwner` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlFamilyOfOwner: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARVacationType` |
   * | Type | `Edm.String` |
   */
  arVacationType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRTypeOfNoticePeriod` |
   * | Type | `Edm.String` |
   */
  frTypeOfNoticePeriod: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITBirthPlace` |
   * | Type | `Edm.String` |
   */
  itBirthPlace: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPEmploymentInsuranceNumber` |
   * | Type | `Edm.String` |
   */
  jpEmploymentInsuranceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRCollectiveAgreementCode` |
   * | Type | `Edm.String` |
   */
  frCollectiveAgreementCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITLegalAddressCity0101` |
   * | Type | `Edm.String` |
   */
  itLegalAddressCity0101: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHWorkState` |
   * | Type | `Edm.String` |
   */
  chWorkState: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESTypeOfStarterPayroll` |
   * | Type | `Edm.String` |
   */
  esTypeOfStarterPayroll: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLGrossNet` |
   * | Type | `Edm.String` |
   */
  nlGrossNet: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HKContributeMPF` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  hkContributeMpf: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESContractEndHolidays` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  esContractEndHolidays: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INEmployerProvidentFundRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inEmployerProvidentFundRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INOTEntitlement` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inotEntitlement: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPSpouseSurname` |
   * | Type | `Edm.String` |
   */
  jpSpouseSurname: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARUnionAgreements` |
   * | Type | `Edm.String` |
   */
  arUnionAgreements: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARTaxExempt` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  arTaxExempt: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESProfessionCode` |
   * | Type | `Edm.String` |
   */
  esProfessionCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESCompanyContributionCode` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  esCompanyContributionCode: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeECF` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeEcf: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESNationalIDType` |
   * | Type | `Edm.String` |
   */
  esNationalIdType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeTASTaxCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeTasTaxCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPPensionIssueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  jpPensionIssueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXShiftID` |
   * | Type | `Edm.String` |
   */
  mxShiftId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITLegalAddressRegionProvince0101` |
   * | Type | `Edm.String` |
   */
  itLegalAddressRegionProvince0101: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARUnionAgreementReference` |
   * | Type | `Edm.String` |
   */
  arUnionAgreementReference: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeCPF` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeCpf: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGContributeMBMF` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  sgContributeMbmf: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MYContributeSOCSO` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  myContributeSocso: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITBirthPlaceRegionProvince` |
   * | Type | `Edm.String` |
   */
  itBirthPlaceRegionProvince: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeALVCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeAlvCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INAccountHolder` |
   * | Type | `Edm.String` |
   */
  inAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INPAN` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  inpan: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeAHVCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeAhvCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHApprenticeTrainee` |
   * | Type | `Edm.String` |
   */
  chApprenticeTrainee: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESContractStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  esContractStartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPHealthInsuranceIssueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  jpHealthInsuranceIssueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AROtherDocuments` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  arOtherDocuments: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SGLegalName` |
   * | Type | `Edm.String` |
   */
  sgLegalName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HKPaymentCurrency` |
   * | Type | `Edm.String` |
   */
  hkPaymentCurrency: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXTaxNumber` |
   * | Type | `Edm.String` |
   */
  mxTaxNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeIncomeTax` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeIncomeTax: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPBankLocationCode` |
   * | Type | `Edm.String` |
   */
  jpBankLocationCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MXNationalIDNumber` |
   * | Type | `Edm.String` |
   */
  mxNationalIdNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GBSortCode` |
   * | Type | `Edm.String` |
   */
  gbSortCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FRTermsOfWorkPeriodCode` |
   * | Type | `Edm.String` |
   */
  frTermsOfWorkPeriodCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INResignationDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  inResignationDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeSUVACode` |
   * | Type | `Edm.String` |
   */
  chEmployeeSuvaCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHProfessionalPosition` |
   * | Type | `Edm.String` |
   */
  chProfessionalPosition: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IEBIC` |
   * | Type | `Edm.String` |
   */
  iebic: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ARVacationDaysType` |
   * | Type | `Edm.String` |
   */
  arVacationDaysType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHEmployeeKTGCode` |
   * | Type | `Edm.String` |
   */
  chEmployeeKtgCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CNTaxCity` |
   * | Type | `Edm.String` |
   */
  cnTaxCity: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IEPRSIClass` |
   * | Type | `Edm.String` |
   */
  ieprsiClass: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LUIBAN` |
   * | Type | `Edm.String` |
   */
  luiban: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INPFLimit` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inpfLimit: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LUBirthName` |
   * | Type | `Edm.String` |
   */
  luBirthName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INWorkingDaysPerWeek` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inWorkingDaysPerWeek: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INEthnicGroup` |
   * | Type | `Edm.String` |
   */
  inEthnicGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ITLevel` |
   * | Type | `Edm.String` |
   */
  itLevel: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CNOvertimePaytype` |
   * | Type | `Edm.String` |
   */
  cnOvertimePaytype: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INContributeESI` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  inContributeEsi: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INVoluntaryProvidentFundRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  inVoluntaryProvidentFundRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CHForeignerCategory` |
   * | Type | `Edm.String` |
   */
  chForeignerCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JPSpouseFirstName` |
   * | Type | `Edm.String` |
   */
  jpSpouseFirstName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESPaymentCalendarType` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  esPaymentCalendarType: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IEAccountHolder` |
   * | Type | `Edm.String` |
   */
  ieAccountHolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `INWorkState` |
   * | Type | `Edm.String` |
   */
  inWorkState: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NLPreviousOwner` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  nlPreviousOwner: NoYes | null;
}

export type PersonCountrySpecificFieldsId = string | { partyNumber: string };

export interface EditablePersonCountrySpecificFields
  extends Pick<
      PersonCountrySpecificFields,
      | "frLastWorkedPaidDay"
      | "inEmployeeProvidentFundRate"
      | "deiban"
      | "arCategoryLevel"
      | "esSocialSecurityGroup"
      | "jpHealthInsuranceMonthlyIncome"
      | "jpWorkersCompensationInsuranceDate"
      | "debic"
      | "inNumberOfChildren"
      | "deOccupationNumber"
      | "jpPensionMonthlyIncome"
      | "deAdditionalJob"
      | "cnWorkingDays"
      | "inSchoolNumberOfChildren"
      | "hkSalaryFactor"
      | "luMonthlyHours"
      | "jpSpouseBirthDate"
      | "deOccName"
      | "myWorkingDays"
      | "arCategoryLevelStartDate"
      | "jpEmploymentInsuranceIssueDate"
      | "arVacationStartDate"
      | "esContractEndHolidays"
      | "inEmployerProvidentFundRate"
      | "esCompanyContributionCode"
      | "jpPensionIssueDate"
      | "inpan"
      | "esContractStartDate"
      | "jpHealthInsuranceIssueDate"
      | "inResignationDate"
      | "inpfLimit"
      | "inWorkingDaysPerWeek"
      | "inVoluntaryProvidentFundRate"
      | "esPaymentCalendarType"
    >,
    Partial<
      Pick<
        PersonCountrySpecificFields,
        | "mxEmployeeBenefitsId"
        | "inSalaryFactor"
        | "chEducationCode"
        | "frEmploymentContractCode"
        | "auTaxCode"
        | "frConventionalCategoricalStatus"
        | "sgAccountHolder"
        | "mxUnionId"
        | "chEmployeeTasCanton"
        | "jpSpouseLiveTogether"
        | "mxEconomicRegion"
        | "inContributeVoluntaryProvidentFund"
        | "chTradeAgreement"
        | "inContributeProfessionalTax"
        | "frSecondmentExpatriate"
        | "frContractualHoursCode"
        | "itQualification"
        | "hkOvertimePayType"
        | "chLanguage"
        | "frBirthCounty"
        | "inContributeLabourWelfare"
        | "frAgircStatus"
        | "freuCode"
        | "inFathersHusbandsName"
        | "esNationalIdNumber"
        | "mxCostCentre"
        | "chEmployeeTasReligion"
        | "frProfessionalStatus"
        | "ieiban"
        | "chEmployeeBvgCode"
        | "chWageContractType"
        | "esTypeOfLeaverPayroll"
        | "esEducationLevel"
        | "jpWorkersCompensationInsurance"
        | "sgEthnicGroup"
        | "esCategoryLevel"
        | "frTermsOfActivityCode"
        | "inPaymentCurrency"
        | "frInseeCode"
        | "sgContributeCommunityChest"
        | "nlStandbyEmployee"
        | "luPayslipLanguage"
        | "arHazardousWork"
        | "arSocialWorksAfflliation"
        | "inProvidentFundNumber"
        | "hkAccountHolder"
        | "inLocation"
        | "jpOvertimePaytype"
        | "chEmployeeTasCity"
        | "frPopulationWorkCode"
        | "jpUniversalPensionNumber"
        | "mxWorkdayId"
        | "myPaymentMethod"
        | "jpSpouseGender"
        | "frTerminationDisputeProcess"
        | "esBirthCountry"
        | "inSalaryCurrency"
        | "arVacationDaysAmount"
        | "sgContributeCdac"
        | "myOvertimePayType"
        | "auBankLocationCode"
        | "frBirthName"
        | "esOccupationCode"
        | "ieRetirementDate"
        | "frMultipleEmployers"
        | "nlDirectorShareHolder"
        | "chEmployeeTasStCode"
        | "jpPensionReferenceNumber"
        | "esContractOccupation"
        | "inuan"
        | "jpHealthInsuranceNumber"
        | "inAadhaar"
        | "mxMilitaryServiceNumber"
        | "nlReductionWorkTimeTax"
        | "esbic"
        | "mxWorkPermitNumber"
        | "inLegalName"
        | "sgOvertimePayType"
        | "myContributeTax"
        | "esProRateType"
        | "gbbsReferenceNo"
        | "myContributeEpf"
        | "arNationalId"
        | "esCollectiveAgreementCode"
        | "nlLeaverSickOnLastDay"
        | "arSchedule"
        | "sgContributeSdl"
        | "itLegalAddressFiscalCode0101"
        | "auWorkState"
        | "chWorkCity"
        | "jpTaxCategory"
        | "inPensionNo"
        | "inContributeLabourWelfareFund"
        | "arafjp"
        | "myAccountHolder"
        | "cnAccountHolder"
        | "inWorkingDaysCode"
        | "arWorkDayId"
        | "gbniLetter"
        | "inContributeProvidentFund"
        | "sgContributeSinda"
        | "lubic"
        | "inSecondaryNationalIdentifier"
        | "jpBankBranchName"
        | "nlFamilyOfOwner"
        | "arVacationType"
        | "frTypeOfNoticePeriod"
        | "itBirthPlace"
        | "jpEmploymentInsuranceNumber"
        | "frCollectiveAgreementCode"
        | "itLegalAddressCity0101"
        | "chWorkState"
        | "esTypeOfStarterPayroll"
        | "nlGrossNet"
        | "hkContributeMpf"
        | "inotEntitlement"
        | "jpSpouseSurname"
        | "arUnionAgreements"
        | "arTaxExempt"
        | "esProfessionCode"
        | "sgContributeEcf"
        | "esNationalIdType"
        | "chEmployeeTasTaxCode"
        | "mxShiftId"
        | "itLegalAddressRegionProvince0101"
        | "arUnionAgreementReference"
        | "sgContributeCpf"
        | "sgContributeMbmf"
        | "myContributeSocso"
        | "itBirthPlaceRegionProvince"
        | "chEmployeeAlvCode"
        | "inAccountHolder"
        | "chEmployeeAhvCode"
        | "chApprenticeTrainee"
        | "arOtherDocuments"
        | "sgLegalName"
        | "hkPaymentCurrency"
        | "mxTaxNumber"
        | "inContributeIncomeTax"
        | "jpBankLocationCode"
        | "mxNationalIdNumber"
        | "gbSortCode"
        | "frTermsOfWorkPeriodCode"
        | "chEmployeeSuvaCode"
        | "chProfessionalPosition"
        | "iebic"
        | "arVacationDaysType"
        | "chEmployeeKtgCode"
        | "cnTaxCity"
        | "ieprsiClass"
        | "luiban"
        | "luBirthName"
        | "inEthnicGroup"
        | "itLevel"
        | "cnOvertimePaytype"
        | "inContributeEsi"
        | "chForeignerCategory"
        | "jpSpouseFirstName"
        | "ieAccountHolder"
        | "inWorkState"
        | "nlPreviousOwner"
      >
    > {}

export interface TimeAndAttendanceTimeProfileDetails {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `dataAreaId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  dataAreaId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimeProfileId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  timeProfileId: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WeekDay` |
   * | Type | `Microsoft.Dynamics.DataEntities.JmgDayIdEnum` |
   */
  weekDay: JmgDayIdEnum | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CanPayrollCalculationPushProfile` |
   * | Type | `Microsoft.Dynamics.DataEntities.NoYes` |
   */
  canPayrollCalculationPushProfile: NoYes | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HourPeriodStartSeconds` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  hourPeriodStartSeconds: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HourPeriodStartRule` |
   * | Type | `Microsoft.Dynamics.DataEntities.JmgProfileStartCodeBlankPrev` |
   */
  hourPeriodStartRule: JmgProfileStartCodeBlankPrev | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OvertimeFlexLimitSeconds` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  overtimeFlexLimitSeconds: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaximumFlexLimitSeconds` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  maximumFlexLimitSeconds: number;
}

export type TimeAndAttendanceTimeProfileDetailsId = {
  dataAreaId: string;
  timeProfileId: string;
  weekDay: JmgDayIdEnum | null;
};

export interface EditableTimeAndAttendanceTimeProfileDetails
  extends Pick<
      TimeAndAttendanceTimeProfileDetails,
      | "dataAreaId"
      | "timeProfileId"
      | "hourPeriodStartSeconds"
      | "overtimeFlexLimitSeconds"
      | "maximumFlexLimitSeconds"
    >,
    Partial<
      Pick<
        TimeAndAttendanceTimeProfileDetails,
        "weekDay" | "canPayrollCalculationPushProfile" | "hourPeriodStartRule"
      >
    > {}
