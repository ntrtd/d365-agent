/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Currencies } from './Currencies';
import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { GeneralLedgerCustInvoiceJournalLinesApi } from './GeneralLedgerCustInvoiceJournalLinesApi';
import { CurrencyRevaluationAccountsV2Api } from './CurrencyRevaluationAccountsV2Api';
import { LedgerReportingCurrencyAdjustmentJournalLinesApi } from './LedgerReportingCurrencyAdjustmentJournalLinesApi';
import { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { ProductAttributeValuesV3Api } from './ProductAttributeValuesV3Api';
import { LedgerJournalCdsLinesApi } from './LedgerJournalCdsLinesApi';
import { ProspectsApi } from './ProspectsApi';
import { PayIntV1CompVarPlanTablesApi } from './PayIntV1CompVarPlanTablesApi';
import { PurchaseOrderLineChargesV2Api } from './PurchaseOrderLineChargesV2Api';
import { CashFlowForecastExternalSourceEntriesApi } from './CashFlowForecastExternalSourceEntriesApi';
import { AssetLeaseLedgerJournalLinesApi } from './AssetLeaseLedgerJournalLinesApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
import { CompensationGridsApi } from './CompensationGridsApi';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { LedgersApi } from './LedgersApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { RetailInternalOrganizationProductAttributeValues2Api } from './RetailInternalOrganizationProductAttributeValues2Api';
import { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { VendInvoiceRegisterLinesApi } from './VendInvoiceRegisterLinesApi';
import { BudgetRegisterEntryLinesApi } from './BudgetRegisterEntryLinesApi';
import { TransferPricesApi } from './TransferPricesApi';
import { MeasurementsApi } from './MeasurementsApi';
import { TradeAllowanceAgreementMerchandisingEventBillBackLinesApi } from './TradeAllowanceAgreementMerchandisingEventBillBackLinesApi';
import { ExchangeRatesApi } from './ExchangeRatesApi';
import { CompensationFixedIncreaseBudgetsApi } from './CompensationFixedIncreaseBudgetsApi';
import { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { PeriodChargeRuleLineCustomersApi } from './PeriodChargeRuleLineCustomersApi';
import { SystemParametersApi } from './SystemParametersApi';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { ProductAttributeValuesV2Api } from './ProductAttributeValuesV2Api';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { PurchaseOrderHeaderChargesApi } from './PurchaseOrderHeaderChargesApi';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { RAssetJournalLinesApi } from './RAssetJournalLinesApi';
import { ConfigurationLedgersApi } from './ConfigurationLedgersApi';
import { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { MainAccountsApi } from './MainAccountsApi';
import { VendorPaymentJournalFeesApi } from './VendorPaymentJournalFeesApi';
import { VendorInvoiceHeaderChargesApi } from './VendorInvoiceHeaderChargesApi';
import { VendorBankAccountsApi } from './VendorBankAccountsApi';
import { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
import { AssetJournalLinesApi } from './AssetJournalLinesApi';
import { VariableCompensationAwardsApi } from './VariableCompensationAwardsApi';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
import { ExchangeRatesCdsEntityApi } from './ExchangeRatesCdsEntityApi';
import { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { CompVarPlanTablesApi } from './CompVarPlanTablesApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { BankAccountsApi } from './BankAccountsApi';
import { BenefitPlansApi } from './BenefitPlansApi';
import { RoundOffType } from './RoundOffType';
import { NoYes } from './NoYes';
import { GenderMaleFemale } from './GenderMaleFemale';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CurrenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Currencies<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CurrenciesApi<DeSerializersT> {
    return new CurrenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currencyRevaluationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_REVALUATION_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CurrencyRevaluationAccountsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValuesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES_V_3: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompVarPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_VAR_PLAN_TABLE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompVarPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cashFLowExternalSourceEntryCurrencyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_F_LOW_EXTERNAL_SOURCE_ENTRY_CURRENCY_CODE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CashFlowForecastExternalSourceEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineCurrentyEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNTING_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLineCurrencyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_CURRENCY_CODE: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPriceCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_FROM_CURRENCIES: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_PARAMETERS: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SystemParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTables} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rAssetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RAssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costConfigurationLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CONFIGURATION_LEDGER: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ConfigurationLedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectExpenseJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link variableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCdsEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCdsEntityFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY_FROM_CURRENCIES: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>,
      CurrencyRevaluationAccountsV2Api<DeSerializersT>,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>,
      VendInvoiceJournalLinesApi<DeSerializersT>,
      ProductAttributeValuesV3Api<DeSerializersT>,
      LedgerJournalCdsLinesApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      PayIntV1CompVarPlanTablesApi<DeSerializersT>,
      PurchaseOrderLineChargesV2Api<DeSerializersT>,
      CashFlowForecastExternalSourceEntriesApi<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      VendorPaymentJournalLinesApi<DeSerializersT>,
      CompensationGridsApi<DeSerializersT>,
      PurchaseAgreementsApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      CompVarPlanTablesV2Api<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      VendInvoiceRegisterLinesApi<DeSerializersT>,
      BudgetRegisterEntryLinesApi<DeSerializersT>,
      TransferPricesApi<DeSerializersT>,
      MeasurementsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>,
      ExchangeRatesApi<DeSerializersT>,
      ExchangeRatesApi<DeSerializersT>,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>,
      SystemParametersApi<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      ProductAttributeValuesV2Api<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      PurchaseOrderHeaderChargesApi<DeSerializersT>,
      CompFixedPlanTablesApi<DeSerializersT>,
      RAssetJournalLinesApi<DeSerializersT>,
      ConfigurationLedgersApi<DeSerializersT>,
      ExpenseJournalLinesApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>,
      VendorPaymentJournalFeesApi<DeSerializersT>,
      VendorInvoiceHeaderChargesApi<DeSerializersT>,
      VendorBankAccountsApi<DeSerializersT>,
      BudgetRegisterEntriesApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>,
      CustomerPaymentJournalFeesApi<DeSerializersT>,
      AssetJournalLinesApi<DeSerializersT>,
      VariableCompensationAwardsApi<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      ExchangeRatesCdsEntityApi<DeSerializersT>,
      ExchangeRatesCdsEntityApi<DeSerializersT>,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>,
      CompVarPlanTablesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>,
      BankAccountsApi<DeSerializersT>,
      BenefitPlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      CUST_INVOICE_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'CustInvoiceJournalLineCurrency',
        this,
        linkedApis[1]
      ),
      CURRENCY_REVALUATION_ACCOUNT: new OneToManyLink(
        'CurrencyRevaluationAccount',
        this,
        linkedApis[2]
      ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY:
        new OneToManyLink(
          'LedgerReportingCurrencyAdjustmentJournalLineCurrency',
          this,
          linkedApis[3]
        ),
      VEND_INVOICE_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'VendInvoiceJournalLineCurrency',
        this,
        linkedApis[4]
      ),
      PRODUCT_ATTRIBUTE_VALUES_V_3: new OneToManyLink(
        'ProductAttributeValuesV3',
        this,
        linkedApis[5]
      ),
      LEDGER_JOURNAL_LINE_CDS_CURRENCY: new OneToManyLink(
        'LedgerJournalLineCDSCurrency',
        this,
        linkedApis[6]
      ),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[7]),
      PAY_INT_V_1_COMP_VAR_PLAN_TABLE: new OneToManyLink(
        'PayIntV1CompVarPlanTable',
        this,
        linkedApis[8]
      ),
      PURCHASE_ORDER_LINE_CHARGES: new OneToManyLink(
        'PurchaseOrderLineCharges',
        this,
        linkedApis[9]
      ),
      CASH_F_LOW_EXTERNAL_SOURCE_ENTRY_CURRENCY_CODE: new OneToManyLink(
        'CashFLowExternalSourceEntryCurrencyCode',
        this,
        linkedApis[10]
      ),
      LEDGER_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'LedgerJournalLineCurrency',
        this,
        linkedApis[11]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY: new OneToManyLink(
        'CustomerPaymentJournalLineCurrentyEntity',
        this,
        linkedApis[12]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[13]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE: new OneToManyLink(
        'VendorPaymentJournalLine',
        this,
        linkedApis[14]
      ),
      COMPENSATION_GRID: new OneToManyLink(
        'CompensationGrid',
        this,
        linkedApis[15]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[16]
      ),
      LEDGER_REPORTING_CURRENCY: new OneToManyLink(
        'LedgerReportingCurrency',
        this,
        linkedApis[17]
      ),
      LEDGER_ACCOUNTING_CURRENCY: new OneToManyLink(
        'LedgerAccountingCurrency',
        this,
        linkedApis[18]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[19]
      ),
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue2',
        this,
        linkedApis[20]
      ),
      COMP_VAR_PLAN_TABLE_V_2: new OneToManyLink(
        'CompVarPlanTableV2',
        this,
        linkedApis[21]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[22]
      ),
      VEND_INVOICE_REGISTER_LINE_CURRENCY: new OneToManyLink(
        'VendInvoiceRegisterLineCurrency',
        this,
        linkedApis[23]
      ),
      BUDGET_REGISTER_ENTRY_LINE_CURRENCY_CODE: new OneToOneLink(
        'BudgetRegisterEntryLineCurrencyCode',
        this,
        linkedApis[24]
      ),
      TRANSFER_PRICE_CURRENCY: new OneToManyLink(
        'TransferPriceCurrency',
        this,
        linkedApis[25]
      ),
      MEASUREMENT: new OneToManyLink('Measurement', this, linkedApis[26]),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventBillBackLines',
          this,
          linkedApis[27]
        ),
      EXCHANGE_RATE: new OneToOneLink('ExchangeRate', this, linkedApis[28]),
      EXCHANGE_RATE_FROM_CURRENCIES: new OneToOneLink(
        'ExchangeRateFromCurrencies',
        this,
        linkedApis[29]
      ),
      COMPENSATION_FIXED_INCREASE_BUDGETS: new OneToManyLink(
        'CompensationFixedIncreaseBudgets',
        this,
        linkedApis[30]
      ),
      LEDGER_JOURNAL_LINE_ENTITY_CURRENCY: new OneToManyLink(
        'LedgerJournalLineEntityCurrency',
        this,
        linkedApis[31]
      ),
      PERIOD_CHARGE_RULE_LINE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleLineCustomers',
        this,
        linkedApis[32]
      ),
      SYSTEM_PARAMETERS: new OneToOneLink(
        'SystemParameters',
        this,
        linkedApis[33]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[34]
      ),
      PRODUCT_ATTRIBUTE_VALUES: new OneToManyLink(
        'ProductAttributeValues',
        this,
        linkedApis[35]
      ),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[36]
      ),
      FREE_TEXT_INVOICE_HEADER_CURRENCY: new OneToManyLink(
        'FreeTextInvoiceHeaderCurrency',
        this,
        linkedApis[37]
      ),
      PURCHASE_ORDER_HEADER_CHARGES: new OneToManyLink(
        'PurchaseOrderHeaderCharges',
        this,
        linkedApis[38]
      ),
      COMP_FIXED_PLAN_TABLES: new OneToManyLink(
        'CompFixedPlanTables',
        this,
        linkedApis[39]
      ),
      R_ASSET_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'RAssetJournalLineCurrency',
        this,
        linkedApis[40]
      ),
      COST_CONFIGURATION_LEDGER: new OneToManyLink(
        'CostConfigurationLedger',
        this,
        linkedApis[41]
      ),
      PROJECT_EXPENSE_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'ProjectExpenseJournalLineCurrency',
        this,
        linkedApis[42]
      ),
      MAIN_ACCOUNT: new OneToManyLink('MainAccount', this, linkedApis[43]),
      VENDOR_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'VendorPaymentJournalFee',
        this,
        linkedApis[44]
      ),
      INVOICE_HEADER_CHARGES: new OneToManyLink(
        'InvoiceHeaderCharges',
        this,
        linkedApis[45]
      ),
      VENDOR_BANK_ACCOUNTS: new OneToManyLink(
        'VendorBankAccounts',
        this,
        linkedApis[46]
      ),
      BUDGET_REGISTER_ENTRY: new OneToOneLink(
        'BudgetRegisterEntry',
        this,
        linkedApis[47]
      ),
      TRADE_ALLOWANCE_AGREEMENT_HEADERS: new OneToManyLink(
        'TradeAllowanceAgreementHeaders',
        this,
        linkedApis[48]
      ),
      CUSTOMER_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'CustomerPaymentJournalFee',
        this,
        linkedApis[49]
      ),
      ASSET_JOURNAL_LINE_CURRENCY: new OneToManyLink(
        'AssetJournalLineCurrency',
        this,
        linkedApis[50]
      ),
      VARIABLE_COMPENSATION_AWARD: new OneToManyLink(
        'VariableCompensationAward',
        this,
        linkedApis[51]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[52]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[53]
        ),
      EXCHANGE_RATE_CDS_ENTITY: new OneToOneLink(
        'ExchangeRateCDSEntity',
        this,
        linkedApis[54]
      ),
      EXCHANGE_RATE_CDS_ENTITY_FROM_CURRENCIES: new OneToOneLink(
        'ExchangeRateCDSEntityFromCurrencies',
        this,
        linkedApis[55]
      ),
      CDS_FREE_TEXT_INVOICE_HEADERS: new OneToManyLink(
        'CDSFreeTextInvoiceHeaders',
        this,
        linkedApis[56]
      ),
      COMP_VAR_PLAN_TABLE: new OneToManyLink(
        'CompVarPlanTable',
        this,
        linkedApis[57]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[58]
      ),
      BANK_ACCOUNT: new OneToManyLink('BankAccount', this, linkedApis[59]),
      BENEFIT_PLAN: new OneToManyLink('BenefitPlan', this, linkedApis[60])
    };
    return this;
  }

  entityConstructor = Currencies;

  requestBuilder(): CurrenciesRequestBuilder<DeSerializersT> {
    return new CurrenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Currencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Currencies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Currencies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Currencies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Currencies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CURRENCY_CODE: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUNDING_METHOD_PURCHASE_ORDERS: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ROUNDING_METHOD_PRICES: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_METHOD_SALES_ORDERS: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    SYMBOL: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_RULE_FIXED_ASSET_DEPRECIATION: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_CURRENCY_FOR_TRIANGULATION: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_GENDER: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      GenderMaleFemale,
      true,
      true
    >;
    ROUNDING_RULE_PURCHASE_ORDERS: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GENERAL_ROUNDING_RULE: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_METHOD_FIXED_ASSET_DEPRECIATION: EnumField<
      Currencies<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ROUNDING_RULE_SALES_ORDERS: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_RULE_PRICES: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DECIMALS_COUNT_MX: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custInvoiceJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currencyRevaluationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_REVALUATION_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CurrencyRevaluationAccountsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValuesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES_V_3: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCdsCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompVarPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_VAR_PLAN_TABLE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompVarPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLineCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINE_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLineChargesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cashFLowExternalSourceEntryCurrencyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_F_LOW_EXTERNAL_SOURCE_ENTRY_CURRENCY_CODE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CashFlowForecastExternalSourceEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineCurrentyEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_CURRENTY_ENTITY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountingCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNTING_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLineCurrencyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_CURRENCY_CODE: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPriceCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link measurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEASUREMENT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      MeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_FROM_CURRENCIES: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationFixedIncreaseBudgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_FIXED_INCREASE_BUDGETS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompensationFixedIncreaseBudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLineEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ENTITY_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_PARAMETERS: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SystemParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE_VALUES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ProductAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTables} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rAssetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RAssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costConfigurationLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CONFIGURATION_LEDGER: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ConfigurationLedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectExpenseJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_FEE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceHeaderCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_HEADER_CHARGES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeaderChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_BANK_ACCOUNTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VendorBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_CURRENCY: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link variableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      VariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCdsEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCdsEntityFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY_FROM_CURRENCIES: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compVarPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Currencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roundingMethodPurchaseOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_PURCHASE_ORDERS: fieldBuilder.buildEnumField(
          'RoundingMethodPurchaseOrders',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link roundingMethodPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_PRICES: fieldBuilder.buildEnumField(
          'RoundingMethodPrices',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link roundingMethodSalesOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_SALES_ORDERS: fieldBuilder.buildEnumField(
          'RoundingMethodSalesOrders',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link symbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOL: fieldBuilder.buildEdmTypeField('Symbol', 'Edm.String', true),
        /**
         * Static representation of the {@link roundingRuleFixedAssetDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_FIXED_ASSET_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'RoundingRuleFixedAssetDepreciation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceCurrencyForTriangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_CURRENCY_FOR_TRIANGULATION: fieldBuilder.buildEnumField(
          'ReferenceCurrencyForTriangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencyGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_GENDER: fieldBuilder.buildEnumField(
          'CurrencyGender',
          GenderMaleFemale,
          true
        ),
        /**
         * Static representation of the {@link roundingRulePurchaseOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_PURCHASE_ORDERS: fieldBuilder.buildEdmTypeField(
          'RoundingRulePurchaseOrders',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link generalRoundingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_ROUNDING_RULE: fieldBuilder.buildEdmTypeField(
          'GeneralRoundingRule',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingMethodFixedAssetDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_FIXED_ASSET_DEPRECIATION: fieldBuilder.buildEnumField(
          'RoundingMethodFixedAssetDepreciation',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link roundingRuleSalesOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_SALES_ORDERS: fieldBuilder.buildEdmTypeField(
          'RoundingRuleSalesOrders',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingRulePrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_PRICES: fieldBuilder.buildEdmTypeField(
          'RoundingRulePrices',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link decimalsCountMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMALS_COUNT_MX: fieldBuilder.buildEdmTypeField(
          'DecimalsCount_MX',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Currencies)
      };
    }

    return this._schema;
  }
}
