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
import type { CurrenciesApi } from './CurrenciesApi';
import { RoundOffType } from './RoundOffType';
import { NoYes } from './NoYes';
import { GenderMaleFemale } from './GenderMaleFemale';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';
import {
  CurrencyRevaluationAccountsV2,
  CurrencyRevaluationAccountsV2Type
} from './CurrencyRevaluationAccountsV2';
import {
  LedgerReportingCurrencyAdjustmentJournalLines,
  LedgerReportingCurrencyAdjustmentJournalLinesType
} from './LedgerReportingCurrencyAdjustmentJournalLines';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import {
  ProductAttributeValuesV3,
  ProductAttributeValuesV3Type
} from './ProductAttributeValuesV3';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import { Prospects, ProspectsType } from './Prospects';
import {
  PayIntV1CompVarPlanTables,
  PayIntV1CompVarPlanTablesType
} from './PayIntV1CompVarPlanTables';
import {
  PurchaseOrderLineChargesV2,
  PurchaseOrderLineChargesV2Type
} from './PurchaseOrderLineChargesV2';
import {
  CashFlowForecastExternalSourceEntries,
  CashFlowForecastExternalSourceEntriesType
} from './CashFlowForecastExternalSourceEntries';
import {
  AssetLeaseLedgerJournalLines,
  AssetLeaseLedgerJournalLinesType
} from './AssetLeaseLedgerJournalLines';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  BundleSalesOrderConfirmationBundleParentLines,
  BundleSalesOrderConfirmationBundleParentLinesType
} from './BundleSalesOrderConfirmationBundleParentLines';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import { CompensationGrids, CompensationGridsType } from './CompensationGrids';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import { Ledgers, LedgersType } from './Ledgers';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import {
  RetailInternalOrganizationProductAttributeValues2,
  RetailInternalOrganizationProductAttributeValues2Type
} from './RetailInternalOrganizationProductAttributeValues2';
import {
  CompVarPlanTablesV2,
  CompVarPlanTablesV2Type
} from './CompVarPlanTablesV2';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import {
  VendInvoiceRegisterLines,
  VendInvoiceRegisterLinesType
} from './VendInvoiceRegisterLines';
import {
  BudgetRegisterEntryLines,
  BudgetRegisterEntryLinesType
} from './BudgetRegisterEntryLines';
import { TransferPrices, TransferPricesType } from './TransferPrices';
import { Measurements, MeasurementsType } from './Measurements';
import {
  TradeAllowanceAgreementMerchandisingEventBillBackLines,
  TradeAllowanceAgreementMerchandisingEventBillBackLinesType
} from './TradeAllowanceAgreementMerchandisingEventBillBackLines';
import { ExchangeRates, ExchangeRatesType } from './ExchangeRates';
import {
  CompensationFixedIncreaseBudgets,
  CompensationFixedIncreaseBudgetsType
} from './CompensationFixedIncreaseBudgets';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';
import {
  PeriodChargeRuleLineCustomers,
  PeriodChargeRuleLineCustomersType
} from './PeriodChargeRuleLineCustomers';
import { SystemParameters, SystemParametersType } from './SystemParameters';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  ProductAttributeValuesV2,
  ProductAttributeValuesV2Type
} from './ProductAttributeValuesV2';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  FreeTextInvoiceHeaders,
  FreeTextInvoiceHeadersType
} from './FreeTextInvoiceHeaders';
import {
  PurchaseOrderHeaderCharges,
  PurchaseOrderHeaderChargesType
} from './PurchaseOrderHeaderCharges';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import {
  RAssetJournalLines,
  RAssetJournalLinesType
} from './RAssetJournalLines';
import {
  ConfigurationLedgers,
  ConfigurationLedgersType
} from './ConfigurationLedgers';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';
import { MainAccounts, MainAccountsType } from './MainAccounts';
import {
  VendorPaymentJournalFees,
  VendorPaymentJournalFeesType
} from './VendorPaymentJournalFees';
import {
  VendorInvoiceHeaderCharges,
  VendorInvoiceHeaderChargesType
} from './VendorInvoiceHeaderCharges';
import {
  VendorBankAccounts,
  VendorBankAccountsType
} from './VendorBankAccounts';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import {
  TradeAllowanceAgreementHeaders,
  TradeAllowanceAgreementHeadersType
} from './TradeAllowanceAgreementHeaders';
import {
  CustomerPaymentJournalFees,
  CustomerPaymentJournalFeesType
} from './CustomerPaymentJournalFees';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';
import {
  VariableCompensationAwards,
  VariableCompensationAwardsType
} from './VariableCompensationAwards';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import {
  RetailCatalogInternalOrganizationProductAttributeValues2,
  RetailCatalogInternalOrganizationProductAttributeValues2Type
} from './RetailCatalogInternalOrganizationProductAttributeValues2';
import {
  ExchangeRatesCdsEntity,
  ExchangeRatesCdsEntityType
} from './ExchangeRatesCdsEntity';
import {
  CdsFreeTextInvoiceHeaders,
  CdsFreeTextInvoiceHeadersType
} from './CdsFreeTextInvoiceHeaders';
import { CompVarPlanTables, CompVarPlanTablesType } from './CompVarPlanTables';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';
import { BankAccounts, BankAccountsType } from './BankAccounts';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';

/**
 * This class represents the entity "Currencies" of service "d365_metadata".
 */
export class Currencies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrenciesType<T>
{
  /**
   * Technical entity name for Currencies.
   */
  static override _entityName = 'Currencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Currencies entity.
   */
  static _keys = ['CurrencyCode'];
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Method Purchase Orders.
   * @nullable
   */
  declare roundingMethodPurchaseOrders?: RoundOffType | null;
  /**
   * Rounding Method Prices.
   * @nullable
   */
  declare roundingMethodPrices?: RoundOffType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Method Sales Orders.
   * @nullable
   */
  declare roundingMethodSalesOrders?: RoundOffType | null;
  /**
   * Symbol.
   * @nullable
   */
  declare symbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Rule Fixed Asset Depreciation.
   */
  declare roundingRuleFixedAssetDepreciation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Reference Currency For Triangulation.
   * @nullable
   */
  declare referenceCurrencyForTriangulation?: NoYes | null;
  /**
   * Currency Gender.
   * @nullable
   */
  declare currencyGender?: GenderMaleFemale | null;
  /**
   * Rounding Rule Purchase Orders.
   */
  declare roundingRulePurchaseOrders: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * General Rounding Rule.
   */
  declare generalRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Method Fixed Asset Depreciation.
   * @nullable
   */
  declare roundingMethodFixedAssetDepreciation?: RoundOffType | null;
  /**
   * Rounding Rule Sales Orders.
   */
  declare roundingRuleSalesOrders: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Rule Prices.
   */
  declare roundingRulePrices: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Decimals Count Mx.
   */
  declare decimalsCountMx: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJournalLineCurrency: GeneralLedgerCustInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CurrencyRevaluationAccountsV2} entity.
   */
  declare currencyRevaluationAccount: CurrencyRevaluationAccountsV2<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineCurrency: LedgerReportingCurrencyAdjustmentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLineCurrency: VendInvoiceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAttributeValuesV3} entity.
   */
  declare productAttributeValuesV3: ProductAttributeValuesV3<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalLineCdsCurrency: LedgerJournalCdsLines<T>[];
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1CompVarPlanTables} entity.
   */
  declare payIntV1CompVarPlanTable: PayIntV1CompVarPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderLineChargesV2} entity.
   */
  declare purchaseOrderLineCharges: PurchaseOrderLineChargesV2<T>[];
  /**
   * One-to-many navigation property to the {@link CashFlowForecastExternalSourceEntries} entity.
   */
  declare cashFLowExternalSourceEntryCurrencyCode: CashFlowForecastExternalSourceEntries<T>[];
  /**
   * One-to-many navigation property to the {@link AssetLeaseLedgerJournalLines} entity.
   */
  declare ledgerJournalLineCurrency: AssetLeaseLedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineCurrentyEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationBundleParentLines} entity.
   */
  declare bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLine: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationGrids} entity.
   */
  declare compensationGrid: CompensationGrids<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Ledgers} entity.
   */
  declare ledgerReportingCurrency: Ledgers<T>[];
  /**
   * One-to-many navigation property to the {@link Ledgers} entity.
   */
  declare ledgerAccountingCurrency: Ledgers<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-many navigation property to the {@link CompVarPlanTablesV2} entity.
   */
  declare compVarPlanTableV2: CompVarPlanTablesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendInvoiceRegisterLines} entity.
   */
  declare vendInvoiceRegisterLineCurrency: VendInvoiceRegisterLines<T>[];
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryLines} entity.
   */
  declare budgetRegisterEntryLineCurrencyCode?: BudgetRegisterEntryLines<T> | null;
  /**
   * One-to-many navigation property to the {@link TransferPrices} entity.
   */
  declare transferPriceCurrency: TransferPrices<T>[];
  /**
   * One-to-many navigation property to the {@link Measurements} entity.
   */
  declare measurement: Measurements<T>[];
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementMerchandisingEventBillBackLines} entity.
   */
  declare tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLines<T>[];
  /**
   * One-to-one navigation property to the {@link ExchangeRates} entity.
   */
  declare exchangeRate?: ExchangeRates<T> | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRates} entity.
   */
  declare exchangeRateFromCurrencies?: ExchangeRates<T> | null;
  /**
   * One-to-many navigation property to the {@link CompensationFixedIncreaseBudgets} entity.
   */
  declare compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgets<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLineEntityCurrency: LedgerJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PeriodChargeRuleLineCustomers} entity.
   */
  declare periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomers<T>[];
  /**
   * One-to-one navigation property to the {@link SystemParameters} entity.
   */
  declare systemParameters?: SystemParameters<T> | null;
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductAttributeValuesV2} entity.
   */
  declare productAttributeValues: ProductAttributeValuesV2<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link FreeTextInvoiceHeaders} entity.
   */
  declare freeTextInvoiceHeaderCurrency: FreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrderHeaderCharges} entity.
   */
  declare purchaseOrderHeaderCharges: PurchaseOrderHeaderCharges<T>[];
  /**
   * One-to-many navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTables: CompFixedPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link RAssetJournalLines} entity.
   */
  declare rAssetJournalLineCurrency: RAssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ConfigurationLedgers} entity.
   */
  declare costConfigurationLedger: ConfigurationLedgers<T>[];
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare projectExpenseJournalLineCurrency: ExpenseJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link MainAccounts} entity.
   */
  declare mainAccount: MainAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalFees} entity.
   */
  declare vendorPaymentJournalFee: VendorPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link VendorInvoiceHeaderCharges} entity.
   */
  declare invoiceHeaderCharges: VendorInvoiceHeaderCharges<T>[];
  /**
   * One-to-many navigation property to the {@link VendorBankAccounts} entity.
   */
  declare vendorBankAccounts: VendorBankAccounts<T>[];
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntry?: BudgetRegisterEntries<T> | null;
  /**
   * One-to-many navigation property to the {@link TradeAllowanceAgreementHeaders} entity.
   */
  declare tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalFees} entity.
   */
  declare customerPaymentJournalFee: CustomerPaymentJournalFees<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLineCurrency: AssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VariableCompensationAwards} entity.
   */
  declare variableCompensationAward: VariableCompensationAwards<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCatalogInternalOrganizationProductAttributeValues2} entity.
   */
  declare retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2<T>[];
  /**
   * One-to-one navigation property to the {@link ExchangeRatesCdsEntity} entity.
   */
  declare exchangeRateCdsEntity?: ExchangeRatesCdsEntity<T> | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRatesCdsEntity} entity.
   */
  declare exchangeRateCdsEntityFromCurrencies?: ExchangeRatesCdsEntity<T> | null;
  /**
   * One-to-many navigation property to the {@link CdsFreeTextInvoiceHeaders} entity.
   */
  declare cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link CompVarPlanTables} entity.
   */
  declare compVarPlanTable: CompVarPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan: BenefitPlans<T>[];

  constructor(_entityApi: CurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  roundingMethodPurchaseOrders?: RoundOffType | null;
  roundingMethodPrices?: RoundOffType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  roundingMethodSalesOrders?: RoundOffType | null;
  symbol?: DeserializedType<T, 'Edm.String'> | null;
  roundingRuleFixedAssetDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  referenceCurrencyForTriangulation?: NoYes | null;
  currencyGender?: GenderMaleFemale | null;
  roundingRulePurchaseOrders: DeserializedType<T, 'Edm.Decimal'>;
  generalRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  roundingMethodFixedAssetDepreciation?: RoundOffType | null;
  roundingRuleSalesOrders: DeserializedType<T, 'Edm.Decimal'>;
  roundingRulePrices: DeserializedType<T, 'Edm.Decimal'>;
  decimalsCountMx: DeserializedType<T, 'Edm.Int32'>;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  custInvoiceJournalLineCurrency: GeneralLedgerCustInvoiceJournalLinesType<T>[];
  currencyRevaluationAccount: CurrencyRevaluationAccountsV2Type<T>[];
  ledgerReportingCurrencyAdjustmentJournalLineCurrency: LedgerReportingCurrencyAdjustmentJournalLinesType<T>[];
  vendInvoiceJournalLineCurrency: VendInvoiceJournalLinesType<T>[];
  productAttributeValuesV3: ProductAttributeValuesV3Type<T>[];
  ledgerJournalLineCdsCurrency: LedgerJournalCdsLinesType<T>[];
  prospects: ProspectsType<T>[];
  payIntV1CompVarPlanTable: PayIntV1CompVarPlanTablesType<T>[];
  purchaseOrderLineCharges: PurchaseOrderLineChargesV2Type<T>[];
  cashFLowExternalSourceEntryCurrencyCode: CashFlowForecastExternalSourceEntriesType<T>[];
  ledgerJournalLineCurrency: AssetLeaseLedgerJournalLinesType<T>[];
  customerPaymentJournalLineCurrentyEntity: CustomerPaymentJournalLinesType<T>[];
  bundleSalesOrderConfirmationBundleParentLines: BundleSalesOrderConfirmationBundleParentLinesType<T>[];
  vendorPaymentJournalLine: VendorPaymentJournalLinesType<T>[];
  compensationGrid: CompensationGridsType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  ledgerReportingCurrency: LedgersType<T>[];
  ledgerAccountingCurrency: LedgersType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  retailInternalOrganizationProductAttributeValue2: RetailInternalOrganizationProductAttributeValues2Type<T>[];
  compVarPlanTableV2: CompVarPlanTablesV2Type<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  vendInvoiceRegisterLineCurrency: VendInvoiceRegisterLinesType<T>[];
  budgetRegisterEntryLineCurrencyCode?: BudgetRegisterEntryLinesType<T> | null;
  transferPriceCurrency: TransferPricesType<T>[];
  measurement: MeasurementsType<T>[];
  tradeAllowanceAgreementMerchandisingEventBillBackLines: TradeAllowanceAgreementMerchandisingEventBillBackLinesType<T>[];
  exchangeRate?: ExchangeRatesType<T> | null;
  exchangeRateFromCurrencies?: ExchangeRatesType<T> | null;
  compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgetsType<T>[];
  ledgerJournalLineEntityCurrency: LedgerJournalLinesType<T>[];
  periodChargeRuleLineCustomers: PeriodChargeRuleLineCustomersType<T>[];
  systemParameters?: SystemParametersType<T> | null;
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  productAttributeValues: ProductAttributeValuesV2Type<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  freeTextInvoiceHeaderCurrency: FreeTextInvoiceHeadersType<T>[];
  purchaseOrderHeaderCharges: PurchaseOrderHeaderChargesType<T>[];
  compFixedPlanTables: CompFixedPlanTablesType<T>[];
  rAssetJournalLineCurrency: RAssetJournalLinesType<T>[];
  costConfigurationLedger: ConfigurationLedgersType<T>[];
  projectExpenseJournalLineCurrency: ExpenseJournalLinesType<T>[];
  mainAccount: MainAccountsType<T>[];
  vendorPaymentJournalFee: VendorPaymentJournalFeesType<T>[];
  invoiceHeaderCharges: VendorInvoiceHeaderChargesType<T>[];
  vendorBankAccounts: VendorBankAccountsType<T>[];
  budgetRegisterEntry?: BudgetRegisterEntriesType<T> | null;
  tradeAllowanceAgreementHeaders: TradeAllowanceAgreementHeadersType<T>[];
  customerPaymentJournalFee: CustomerPaymentJournalFeesType<T>[];
  assetJournalLineCurrency: AssetJournalLinesType<T>[];
  variableCompensationAward: VariableCompensationAwardsType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  retailCatalogInternalOrganizationProductAttributeValue2: RetailCatalogInternalOrganizationProductAttributeValues2Type<T>[];
  exchangeRateCdsEntity?: ExchangeRatesCdsEntityType<T> | null;
  exchangeRateCdsEntityFromCurrencies?: ExchangeRatesCdsEntityType<T> | null;
  cdsFreeTextInvoiceHeaders: CdsFreeTextInvoiceHeadersType<T>[];
  compVarPlanTable: CompVarPlanTablesType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
  bankAccount: BankAccountsType<T>[];
  benefitPlan: BenefitPlansType<T>[];
}
