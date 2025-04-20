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
import type { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { ExpenseCategories, ExpenseCategoriesType } from './ExpenseCategories';
import { SalesCharge, SalesChargeType } from './SalesCharge';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';
import {
  LeaseExpenseSchedules,
  LeaseExpenseSchedulesType
} from './LeaseExpenseSchedules';
import {
  InventoryMovementJournalEntriesV2,
  InventoryMovementJournalEntriesV2Type
} from './InventoryMovementJournalEntriesV2';
import {
  CurrencyRevaluationAccountsV2,
  CurrencyRevaluationAccountsV2Type
} from './CurrencyRevaluationAccountsV2';
import {
  SalesRebateAgreementHeadersV2,
  SalesRebateAgreementHeadersV2Type
} from './SalesRebateAgreementHeadersV2';
import {
  LedgerReportingCurrencyAdjustmentJournalLines,
  LedgerReportingCurrencyAdjustmentJournalLinesType
} from './LedgerReportingCurrencyAdjustmentJournalLines';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import {
  CdsFreeTextInvoiceLines,
  CdsFreeTextInvoiceLinesType
} from './CdsFreeTextInvoiceLines';
import {
  VoucherTypeAccountRestrictions,
  VoucherTypeAccountRestrictionsType
} from './VoucherTypeAccountRestrictions';
import {
  WithholdCertificates,
  WithholdCertificatesType
} from './WithholdCertificates';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import { VendorPaymentFees, VendorPaymentFeesType } from './VendorPaymentFees';
import {
  PriceComponentCodePostings,
  PriceComponentCodePostingsType
} from './PriceComponentCodePostings';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  SubBillDeferralTransactionLineDeferrals,
  SubBillDeferralTransactionLineDeferralsType
} from './SubBillDeferralTransactionLineDeferrals';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  CountingReasonCodeGroupRelations,
  CountingReasonCodeGroupRelationsType
} from './CountingReasonCodeGroupRelations';
import {
  IncomeExpenseAccounts,
  IncomeExpenseAccountsType
} from './IncomeExpenseAccounts';
import {
  SubBillAllocParameters,
  SubBillAllocParametersType
} from './SubBillAllocParameters';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  PaymDeductionReasons,
  PaymDeductionReasonsType
} from './PaymDeductionReasons';
import {
  PartyEmployeeRelationships,
  PartyEmployeeRelationshipsType
} from './PartyEmployeeRelationships';
import { VendorsV3, VendorsV3Type } from './VendorsV3';
import {
  ProjectItemJournalTables,
  ProjectItemJournalTablesType
} from './ProjectItemJournalTables';
import {
  AllocationForMainAccounts,
  AllocationForMainAccountsType
} from './AllocationForMainAccounts';
import { AllocationRules, AllocationRulesType } from './AllocationRules';
import {
  DimAttributeMainAccounts,
  DimAttributeMainAccountsType
} from './DimAttributeMainAccounts';
import { Parameters, ParametersType } from './Parameters';
import {
  LeasePostingAccounts,
  LeasePostingAccountsType
} from './LeasePostingAccounts';
import { GupParameters, GupParametersType } from './GupParameters';
import {
  WriteOffFinancialReasonsSetups,
  WriteOffFinancialReasonsSetupsType
} from './WriteOffFinancialReasonsSetups';
import { ProcurementCharge, ProcurementChargeType } from './ProcurementCharge';
import {
  PurchaseOrderLines,
  PurchaseOrderLinesType
} from './PurchaseOrderLines';
import {
  FixedAssetPostingProfiles,
  FixedAssetPostingProfilesType
} from './FixedAssetPostingProfiles';
import {
  CurrencyRevaluationAccounts,
  CurrencyRevaluationAccountsType
} from './CurrencyRevaluationAccounts';
import {
  AllocationRuleDestinations,
  AllocationRuleDestinationsType
} from './AllocationRuleDestinations';
import {
  LedgerTransSettlements,
  LedgerTransSettlementsType
} from './LedgerTransSettlements';
import {
  LedgerEliminationRuleLines,
  LedgerEliminationRuleLinesType
} from './LedgerEliminationRuleLines';
import { RetailParameters, RetailParametersType } from './RetailParameters';
import {
  RetailStoreTenderTypeCards,
  RetailStoreTenderTypeCardsType
} from './RetailStoreTenderTypeCards';
import {
  PurchaseOrderConfirmationLines,
  PurchaseOrderConfirmationLinesType
} from './PurchaseOrderConfirmationLines';
import { VendorParameters, VendorParametersType } from './VendorParameters';
import {
  ProjectSalesItemRequirements,
  ProjectSalesItemRequirementsType
} from './ProjectSalesItemRequirements';
import { ReleaseKindTables, ReleaseKindTablesType } from './ReleaseKindTables';
import { TaxTables, TaxTablesType } from './TaxTables';
import { BankParameters, BankParametersType } from './BankParameters';
import {
  RetailStoreTenderTypes,
  RetailStoreTenderTypesType
} from './RetailStoreTenderTypes';
import { RDeferralsBooks, RDeferralsBooksType } from './RDeferralsBooks';
import { PositionForecasts, PositionForecastsType } from './PositionForecasts';
import { ReturnOrderLines, ReturnOrderLinesType } from './ReturnOrderLines';
import {
  DiscountVendorClaimFees,
  DiscountVendorClaimFeesType
} from './DiscountVendorClaimFees';
import {
  VendInvoiceRegisterLines,
  VendInvoiceRegisterLinesType
} from './VendInvoiceRegisterLines';
import {
  PurchCommitmentLineEntities,
  PurchCommitmentLineEntitiesType
} from './PurchCommitmentLineEntities';
import { CodaParameters, CodaParametersType } from './CodaParameters';
import {
  VendorPaymentJournalLineSettledInvoices,
  VendorPaymentJournalLineSettledInvoicesType
} from './VendorPaymentJournalLineSettledInvoices';
import {
  BudgetRegisterEntryLines,
  BudgetRegisterEntryLinesType
} from './BudgetRegisterEntryLines';
import { AssetParameters, AssetParametersType } from './AssetParameters';
import { OperationTypes, OperationTypesType } from './OperationTypes';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  PurchaseOrderLinesV2,
  PurchaseOrderLinesV2Type
} from './PurchaseOrderLinesV2';
import { CodaDefinitions, CodaDefinitionsType } from './CodaDefinitions';
import {
  FixedAssetPostingProfileDisposals,
  FixedAssetPostingProfileDisposalsType
} from './FixedAssetPostingProfileDisposals';
import { SlipJournalTables, SlipJournalTablesType } from './SlipJournalTables';
import {
  TaxPostingGroupsV2,
  TaxPostingGroupsV2Type
} from './TaxPostingGroupsV2';
import {
  CodaAccountStatementLines,
  CodaAccountStatementLinesType
} from './CodaAccountStatementLines';
import {
  PeriodChargeRuleLineCustomers,
  PeriodChargeRuleLineCustomersType
} from './PeriodChargeRuleLineCustomers';
import {
  ExpenseCashAdvances,
  ExpenseCashAdvancesType
} from './ExpenseCashAdvances';
import {
  LeaseIndexRevaluationDetails,
  LeaseIndexRevaluationDetailsType
} from './LeaseIndexRevaluationDetails';
import {
  RAssetLedgerAccounts,
  RAssetLedgerAccountsType
} from './RAssetLedgerAccounts';
import {
  FreeTextInvoiceLines,
  FreeTextInvoiceLinesType
} from './FreeTextInvoiceLines';
import {
  LedgerInterestDistributionRuleLedgerDimensionReferences,
  LedgerInterestDistributionRuleLedgerDimensionReferencesType
} from './LedgerInterestDistributionRuleLedgerDimensionReferences';
import {
  BankTransactionTypes_1,
  BankTransactionTypes_1Type
} from './BankTransactionTypes_1';
import {
  CustomerPaymentFees,
  CustomerPaymentFeesType
} from './CustomerPaymentFees';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';
import {
  OperationsResources,
  OperationsResourcesType
} from './OperationsResources';
import {
  ShippingThresholdDiscounts,
  ShippingThresholdDiscountsType
} from './ShippingThresholdDiscounts';
import {
  PostingDefinitionEntries,
  PostingDefinitionEntriesType
} from './PostingDefinitionEntries';
import { Vendors, VendorsType } from './Vendors';
import { SalesOrderLines, SalesOrderLinesType } from './SalesOrderLines';
import {
  AdvancedLedgerEntries,
  AdvancedLedgerEntriesType
} from './AdvancedLedgerEntries';
import {
  SubBillUnbilledRevenueTransactionLines,
  SubBillUnbilledRevenueTransactionLinesType
} from './SubBillUnbilledRevenueTransactionLines';
import {
  ProjQuotationLines,
  ProjQuotationLinesType
} from './ProjQuotationLines';
import {
  VendorInvoiceLines,
  VendorInvoiceLinesType
} from './VendorInvoiceLines';
import {
  RAssetJournalLines,
  RAssetJournalLinesType
} from './RAssetJournalLines';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import {
  LedgerAccountGroups,
  LedgerAccountGroupsType
} from './LedgerAccountGroups';
import {
  TradeAllowanceAgreementMerchandisingEventBillBacks,
  TradeAllowanceAgreementMerchandisingEventBillBacksType
} from './TradeAllowanceAgreementMerchandisingEventBillBacks';
import {
  InventoryMovementJournalEntries,
  InventoryMovementJournalEntriesType
} from './InventoryMovementJournalEntries';
import { SadParameters, SadParametersType } from './SadParameters';
import {
  VoucherTypeAccountRestrictionsV2,
  VoucherTypeAccountRestrictionsV2Type
} from './VoucherTypeAccountRestrictionsV2';
import { AssetJournalV2, AssetJournalV2Type } from './AssetJournalV2';
import {
  RetailTenderDiscounts,
  RetailTenderDiscountsType
} from './RetailTenderDiscounts';
import {
  SubBillBillingScheduleLines,
  SubBillBillingScheduleLinesType
} from './SubBillBillingScheduleLines';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';
import {
  RoyaltyAgreementHeaders,
  RoyaltyAgreementHeadersType
} from './RoyaltyAgreementHeaders';
import {
  InventoryMovementJournalEntriesV4,
  InventoryMovementJournalEntriesV4Type
} from './InventoryMovementJournalEntriesV4';
import {
  PostingProfileLines,
  PostingProfileLinesType
} from './PostingProfileLines';
import { SadItemCodes, SadItemCodesType } from './SadItemCodes';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import { CashDiscounts, CashDiscountsType } from './CashDiscounts';
import {
  FiscalOrganizations,
  FiscalOrganizationsType
} from './FiscalOrganizations';
import {
  CustomerParameters,
  CustomerParametersType
} from './CustomerParameters';
import {
  VendorRebateAgreementHeaders,
  VendorRebateAgreementHeadersType
} from './VendorRebateAgreementHeaders';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';
import { ExpenseRates, ExpenseRatesType } from './ExpenseRates';
import {
  AdjustmentParameters,
  AdjustmentParametersType
} from './AdjustmentParameters';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  SubBillDeferralDefaultAccounts,
  SubBillDeferralDefaultAccountsType
} from './SubBillDeferralDefaultAccounts';
import {
  SubBillDeferralScheduleTables,
  SubBillDeferralScheduleTablesType
} from './SubBillDeferralScheduleTables';
import {
  VendInvoiceRegisterLinesV2,
  VendInvoiceRegisterLinesV2Type
} from './VendInvoiceRegisterLinesV2';
import {
  BenefitAccountingRules,
  BenefitAccountingRulesType
} from './BenefitAccountingRules';
import { PayrollParameters, PayrollParametersType } from './PayrollParameters';
import {
  FbGeneralAdjustmentCodeLedgers,
  FbGeneralAdjustmentCodeLedgersType
} from './FbGeneralAdjustmentCodeLedgers';
import {
  ProjectLedgerPostingDefinitions,
  ProjectLedgerPostingDefinitionsType
} from './ProjectLedgerPostingDefinitions';
import {
  DiscountVendorClaimPostingProfiles,
  DiscountVendorClaimPostingProfilesType
} from './DiscountVendorClaimPostingProfiles';
import {
  CurrencyParameters,
  CurrencyParametersType
} from './CurrencyParameters';
import {
  FbFiscalDocumentAdjustmentCodeLedgers,
  FbFiscalDocumentAdjustmentCodeLedgersType
} from './FbFiscalDocumentAdjustmentCodeLedgers';
import {
  GupRebateAndDeductionsPostingProfiles,
  GupRebateAndDeductionsPostingProfilesType
} from './GupRebateAndDeductionsPostingProfiles';
import {
  RTax25RegisterParameters,
  RTax25RegisterParametersType
} from './RTax25RegisterParameters';
import {
  PaymentJournalLineSettledInvoices,
  PaymentJournalLineSettledInvoicesType
} from './PaymentJournalLineSettledInvoices';
import { TaxPostingGroups, TaxPostingGroupsType } from './TaxPostingGroups';
import { CustomerRebates, CustomerRebatesType } from './CustomerRebates';
import {
  BillingCodeAccountingDistributions,
  BillingCodeAccountingDistributionsType
} from './BillingCodeAccountingDistributions';
import { RTax25TaxTables, RTax25TaxTablesType } from './RTax25TaxTables';
import {
  LedgerCurrencyParameters,
  LedgerCurrencyParametersType
} from './LedgerCurrencyParameters';
import { ImportModes, ImportModesType } from './ImportModes';
import {
  ReturnOrderLinesV2,
  ReturnOrderLinesV2Type
} from './ReturnOrderLinesV2';
import {
  ExpenseSubCategories,
  ExpenseSubCategoriesType
} from './ExpenseSubCategories';
import { BudgetPlans, BudgetPlansType } from './BudgetPlans';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { SalesOrderLinesV3, SalesOrderLinesV3Type } from './SalesOrderLinesV3';
import {
  InventoryMovementJournalEntriesV3,
  InventoryMovementJournalEntriesV3Type
} from './InventoryMovementJournalEntriesV3';
import {
  ProjectDefaultOffsetAccounts,
  ProjectDefaultOffsetAccountsType
} from './ProjectDefaultOffsetAccounts';
import {
  InventoryCountingReasonCodesV2,
  InventoryCountingReasonCodesV2Type
} from './InventoryCountingReasonCodesV2';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';
import {
  CustomerPostingProfileLines,
  CustomerPostingProfileLinesType
} from './CustomerPostingProfileLines';
import {
  LedgerAccountAliases,
  LedgerAccountAliasesType
} from './LedgerAccountAliases';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  PositionForecastsV2,
  PositionForecastsV2Type
} from './PositionForecastsV2';
import {
  LedgerInterCompanyAccounts,
  LedgerInterCompanyAccountsType
} from './LedgerInterCompanyAccounts';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  SadDocumentInvoiceLineLedgerJournals,
  SadDocumentInvoiceLineLedgerJournalsType
} from './SadDocumentInvoiceLineLedgerJournals';
import {
  SalesQuotationLines,
  SalesQuotationLinesType
} from './SalesQuotationLines';
import { BankAccounts, BankAccountsType } from './BankAccounts';
import {
  CashControlConfigurations,
  CashControlConfigurationsType
} from './CashControlConfigurations';
import {
  WithholdLedgerAccountGroups,
  WithholdLedgerAccountGroupsType
} from './WithholdLedgerAccountGroups';
import {
  VendorPaymentMethods,
  VendorPaymentMethodsType
} from './VendorPaymentMethods';
import {
  DeferralsLedgerAccounts,
  DeferralsLedgerAccountsType
} from './DeferralsLedgerAccounts';
import { AccrualSchemes, AccrualSchemesType } from './AccrualSchemes';
import {
  SubBillUnbilledRevenueAccounts,
  SubBillUnbilledRevenueAccountsType
} from './SubBillUnbilledRevenueAccounts';

/**
 * This class represents the entity "DimensionCombinations" of service "d365_metadata".
 */
export class DimensionCombinations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionCombinationsType<T>
{
  /**
   * Technical entity name for DimensionCombinations.
   */
  static override _entityName = 'DimensionCombinations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionCombinations entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Value.
   * @nullable
   */
  declare accountValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure.
   * @nullable
   */
  declare accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Value.
   * @nullable
   */
  declare displayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Generated Journal Account Value.
   * @nullable
   */
  declare systemGeneratedJournalAccountValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * System Generated Journal Account.
   */
  declare systemGeneratedJournalAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * System Generated Journal Account Type.
   * @nullable
   */
  declare systemGeneratedJournalAccountType?: DimensionHierarchyType | null;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ExpenseCategories} entity.
   */
  declare expenseCategory: ExpenseCategories<T>[];
  /**
   * One-to-many navigation property to the {@link SalesCharge} entity.
   */
  declare salesCharges: SalesCharge<T>[];
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJournalDimension: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custAccountCombinationOffset: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LeaseExpenseSchedules} entity.
   */
  declare dimensionCombinationEntity: LeaseExpenseSchedules<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV2} entity.
   */
  declare inventoryMovementJournalEntryV2: InventoryMovementJournalEntriesV2<T>[];
  /**
   * One-to-many navigation property to the {@link CurrencyRevaluationAccountsV2} entity.
   */
  declare currencyRevaluationAccountV2: CurrencyRevaluationAccountsV2<T>[];
  /**
   * One-to-many navigation property to the {@link SalesRebateAgreementHeadersV2} entity.
   */
  declare salesRebateAgreementHeaderV2: SalesRebateAgreementHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension: LedgerReportingCurrencyAdjustmentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineEntityOffsetAccountDimension: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineEntityAccountDimension: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsOffsetLedgerDimension: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsLedgerDimension: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceLines} entity.
   */
  declare cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link VoucherTypeAccountRestrictions} entity.
   */
  declare voucherTypeAccountRestriction: VoucherTypeAccountRestrictions<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdCertificates} entity.
   */
  declare withholdCertificate: WithholdCertificates<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod: CustomerPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentFees} entity.
   */
  declare vendorPaymentFee: VendorPaymentFees<T>[];
  /**
   * One-to-many navigation property to the {@link PriceComponentCodePostings} entity.
   */
  declare priceComponentCodePosting: PriceComponentCodePostings<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare assetLeaseLedgerJournalLineOffsetLedgerDimension: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare assetLeaseLedgerJournalLineLedgerDimension: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralExpirationAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralRecognitionAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralConRecognitionAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralDiscountRecognitionAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralDiscountDeferralAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralTransactionLineDeferrals} entity.
   */
  declare relatedToSubBillDeferralConDeferralAccountCombination: SubBillDeferralTransactionLineDeferrals<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineOffsetAccount: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineAccount: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CountingReasonCodeGroupRelations} entity.
   */
  declare countingReasonCodeGroupRelation: CountingReasonCodeGroupRelations<T>[];
  /**
   * One-to-many navigation property to the {@link IncomeExpenseAccounts} entity.
   */
  declare incomeExpenseAccount: IncomeExpenseAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillAllocParameters} entity.
   */
  declare relatedToSubBillAllocDeferralRoundingAccountCombination: SubBillAllocParameters<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLineOffsetAccount: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLineAccount: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PaymDeductionReasons} entity.
   */
  declare paymDeductionReason: PaymDeductionReasons<T>[];
  /**
   * One-to-many navigation property to the {@link PartyEmployeeRelationships} entity.
   */
  declare partyEmployeeRelationship: PartyEmployeeRelationships<T>[];
  /**
   * One-to-many navigation property to the {@link VendorsV3} entity.
   */
  declare vendorV3: VendorsV3<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectItemJournalTables} entity.
   */
  declare projectItemJournalTable: ProjectItemJournalTables<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationForMainAccounts} entity.
   */
  declare allocationForMainAccount: AllocationForMainAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationRules} entity.
   */
  declare allocationRule: AllocationRules<T>[];
  /**
   * One-to-one navigation property to the {@link DimAttributeMainAccounts} entity.
   */
  declare dimensionCombinationMainAccount?: DimAttributeMainAccounts<T> | null;
  /**
   * One-to-many navigation property to the {@link Parameters} entity.
   */
  declare parameters: Parameters<T>[];
  /**
   * One-to-many navigation property to the {@link LeasePostingAccounts} entity.
   */
  declare operatingDimensionCombinationEntity: LeasePostingAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link LeasePostingAccounts} entity.
   */
  declare financeDimensionCombinationEntity: LeasePostingAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link GupParameters} entity.
   */
  declare gupParameters: GupParameters<T>[];
  /**
   * One-to-many navigation property to the {@link WriteOffFinancialReasonsSetups} entity.
   */
  declare writeOffFinancialReasonsSetup: WriteOffFinancialReasonsSetups<T>[];
  /**
   * One-to-many navigation property to the {@link ProcurementCharge} entity.
   */
  declare procurementCharges: ProcurementCharge<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLines} entity.
   */
  declare purchaseOrderLine: PurchaseOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfiles} entity.
   */
  declare fixedAssetPostingProfile: FixedAssetPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link CurrencyRevaluationAccounts} entity.
   */
  declare currencyRevaluationAccount: CurrencyRevaluationAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link AllocationRuleDestinations} entity.
   */
  declare allocationRuleDestination: AllocationRuleDestinations<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerTransSettlements} entity.
   */
  declare ledgerTransSettlementEntityLedgerDimension: LedgerTransSettlements<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerEliminationRuleLines} entity.
   */
  declare ledgerEliminationRuleLine: LedgerEliminationRuleLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailParameters} entity.
   */
  declare retailParameter: RetailParameters<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypeCards} entity.
   */
  declare retailStoreTenderTypeCard: RetailStoreTenderTypeCards<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderConfirmationLines} entity.
   */
  declare purchaseOrderConfirmationLines: PurchaseOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorParameters} entity.
   */
  declare vendorParameter: VendorParameters<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectSalesItemRequirements} entity.
   */
  declare projectSalesItemRequirement: ProjectSalesItemRequirements<T>[];
  /**
   * One-to-many navigation property to the {@link ReleaseKindTables} entity.
   */
  declare releaseKindTable: ReleaseKindTables<T>[];
  /**
   * One-to-many navigation property to the {@link TaxTables} entity.
   */
  declare taxTable: TaxTables<T>[];
  /**
   * One-to-many navigation property to the {@link BankParameters} entity.
   */
  declare bankParameter: BankParameters<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStoreTenderTypes} entity.
   */
  declare retailStoreTenderType: RetailStoreTenderTypes<T>[];
  /**
   * One-to-many navigation property to the {@link RDeferralsBooks} entity.
   */
  declare rDeferralsBook: RDeferralsBooks<T>[];
  /**
   * One-to-many navigation property to the {@link PositionForecasts} entity.
   */
  declare positionForecast: PositionForecasts<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnOrderLines} entity.
   */
  declare returnOrderLine: ReturnOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link DiscountVendorClaimFees} entity.
   */
  declare discountVendorClaimFee: DiscountVendorClaimFees<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLineEntityOffsetAccountDimension: VendInvoiceRegisterLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLineEntityAccountDimension: VendInvoiceRegisterLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchCommitmentLineEntities} entity.
   */
  declare purchCommitmentLineEntity: PurchCommitmentLineEntities<T>[];
  /**
   * One-to-many navigation property to the {@link CodaParameters} entity.
   */
  declare codaParameter: CodaParameters<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLineSettledInvoices} entity.
   */
  declare vendorPaymentJournalLineSettledInvoiceAccount: VendorPaymentJournalLineSettledInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetRegisterEntryLines} entity.
   */
  declare budgetRegisterEntryLine: BudgetRegisterEntryLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetParameters} entity.
   */
  declare assetParameter: AssetParameters<T>[];
  /**
   * One-to-many navigation property to the {@link OperationTypes} entity.
   */
  declare operationType: OperationTypes<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineOffsetLedgerDimension: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineLedgerDimension: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLinesV2} entity.
   */
  declare purchaseOrderLinesV2: PurchaseOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link CodaDefinitions} entity.
   */
  declare codaDefinition: CodaDefinitions<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetPostingProfileDisposals} entity.
   */
  declare fixedAssetPostingProfileDisposal: FixedAssetPostingProfileDisposals<T>[];
  /**
   * One-to-many navigation property to the {@link SlipJournalTables} entity.
   */
  declare slipJournalTable: SlipJournalTables<T>[];
  /**
   * One-to-many navigation property to the {@link TaxPostingGroupsV2} entity.
   */
  declare taxPostingGroupV2: TaxPostingGroupsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CodaAccountStatementLines} entity.
   */
  declare codaAccountStatementLines: CodaAccountStatementLines<T>[];
  /**
   * One-to-many navigation property to the {@link PeriodChargeRuleLineCustomers} entity.
   */
  declare periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomers<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseCashAdvances} entity.
   */
  declare expenseCashAdvance: ExpenseCashAdvances<T>[];
  /**
   * One-to-many navigation property to the {@link LeaseIndexRevaluationDetails} entity.
   */
  declare liabilityAccountCombinationDimComb: LeaseIndexRevaluationDetails<T>[];
  /**
   * One-to-many navigation property to the {@link LeaseIndexRevaluationDetails} entity.
   */
  declare assetAccountCombinationDimensionComb: LeaseIndexRevaluationDetails<T>[];
  /**
   * One-to-many navigation property to the {@link RAssetLedgerAccounts} entity.
   */
  declare rAssetLedgerAccount: RAssetLedgerAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceLines} entity.
   */
  declare ftiMainAccountDimension: FreeTextInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterestDistributionRuleLedgerDimensionReferences} entity.
   */
  declare ledgerAccountDimension: LedgerInterestDistributionRuleLedgerDimensionReferences<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterestDistributionRuleLedgerDimensionReferences} entity.
   */
  declare cashAccountDimension: LedgerInterestDistributionRuleLedgerDimensionReferences<T>[];
  /**
   * One-to-many navigation property to the {@link BankTransactionTypes_1} entity.
   */
  declare bankTransactionType: BankTransactionTypes_1<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentFees} entity.
   */
  declare customerPaymentFee: CustomerPaymentFees<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm: PaymentTerms<T>[];
  /**
   * One-to-many navigation property to the {@link OperationsResources} entity.
   */
  declare wipValuationLedgerOperationsResources: OperationsResources<T>[];
  /**
   * One-to-many navigation property to the {@link OperationsResources} entity.
   */
  declare wipIssueLedgerOperationsResources: OperationsResources<T>[];
  /**
   * One-to-many navigation property to the {@link OperationsResources} entity.
   */
  declare resourceIssueOffsetLedgerOperationsResources: OperationsResources<T>[];
  /**
   * One-to-many navigation property to the {@link OperationsResources} entity.
   */
  declare resourceIssueLedgerOperationsResources: OperationsResources<T>[];
  /**
   * One-to-many navigation property to the {@link ShippingThresholdDiscounts} entity.
   */
  declare shippingThresholdDiscount: ShippingThresholdDiscounts<T>[];
  /**
   * One-to-many navigation property to the {@link PostingDefinitionEntries} entity.
   */
  declare postingDefinitionEntry: PostingDefinitionEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Vendors} entity.
   */
  declare vendor: Vendors<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLines} entity.
   */
  declare salesOrderLine: SalesOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedLedgerEntries} entity.
   */
  declare advancedLedgerEntry: AdvancedLedgerEntries<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueTransactionLines} entity.
   */
  declare relatedToUnbilledDiscountAccountIdCombination: SubBillUnbilledRevenueTransactionLines<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueTransactionLines} entity.
   */
  declare relatedToUnbilledRevenueAccountIdCombination: SubBillUnbilledRevenueTransactionLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProjQuotationLines} entity.
   */
  declare projQuotationLine: ProjQuotationLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceLines} entity.
   */
  declare vendorInvoiceLine: VendorInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link RAssetJournalLines} entity.
   */
  declare rAssetJournalLineOffsetLedgerDimension: RAssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link RAssetJournalLines} entity.
   */
  declare rAssetJournalLineLedgerDimension: RAssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare projExpenseJournalLineOffsetLedgerDimension: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare projExpenseJournalLineLedgerDimension: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAccountGroups} entity.
   */
  declare ledgerAccountGroup: LedgerAccountGroups<T>[];
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
   */
  declare tradeAllowanceAgreementBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacks<T> | null;
  /**
   * One-to-one navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacks<T> | null;
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntries} entity.
   */
  declare inventoryMovementJournalEntry: InventoryMovementJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link SadParameters} entity.
   */
  declare sadParameters: SadParameters<T>[];
  /**
   * One-to-many navigation property to the {@link VoucherTypeAccountRestrictionsV2} entity.
   */
  declare voucherTypeAccountRestrictionV2: VoucherTypeAccountRestrictionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalV2OffsetLedgerDimension: AssetJournalV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalV2} entity.
   */
  declare assetJournalV2LedgerDimension: AssetJournalV2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTenderDiscounts} entity.
   */
  declare retailTenderDiscount: RetailTenderDiscounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillBillingScheduleLines} entity.
   */
  declare relationToDimensionCombinationEntity: SubBillBillingScheduleLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link RoyaltyAgreementHeaders} entity.
   */
  declare royaltyAgreementHeaders: RoyaltyAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV4} entity.
   */
  declare inventoryMovementJournalEntryV4: InventoryMovementJournalEntriesV4<T>[];
  /**
   * One-to-many navigation property to the {@link PostingProfileLines} entity.
   */
  declare vendorPostingProfileOffsetAccountRole: PostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link PostingProfileLines} entity.
   */
  declare vendorPostingProfileSalesTaxPrepayRole: PostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link PostingProfileLines} entity.
   */
  declare vendorPostingProfileSettleAccountRole: PostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link PostingProfileLines} entity.
   */
  declare vendorPostingProfileSummaryAccountRole: PostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link PostingProfileLines} entity.
   */
  declare vendorPostingProfileArrivalAccountRole: PostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link SadItemCodes} entity.
   */
  declare sadItemCode: SadItemCodes<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntry: BudgetRegisterEntries<T>[];
  /**
   * One-to-many navigation property to the {@link CashDiscounts} entity.
   */
  declare cashDiscount: CashDiscounts<T>[];
  /**
   * One-to-many navigation property to the {@link FiscalOrganizations} entity.
   */
  declare fiscalOrganization: FiscalOrganizations<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerParameters} entity.
   */
  declare customerParameters: CustomerParameters<T>[];
  /**
   * One-to-many navigation property to the {@link VendorRebateAgreementHeaders} entity.
   */
  declare vendorRebateAgreementHeaderAccrualMainAccountIdCombinations: VendorRebateAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link VendorRebateAgreementHeaders} entity.
   */
  declare vendorRebateAgreementHeaderExpenseMainAccountIdCombinations: VendorRebateAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseRates} entity.
   */
  declare expenseRate: ExpenseRates<T>[];
  /**
   * One-to-many navigation property to the {@link AdjustmentParameters} entity.
   */
  declare adjustmentParameters: AdjustmentParameters<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLineOffsetLedgerDimension: AssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLineLedgerDimension: AssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2: VendorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralDefaultAccounts} entity.
   */
  declare relatedToLedgerDimensionCombination: SubBillDeferralDefaultAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralScheduleTables} entity.
   */
  declare relatedToSubBillDeferralRecOffAcctCombination: SubBillDeferralScheduleTables<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralScheduleTables} entity.
   */
  declare relatedToSubBillDeferralShortTermAccountCombination: SubBillDeferralScheduleTables<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillDeferralScheduleTables} entity.
   */
  declare relatedToSubBillDeferralInitialRecAcctCombination: SubBillDeferralScheduleTables<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLinesV2} entity.
   */
  declare vendInvoiceRegisterLineV2EntityOffsetAccountDimension: VendInvoiceRegisterLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLinesV2} entity.
   */
  declare vendInvoiceRegisterLineV2EntityAccountDimension: VendInvoiceRegisterLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitAccountingRules} entity.
   */
  declare benefitAccountingRule: BenefitAccountingRules<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollParameters} entity.
   */
  declare payrollParameter: PayrollParameters<T>[];
  /**
   * One-to-many navigation property to the {@link FbGeneralAdjustmentCodeLedgers} entity.
   */
  declare fbGeneralAdjustmentCodeLedger: FbGeneralAdjustmentCodeLedgers<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectLedgerPostingDefinitions} entity.
   */
  declare projectLedgerPostingDefinition: ProjectLedgerPostingDefinitions<T>[];
  /**
   * One-to-many navigation property to the {@link DiscountVendorClaimPostingProfiles} entity.
   */
  declare discountVendorClaimPostingProfile: DiscountVendorClaimPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link CurrencyParameters} entity.
   */
  declare currencyParameters: CurrencyParameters<T>[];
  /**
   * One-to-many navigation property to the {@link FbFiscalDocumentAdjustmentCodeLedgers} entity.
   */
  declare fbFiscalDocumentAdjustmentCodeLedger: FbFiscalDocumentAdjustmentCodeLedgers<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare writeOffDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare provisionDebitDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare rebateDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare provisionCreditDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link RTax25RegisterParameters} entity.
   */
  declare rTax25RegisterParameter: RTax25RegisterParameters<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentJournalLineSettledInvoices} entity.
   */
  declare customerPaymentJournalLineSettledInvoiceAccount: PaymentJournalLineSettledInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link TaxPostingGroups} entity.
   */
  declare taxPostingGroup: TaxPostingGroups<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerRebates} entity.
   */
  declare salesRebates: CustomerRebates<T>[];
  /**
   * One-to-many navigation property to the {@link BillingCodeAccountingDistributions} entity.
   */
  declare billingCodeAccountingDistribution: BillingCodeAccountingDistributions<T>[];
  /**
   * One-to-many navigation property to the {@link RTax25TaxTables} entity.
   */
  declare rTax25TaxTableAssessed: RTax25TaxTables<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerCurrencyParameters} entity.
   */
  declare ledgerCurrencyParameters: LedgerCurrencyParameters<T>[];
  /**
   * One-to-many navigation property to the {@link ImportModes} entity.
   */
  declare importMode: ImportModes<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnOrderLinesV2} entity.
   */
  declare returnOrderLineV2: ReturnOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseSubCategories} entity.
   */
  declare expenseSubCategory: ExpenseSubCategories<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetPlans} entity.
   */
  declare ledgerDimension: BudgetPlans<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode: WithholdingTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderLinesV3} entity.
   */
  declare salesOrderLineV3: SalesOrderLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryMovementJournalEntriesV3} entity.
   */
  declare inventoryMovementJournalEntryV3: InventoryMovementJournalEntriesV3<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectDefaultOffsetAccounts} entity.
   */
  declare projectDefaultOffsetAccount: ProjectDefaultOffsetAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryCountingReasonCodesV2} entity.
   */
  declare inventoryCountingReasonCodeV2: InventoryCountingReasonCodesV2<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare custWriteOffLedgerDimension: CustomerPostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare customerPostingProfileLine: CustomerPostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare custLiabilitiesForDiscountLedgerDimension: CustomerPostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare custSummaryLedgerDimension: CustomerPostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare custVatPrepaymentsLedgerDimension: CustomerPostingProfileLines<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAccountAliases} entity.
   */
  declare ledgerAccountAlias: LedgerAccountAliases<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];
  /**
   * One-to-many navigation property to the {@link PositionForecastsV2} entity.
   */
  declare positionForecastV2: PositionForecastsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterCompanyAccounts} entity.
   */
  declare ledgerInterCompanyAccountSourceCredit: LedgerInterCompanyAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterCompanyAccounts} entity.
   */
  declare ledgerInterCompanyAccountDestinationCredit: LedgerInterCompanyAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterCompanyAccounts} entity.
   */
  declare ledgerInterCompanyAccountDestinationDebit: LedgerInterCompanyAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterCompanyAccounts} entity.
   */
  declare ledgerInterCompanyAccountSourceDebit: LedgerInterCompanyAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link JournalNames} entity.
   */
  declare journalName: JournalNames<T>[];
  /**
   * One-to-many navigation property to the {@link SadDocumentInvoiceLineLedgerJournals} entity.
   */
  declare sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournals<T>[];
  /**
   * One-to-many navigation property to the {@link SalesQuotationLines} entity.
   */
  declare salesQuotationLine: SalesQuotationLines<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link CashControlConfigurations} entity.
   */
  declare apAccountDimension: CashControlConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdLedgerAccountGroups} entity.
   */
  declare withholdLedgerAccountGroup: WithholdLedgerAccountGroups<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentMethods} entity.
   */
  declare vendorPaymentMethod: VendorPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link DeferralsLedgerAccounts} entity.
   */
  declare deferralsLedgerAccounts: DeferralsLedgerAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link AccrualSchemes} entity.
   */
  declare accrualScheme: AccrualSchemes<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToUnbilledDiscountAccountCombination: SubBillUnbilledRevenueAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToShortTermUnbilledDiscountAccountCombination: SubBillUnbilledRevenueAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToUnbilledRevenueOffsetAccountCombination: SubBillUnbilledRevenueAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToShortTermUnbilledRevenueAccountCombination: SubBillUnbilledRevenueAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToUnbilledRevenueAccountCombination: SubBillUnbilledRevenueAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link SubBillUnbilledRevenueAccounts} entity.
   */
  declare relatedToUnbilledDiscountOffsetAccountCombination: SubBillUnbilledRevenueAccounts<T>[];

  constructor(_entityApi: DimensionCombinationsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionCombinationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  accountValue?: DeserializedType<T, 'Edm.String'> | null;
  accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  displayValue?: DeserializedType<T, 'Edm.String'> | null;
  systemGeneratedJournalAccountValue?: DeserializedType<T, 'Edm.String'> | null;
  systemGeneratedJournalAccount: DeserializedType<T, 'Edm.Int64'>;
  systemGeneratedJournalAccountType?: DimensionHierarchyType | null;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
  expenseCategory: ExpenseCategoriesType<T>[];
  salesCharges: SalesChargeType<T>[];
  custInvoiceJournalDimension: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  custAccountCombinationOffset: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  dimensionCombinationEntity: LeaseExpenseSchedulesType<T>[];
  inventoryMovementJournalEntryV2: InventoryMovementJournalEntriesV2Type<T>[];
  currencyRevaluationAccountV2: CurrencyRevaluationAccountsV2Type<T>[];
  salesRebateAgreementHeaderV2: SalesRebateAgreementHeadersV2Type<T>[];
  ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension: LedgerReportingCurrencyAdjustmentJournalLinesType<T>[];
  vendInvoiceJournalLineEntityOffsetAccountDimension: VendInvoiceJournalLinesType<T>[];
  vendInvoiceJournalLineEntityAccountDimension: VendInvoiceJournalLinesType<T>[];
  ledgerJournalLineCdsOffsetLedgerDimension: LedgerJournalCdsLinesType<T>[];
  ledgerJournalLineCdsLedgerDimension: LedgerJournalCdsLinesType<T>[];
  cdsFreeTextInvoiceLines: CdsFreeTextInvoiceLinesType<T>[];
  voucherTypeAccountRestriction: VoucherTypeAccountRestrictionsType<T>[];
  withholdCertificate: WithholdCertificatesType<T>[];
  customerPaymentMethod: CustomerPaymentMethodsType<T>[];
  vendorPaymentFee: VendorPaymentFeesType<T>[];
  priceComponentCodePosting: PriceComponentCodePostingsType<T>[];
  assetLeaseLedgerJournalLineOffsetLedgerDimension: AssetLeaseLedgerJournalLinesType<T>[];
  assetLeaseLedgerJournalLineLedgerDimension: AssetLeaseLedgerJournalLinesType<T>[];
  relatedToSubBillDeferralExpirationAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralRecognitionAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralConRecognitionAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralDiscountRecognitionAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralDiscountDeferralAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  relatedToSubBillDeferralConDeferralAccountCombination: SubBillDeferralTransactionLineDeferralsType<T>[];
  customerPaymentJournalLineOffsetAccount: CustomerPaymentJournalLinesType<T>[];
  customerPaymentJournalLineAccount: CustomerPaymentJournalLinesType<T>[];
  countingReasonCodeGroupRelation: CountingReasonCodeGroupRelationsType<T>[];
  incomeExpenseAccount: IncomeExpenseAccountsType<T>[];
  relatedToSubBillAllocDeferralRoundingAccountCombination: SubBillAllocParametersType<T>[];
  vendorPaymentJournalLineOffsetAccount: VendorPaymentJournalLinesType<T>[];
  vendorPaymentJournalLineAccount: VendorPaymentJournalLinesType<T>[];
  paymDeductionReason: PaymDeductionReasonsType<T>[];
  partyEmployeeRelationship: PartyEmployeeRelationshipsType<T>[];
  vendorV3: VendorsV3Type<T>[];
  projectItemJournalTable: ProjectItemJournalTablesType<T>[];
  allocationForMainAccount: AllocationForMainAccountsType<T>[];
  allocationRule: AllocationRulesType<T>[];
  dimensionCombinationMainAccount?: DimAttributeMainAccountsType<T> | null;
  parameters: ParametersType<T>[];
  operatingDimensionCombinationEntity: LeasePostingAccountsType<T>[];
  financeDimensionCombinationEntity: LeasePostingAccountsType<T>[];
  gupParameters: GupParametersType<T>[];
  writeOffFinancialReasonsSetup: WriteOffFinancialReasonsSetupsType<T>[];
  procurementCharges: ProcurementChargeType<T>[];
  purchaseOrderLine: PurchaseOrderLinesType<T>[];
  fixedAssetPostingProfile: FixedAssetPostingProfilesType<T>[];
  currencyRevaluationAccount: CurrencyRevaluationAccountsType<T>[];
  allocationRuleDestination: AllocationRuleDestinationsType<T>[];
  ledgerTransSettlementEntityLedgerDimension: LedgerTransSettlementsType<T>[];
  ledgerEliminationRuleLine: LedgerEliminationRuleLinesType<T>[];
  retailParameter: RetailParametersType<T>[];
  retailStoreTenderTypeCard: RetailStoreTenderTypeCardsType<T>[];
  purchaseOrderConfirmationLines: PurchaseOrderConfirmationLinesType<T>[];
  vendorParameter: VendorParametersType<T>[];
  projectSalesItemRequirement: ProjectSalesItemRequirementsType<T>[];
  releaseKindTable: ReleaseKindTablesType<T>[];
  taxTable: TaxTablesType<T>[];
  bankParameter: BankParametersType<T>[];
  retailStoreTenderType: RetailStoreTenderTypesType<T>[];
  rDeferralsBook: RDeferralsBooksType<T>[];
  positionForecast: PositionForecastsType<T>[];
  returnOrderLine: ReturnOrderLinesType<T>[];
  discountVendorClaimFee: DiscountVendorClaimFeesType<T>[];
  vendInvoiceRegisterLineEntityOffsetAccountDimension: VendInvoiceRegisterLinesType<T>[];
  vendInvoiceRegisterLineEntityAccountDimension: VendInvoiceRegisterLinesType<T>[];
  purchCommitmentLineEntity: PurchCommitmentLineEntitiesType<T>[];
  codaParameter: CodaParametersType<T>[];
  vendorPaymentJournalLineSettledInvoiceAccount: VendorPaymentJournalLineSettledInvoicesType<T>[];
  budgetRegisterEntryLine: BudgetRegisterEntryLinesType<T>[];
  assetParameter: AssetParametersType<T>[];
  operationType: OperationTypesType<T>[];
  ledgerJournalLineOffsetLedgerDimension: LedgerJournalLinesType<T>[];
  ledgerJournalLineLedgerDimension: LedgerJournalLinesType<T>[];
  purchaseOrderLinesV2: PurchaseOrderLinesV2Type<T>[];
  codaDefinition: CodaDefinitionsType<T>[];
  fixedAssetPostingProfileDisposal: FixedAssetPostingProfileDisposalsType<T>[];
  slipJournalTable: SlipJournalTablesType<T>[];
  taxPostingGroupV2: TaxPostingGroupsV2Type<T>[];
  codaAccountStatementLines: CodaAccountStatementLinesType<T>[];
  periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomersType<T>[];
  expenseCashAdvance: ExpenseCashAdvancesType<T>[];
  liabilityAccountCombinationDimComb: LeaseIndexRevaluationDetailsType<T>[];
  assetAccountCombinationDimensionComb: LeaseIndexRevaluationDetailsType<T>[];
  rAssetLedgerAccount: RAssetLedgerAccountsType<T>[];
  ftiMainAccountDimension: FreeTextInvoiceLinesType<T>[];
  ledgerAccountDimension: LedgerInterestDistributionRuleLedgerDimensionReferencesType<T>[];
  cashAccountDimension: LedgerInterestDistributionRuleLedgerDimensionReferencesType<T>[];
  bankTransactionType: BankTransactionTypes_1Type<T>[];
  customerPaymentFee: CustomerPaymentFeesType<T>[];
  paymentTerm: PaymentTermsType<T>[];
  wipValuationLedgerOperationsResources: OperationsResourcesType<T>[];
  wipIssueLedgerOperationsResources: OperationsResourcesType<T>[];
  resourceIssueOffsetLedgerOperationsResources: OperationsResourcesType<T>[];
  resourceIssueLedgerOperationsResources: OperationsResourcesType<T>[];
  shippingThresholdDiscount: ShippingThresholdDiscountsType<T>[];
  postingDefinitionEntry: PostingDefinitionEntriesType<T>[];
  vendor: VendorsType<T>[];
  salesOrderLine: SalesOrderLinesType<T>[];
  advancedLedgerEntry: AdvancedLedgerEntriesType<T>[];
  relatedToUnbilledDiscountAccountIdCombination: SubBillUnbilledRevenueTransactionLinesType<T>[];
  relatedToUnbilledRevenueAccountIdCombination: SubBillUnbilledRevenueTransactionLinesType<T>[];
  projQuotationLine: ProjQuotationLinesType<T>[];
  vendorInvoiceLine: VendorInvoiceLinesType<T>[];
  rAssetJournalLineOffsetLedgerDimension: RAssetJournalLinesType<T>[];
  rAssetJournalLineLedgerDimension: RAssetJournalLinesType<T>[];
  projExpenseJournalLineOffsetLedgerDimension: ExpenseJournalLinesType<T>[];
  projExpenseJournalLineLedgerDimension: ExpenseJournalLinesType<T>[];
  ledgerAccountGroup: LedgerAccountGroupsType<T>[];
  tradeAllowanceAgreementBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacksType<T> | null;
  tradeAllowanceAgreementMerchandisingEventBillBack?: TradeAllowanceAgreementMerchandisingEventBillBacksType<T> | null;
  inventoryMovementJournalEntry: InventoryMovementJournalEntriesType<T>[];
  sadParameters: SadParametersType<T>[];
  voucherTypeAccountRestrictionV2: VoucherTypeAccountRestrictionsV2Type<T>[];
  assetJournalV2OffsetLedgerDimension: AssetJournalV2Type<T>[];
  assetJournalV2LedgerDimension: AssetJournalV2Type<T>[];
  retailTenderDiscount: RetailTenderDiscountsType<T>[];
  relationToDimensionCombinationEntity: SubBillBillingScheduleLinesType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
  royaltyAgreementHeaders: RoyaltyAgreementHeadersType<T>[];
  inventoryMovementJournalEntryV4: InventoryMovementJournalEntriesV4Type<T>[];
  vendorPostingProfileOffsetAccountRole: PostingProfileLinesType<T>[];
  vendorPostingProfileSalesTaxPrepayRole: PostingProfileLinesType<T>[];
  vendorPostingProfileSettleAccountRole: PostingProfileLinesType<T>[];
  vendorPostingProfileSummaryAccountRole: PostingProfileLinesType<T>[];
  vendorPostingProfileArrivalAccountRole: PostingProfileLinesType<T>[];
  sadItemCode: SadItemCodesType<T>[];
  budgetRegisterEntry: BudgetRegisterEntriesType<T>[];
  cashDiscount: CashDiscountsType<T>[];
  fiscalOrganization: FiscalOrganizationsType<T>[];
  customerParameters: CustomerParametersType<T>[];
  vendorRebateAgreementHeaderAccrualMainAccountIdCombinations: VendorRebateAgreementHeadersType<T>[];
  vendorRebateAgreementHeaderExpenseMainAccountIdCombinations: VendorRebateAgreementHeadersType<T>[];
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
  expenseRate: ExpenseRatesType<T>[];
  adjustmentParameters: AdjustmentParametersType<T>[];
  assetJournalLineOffsetLedgerDimension: AssetJournalLinesType<T>[];
  assetJournalLineLedgerDimension: AssetJournalLinesType<T>[];
  vendorV2: VendorsV2Type<T>[];
  relatedToLedgerDimensionCombination: SubBillDeferralDefaultAccountsType<T>[];
  relatedToSubBillDeferralRecOffAcctCombination: SubBillDeferralScheduleTablesType<T>[];
  relatedToSubBillDeferralShortTermAccountCombination: SubBillDeferralScheduleTablesType<T>[];
  relatedToSubBillDeferralInitialRecAcctCombination: SubBillDeferralScheduleTablesType<T>[];
  vendInvoiceRegisterLineV2EntityOffsetAccountDimension: VendInvoiceRegisterLinesV2Type<T>[];
  vendInvoiceRegisterLineV2EntityAccountDimension: VendInvoiceRegisterLinesV2Type<T>[];
  benefitAccountingRule: BenefitAccountingRulesType<T>[];
  payrollParameter: PayrollParametersType<T>[];
  fbGeneralAdjustmentCodeLedger: FbGeneralAdjustmentCodeLedgersType<T>[];
  projectLedgerPostingDefinition: ProjectLedgerPostingDefinitionsType<T>[];
  discountVendorClaimPostingProfile: DiscountVendorClaimPostingProfilesType<T>[];
  currencyParameters: CurrencyParametersType<T>[];
  fbFiscalDocumentAdjustmentCodeLedger: FbFiscalDocumentAdjustmentCodeLedgersType<T>[];
  writeOffDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  provisionDebitDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  rebateDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  provisionCreditDimensionAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  rTax25RegisterParameter: RTax25RegisterParametersType<T>[];
  customerPaymentJournalLineSettledInvoiceAccount: PaymentJournalLineSettledInvoicesType<T>[];
  taxPostingGroup: TaxPostingGroupsType<T>[];
  salesRebates: CustomerRebatesType<T>[];
  billingCodeAccountingDistribution: BillingCodeAccountingDistributionsType<T>[];
  rTax25TaxTableAssessed: RTax25TaxTablesType<T>[];
  ledgerCurrencyParameters: LedgerCurrencyParametersType<T>[];
  importMode: ImportModesType<T>[];
  returnOrderLineV2: ReturnOrderLinesV2Type<T>[];
  expenseSubCategory: ExpenseSubCategoriesType<T>[];
  ledgerDimension: BudgetPlansType<T>[];
  withholdingTaxCode: WithholdingTaxCodesType<T>[];
  salesOrderLineV3: SalesOrderLinesV3Type<T>[];
  inventoryMovementJournalEntryV3: InventoryMovementJournalEntriesV3Type<T>[];
  projectDefaultOffsetAccount: ProjectDefaultOffsetAccountsType<T>[];
  inventoryCountingReasonCodeV2: InventoryCountingReasonCodesV2Type<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
  custWriteOffLedgerDimension: CustomerPostingProfileLinesType<T>[];
  customerPostingProfileLine: CustomerPostingProfileLinesType<T>[];
  custLiabilitiesForDiscountLedgerDimension: CustomerPostingProfileLinesType<T>[];
  custSummaryLedgerDimension: CustomerPostingProfileLinesType<T>[];
  custVatPrepaymentsLedgerDimension: CustomerPostingProfileLinesType<T>[];
  ledgerAccountAlias: LedgerAccountAliasesType<T>[];
  retailStore: RetailStoresType<T>[];
  positionForecastV2: PositionForecastsV2Type<T>[];
  ledgerInterCompanyAccountSourceCredit: LedgerInterCompanyAccountsType<T>[];
  ledgerInterCompanyAccountDestinationCredit: LedgerInterCompanyAccountsType<T>[];
  ledgerInterCompanyAccountDestinationDebit: LedgerInterCompanyAccountsType<T>[];
  ledgerInterCompanyAccountSourceDebit: LedgerInterCompanyAccountsType<T>[];
  journalName: JournalNamesType<T>[];
  sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournalsType<T>[];
  salesQuotationLine: SalesQuotationLinesType<T>[];
  bankAccount: BankAccountsType<T>[];
  apAccountDimension: CashControlConfigurationsType<T>[];
  withholdLedgerAccountGroup: WithholdLedgerAccountGroupsType<T>[];
  vendorPaymentMethod: VendorPaymentMethodsType<T>[];
  deferralsLedgerAccounts: DeferralsLedgerAccountsType<T>[];
  accrualScheme: AccrualSchemesType<T>[];
  relatedToUnbilledDiscountAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
  relatedToShortTermUnbilledDiscountAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
  relatedToUnbilledRevenueOffsetAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
  relatedToShortTermUnbilledRevenueAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
  relatedToUnbilledRevenueAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
  relatedToUnbilledDiscountOffsetAccountCombination: SubBillUnbilledRevenueAccountsType<T>[];
}
