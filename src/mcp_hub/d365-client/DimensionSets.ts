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
import type { DimensionSetsApi } from './DimensionSetsApi';
import {
  VendPaymModeBankAccounts,
  VendPaymModeBankAccountsType
} from './VendPaymModeBankAccounts';
import {
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import {
  InventoryMovementJournalEntriesV2,
  InventoryMovementJournalEntriesV2Type
} from './InventoryMovementJournalEntriesV2';
import {
  VariableCompensationEnrollmentsV2,
  VariableCompensationEnrollmentsV2Type
} from './VariableCompensationEnrollmentsV2';
import {
  BatchOrderFormulaLines,
  BatchOrderFormulaLinesType
} from './BatchOrderFormulaLines';
import {
  RetailStoreTenderTypeTable,
  RetailStoreTenderTypeTableType
} from './RetailStoreTenderTypeTable';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import {
  BatchOrderByProducts,
  BatchOrderByProductsType
} from './BatchOrderByProducts';
import {
  SalesOrderConfirmationLines,
  SalesOrderConfirmationLinesType
} from './SalesOrderConfirmationLines';
import { ExpMobileReports, ExpMobileReportsType } from './ExpMobileReports';
import {
  SalesOrderConfirmationHeaders,
  SalesOrderConfirmationHeadersType
} from './SalesOrderConfirmationHeaders';
import { Prospects, ProspectsType } from './Prospects';
import {
  LtmDocumentClassificationSalesPoints,
  LtmDocumentClassificationSalesPointsType
} from './LtmDocumentClassificationSalesPoints';
import {
  BatchOrderCoProducts,
  BatchOrderCoProductsType
} from './BatchOrderCoProducts';
import { BatchOrderHeaders, BatchOrderHeadersType } from './BatchOrderHeaders';
import {
  VariableCompensationEnrollments,
  VariableCompensationEnrollmentsType
} from './VariableCompensationEnrollments';
import {
  CustPaymModeBankAccounts,
  CustPaymModeBankAccountsType
} from './CustPaymModeBankAccounts';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  CashFlowForecastExternalSourceEntries,
  CashFlowForecastExternalSourceEntriesType
} from './CashFlowForecastExternalSourceEntries';
import {
  SalesOrderHeadersV4,
  SalesOrderHeadersV4Type
} from './SalesOrderHeadersV4';
import { PsaForecasts, PsaForecastsType } from './PsaForecasts';
import { CustomerGroups, CustomerGroupsType } from './CustomerGroups';
import {
  SalesBookVatProcessParameters,
  SalesBookVatProcessParametersType
} from './SalesBookVatProcessParameters';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import { JournalTrans, JournalTransType } from './JournalTrans';
import { MobileExpReports, MobileExpReportsType } from './MobileExpReports';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  BeginningBalanceCostSaleTransactions,
  BeginningBalanceCostSaleTransactionsType
} from './BeginningBalanceCostSaleTransactions';
import { VendorsV3, VendorsV3Type } from './VendorsV3';
import {
  AllocationForMainAccounts,
  AllocationForMainAccountsType
} from './AllocationForMainAccounts';
import { AllocationRules, AllocationRulesType } from './AllocationRules';
import {
  BudgetAllocationTerms,
  BudgetAllocationTermsType
} from './BudgetAllocationTerms';
import { CompFixedEmpls, CompFixedEmplsType } from './CompFixedEmpls';
import {
  ProjectEmplForecasts,
  ProjectEmplForecastsType
} from './ProjectEmplForecasts';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  VendorInvoiceHeaders,
  VendorInvoiceHeadersType
} from './VendorInvoiceHeaders';
import {
  InventoryAdjustmentJournalEntriesV2,
  InventoryAdjustmentJournalEntriesV2Type
} from './InventoryAdjustmentJournalEntriesV2';
import {
  PurchaseRequisitionLinesV2,
  PurchaseRequisitionLinesV2Type
} from './PurchaseRequisitionLinesV2';
import {
  PurchaseOrderLines,
  PurchaseOrderLinesType
} from './PurchaseOrderLines';
import {
  UbuyPurchaseRequisitionLines,
  UbuyPurchaseRequisitionLinesType
} from './UbuyPurchaseRequisitionLines';
import {
  SalesOrderHeadersV2,
  SalesOrderHeadersV2Type
} from './SalesOrderHeadersV2';
import { CustomersV2, CustomersV2Type } from './CustomersV2';
import {
  ProjectExpenseForecasts,
  ProjectExpenseForecastsType
} from './ProjectExpenseForecasts';
import { MobileExpensesV2, MobileExpensesV2Type } from './MobileExpensesV2';
import {
  AllocationRuleDestinations,
  AllocationRuleDestinationsType
} from './AllocationRuleDestinations';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';
import {
  CourseParticipants,
  CourseParticipantsType
} from './CourseParticipants';
import { OnlineChannelV2S, OnlineChannelV2SType } from './OnlineChannelV2S';
import {
  BeginningBalanceOnAccTransactions,
  BeginningBalanceOnAccTransactionsType
} from './BeginningBalanceOnAccTransactions';
import {
  LedgerEliminationRuleLines,
  LedgerEliminationRuleLinesType
} from './LedgerEliminationRuleLines';
import {
  ProductionOrderBillOfMaterialLines,
  ProductionOrderBillOfMaterialLinesType
} from './ProductionOrderBillOfMaterialLines';
import {
  PurchaseOrderConfirmationLines,
  PurchaseOrderConfirmationLinesType
} from './PurchaseOrderConfirmationLines';
import { Projects, ProjectsType } from './Projects';
import {
  ProjectSalesItemRequirements,
  ProjectSalesItemRequirementsType
} from './ProjectSalesItemRequirements';
import {
  ProjectItemJournalTrans,
  ProjectItemJournalTransType
} from './ProjectItemJournalTrans';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import { RetailTerminals, RetailTerminalsType } from './RetailTerminals';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import {
  RequestForQuotationReplyLines,
  RequestForQuotationReplyLinesType
} from './RequestForQuotationReplyLines';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { MobileExpenses, MobileExpensesType } from './MobileExpenses';
import {
  TransferOrderLinesV2,
  TransferOrderLinesV2Type
} from './TransferOrderLinesV2';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  PositionDefaultDimensions,
  PositionDefaultDimensionsType
} from './PositionDefaultDimensions';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  RetailStoreTenderTypes,
  RetailStoreTenderTypesType
} from './RetailStoreTenderTypes';
import { RDeferralsBooks, RDeferralsBooksType } from './RDeferralsBooks';
import {
  ExpMobileLineApprovals,
  ExpMobileLineApprovalsType
} from './ExpMobileLineApprovals';
import {
  ProductionOrderRouteOperations,
  ProductionOrderRouteOperationsType
} from './ProductionOrderRouteOperations';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  SadDocumentInvoicePurchaseOrders,
  SadDocumentInvoicePurchaseOrdersType
} from './SadDocumentInvoicePurchaseOrders';
import {
  PurchBookVatProcessParameters,
  PurchBookVatProcessParametersType
} from './PurchBookVatProcessParameters';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  PurchaseOrderLinesV2,
  PurchaseOrderLinesV2Type
} from './PurchaseOrderLinesV2';
import {
  EarningStatementLines,
  EarningStatementLinesType
} from './EarningStatementLines';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import {
  ProjectContractLines,
  ProjectContractLinesType
} from './ProjectContractLines';
import { Customers, CustomersType } from './Customers';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import {
  ExpenseCashAdvances,
  ExpenseCashAdvancesType
} from './ExpenseCashAdvances';
import {
  MainAccountLegalEntities,
  MainAccountLegalEntitiesType
} from './MainAccountLegalEntities';
import { RetailChannels, RetailChannelsType } from './RetailChannels';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  BeginningBalanceFeeTransactions,
  BeginningBalanceFeeTransactionsType
} from './BeginningBalanceFeeTransactions';
import {
  SalesQuotationHeaders,
  SalesQuotationHeadersType
} from './SalesQuotationHeaders';
import { SalesOrderHeaders, SalesOrderHeadersType } from './SalesOrderHeaders';
import {
  OperationsResources,
  OperationsResourcesType
} from './OperationsResources';
import { Vendors, VendorsType } from './Vendors';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  BenefitPlanDefaultDimensions,
  BenefitPlanDefaultDimensionsType
} from './BenefitPlanDefaultDimensions';
import { SalesOrderLines, SalesOrderLinesType } from './SalesOrderLines';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import {
  InventoryServiceAdjustmentJournalEntries,
  InventoryServiceAdjustmentJournalEntriesType
} from './InventoryServiceAdjustmentJournalEntries';
import {
  ProjQuotationLines,
  ProjQuotationLinesType
} from './ProjQuotationLines';
import {
  VendorInvoiceLines,
  VendorInvoiceLinesType
} from './VendorInvoiceLines';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import { RAssetStandards, RAssetStandardsType } from './RAssetStandards';
import {
  DemandForecastEntries,
  DemandForecastEntriesType
} from './DemandForecastEntries';
import { Groups, GroupsType } from './Groups';
import {
  InventoryMovementJournalEntries,
  InventoryMovementJournalEntriesType
} from './InventoryMovementJournalEntries';
import {
  PurchaseOrderHeaders,
  PurchaseOrderHeadersType
} from './PurchaseOrderHeaders';
import { AssetJournalV2, AssetJournalV2Type } from './AssetJournalV2';
import {
  SubBillBillingScheduleLines,
  SubBillBillingScheduleLinesType
} from './SubBillBillingScheduleLines';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import {
  InventoryMovementJournalEntriesV4,
  InventoryMovementJournalEntriesV4Type
} from './InventoryMovementJournalEntriesV4';
import { CustTransactions, CustTransactionsType } from './CustTransactions';
import { Employments, EmploymentsType } from './Employments';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import {
  PurchaseRequisitionLines,
  PurchaseRequisitionLinesType
} from './PurchaseRequisitionLines';
import { DemandForecastsV2, DemandForecastsV2Type } from './DemandForecastsV2';
import {
  EmploymentsPerCompany,
  EmploymentsPerCompanyType
} from './EmploymentsPerCompany';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';
import { ExpenseRates, ExpenseRatesType } from './ExpenseRates';
import {
  ProjectOnAccForecasts,
  ProjectOnAccForecastsType
} from './ProjectOnAccForecasts';
import {
  TimeAndAttendanceActivityRegistrations,
  TimeAndAttendanceActivityRegistrationsType
} from './TimeAndAttendanceActivityRegistrations';
import { PsaActuals, PsaActualsType } from './PsaActuals';
import {
  TimeAndAttendanceTimeActivityRegistrationCalculations,
  TimeAndAttendanceTimeActivityRegistrationCalculationsType
} from './TimeAndAttendanceTimeActivityRegistrationCalculations';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  VariableCompensationAwards,
  VariableCompensationAwardsType
} from './VariableCompensationAwards';
import {
  SadDocumentLinePurchaseOrders,
  SadDocumentLinePurchaseOrdersType
} from './SadDocumentLinePurchaseOrders';
import {
  ExpenseTravelRequisitions,
  ExpenseTravelRequisitionsType
} from './ExpenseTravelRequisitions';
import { ProjectsV2, ProjectsV2Type } from './ProjectsV2';
import { CourseTables, CourseTablesType } from './CourseTables';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import { ExpMobileExpenses, ExpMobileExpensesType } from './ExpMobileExpenses';
import {
  ProjectFundingSources,
  ProjectFundingSourcesType
} from './ProjectFundingSources';
import {
  LtmDocumentClassificationDimensions,
  LtmDocumentClassificationDimensionsType
} from './LtmDocumentClassificationDimensions';
import {
  BatchOrderCoProductsV2,
  BatchOrderCoProductsV2Type
} from './BatchOrderCoProductsV2';
import {
  ExpMobileExpenseLineAttachedToReports,
  ExpMobileExpenseLineAttachedToReportsType
} from './ExpMobileExpenseLineAttachedToReports';
import {
  ExpCopilotAutomationReports,
  ExpCopilotAutomationReportsType
} from './ExpCopilotAutomationReports';
import { CustomerRebates, CustomerRebatesType } from './CustomerRebates';
import {
  SubBillSalesLineRevenueSplits,
  SubBillSalesLineRevenueSplitsType
} from './SubBillSalesLineRevenueSplits';
import {
  PositionDefaultDimensionsDualWrite,
  PositionDefaultDimensionsDualWriteType
} from './PositionDefaultDimensionsDualWrite';
import {
  ProjectItemForecasts,
  ProjectItemForecastsType
} from './ProjectItemForecasts';
import {
  BatchOrderByProductsV2,
  BatchOrderByProductsV2Type
} from './BatchOrderByProductsV2';
import {
  CourseTypeDefaultDimensions,
  CourseTypeDefaultDimensionsType
} from './CourseTypeDefaultDimensions';
import { Courses, CoursesType } from './Courses';
import { SalesOrderLinesV3, SalesOrderLinesV3Type } from './SalesOrderLinesV3';
import {
  TransferredTimeAndAttendanceActivityRegistrations,
  TransferredTimeAndAttendanceActivityRegistrationsType
} from './TransferredTimeAndAttendanceActivityRegistrations';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  InventoryMovementJournalEntriesV3,
  InventoryMovementJournalEntriesV3Type
} from './InventoryMovementJournalEntriesV3';
import {
  TransferOrderLines,
  TransferOrderLinesType
} from './TransferOrderLines';
import {
  ExpCopilotAutomationExpenses,
  ExpCopilotAutomationExpensesType
} from './ExpCopilotAutomationExpenses';
import {
  RequestForQuotationReplyHeaders,
  RequestForQuotationReplyHeadersType
} from './RequestForQuotationReplyHeaders';
import { AdvanceReports, AdvanceReportsType } from './AdvanceReports';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  ProjectFeeForecasts,
  ProjectFeeForecastsType
} from './ProjectFeeForecasts';
import {
  FiscalCloseLedgerOptions,
  FiscalCloseLedgerOptionsType
} from './FiscalCloseLedgerOptions';
import {
  SadDocumentPurchaseOrders,
  SadDocumentPurchaseOrdersType
} from './SadDocumentPurchaseOrders';
import {
  SalesOrderHeadersV3,
  SalesOrderHeadersV3Type
} from './SalesOrderHeadersV3';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  ExpMobileReportApprovals,
  ExpMobileReportApprovalsType
} from './ExpMobileReportApprovals';
import {
  RevRecRevRecDeferredLines,
  RevRecRevRecDeferredLinesType
} from './RevRecRevRecDeferredLines';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';
import {
  SalesQuotationLines,
  SalesQuotationLinesType
} from './SalesQuotationLines';
import { Expenses, ExpensesType } from './Expenses';
import { BankAccounts, BankAccountsType } from './BankAccounts';
import {
  SalesQuotationHeadersV2,
  SalesQuotationHeadersV2Type
} from './SalesQuotationHeadersV2';
import {
  ProjQuotationHeaders,
  ProjQuotationHeadersType
} from './ProjQuotationHeaders';
import {
  RetailTransactionAuditablePaymentLines,
  RetailTransactionAuditablePaymentLinesType
} from './RetailTransactionAuditablePaymentLines';
import {
  BankClientPayments,
  BankClientPaymentsType
} from './BankClientPayments';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';

/**
 * This class represents the entity "DimensionSets" of service "d365_metadata".
 */
export class DimensionSets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionSetsType<T>
{
  /**
   * Technical entity name for DimensionSets.
   */
  static override _entityName = 'DimensionSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionSets entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Display Value.
   * @nullable
   */
  declare displayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link VendPaymModeBankAccounts} entity.
   */
  declare vendPaymModeBankAccounts: VendPaymModeBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntry: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJourLineDefaultDim: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentsV2} entity.
   */
  declare employmentV2: EmploymentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV2} entity.
   */
  declare inventoryMovementJournalEntryV2: InventoryMovementJournalEntriesV2<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationEnrollmentsV2} entity.
   */
  declare variableCompensationEnrollmentV2: VariableCompensationEnrollmentsV2<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderFormulaLines} entity.
   */
  declare batchOrderFormulaLine: BatchOrderFormulaLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypeTable} entity.
   */
  declare retailStoreTenderTypeTable: RetailStoreTenderTypeTable<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJourLineDefaultDim: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJourLineOffsetDefaultDimension: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsDefaultDimension: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsOffsetDefaultDimension: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderByProducts} entity.
   */
  declare batchOrderByProduct: BatchOrderByProducts<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderConfirmationLines} entity.
   */
  declare salesOrderConfirmationLines: SalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpMobileReports} entity.
   */
  declare expMobileReport: ExpMobileReports<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderConfirmationHeaders} entity.
   */
  declare salesOrderConfirmationHeader: SalesOrderConfirmationHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link LtmDocumentClassificationSalesPoints} entity.
   */
  declare ltmDocumentClassificationSalesPointEntity: LtmDocumentClassificationSalesPoints<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderCoProducts} entity.
   */
  declare batchOrderCoProduct: BatchOrderCoProducts<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderHeaders} entity.
   */
  declare batchOrderHeader: BatchOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationEnrollments} entity.
   */
  declare variableCompensationEnrollment: VariableCompensationEnrollments<T>[];
  /**
   * One-to-many navigation property to the {@link CustPaymModeBankAccounts} entity.
   */
  declare custPaymModeBankAccounts: CustPaymModeBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare entAssetFunctionalLocationEntityDimensionSetEntity: AssetMaintenanceFunctionalLocations<T>[];
  /**
   * One-to-many navigation property to the {@link CashFlowForecastExternalSourceEntries} entity.
   */
  declare cashFlowForecastExternalSourceEntry: CashFlowForecastExternalSourceEntries<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeadersV4} entity.
   */
  declare salesOrderHeaderV4: SalesOrderHeadersV4<T>[];
  /**
   * One-to-many navigation property to the {@link PsaForecasts} entity.
   */
  declare psaForecast: PsaForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerGroups} entity.
   */
  declare defaultDimensionSet: CustomerGroups<T>[];
  /**
   * One-to-many navigation property to the {@link SalesBookVatProcessParameters} entity.
   */
  declare salesBookVatProcessParameter: SalesBookVatProcessParameters<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare assetLeaseLedgerJournalLineDefaultDimension: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare assetLeaseLedgerJournalLineOffsetDefaultDimension: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineDefaultDimensionOffsetEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineDefaultDimensionAccountEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans: JournalTrans<T>[];
  /**
   * One-to-many navigation property to the {@link MobileExpReports} entity.
   */
  declare mobileExpReport: MobileExpReports<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLineAccountDefaultDimension: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLineOffsetAccountDefaultDimension: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceCostSaleTransactions} entity.
   */
  declare beginningBalanceCostSaleTransaction: BeginningBalanceCostSaleTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link VendorsV3} entity.
   */
  declare vendorV3: VendorsV3<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationForMainAccounts} entity.
   */
  declare allocationForMainAccount: AllocationForMainAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationRules} entity.
   */
  declare allocationRule: AllocationRules<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetAllocationTerms} entity.
   */
  declare budgetAllocationTermEntityDimensionSetEntity: BudgetAllocationTerms<T>[];
  /**
   * One-to-many navigation property to the {@link CompFixedEmpls} entity.
   */
  declare compFixedEmpl: CompFixedEmpls<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectEmplForecasts} entity.
   */
  declare projectEmplForecast: ProjectEmplForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader: ProductionOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceHeaders} entity.
   */
  declare vendorInvoiceHeader: VendorInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryAdjustmentJournalEntriesV2} entity.
   */
  declare inventoryAdjustmentJournalEntryV2: InventoryAdjustmentJournalEntriesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLinesV2} entity.
   */
  declare purchaseRequisitionLineV2: PurchaseRequisitionLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLines} entity.
   */
  declare purchaseOrderLine: PurchaseOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link UbuyPurchaseRequisitionLines} entity.
   */
  declare ubuyPurchaseRequisitionLines: UbuyPurchaseRequisitionLines<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeadersV2} entity.
   */
  declare salesOrderHeaderV2: SalesOrderHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link CustomersV2} entity.
   */
  declare customerV2: CustomersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectExpenseForecasts} entity.
   */
  declare projectExpenseForecast: ProjectExpenseForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link MobileExpensesV2} entity.
   */
  declare mobileExpenseV2: MobileExpensesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationRuleDestinations} entity.
   */
  declare allocationRuleDestination: AllocationRuleDestinations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable: RetailTransactionsAuditable<T>[];
  /**
   * One-to-many navigation property to the {@link CourseParticipants} entity.
   */
  declare courseParticipant: CourseParticipants<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannelV2S} entity.
   */
  declare onlineChannelV2: OnlineChannelV2S<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceOnAccTransactions} entity.
   */
  declare beginningBalanceOnAccTransaction: BeginningBalanceOnAccTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerEliminationRuleLines} entity.
   */
  declare ledgerEliminationRuleLine: LedgerEliminationRuleLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderBillOfMaterialLines} entity.
   */
  declare productionOrderBillOfMaterialLine: ProductionOrderBillOfMaterialLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderConfirmationLines} entity.
   */
  declare purchaseOrderConfirmationLines: PurchaseOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link Projects} entity.
   */
  declare project: Projects<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectSalesItemRequirements} entity.
   */
  declare projectSalesItemRequirement: ProjectSalesItemRequirements<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectItemJournalTrans} entity.
   */
  declare projectItemJournalTrans: ProjectItemJournalTrans<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTerminals} entity.
   */
  declare retailTerminal: RetailTerminals<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link RequestForQuotationReplyLines} entity.
   */
  declare requestForQuotationReplyLines: RequestForQuotationReplyLines<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare fixedAssetBookV2: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link MobileExpenses} entity.
   */
  declare mobileExpense: MobileExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link TransferOrderLinesV2} entity.
   */
  declare transferOrderLineV2: TransferOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare entAssetObjectTableEntityDefaultDimensionSetEntity: AssetMaintenanceAssets<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDefaultDimensions} entity.
   */
  declare positionDefaultDimension: PositionDefaultDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntry: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypes} entity.
   */
  declare retailStoreTenderType: RetailStoreTenderTypes<T>[];
  /**
   * One-to-many navigation property to the {@link RDeferralsBooks} entity.
   */
  declare rDeferralsBook: RDeferralsBooks<T>[];
  /**
   * One-to-many navigation property to the {@link ExpMobileLineApprovals} entity.
   */
  declare expMobileLineApproval: ExpMobileLineApprovals<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrderRouteOperations} entity.
   */
  declare productionOrderRouteOperation: ProductionOrderRouteOperations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntry: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link SadDocumentInvoicePurchaseOrders} entity.
   */
  declare sadDocumentInvoicePurchaseOrder: SadDocumentInvoicePurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchBookVatProcessParameters} entity.
   */
  declare purchBookVatProcessParameter: PurchBookVatProcessParameters<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineDefaultDimension: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineOffsetDefaultDimension: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLinesV2} entity.
   */
  declare purchaseOrderLinesV2: PurchaseOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link EarningStatementLines} entity.
   */
  declare earningStatementLine: EarningStatementLines<T>[];
  /**
   * One-to-many navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSites: OperationalSitesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectContractLines} entity.
   */
  declare projectContractLines: ProjectContractLines<T>[];
  /**
   * One-to-many navigation property to the {@link Customers} entity.
   */
  declare customer: Customers<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseCashAdvances} entity.
   */
  declare expenseCashAdvance: ExpenseCashAdvances<T>[];
  /**
   * One-to-many navigation property to the {@link MainAccountLegalEntities} entity.
   */
  declare mainAccountLegalEntity: MainAccountLegalEntities<T>[];
  /**
   * One-to-many navigation property to the {@link RetailChannels} entity.
   */
  declare retailChannel: RetailChannels<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeader: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare ftiDefaultDimensionDimensionSet: FreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceFeeTransactions} entity.
   */
  declare beginningBalanceFeeTransaction: BeginningBalanceFeeTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link SalesQuotationHeaders} entity.
   */
  declare salesQuotationHeader: SalesQuotationHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeaders} entity.
   */
  declare salesOrderHeader: SalesOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OperationsResources} entity.
   */
  declare operationsResources: OperationsResources<T>[];
  /**
   * One-to-many navigation property to the {@link Vendors} entity.
   */
  declare vendor: Vendors<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPlanDefaultDimensions} entity.
   */
  declare benefitPlanDefaultDimension: BenefitPlanDefaultDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLines} entity.
   */
  declare salesOrderLine: SalesOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderDefaultDimension: FreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryServiceAdjustmentJournalEntries} entity.
   */
  declare inventoryServiceAdjustmentJournalEntry: InventoryServiceAdjustmentJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ProjQuotationLines} entity.
   */
  declare projQuotationLine: ProjQuotationLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceLines} entity.
   */
  declare vendorInvoiceLine: VendorInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare expenseJournalLineDefaultDimension: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare expenseJournalLineOffsetDefaultDimension: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link RAssetStandards} entity.
   */
  declare rAssetStandard: RAssetStandards<T>[];
  /**
   * One-to-many navigation property to the {@link DemandForecastEntries} entity.
   */
  declare demandForecastEntry: DemandForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Groups} entity.
   */
  declare group: Groups<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntries} entity.
   */
  declare inventoryMovementJournalEntry: InventoryMovementJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaders} entity.
   */
  declare purchaseOrderHeader: PurchaseOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalV2EntityDefaultDimension: AssetJournalV2<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillBillingScheduleLines} entity.
   */
  declare relationToDimensionSetEntity: SubBillBillingScheduleLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV4} entity.
   */
  declare inventoryMovementJournalEntryV4: InventoryMovementJournalEntriesV4<T>[];
  /**
   * One-to-many navigation property to the {@link CustTransactions} entity.
   */
  declare custTransaction: CustTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link Employments} entity.
   */
  declare employment: Employments<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequisitionLines} entity.
   */
  declare purchaseRequisitionLine: PurchaseRequisitionLines<T>[];
  /**
   * One-to-many navigation property to the {@link DemandForecastsV2} entity.
   */
  declare demandForecastV2: DemandForecastsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentsPerCompany} entity.
   */
  declare employmentPerCompany: EmploymentsPerCompany<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare fixedAssetValueModel: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseRates} entity.
   */
  declare expenseRate: ExpenseRates<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectOnAccForecasts} entity.
   */
  declare projectOnAccForecast: ProjectOnAccForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceActivityRegistrations} entity.
   */
  declare timeAndAttendanceActivityRegistration: TimeAndAttendanceActivityRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link PsaActuals} entity.
   */
  declare psaActual: PsaActuals<T>[];
  /**
   * One-to-many navigation property to the {@link TimeAndAttendanceTimeActivityRegistrationCalculations} entity.
   */
  declare timeAndAttendanceTimeActivityRegistrationCalculation: TimeAndAttendanceTimeActivityRegistrationCalculations<T>[];
  /**
   * One-to-many navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2: VendorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationAwards} entity.
   */
  declare variableCompensationAward: VariableCompensationAwards<T>[];
  /**
   * One-to-many navigation property to the {@link SadDocumentLinePurchaseOrders} entity.
   */
  declare sadDocumentLinePurchaseOrder: SadDocumentLinePurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseTravelRequisitions} entity.
   */
  declare expenseTravelRequisition: ExpenseTravelRequisitions<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectsV2} entity.
   */
  declare projectV2: ProjectsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTables} entity.
   */
  declare courseTable: CourseTables<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel: OnlineChannels<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3: CustomersV3<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityDefaultDimensionSetEntity: AssetMaintenanceAssetsV3<T>[];
  /**
   * One-to-many navigation property to the {@link ExpMobileExpenses} entity.
   */
  declare expMobileExpense: ExpMobileExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectFundingSources} entity.
   */
  declare projectFundingSource: ProjectFundingSources<T>[];
  /**
   * One-to-many navigation property to the {@link LtmDocumentClassificationDimensions} entity.
   */
  declare ltmDocumentClassificationDimension: LtmDocumentClassificationDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderCoProductsV2} entity.
   */
  declare batchOrderCoProductV2: BatchOrderCoProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ExpMobileExpenseLineAttachedToReports} entity.
   */
  declare expMobileExpenseLineAttachedToReport: ExpMobileExpenseLineAttachedToReports<T>[];
  /**
   * One-to-many navigation property to the {@link ExpCopilotAutomationReports} entity.
   */
  declare expCopilotAutomationReport: ExpCopilotAutomationReports<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerRebates} entity.
   */
  declare salesRebates: CustomerRebates<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillSalesLineRevenueSplits} entity.
   */
  declare dimensionSet: SubBillSalesLineRevenueSplits<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDefaultDimensionsDualWrite} entity.
   */
  declare positionDefaultDimensionDualWrite: PositionDefaultDimensionsDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectItemForecasts} entity.
   */
  declare projectItemForecast: ProjectItemForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link BatchOrderByProductsV2} entity.
   */
  declare batchOrderByProductsV2: BatchOrderByProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CourseTypeDefaultDimensions} entity.
   */
  declare courseTypeDefaultDimension: CourseTypeDefaultDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link Courses} entity.
   */
  declare course: Courses<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLinesV3} entity.
   */
  declare salesOrderLineV3: SalesOrderLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link TransferredTimeAndAttendanceActivityRegistrations} entity.
   */
  declare transferredTimeAndAttendanceActivityRegistration: TransferredTimeAndAttendanceActivityRegistrations<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV3} entity.
   */
  declare inventoryMovementJournalEntryV3: InventoryMovementJournalEntriesV3<T>[];
  /**
   * One-to-many navigation property to the {@link TransferOrderLines} entity.
   */
  declare transferOrderLine: TransferOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpCopilotAutomationExpenses} entity.
   */
  declare expCopilotAutomationExpense: ExpCopilotAutomationExpenses<T>[];
  /**
   * One-to-many navigation property to the {@link RequestForQuotationReplyHeaders} entity.
   */
  declare requestForQuotationReplyHeaders: RequestForQuotationReplyHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link AdvanceReports} entity.
   */
  declare advanceReport: AdvanceReports<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine: RetailTransactionAuditableSalesLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectFeeForecasts} entity.
   */
  declare projectFeeForecast: ProjectFeeForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link FiscalCloseLedgerOptions} entity.
   */
  declare fiscalCloseLedgerOptions: FiscalCloseLedgerOptions<T>[];
  /**
   * One-to-many navigation property to the {@link SadDocumentPurchaseOrders} entity.
   */
  declare sadDocumentPurchaseOrder: SadDocumentPurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderHeadersV3} entity.
   */
  declare salesOrderHeaderV3: SalesOrderHeadersV3<T>[];
  /**
   * One-to-many navigation property to the {@link JournalNames} entity.
   */
  declare journalName: JournalNames<T>[];
  /**
   * One-to-many navigation property to the {@link ExpMobileReportApprovals} entity.
   */
  declare expMobileReportApproval: ExpMobileReportApprovals<T>[];
  /**
   * One-to-many navigation property to the {@link RevRecRevRecDeferredLines} entity.
   */
  declare defaultDimensions: RevRecRevRecDeferredLines<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link SalesQuotationLines} entity.
   */
  declare salesQuotationLine: SalesQuotationLines<T>[];
  /**
   * One-to-many navigation property to the {@link Expenses} entity.
   */
  declare expenses: Expenses<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SalesQuotationHeadersV2} entity.
   */
  declare salesQuotationHeaderV2: SalesQuotationHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProjQuotationHeaders} entity.
   */
  declare projQuotationHeader: ProjQuotationHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditablePaymentLines} entity.
   */
  declare retailTransactionAuditablePaymentLine: RetailTransactionAuditablePaymentLines<T>[];
  /**
   * One-to-many navigation property to the {@link BankClientPayments} entity.
   */
  declare bankClientPayment: BankClientPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2: PurchaseOrderHeadersV2<T>[];

  constructor(_entityApi: DimensionSetsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  displayValue?: DeserializedType<T, 'Edm.String'> | null;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  vendPaymModeBankAccounts: VendPaymModeBankAccountsType<T>[];
  routeCardProductionJournalEntry: RouteCardProductionJournalEntriesType<T>[];
  custInvoiceJourLineDefaultDim: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  employmentV2: EmploymentsV2Type<T>[];
  inventoryMovementJournalEntryV2: InventoryMovementJournalEntriesV2Type<T>[];
  variableCompensationEnrollmentV2: VariableCompensationEnrollmentsV2Type<T>[];
  batchOrderFormulaLine: BatchOrderFormulaLinesType<T>[];
  retailStoreTenderTypeTable: RetailStoreTenderTypeTableType<T>[];
  vendInvoiceJourLineDefaultDim: VendInvoiceJournalLinesType<T>[];
  vendInvoiceJourLineOffsetDefaultDimension: VendInvoiceJournalLinesType<T>[];
  ledgerJournalLineCdsDefaultDimension: LedgerJournalCdsLinesType<T>[];
  ledgerJournalLineCdsOffsetDefaultDimension: LedgerJournalCdsLinesType<T>[];
  batchOrderByProduct: BatchOrderByProductsType<T>[];
  salesOrderConfirmationLines: SalesOrderConfirmationLinesType<T>[];
  expMobileReport: ExpMobileReportsType<T>[];
  salesOrderConfirmationHeader: SalesOrderConfirmationHeadersType<T>[];
  prospects: ProspectsType<T>[];
  ltmDocumentClassificationSalesPointEntity: LtmDocumentClassificationSalesPointsType<T>[];
  batchOrderCoProduct: BatchOrderCoProductsType<T>[];
  batchOrderHeader: BatchOrderHeadersType<T>[];
  variableCompensationEnrollment: VariableCompensationEnrollmentsType<T>[];
  custPaymModeBankAccounts: CustPaymModeBankAccountsType<T>[];
  entAssetFunctionalLocationEntityDimensionSetEntity: AssetMaintenanceFunctionalLocationsType<T>[];
  cashFlowForecastExternalSourceEntry: CashFlowForecastExternalSourceEntriesType<T>[];
  salesOrderHeaderV4: SalesOrderHeadersV4Type<T>[];
  psaForecast: PsaForecastsType<T>[];
  defaultDimensionSet: CustomerGroupsType<T>[];
  salesBookVatProcessParameter: SalesBookVatProcessParametersType<T>[];
  assetLeaseLedgerJournalLineDefaultDimension: AssetLeaseLedgerJournalLinesType<T>[];
  assetLeaseLedgerJournalLineOffsetDefaultDimension: AssetLeaseLedgerJournalLinesType<T>[];
  customerPaymentJournalLineDefaultDimensionOffsetEntity: CustomerPaymentJournalLinesType<T>[];
  customerPaymentJournalLineDefaultDimensionAccountEntity: CustomerPaymentJournalLinesType<T>[];
  journalTrans: JournalTransType<T>[];
  mobileExpReport: MobileExpReportsType<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  vendorPaymentJournalLineAccountDefaultDimension: VendorPaymentJournalLinesType<T>[];
  vendorPaymentJournalLineOffsetAccountDefaultDimension: VendorPaymentJournalLinesType<T>[];
  beginningBalanceCostSaleTransaction: BeginningBalanceCostSaleTransactionsType<T>[];
  vendorV3: VendorsV3Type<T>[];
  allocationForMainAccount: AllocationForMainAccountsType<T>[];
  allocationRule: AllocationRulesType<T>[];
  budgetAllocationTermEntityDimensionSetEntity: BudgetAllocationTermsType<T>[];
  compFixedEmpl: CompFixedEmplsType<T>[];
  projectEmplForecast: ProjectEmplForecastsType<T>[];
  productionOrderHeader: ProductionOrderHeadersType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  vendorInvoiceHeader: VendorInvoiceHeadersType<T>[];
  inventoryAdjustmentJournalEntryV2: InventoryAdjustmentJournalEntriesV2Type<T>[];
  purchaseRequisitionLineV2: PurchaseRequisitionLinesV2Type<T>[];
  purchaseOrderLine: PurchaseOrderLinesType<T>[];
  ubuyPurchaseRequisitionLines: UbuyPurchaseRequisitionLinesType<T>[];
  salesOrderHeaderV2: SalesOrderHeadersV2Type<T>[];
  customerV2: CustomersV2Type<T>[];
  projectExpenseForecast: ProjectExpenseForecastsType<T>[];
  mobileExpenseV2: MobileExpensesV2Type<T>[];
  allocationRuleDestination: AllocationRuleDestinationsType<T>[];
  retailTransactionAuditable: RetailTransactionsAuditableType<T>[];
  courseParticipant: CourseParticipantsType<T>[];
  onlineChannelV2: OnlineChannelV2SType<T>[];
  beginningBalanceOnAccTransaction: BeginningBalanceOnAccTransactionsType<T>[];
  ledgerEliminationRuleLine: LedgerEliminationRuleLinesType<T>[];
  productionOrderBillOfMaterialLine: ProductionOrderBillOfMaterialLinesType<T>[];
  purchaseOrderConfirmationLines: PurchaseOrderConfirmationLinesType<T>[];
  project: ProjectsType<T>[];
  projectSalesItemRequirement: ProjectSalesItemRequirementsType<T>[];
  projectItemJournalTrans: ProjectItemJournalTransType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  retailTerminal: RetailTerminalsType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  requestForQuotationReplyLines: RequestForQuotationReplyLinesType<T>[];
  fixedAssetBookV2: FixedAssetBooksV2Type<T>[];
  mobileExpense: MobileExpensesType<T>[];
  transferOrderLineV2: TransferOrderLinesV2Type<T>[];
  entAssetObjectTableEntityDefaultDimensionSetEntity: AssetMaintenanceAssetsType<T>[];
  positionDefaultDimension: PositionDefaultDimensionsType<T>[];
  jobCardProductionJournalEntry: JobCardProductionJournalEntriesType<T>[];
  retailStoreTenderType: RetailStoreTenderTypesType<T>[];
  rDeferralsBook: RDeferralsBooksType<T>[];
  expMobileLineApproval: ExpMobileLineApprovalsType<T>[];
  productionOrderRouteOperation: ProductionOrderRouteOperationsType<T>[];
  productionPickingListJournalEntry: ProductionPickingListJournalEntriesType<T>[];
  sadDocumentInvoicePurchaseOrder: SadDocumentInvoicePurchaseOrdersType<T>[];
  purchBookVatProcessParameter: PurchBookVatProcessParametersType<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  ledgerJournalLineDefaultDimension: LedgerJournalLinesType<T>[];
  ledgerJournalLineOffsetDefaultDimension: LedgerJournalLinesType<T>[];
  purchaseOrderLinesV2: PurchaseOrderLinesV2Type<T>[];
  earningStatementLine: EarningStatementLinesType<T>[];
  operationalSites: OperationalSitesV2Type<T>[];
  projectContractLines: ProjectContractLinesType<T>[];
  customer: CustomersType<T>[];
  salesAgreementLines: SalesAgreementLinesType<T>[];
  expenseCashAdvance: ExpenseCashAdvancesType<T>[];
  mainAccountLegalEntity: MainAccountLegalEntitiesType<T>[];
  retailChannel: RetailChannelsType<T>[];
  qualityOrderHeader: QualityOrderHeadersType<T>[];
  ftiDefaultDimensionDimensionSet: FreeTextInvoiceLinesType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  beginningBalanceFeeTransaction: BeginningBalanceFeeTransactionsType<T>[];
  salesQuotationHeader: SalesQuotationHeadersType<T>[];
  salesOrderHeader: SalesOrderHeadersType<T>[];
  operationsResources: OperationsResourcesType<T>[];
  vendor: VendorsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  benefitPlanDefaultDimension: BenefitPlanDefaultDimensionsType<T>[];
  salesOrderLine: SalesOrderLinesType<T>[];
  freeTextInvoiceHeaderDefaultDimension: FreeTextInvoiceHeadersType<T>[];
  inventoryServiceAdjustmentJournalEntry: InventoryServiceAdjustmentJournalEntriesType<T>[];
  projQuotationLine: ProjQuotationLinesType<T>[];
  vendorInvoiceLine: VendorInvoiceLinesType<T>[];
  releasedProductV2: ReleasedProductsV2Type<T>[];
  expenseJournalLineDefaultDimension: ExpenseJournalLinesType<T>[];
  expenseJournalLineOffsetDefaultDimension: ExpenseJournalLinesType<T>[];
  rAssetStandard: RAssetStandardsType<T>[];
  demandForecastEntry: DemandForecastEntriesType<T>[];
  group: GroupsType<T>[];
  inventoryMovementJournalEntry: InventoryMovementJournalEntriesType<T>[];
  purchaseOrderHeader: PurchaseOrderHeadersType<T>[];
  assetJournalV2EntityDefaultDimension: AssetJournalV2Type<T>[];
  relationToDimensionSetEntity: SubBillBillingScheduleLinesType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  inventoryMovementJournalEntryV4: InventoryMovementJournalEntriesV4Type<T>[];
  custTransaction: CustTransactionsType<T>[];
  employment: EmploymentsType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  purchaseRequisitionLine: PurchaseRequisitionLinesType<T>[];
  demandForecastV2: DemandForecastsV2Type<T>[];
  employmentPerCompany: EmploymentsPerCompanyType<T>[];
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
  fixedAssetValueModel: FixedAssetValueModelsType<T>[];
  expenseRate: ExpenseRatesType<T>[];
  projectOnAccForecast: ProjectOnAccForecastsType<T>[];
  timeAndAttendanceActivityRegistration: TimeAndAttendanceActivityRegistrationsType<T>[];
  psaActual: PsaActualsType<T>[];
  timeAndAttendanceTimeActivityRegistrationCalculation: TimeAndAttendanceTimeActivityRegistrationCalculationsType<T>[];
  vendorV2: VendorsV2Type<T>[];
  variableCompensationAward: VariableCompensationAwardsType<T>[];
  sadDocumentLinePurchaseOrder: SadDocumentLinePurchaseOrdersType<T>[];
  expenseTravelRequisition: ExpenseTravelRequisitionsType<T>[];
  projectV2: ProjectsV2Type<T>[];
  courseTable: CourseTablesType<T>[];
  onlineChannel: OnlineChannelsType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  customerV3: CustomersV3Type<T>[];
  entAssetObjectTableV3EntityDefaultDimensionSetEntity: AssetMaintenanceAssetsV3Type<T>[];
  expMobileExpense: ExpMobileExpensesType<T>[];
  projectFundingSource: ProjectFundingSourcesType<T>[];
  ltmDocumentClassificationDimension: LtmDocumentClassificationDimensionsType<T>[];
  batchOrderCoProductV2: BatchOrderCoProductsV2Type<T>[];
  expMobileExpenseLineAttachedToReport: ExpMobileExpenseLineAttachedToReportsType<T>[];
  expCopilotAutomationReport: ExpCopilotAutomationReportsType<T>[];
  salesRebates: CustomerRebatesType<T>[];
  dimensionSet: SubBillSalesLineRevenueSplitsType<T>[];
  positionDefaultDimensionDualWrite: PositionDefaultDimensionsDualWriteType<T>[];
  projectItemForecast: ProjectItemForecastsType<T>[];
  batchOrderByProductsV2: BatchOrderByProductsV2Type<T>[];
  courseTypeDefaultDimension: CourseTypeDefaultDimensionsType<T>[];
  course: CoursesType<T>[];
  salesOrderLineV3: SalesOrderLinesV3Type<T>[];
  transferredTimeAndAttendanceActivityRegistration: TransferredTimeAndAttendanceActivityRegistrationsType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  inventoryMovementJournalEntryV3: InventoryMovementJournalEntriesV3Type<T>[];
  transferOrderLine: TransferOrderLinesType<T>[];
  expCopilotAutomationExpense: ExpCopilotAutomationExpensesType<T>[];
  requestForQuotationReplyHeaders: RequestForQuotationReplyHeadersType<T>[];
  advanceReport: AdvanceReportsType<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
  retailTransactionAuditableSalesLine: RetailTransactionAuditableSalesLinesType<T>[];
  retailStore: RetailStoresType<T>[];
  projectFeeForecast: ProjectFeeForecastsType<T>[];
  fiscalCloseLedgerOptions: FiscalCloseLedgerOptionsType<T>[];
  sadDocumentPurchaseOrder: SadDocumentPurchaseOrdersType<T>[];
  salesOrderHeaderV3: SalesOrderHeadersV3Type<T>[];
  journalName: JournalNamesType<T>[];
  expMobileReportApproval: ExpMobileReportApprovalsType<T>[];
  defaultDimensions: RevRecRevRecDeferredLinesType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
  salesQuotationLine: SalesQuotationLinesType<T>[];
  expenses: ExpensesType<T>[];
  bankAccount: BankAccountsType<T>[];
  salesQuotationHeaderV2: SalesQuotationHeadersV2Type<T>[];
  projQuotationHeader: ProjQuotationHeadersType<T>[];
  retailTransactionAuditablePaymentLine: RetailTransactionAuditablePaymentLinesType<T>[];
  bankClientPayment: BankClientPaymentsType<T>[];
  purchaseOrderHeaderV2: PurchaseOrderHeadersV2Type<T>[];
}
