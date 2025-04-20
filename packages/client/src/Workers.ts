/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WorkersApi } from './WorkersApi';
import { HcmWorkerStatus } from './HcmWorkerStatus';
import { NoYes } from './NoYes';
import { HcmWorkerRelationType } from './HcmWorkerRelationType';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import {
  BenefitsCreditPeriodEmployees,
  BenefitsCreditPeriodEmployeesType
} from './BenefitsCreditPeriodEmployees';
import {
  WorkerEnrolledBenefitInquiries,
  WorkerEnrolledBenefitInquiriesType
} from './WorkerEnrolledBenefitInquiries';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import {
  ItemSpecificBillOfMaterialsHeaders,
  ItemSpecificBillOfMaterialsHeadersType
} from './ItemSpecificBillOfMaterialsHeaders';
import {
  ItemSpecificBillOfMaterialsHeadersV3,
  ItemSpecificBillOfMaterialsHeadersV3Type
} from './ItemSpecificBillOfMaterialsHeadersV3';
import {
  OnboardingWorkerChecklistTasks,
  OnboardingWorkerChecklistTasksType
} from './OnboardingWorkerChecklistTasks';
import { Titles, TitlesType } from './Titles';
import { People, PeopleType } from './People';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';
import { EthnicOrigins, EthnicOriginsType } from './EthnicOrigins';
import { LanguageCodes, LanguageCodesType } from './LanguageCodes';
import {
  ItemSpecificFormulaHeadersV3,
  ItemSpecificFormulaHeadersV3Type
} from './ItemSpecificFormulaHeadersV3';
import { Employees, EmployeesType } from './Employees';
import { Prospects, ProspectsType } from './Prospects';
import {
  OnboardingWorkerChecklistHeaders,
  OnboardingWorkerChecklistHeadersType
} from './OnboardingWorkerChecklistHeaders';
import {
  HcmWorkerPersonIdentificationNumberDualWrite,
  HcmWorkerPersonIdentificationNumberDualWriteType
} from './HcmWorkerPersonIdentificationNumberDualWrite';
import {
  PositionWorkerAssignmentsV2,
  PositionWorkerAssignmentsV2Type
} from './PositionWorkerAssignmentsV2';
import { FixedAssets, FixedAssetsType } from './FixedAssets';
import {
  BenefitPeriodEmployees,
  BenefitPeriodEmployeesType
} from './BenefitPeriodEmployees';
import { ContractorsV2, ContractorsV2Type } from './ContractorsV2';
import { WorkerTaxRegions, WorkerTaxRegionsType } from './WorkerTaxRegions';
import {
  PositionWorkerDefaultTaxRgns,
  PositionWorkerDefaultTaxRgnsType
} from './PositionWorkerDefaultTaxRgns';
import {
  InventoryCountingJournalLines,
  InventoryCountingJournalLinesType
} from './InventoryCountingJournalLines';
import { DiscussionTopics, DiscussionTopicsType } from './DiscussionTopics';
import { CompFixedEmpls, CompFixedEmplsType } from './CompFixedEmpls';
import {
  Kitting_KitHeaders,
  Kitting_KitHeadersType
} from './Kitting_KitHeaders';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';
import { RouteVersionsV2, RouteVersionsV2Type } from './RouteVersionsV2';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  WorkerPayrollInfoes,
  WorkerPayrollInfoesType
} from './WorkerPayrollInfoes';
import { WorkerTaxCodes, WorkerTaxCodesType } from './WorkerTaxCodes';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';
import { WorkerSummaries, WorkerSummariesType } from './WorkerSummaries';
import {
  TimeAndAttendanceManualPremiumRegistrations,
  TimeAndAttendanceManualPremiumRegistrationsType
} from './TimeAndAttendanceManualPremiumRegistrations';
import {
  PersonalContactPeople,
  PersonalContactPeopleType
} from './PersonalContactPeople';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  BenefitsPlanEmployeesV2,
  BenefitsPlanEmployeesV2Type
} from './BenefitsPlanEmployeesV2';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  LeaveOfAbsenceRequests,
  LeaveOfAbsenceRequestsType
} from './LeaveOfAbsenceRequests';
import { WorkerContacts, WorkerContactsType } from './WorkerContacts';
import {
  BankAccountDisbursements,
  BankAccountDisbursementsType
} from './BankAccountDisbursements';
import {
  LeaveRequestHeaders,
  LeaveRequestHeadersType
} from './LeaveRequestHeaders';
import { LoanItems, LoanItemsType } from './LoanItems';
import {
  InventoryTagCountingJournalHeaders,
  InventoryTagCountingJournalHeadersType
} from './InventoryTagCountingJournalHeaders';
import { Contractors, ContractorsType } from './Contractors';
import {
  BenefitEligibilityOverrides,
  BenefitEligibilityOverridesType
} from './BenefitEligibilityOverrides';
import {
  FormW2BoxReportingAdjustments,
  FormW2BoxReportingAdjustmentsType
} from './FormW2BoxReportingAdjustments';
import {
  WorkerPositionEarningCodesV2,
  WorkerPositionEarningCodesV2Type
} from './WorkerPositionEarningCodesV2';
import {
  WorkerPostalAddressesV2,
  WorkerPostalAddressesV2Type
} from './WorkerPostalAddressesV2';
import {
  EmploymentEmployees,
  EmploymentEmployeesType
} from './EmploymentEmployees';
import { FixedAssetsV2, FixedAssetsV2Type } from './FixedAssetsV2';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';
import {
  EngineeringChangeOrderProductFormulaHeaders,
  EngineeringChangeOrderProductFormulaHeadersType
} from './EngineeringChangeOrderProductFormulaHeaders';
import {
  BillOfMaterialsVersions,
  BillOfMaterialsVersionsType
} from './BillOfMaterialsVersions';
import {
  VendInvoiceRegisterLines,
  VendInvoiceRegisterLinesType
} from './VendInvoiceRegisterLines';
import {
  WorkerBankAccounts,
  WorkerBankAccountsType
} from './WorkerBankAccounts';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import {
  BenefitsEmployeeFutureLifeEventTransactions,
  BenefitsEmployeeFutureLifeEventTransactionsType
} from './BenefitsEmployeeFutureLifeEventTransactions';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
import {
  WorkerEnrolledAccruals,
  WorkerEnrolledAccrualsType
} from './WorkerEnrolledAccruals';
import {
  OnboardingChecklistTemplateHeaders,
  OnboardingChecklistTemplateHeadersType
} from './OnboardingChecklistTemplateHeaders';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';
import {
  RecruitingProjects,
  RecruitingProjectsType
} from './RecruitingProjects';
import {
  BenefitsPlanEmployeeDesignees,
  BenefitsPlanEmployeeDesigneesType
} from './BenefitsPlanEmployeeDesignees';
import { WorkerExams, WorkerExamsType } from './WorkerExams';
import {
  ProductOwnerWorkers,
  ProductOwnerWorkersType
} from './ProductOwnerWorkers';
import {
  LeaveBankTransactions,
  LeaveBankTransactionsType
} from './LeaveBankTransactions';
import {
  AssetMaintenanceWorkOrderLineHourJournals,
  AssetMaintenanceWorkOrderLineHourJournalsType
} from './AssetMaintenanceWorkOrderLineHourJournals';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import { RetailStaffs, RetailStaffsType } from './RetailStaffs';
import {
  PayIntV1LeaveBankTransactions,
  PayIntV1LeaveBankTransactionsType
} from './PayIntV1LeaveBankTransactions';
import {
  WorkerPositionEarningCodes,
  WorkerPositionEarningCodesType
} from './WorkerPositionEarningCodes';
import {
  LeaveBankTransactionsV2,
  LeaveBankTransactionsV2Type
} from './LeaveBankTransactionsV2';
import {
  BenefitPersonalContactPeople,
  BenefitPersonalContactPeopleType
} from './BenefitPersonalContactPeople';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeaders,
  EngineeringChangeOrderProductBillOfMaterialsHeadersType
} from './EngineeringChangeOrderProductBillOfMaterialsHeaders';
import {
  WorkerPostalAddresses,
  WorkerPostalAddressesType
} from './WorkerPostalAddresses';
import {
  LeaveBuySellRequests,
  LeaveBuySellRequestsType
} from './LeaveBuySellRequests';
import { PersonSkills, PersonSkillsType } from './PersonSkills';
import {
  PublishedRequestForQuotationHeaders,
  PublishedRequestForQuotationHeadersType
} from './PublishedRequestForQuotationHeaders';
import { HoursWorked, HoursWorkedType } from './HoursWorked';
import {
  LeaveEnrollmentsV2,
  LeaveEnrollmentsV2Type
} from './LeaveEnrollmentsV2';
import { WorkerContactsV3, WorkerContactsV3Type } from './WorkerContactsV3';
import {
  WorkerTaxCodeParameters,
  WorkerTaxCodeParametersType
} from './WorkerTaxCodeParameters';
import {
  PositionWorkerAssignments,
  PositionWorkerAssignmentsType
} from './PositionWorkerAssignments';
import { Discussions, DiscussionsType } from './Discussions';
import { Employments, EmploymentsType } from './Employments';
import {
  BillOfMaterialsVersionsODataV2,
  BillOfMaterialsVersionsODataV2Type
} from './BillOfMaterialsVersionsODataV2';
import {
  EngineeringChangeOrderProductWhereUsedAnalyses,
  EngineeringChangeOrderProductWhereUsedAnalysesType
} from './EngineeringChangeOrderProductWhereUsedAnalyses';
import {
  FinancialDimensionValueLegalEntityOverrides,
  FinancialDimensionValueLegalEntityOverridesType
} from './FinancialDimensionValueLegalEntityOverrides';
import {
  RequestForQuotationJournalHeaders,
  RequestForQuotationJournalHeadersType
} from './RequestForQuotationJournalHeaders';
import {
  EngineeringChangeOrderDependencyActions,
  EngineeringChangeOrderDependencyActionsType
} from './EngineeringChangeOrderDependencyActions';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';
import {
  WorkerResidentTaxRegions,
  WorkerResidentTaxRegionsType
} from './WorkerResidentTaxRegions';
import {
  EmploymentsPerCompany,
  EmploymentsPerCompanyType
} from './EmploymentsPerCompany';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';
import { FormulaVersions, FormulaVersionsType } from './FormulaVersions';
import {
  AssetMaintenanceAssetTypeDefaultSparePartsV2,
  AssetMaintenanceAssetTypeDefaultSparePartsV2Type
} from './AssetMaintenanceAssetTypeDefaultSparePartsV2';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import {
  TimeAndAttendanceActivityRegistrations,
  TimeAndAttendanceActivityRegistrationsType
} from './TimeAndAttendanceActivityRegistrations';
import {
  BenefitsPeriodEmployeeLifeEventTransactions,
  BenefitsPeriodEmployeeLifeEventTransactionsType
} from './BenefitsPeriodEmployeeLifeEventTransactions';
import {
  EngineeringChangeOrderProductReleases,
  EngineeringChangeOrderProductReleasesType
} from './EngineeringChangeOrderProductReleases';
import {
  UsTaxTransactionHistories,
  UsTaxTransactionHistoriesType
} from './UsTaxTransactionHistories';
import {
  VariableCompensationAwards,
  VariableCompensationAwardsType
} from './VariableCompensationAwards';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';
import {
  EngineeringChangeOrderProductRouteHeaders,
  EngineeringChangeOrderProductRouteHeadersType
} from './EngineeringChangeOrderProductRouteHeaders';
import {
  WorkerPostalAddressesDualWrite,
  WorkerPostalAddressesDualWriteType
} from './WorkerPostalAddressesDualWrite';
import { LeaveEnrollments, LeaveEnrollmentsType } from './LeaveEnrollments';
import {
  OnboardingChecklistTemplateTasks,
  OnboardingChecklistTemplateTasksType
} from './OnboardingChecklistTemplateTasks';
import { WorkerSkills, WorkerSkillsType } from './WorkerSkills';
import {
  OnboardingLibraryTasks,
  OnboardingLibraryTasksType
} from './OnboardingLibraryTasks';
import { Positions, PositionsType } from './Positions';
import {
  SentProductReleaseHeaders,
  SentProductReleaseHeadersType
} from './SentProductReleaseHeaders';
import {
  PayStatementEarningLines,
  PayStatementEarningLinesType
} from './PayStatementEarningLines';
import {
  ReceivedProductReleaseHeaders,
  ReceivedProductReleaseHeadersType
} from './ReceivedProductReleaseHeaders';
import { Applications, ApplicationsType } from './Applications';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  PersonalContactOrganization,
  PersonalContactOrganizationType
} from './PersonalContactOrganization';
import {
  WorkerEnrolledAccrualInquiries,
  WorkerEnrolledAccrualInquiriesType
} from './WorkerEnrolledAccrualInquiries';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2,
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type
} from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2';
import {
  EngineeringChangeRequestDependencyActions,
  EngineeringChangeRequestDependencyActionsType
} from './EngineeringChangeRequestDependencyActions';
import {
  LeaveAccrualSuspensions,
  LeaveAccrualSuspensionsType
} from './LeaveAccrualSuspensions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  TransferredTimeAndAttendanceActivityRegistrations,
  TransferredTimeAndAttendanceActivityRegistrationsType
} from './TransferredTimeAndAttendanceActivityRegistrations';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import {
  ItemSpecificBillOfMaterialsHeadersV2,
  ItemSpecificBillOfMaterialsHeadersV2Type
} from './ItemSpecificBillOfMaterialsHeadersV2';
import {
  PlannedTimeAndAttendanceAbsenceRegistrations,
  PlannedTimeAndAttendanceAbsenceRegistrationsType
} from './PlannedTimeAndAttendanceAbsenceRegistrations';
import { LeaveRequestsV2, LeaveRequestsV2Type } from './LeaveRequestsV2';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';
import {
  EngineeringChangeRequestHeaders,
  EngineeringChangeRequestHeadersType
} from './EngineeringChangeRequestHeaders';
import {
  BenefitsPlanEmployees,
  BenefitsPlanEmployeesType
} from './BenefitsPlanEmployees';
import {
  EngineeringChangeOrderProductRouteHeadersV2,
  EngineeringChangeOrderProductRouteHeadersV2Type
} from './EngineeringChangeOrderProductRouteHeadersV2';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';
import {
  WorkerTitlesCurrent,
  WorkerTitlesCurrentType
} from './WorkerTitlesCurrent';
import { RouteVersions, RouteVersionsType } from './RouteVersions';
import {
  InventoryCountingJournalHeaders,
  InventoryCountingJournalHeadersType
} from './InventoryCountingJournalHeaders';
import {
  WorkerGarnishmentRules,
  WorkerGarnishmentRulesType
} from './WorkerGarnishmentRules';
import { WorkerContactsV2, WorkerContactsV2Type } from './WorkerContactsV2';
import { Goals, GoalsType } from './Goals';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "Workers" of service "d365_metadata".
 */
export class Workers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkersType<T>
{
  /**
   * Technical entity name for Workers.
   */
  static override _entityName = 'Workers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Workers entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Office Location Id.
   * @nullable
   */
  declare officeLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Books.
   * @nullable
   */
  declare addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Hire Date Time.
   */
  declare originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * User.
   * @nullable
   */
  declare user?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Status.
   * @nullable
   */
  declare workerStatus?: HcmWorkerStatus | null;
  /**
   * Person User Valid From.
   */
  declare personUserValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Military Service Start Date.
   */
  declare militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nationality Country Region.
   * @nullable
   */
  declare nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url Description.
   * @nullable
   */
  declare primaryContactUrlDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Birth City.
   * @nullable
   */
  declare personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Email Is Private.
   * @nullable
   */
  declare primaryContactEmailIsPrivate?: NoYes | null;
  /**
   * Primary Contact Url Is Private.
   * @nullable
   */
  declare primaryContactUrlIsPrivate?: NoYes | null;
  /**
   * Father Birth Country Region.
   * @nullable
   */
  declare fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Is Im.
   * @nullable
   */
  declare primaryContactEmailIsIm?: NoYes | null;
  /**
   * Primary Contact Facebook Is Private.
   * @nullable
   */
  declare primaryContactFacebookIsPrivate?: NoYes | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Country Region.
   * @nullable
   */
  declare personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person User Valid To.
   */
  declare personUserValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Fulltime Student.
   * @nullable
   */
  declare isFulltimeStudent?: NoYes | null;
  /**
   * Primary Contact Url.
   * @nullable
   */
  declare primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   * @nullable
   */
  declare primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Suffix.
   * @nullable
   */
  declare personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expatriate Ruling Valid To.
   */
  declare expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Twitter Is Private.
   * @nullable
   */
  declare primaryContactTwitterIsPrivate?: NoYes | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Name Description.
   * @nullable
   */
  declare addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Id.
   */
  declare objectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Person Details Valid From.
   */
  declare personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Fax Is Private.
   * @nullable
   */
  declare primaryContactFaxIsPrivate?: NoYes | null;
  /**
   * Primary Contact Linked In Purpose.
   * @nullable
   */
  declare primaryContactLinkedInPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Twitter Purpose.
   * @nullable
   */
  declare primaryContactTwitterPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmWorkerRelationType | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Facebook Description.
   * @nullable
   */
  declare primaryContactFacebookDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Works From Home.
   * @nullable
   */
  declare worksFromHome?: NoYes | null;
  /**
   * Summary Valid From.
   */
  declare summaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Fax Extension.
   * @nullable
   */
  declare primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter Description.
   * @nullable
   */
  declare primaryContactTwitterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Person Details Valid To.
   */
  declare personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Description.
   * @nullable
   */
  declare primaryContactLinkedInDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email Purpose.
   * @nullable
   */
  declare primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Provider.
   * @nullable
   */
  declare identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Purpose.
   * @nullable
   */
  declare addressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Url Purpose.
   * @nullable
   */
  declare primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Is Disabled.
   * @nullable
   */
  declare isDisabled?: NoYes | null;
  /**
   * Identity Email.
   * @nullable
   */
  declare identityEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expatriate Ruling Valid From.
   */
  declare expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Summary Valid To.
   */
  declare summaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location.
   */
  declare primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Allow Rehire.
   * @nullable
   */
  declare allowRehire?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Description.
   * @nullable
   */
  declare primaryContactFaxDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Linked In.
   * @nullable
   */
  declare primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Dependents.
   */
  declare numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Personal Title.
   * @nullable
   */
  declare personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook.
   * @nullable
   */
  declare primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deceased Date.
   */
  declare deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Education.
   * @nullable
   */
  declare education?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Seniority Date.
   */
  declare seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Email Description.
   * @nullable
   */
  declare primaryContactEmailDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mother Birth Country Region.
   * @nullable
   */
  declare motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Office Location.
   * @nullable
   */
  declare officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Expatriate Ruling Applicable.
   * @nullable
   */
  declare isExpatriateRulingApplicable?: NoYes | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter.
   * @nullable
   */
  declare primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Facebook Purpose.
   * @nullable
   */
  declare primaryContactFacebookPurpose?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Anniversary Date Time.
   */
  declare anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Primary Contact Phone Is Private.
   * @nullable
   */
  declare primaryContactPhoneIsPrivate?: NoYes | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Linked In Is Private.
   * @nullable
   */
  declare primaryContactLinkedInIsPrivate?: NoYes | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Native Language Id.
   * @nullable
   */
  declare nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax Purpose.
   * @nullable
   */
  declare primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: HcmPersonMaritalStatus | null;
  /**
   * Is Disabled Veteran.
   * @nullable
   */
  declare isDisabledVeteran?: NoYes | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsCreditPeriodEmployees} entity.
   */
  declare benefitsCreditPeriodEmployee?: BenefitsCreditPeriodEmployees<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefitInquiries} entity.
   */
  declare workerEnrolledBenefitInquiry: WorkerEnrolledBenefitInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentsV2} entity.
   */
  declare employmentV2: EmploymentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeaders} entity.
   */
  declare itemSpecificBillOfMaterialsHeaders: ItemSpecificBillOfMaterialsHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeadersV3} entity.
   */
  declare itemSpecificBillOfMaterialsHeadersV3: ItemSpecificBillOfMaterialsHeadersV3<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistTasks} entity.
   */
  declare checklistTasks: OnboardingWorkerChecklistTasks<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistTasks} entity.
   */
  declare resolvedChecklistTasks: OnboardingWorkerChecklistTasks<T>[];
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link EthnicOrigins} entity.
   */
  declare ethnicOrigin?: EthnicOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link LanguageCodes} entity.
   */
  declare nativeLanguage?: LanguageCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link ItemSpecificFormulaHeadersV3} entity.
   */
  declare itemSpecificFormulaHeadersV3: ItemSpecificFormulaHeadersV3<T>[];
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employee: Employees<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistHeaders} entity.
   */
  declare onboardingChecklists: OnboardingWorkerChecklistHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistHeaders} entity.
   */
  declare resolvedChecklists: OnboardingWorkerChecklistHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link HcmWorkerPersonIdentificationNumberDualWrite} entity.
   */
  declare hcmWorkerPersonIdentificationNumberDualWrite: HcmWorkerPersonIdentificationNumberDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerAssignmentsV2} entity.
   */
  declare positionAssignmentsV2: PositionWorkerAssignmentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssets} entity.
   */
  declare workerResponsibleFixedAsset: FixedAssets<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitPeriodEmployees} entity.
   */
  declare benefitPeriodEmployee?: BenefitPeriodEmployees<T> | null;
  /**
   * One-to-many navigation property to the {@link ContractorsV2} entity.
   */
  declare contractorsV2: ContractorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTaxRegions} entity.
   */
  declare workerTaxRegion: WorkerTaxRegions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerDefaultTaxRgns} entity.
   */
  declare positionWorkerDefaultTaxRgn: PositionWorkerDefaultTaxRgns<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalLines} entity.
   */
  declare inventoryCountingJournalLine: InventoryCountingJournalLines<T>[];
  /**
   * One-to-one navigation property to the {@link DiscussionTopics} entity.
   */
  declare discussionTopic?: DiscussionTopics<T> | null;
  /**
   * One-to-many navigation property to the {@link CompFixedEmpls} entity.
   */
  declare compFixedEmpl: CompFixedEmpls<T>[];
  /**
   * One-to-many navigation property to the {@link Kitting_KitHeaders} entity.
   */
  declare billOfMaterialsHeaders: Kitting_KitHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare humanResourcesContactInjuryIncidents: InjuryIncidents<T>[];
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare reportedByInjuryIncidents: InjuryIncidents<T>[];
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare supervisorInjuryIncidents: InjuryIncidents<T>[];
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare workerInjuryIncidents: InjuryIncidents<T>[];
  /**
   * One-to-many navigation property to the {@link RouteVersionsV2} entity.
   */
  declare routeVersionsV2: RouteVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPayrollInfoes} entity.
   */
  declare payrollInfo: WorkerPayrollInfoes<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTaxCodes} entity.
   */
  declare workerTaxCodes: WorkerTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefits: WorkerEnrolledBenefits<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerSummaries} entity.
   */
  declare workerTitles: WorkerSummaries<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceManualPremiumRegistrations} entity.
   */
  declare timeAndAttendanceManualPremiumRegistrations: TimeAndAttendanceManualPremiumRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link PersonalContactPeople} entity.
   */
  declare personalContactPersonWorkerContact: PersonalContactPeople<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare primaryResponsibiltyPurchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare secondaryResponsibiltyPurchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsPlanEmployeesV2} entity.
   */
  declare planEmployeeV2?: BenefitsPlanEmployeesV2<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeredEngineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare responsibleEngineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveOfAbsenceRequests} entity.
   */
  declare leaveOfAbsenceRequests: LeaveOfAbsenceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerContacts} entity.
   */
  declare contacts: WorkerContacts<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccountDisbursements} entity.
   */
  declare workerBankAccountDisbursements: BankAccountDisbursements<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveRequestHeaders} entity.
   */
  declare leaveRequestHeaders: LeaveRequestHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link LoanItems} entity.
   */
  declare loanItem: LoanItems<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalHeaders} entity.
   */
  declare inventoryTagCountingJournalHeader: InventoryTagCountingJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link Contractors} entity.
   */
  declare contractors: Contractors<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitEligibilityOverrides} entity.
   */
  declare benefitEligibilityOverrides: BenefitEligibilityOverrides<T>[];
  /**
   * One-to-many navigation property to the {@link FormW2BoxReportingAdjustments} entity.
   */
  declare w2BoxReportingAdjustments: FormW2BoxReportingAdjustments<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodesV2} entity.
   */
  declare workerPositionEarningCodeV2: WorkerPositionEarningCodesV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPostalAddressesV2} entity.
   */
  declare workerAddress: WorkerPostalAddressesV2<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentEmployees} entity.
   */
  declare employmentEmployee: EmploymentEmployees<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetsV2} entity.
   */
  declare assetFixedAssetV2WorkerResponsibleAsset: FixedAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
   */
  declare engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersions} entity.
   */
  declare billOfMaterialsVersions: BillOfMaterialsVersions<T>[];
  /**
   * One-to-one navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLineHcmWorkerEntityRole?: VendInvoiceRegisterLines<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerBankAccounts} entity.
   */
  declare workerBankAccount: WorkerBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeaders: RouteHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsEmployeeFutureLifeEventTransactions} entity.
   */
  declare benefitsEmployeeFutureLifeEventTransaction?: BenefitsEmployeeFutureLifeEventTransactions<T> | null;
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledAccruals} entity.
   */
  declare workerEnrolledAccruals: WorkerEnrolledAccruals<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateHeaders} entity.
   */
  declare onboardingChecklistTemplates: OnboardingChecklistTemplateHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatement: PayStatementHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingProjects} entity.
   */
  declare hiringManagerRecruitingProjects: RecruitingProjects<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingProjects} entity.
   */
  declare recruiterRecruitingProjects: RecruitingProjects<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingProjects} entity.
   */
  declare alternateWorkerRecruitingProjects: RecruitingProjects<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsPlanEmployeeDesignees} entity.
   */
  declare benefitsPlanEmployeeDesignee?: BenefitsPlanEmployeeDesignees<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerExams} entity.
   */
  declare workerExam: WorkerExams<T>[];
  /**
   * One-to-many navigation property to the {@link ProductOwnerWorkers} entity.
   */
  declare productOwnerWorkerAssignments: ProductOwnerWorkers<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactions} entity.
   */
  declare leaveBankTransactions: LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineHourJournals} entity.
   */
  declare workOrderLIneHourConsumptionLinesWorker: AssetMaintenanceWorkOrderLineHourJournals<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link RetailStaffs} entity.
   */
  declare retailStaff?: RetailStaffs<T> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1LeaveBankTransactions} entity.
   */
  declare payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodes} entity.
   */
  declare workerPositionEarningCode: WorkerPositionEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBankTransactionsV2} entity.
   */
  declare leaveBankTransactionsV2: LeaveBankTransactionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPersonalContactPeople} entity.
   */
  declare benefitPersonalContactPersonWorkerContact: BenefitPersonalContactPeople<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeaders} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeaders: EngineeringChangeOrderProductBillOfMaterialsHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPostalAddresses} entity.
   */
  declare workerAddressV1: WorkerPostalAddresses<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveBuySellRequests} entity.
   */
  declare leaveBuySellRequest: LeaveBuySellRequests<T>[];
  /**
   * One-to-many navigation property to the {@link PersonSkills} entity.
   */
  declare examinerPersonSkill: PersonSkills<T>[];
  /**
   * One-to-many navigation property to the {@link PersonSkills} entity.
   */
  declare personSkill: PersonSkills<T>[];
  /**
   * One-to-many navigation property to the {@link PublishedRequestForQuotationHeaders} entity.
   */
  declare publishedRequestForQuotationHeader: PublishedRequestForQuotationHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link HoursWorked} entity.
   */
  declare leaveHoursWorked: HoursWorked<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveEnrollmentsV2} entity.
   */
  declare leaveEnrollmentsV2: LeaveEnrollmentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerContactsV3} entity.
   */
  declare contactsV3: WorkerContactsV3<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTaxCodeParameters} entity.
   */
  declare workerTaxCodeParameters: WorkerTaxCodeParameters<T>[];
  /**
   * One-to-many navigation property to the {@link PositionWorkerAssignments} entity.
   */
  declare positionAssignments: PositionWorkerAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link Discussions} entity.
   */
  declare discussions: Discussions<T>[];
  /**
   * One-to-many navigation property to the {@link Employments} entity.
   */
  declare employment: Employments<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsODataV2} entity.
   */
  declare billOfMaterialsVersionsV2: BillOfMaterialsVersionsODataV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductWhereUsedAnalyses} entity.
   */
  declare engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalyses<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueLegalEntityOverrides} entity.
   */
  declare financialDimensionValueLegalEntityOverride: FinancialDimensionValueLegalEntityOverrides<T>[];
  /**
   * One-to-many navigation property to the {@link RequestForQuotationJournalHeaders} entity.
   */
  declare requestForQuotationJournalHeaders: RequestForQuotationJournalHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderDependencyActions} entity.
   */
  declare engineeringChangeOrderDependencyActions?: EngineeringChangeOrderDependencyActions<T> | null;
  /**
   * One-to-many navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreementHeaders: ServiceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerResidentTaxRegions} entity.
   */
  declare workerResidentTaxRegion: WorkerResidentTaxRegions<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentsPerCompany} entity.
   */
  declare employmentPerCompany: EmploymentsPerCompany<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link FormulaVersions} entity.
   */
  declare formulaVersions: FormulaVersions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaultSparePartsV2} entity.
   */
  declare maintenanceAssetSparePartsWorkerPersonnelNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceActivityRegistrations} entity.
   */
  declare timeAndAttendanceActivityRegistrations: TimeAndAttendanceActivityRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPeriodEmployeeLifeEventTransactions} entity.
   */
  declare benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductReleases} entity.
   */
  declare engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleases<T>[];
  /**
   * One-to-many navigation property to the {@link UsTaxTransactionHistories} entity.
   */
  declare taxTransactions: UsTaxTransactionHistories<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationAwards} entity.
   */
  declare variableCompensationAward: VariableCompensationAwards<T>[];
  /**
   * One-to-many navigation property to the {@link EmployeesV2} entity.
   */
  declare employeesV2: EmployeesV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteHeaders} entity.
   */
  declare engineeringChangeOrderProductRouteHeaders: EngineeringChangeOrderProductRouteHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPostalAddressesDualWrite} entity.
   */
  declare workerAddressDualWrite: WorkerPostalAddressesDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveEnrollments} entity.
   */
  declare leaveEnrollments: LeaveEnrollments<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateTasks} entity.
   */
  declare checklistTemplateTasks: OnboardingChecklistTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerSkills} entity.
   */
  declare workerSkills: WorkerSkills<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingLibraryTasks} entity.
   */
  declare libraryTasks: OnboardingLibraryTasks<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare cancelledSentProductReleaseHeaders: SentProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare processedSentProductReleaseHeaders: SentProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PayStatementEarningLines} entity.
   */
  declare payStatementEarningLine: PayStatementEarningLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare cancelledReceivedProductReleaseHeaders: ReceivedProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare processedReceivedProductReleaseHeaders: ReceivedProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  declare applications: Applications<T>[];
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-many navigation property to the {@link PersonalContactOrganization} entity.
   */
  declare personalContactOrganizationWorkerContact: PersonalContactOrganization<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledAccrualInquiries} entity.
   */
  declare workerEnrolledAccrualInquiry: WorkerEnrolledAccrualInquiries<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeadersV2: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeRequestDependencyActions} entity.
   */
  declare engineeringChangeRequestDependencyActions?: EngineeringChangeRequestDependencyActions<T> | null;
  /**
   * One-to-many navigation property to the {@link LeaveAccrualSuspensions} entity.
   */
  declare leaveAccrualSuspensions: LeaveAccrualSuspensions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link TransferredTimeAndAttendanceActivityRegistrations} entity.
   */
  declare transferredTimeAndAttendanceActivityRegistrations: TransferredTimeAndAttendanceActivityRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeadersV2} entity.
   */
  declare itemSpecificBillOfMaterialsHeadersV2: ItemSpecificBillOfMaterialsHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedTimeAndAttendanceAbsenceRegistrations} entity.
   */
  declare plannedTimeAndAttendanceAbsenceRegistrations: PlannedTimeAndAttendanceAbsenceRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link LeaveRequestsV2} entity.
   */
  declare leaveRequestsV2: LeaveRequestsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestHeaders} entity.
   */
  declare engineeringChangeRequestHeaders: EngineeringChangeRequestHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsPlanEmployees} entity.
   */
  declare benefitsPlanEmployee?: BenefitsPlanEmployees<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteHeadersV2} entity.
   */
  declare engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPrimaryResponsibilityPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationSecondaryResponsibilityPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerTitlesCurrent} entity.
   */
  declare workerTitleCurrent: WorkerTitlesCurrent<T>[];
  /**
   * One-to-many navigation property to the {@link RouteVersions} entity.
   */
  declare routeVersions: RouteVersions<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalHeaders} entity.
   */
  declare inventoryCountingJournalHeader: InventoryCountingJournalHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link WorkerGarnishmentRules} entity.
   */
  declare garnishmentTaxLevyRules?: WorkerGarnishmentRules<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerContactsV2} entity.
   */
  declare contactsV2: WorkerContactsV2<T>[];
  /**
   * One-to-many navigation property to the {@link Goals} entity.
   */
  declare goals: Goals<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsStartingWorker: AssetMaintenanceRequestsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsAssetVerificationWorker: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: WorkersApi<T>) {
    super(_entityApi);
  }
}

export interface WorkersType<T extends DeSerializers = DefaultDeSerializers> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  officeLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressBooks?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  originalHireDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  user?: DeserializedType<T, 'Edm.String'> | null;
  workerStatus?: HcmWorkerStatus | null;
  personUserValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrlDescription?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsPrivate?: NoYes | null;
  primaryContactUrlIsPrivate?: NoYes | null;
  fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailIsIm?: NoYes | null;
  primaryContactFacebookIsPrivate?: NoYes | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  personUserValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isFulltimeStudent?: NoYes | null;
  primaryContactUrl?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  expatriateRulingValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTwitterIsPrivate?: NoYes | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressNameDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  objectId: DeserializedType<T, 'Edm.Guid'>;
  personDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxIsPrivate?: NoYes | null;
  primaryContactLinkedInPurpose?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactTwitterPurpose?: DeserializedType<T, 'Edm.String'> | null;
  workerType?: HcmWorkerRelationType | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFacebookDescription?: DeserializedType<T, 'Edm.String'> | null;
  worksFromHome?: NoYes | null;
  summaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactFaxExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitterDescription?: DeserializedType<T, 'Edm.String'> | null;
  personDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInDescription?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  addressPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactUrlPurpose?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: HcmPersonGender | null;
  isDisabled?: NoYes | null;
  identityEmail?: DeserializedType<T, 'Edm.String'> | null;
  expatriateRulingValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  summaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  allowRehire?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedIn?: DeserializedType<T, 'Edm.String'> | null;
  numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebook?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  education?: DeserializedType<T, 'Edm.String'> | null;
  seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactEmailDescription?: DeserializedType<T, 'Edm.String'> | null;
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  isExpatriateRulingApplicable?: NoYes | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFacebookPurpose?: DeserializedType<T, 'Edm.String'> | null;
  anniversaryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  primaryContactPhoneIsPrivate?: NoYes | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactLinkedInIsPrivate?: NoYes | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFaxPurpose?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maritalStatus?: HcmPersonMaritalStatus | null;
  isDisabledVeteran?: NoYes | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  benefitsCreditPeriodEmployee?: BenefitsCreditPeriodEmployeesType<T> | null;
  workerEnrolledBenefitInquiry: WorkerEnrolledBenefitInquiriesType<T>[];
  employmentV2: EmploymentsV2Type<T>[];
  itemSpecificBillOfMaterialsHeaders: ItemSpecificBillOfMaterialsHeadersType<T>[];
  itemSpecificBillOfMaterialsHeadersV3: ItemSpecificBillOfMaterialsHeadersV3Type<T>[];
  checklistTasks: OnboardingWorkerChecklistTasksType<T>[];
  resolvedChecklistTasks: OnboardingWorkerChecklistTasksType<T>[];
  title?: TitlesType<T> | null;
  person?: PeopleType<T> | null;
  veteranStatus?: VeteranStatusesType<T> | null;
  ethnicOrigin?: EthnicOriginsType<T> | null;
  nativeLanguage?: LanguageCodesType<T> | null;
  itemSpecificFormulaHeadersV3: ItemSpecificFormulaHeadersV3Type<T>[];
  employee: EmployeesType<T>[];
  prospects: ProspectsType<T>[];
  onboardingChecklists: OnboardingWorkerChecklistHeadersType<T>[];
  resolvedChecklists: OnboardingWorkerChecklistHeadersType<T>[];
  hcmWorkerPersonIdentificationNumberDualWrite: HcmWorkerPersonIdentificationNumberDualWriteType<T>[];
  positionAssignmentsV2: PositionWorkerAssignmentsV2Type<T>[];
  workerResponsibleFixedAsset: FixedAssetsType<T>[];
  benefitPeriodEmployee?: BenefitPeriodEmployeesType<T> | null;
  contractorsV2: ContractorsV2Type<T>[];
  workerTaxRegion: WorkerTaxRegionsType<T>[];
  positionWorkerDefaultTaxRgn: PositionWorkerDefaultTaxRgnsType<T>[];
  inventoryCountingJournalLine: InventoryCountingJournalLinesType<T>[];
  discussionTopic?: DiscussionTopicsType<T> | null;
  compFixedEmpl: CompFixedEmplsType<T>[];
  billOfMaterialsHeaders: Kitting_KitHeadersType<T>[];
  humanResourcesContactInjuryIncidents: InjuryIncidentsType<T>[];
  reportedByInjuryIncidents: InjuryIncidentsType<T>[];
  supervisorInjuryIncidents: InjuryIncidentsType<T>[];
  workerInjuryIncidents: InjuryIncidentsType<T>[];
  routeVersionsV2: RouteVersionsV2Type<T>[];
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  payrollInfo: WorkerPayrollInfoesType<T>[];
  workerTaxCodes: WorkerTaxCodesType<T>[];
  workerEnrolledBenefits: WorkerEnrolledBenefitsType<T>[];
  workerTitles: WorkerSummariesType<T>[];
  timeAndAttendanceManualPremiumRegistrations: TimeAndAttendanceManualPremiumRegistrationsType<T>[];
  personalContactPersonWorkerContact: PersonalContactPeopleType<T>[];
  primaryResponsibiltyPurchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  secondaryResponsibiltyPurchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  planEmployeeV2?: BenefitsPlanEmployeesV2Type<T> | null;
  engineeredEngineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
  responsibleEngineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
  leaveOfAbsenceRequests: LeaveOfAbsenceRequestsType<T>[];
  contacts: WorkerContactsType<T>[];
  workerBankAccountDisbursements: BankAccountDisbursementsType<T>[];
  leaveRequestHeaders: LeaveRequestHeadersType<T>[];
  loanItem: LoanItemsType<T>[];
  inventoryTagCountingJournalHeader: InventoryTagCountingJournalHeadersType<T>[];
  contractors: ContractorsType<T>[];
  benefitEligibilityOverrides: BenefitEligibilityOverridesType<T>[];
  w2BoxReportingAdjustments: FormW2BoxReportingAdjustmentsType<T>[];
  workerPositionEarningCodeV2: WorkerPositionEarningCodesV2Type<T>[];
  workerAddress: WorkerPostalAddressesV2Type<T>[];
  employmentEmployee: EmploymentEmployeesType<T>[];
  assetFixedAssetV2WorkerResponsibleAsset: FixedAssetsV2Type<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
  engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeadersType<T>[];
  billOfMaterialsVersions: BillOfMaterialsVersionsType<T>[];
  vendInvoiceRegisterLineHcmWorkerEntityRole?: VendInvoiceRegisterLinesType<T> | null;
  workerBankAccount: WorkerBankAccountsType<T>[];
  routeHeaders: RouteHeadersType<T>[];
  benefitsEmployeeFutureLifeEventTransaction?: BenefitsEmployeeFutureLifeEventTransactionsType<T> | null;
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  workerEnrolledAccruals: WorkerEnrolledAccrualsType<T>[];
  onboardingChecklistTemplates: OnboardingChecklistTemplateHeadersType<T>[];
  payStatement: PayStatementHeadersType<T>[];
  operatingUnit?: OperatingUnitsType<T> | null;
  hiringManagerRecruitingProjects: RecruitingProjectsType<T>[];
  recruiterRecruitingProjects: RecruitingProjectsType<T>[];
  alternateWorkerRecruitingProjects: RecruitingProjectsType<T>[];
  benefitsPlanEmployeeDesignee?: BenefitsPlanEmployeeDesigneesType<T> | null;
  workerExam: WorkerExamsType<T>[];
  productOwnerWorkerAssignments: ProductOwnerWorkersType<T>[];
  leaveBankTransactions: LeaveBankTransactionsType<T>[];
  workOrderLIneHourConsumptionLinesWorker: AssetMaintenanceWorkOrderLineHourJournalsType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  retailStaff?: RetailStaffsType<T> | null;
  payIntV1LeaveBankTransactionEntity: PayIntV1LeaveBankTransactionsType<T>[];
  workerPositionEarningCode: WorkerPositionEarningCodesType<T>[];
  leaveBankTransactionsV2: LeaveBankTransactionsV2Type<T>[];
  benefitPersonalContactPersonWorkerContact: BenefitPersonalContactPeopleType<T>[];
  engineeringChangeOrderProductBillOfMaterialsHeaders: EngineeringChangeOrderProductBillOfMaterialsHeadersType<T>[];
  workerAddressV1: WorkerPostalAddressesType<T>[];
  leaveBuySellRequest: LeaveBuySellRequestsType<T>[];
  examinerPersonSkill: PersonSkillsType<T>[];
  personSkill: PersonSkillsType<T>[];
  publishedRequestForQuotationHeader: PublishedRequestForQuotationHeadersType<T>[];
  leaveHoursWorked: HoursWorkedType<T>[];
  leaveEnrollmentsV2: LeaveEnrollmentsV2Type<T>[];
  contactsV3: WorkerContactsV3Type<T>[];
  workerTaxCodeParameters: WorkerTaxCodeParametersType<T>[];
  positionAssignments: PositionWorkerAssignmentsType<T>[];
  discussions: DiscussionsType<T>[];
  employment: EmploymentsType<T>[];
  billOfMaterialsVersionsV2: BillOfMaterialsVersionsODataV2Type<T>[];
  engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalysesType<T>[];
  financialDimensionValueLegalEntityOverride: FinancialDimensionValueLegalEntityOverridesType<T>[];
  requestForQuotationJournalHeaders: RequestForQuotationJournalHeadersType<T>[];
  engineeringChangeOrderDependencyActions?: EngineeringChangeOrderDependencyActionsType<T> | null;
  serviceAgreementHeaders: ServiceAgreementHeadersType<T>[];
  workerResidentTaxRegion: WorkerResidentTaxRegionsType<T>[];
  employmentPerCompany: EmploymentsPerCompanyType<T>[];
  tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeadersType<T>[];
  formulaVersions: FormulaVersionsType<T>[];
  maintenanceAssetSparePartsWorkerPersonnelNumber: AssetMaintenanceAssetTypeDefaultSparePartsV2Type<T>[];
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
  timeAndAttendanceActivityRegistrations: TimeAndAttendanceActivityRegistrationsType<T>[];
  benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactionsType<T>[];
  engineeringChangeOrderProductReleases: EngineeringChangeOrderProductReleasesType<T>[];
  taxTransactions: UsTaxTransactionHistoriesType<T>[];
  variableCompensationAward: VariableCompensationAwardsType<T>[];
  employeesV2: EmployeesV2Type<T>[];
  engineeringChangeOrderProductRouteHeaders: EngineeringChangeOrderProductRouteHeadersType<T>[];
  workerAddressDualWrite: WorkerPostalAddressesDualWriteType<T>[];
  leaveEnrollments: LeaveEnrollmentsType<T>[];
  checklistTemplateTasks: OnboardingChecklistTemplateTasksType<T>[];
  workerSkills: WorkerSkillsType<T>[];
  libraryTasks: OnboardingLibraryTasksType<T>[];
  positions: PositionsType<T>[];
  cancelledSentProductReleaseHeaders: SentProductReleaseHeadersType<T>[];
  processedSentProductReleaseHeaders: SentProductReleaseHeadersType<T>[];
  payStatementEarningLine: PayStatementEarningLinesType<T>[];
  cancelledReceivedProductReleaseHeaders: ReceivedProductReleaseHeadersType<T>[];
  processedReceivedProductReleaseHeaders: ReceivedProductReleaseHeadersType<T>[];
  applications: ApplicationsType<T>[];
  baseWorker?: BaseWorkersType<T> | null;
  personalContactOrganizationWorkerContact: PersonalContactOrganizationType<T>[];
  workerEnrolledAccrualInquiry: WorkerEnrolledAccrualInquiriesType<T>[];
  engineeringChangeOrderProductBillOfMaterialsHeadersV2: EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<T>[];
  engineeringChangeRequestDependencyActions?: EngineeringChangeRequestDependencyActionsType<T> | null;
  leaveAccrualSuspensions: LeaveAccrualSuspensionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
  transferredTimeAndAttendanceActivityRegistrations: TransferredTimeAndAttendanceActivityRegistrationsType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  itemSpecificBillOfMaterialsHeadersV2: ItemSpecificBillOfMaterialsHeadersV2Type<T>[];
  plannedTimeAndAttendanceAbsenceRegistrations: PlannedTimeAndAttendanceAbsenceRegistrationsType<T>[];
  leaveRequestsV2: LeaveRequestsV2Type<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
  engineeringChangeRequestHeaders: EngineeringChangeRequestHeadersType<T>[];
  benefitsPlanEmployee?: BenefitsPlanEmployeesType<T> | null;
  engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2Type<T>[];
  clmIntegrationPrimaryResponsibilityPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
  clmIntegrationSecondaryResponsibilityPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
  workerTitleCurrent: WorkerTitlesCurrentType<T>[];
  routeVersions: RouteVersionsType<T>[];
  inventoryCountingJournalHeader: InventoryCountingJournalHeadersType<T>[];
  garnishmentTaxLevyRules?: WorkerGarnishmentRulesType<T> | null;
  contactsV2: WorkerContactsV2Type<T>[];
  goals: GoalsType<T>[];
  maintenanceRequestsStartingWorker: AssetMaintenanceRequestsV2Type<T>[];
  maintenanceRequestsAssetVerificationWorker: AssetMaintenanceRequestsV2Type<T>[];
}
