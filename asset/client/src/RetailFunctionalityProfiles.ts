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
import type { RetailFunctionalityProfilesApi } from './RetailFunctionalityProfilesApi';
import { NoYes } from './NoYes';
import { RetailRequirePaymentForFulfillment } from './RetailRequirePaymentForFulfillment';
import { RetailEmployeeLogonType } from './RetailEmployeeLogonType';
import { RetailCustomerHistoryType } from './RetailCustomerHistoryType';
import { RetailDenominationsToDisplay } from './RetailDenominationsToDisplay';
import { RetailCustomerSearchScope } from './RetailCustomerSearchScope';
import { RetailProductSearchType } from './RetailProductSearchType';
import { Abc } from './Abc';
import { RetailNoneManualAutomatic } from './RetailNoneManualAutomatic';
import { RetailChangeDueBehavior } from './RetailChangeDueBehavior';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "RetailFunctionalityProfiles" of service "d365_metadata".
 */
export class RetailFunctionalityProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailFunctionalityProfilesType<T>
{
  /**
   * Technical entity name for RetailFunctionalityProfiles.
   */
  static override _entityName = 'RetailFunctionalityProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailFunctionalityProfiles entity.
   */
  static _keys = ['profileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Aggregate Items For Printing.
   * @nullable
   */
  declare aggregateItemsForPrinting?: NoYes | null;
  /**
   * Display Tax Exempt In Line Details.
   * @nullable
   */
  declare displayTaxExemptInLineDetails?: NoYes | null;
  /**
   * Minimum Password Length.
   */
  declare minimumPasswordLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * No Sale.
   * @nullable
   */
  declare noSale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Delete Reminder.
   */
  declare transactionDeleteReminder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Rounding To.
   */
  declare amountRoundingTo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tender Declaration.
   * @nullable
   */
  declare tenderDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative Sales Line.
   * @nullable
   */
  declare negativeSalesLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Reconciliation.
   * @nullable
   */
  declare shiftReconciliation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Add Tax On Prices.
   * @nullable
   */
  declare addTaxOnPrices?: NoYes | null;
  /**
   * Require Payment For Fulfillment.
   * @nullable
   */
  declare requirePaymentForFulfillment?: RetailRequirePaymentForFulfillment | null;
  /**
   * Secondary Total Currency.
   * @nullable
   */
  declare secondaryTotalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Tax On Receipt.
   * @nullable
   */
  declare skipTaxOnReceipt?: NoYes | null;
  /**
   * Discount At Total.
   * @nullable
   */
  declare discountAtTotal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Of Transaction.
   * @nullable
   */
  declare startOfTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Project Invoices.
   * @nullable
   */
  declare includeProjectInvoices?: NoYes | null;
  /**
   * End Of Transaction.
   * @nullable
   */
  declare endOfTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copilot Report Insights.
   * @nullable
   */
  declare copilotReportInsights?: NoYes | null;
  /**
   * Synchronize Number Sequences At Pos Startup.
   * @nullable
   */
  declare synchronizeNumberSequencesAtPosStartup?: NoYes | null;
  /**
   * Create Async Customers.
   * @nullable
   */
  declare createAsyncCustomers?: NoYes | null;
  /**
   * Exclude Sales Order Invoices.
   * @nullable
   */
  declare excludeSalesOrderInvoices?: NoYes | null;
  /**
   * Prompt Edit Contact For Async Order Cancellation.
   * @nullable
   */
  declare promptEditContactForAsyncOrderCancellation?: NoYes | null;
  /**
   * Employee Logon Type.
   * @nullable
   */
  declare employeeLogonType?: RetailEmployeeLogonType | null;
  /**
   * Is Product Suggestions Enabled.
   * @nullable
   */
  declare isProductSuggestionsEnabled?: NoYes | null;
  /**
   * Negative Adjustment.
   * @nullable
   */
  declare negativeAdjustment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Receipt Indicator.
   * @nullable
   */
  declare taxExemptReceiptIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff Barcode Logon Requires Password.
   * @nullable
   */
  declare staffBarcodeLogonRequiresPassword?: NoYes | null;
  /**
   * Backup Training Transactions.
   * @nullable
   */
  declare backupTrainingTransactions?: NoYes | null;
  /**
   * Supported Country Region Iso Code.
   * @nullable
   */
  declare supportedCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Include Credit Note Invoices.
   * @nullable
   */
  declare includeCreditNoteInvoices?: NoYes | null;
  /**
   * Days Customer History.
   * @nullable
   */
  declare daysCustomerHistory?: RetailCustomerHistoryType | null;
  /**
   * Void Payment.
   * @nullable
   */
  declare voidPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Denominations To Display.
   * @nullable
   */
  declare denominationsToDisplay?: RetailDenominationsToDisplay | null;
  /**
   * Default Customer Search Mode.
   * @nullable
   */
  declare defaultCustomerSearchMode?: RetailCustomerSearchScope | null;
  /**
   * Use Financial Reconcialiation In Store.
   * @nullable
   */
  declare useFinancialReconcialiationInStore?: NoYes | null;
  /**
   * Copilot Customer Insights.
   * @nullable
   */
  declare copilotCustomerInsights?: NoYes | null;
  /**
   * Staff Barcode Logon.
   * @nullable
   */
  declare staffBarcodeLogon?: NoYes | null;
  /**
   * Must Key In Price If Zero.
   * @nullable
   */
  declare mustKeyInPriceIfZero?: NoYes | null;
  /**
   * Void Transaction.
   * @nullable
   */
  declare voidTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Tax Change.
   * @nullable
   */
  declare transactionTaxChange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Blocked Closed Account.
   * @nullable
   */
  declare blockedClosedAccount?: NoYes | null;
  /**
   * Is Fiscal Customer Required For Transaction.
   * @nullable
   */
  declare isFiscalCustomerRequiredForTransaction?: NoYes | null;
  /**
   * No Tax Used.
   * @nullable
   */
  declare noTaxUsed?: NoYes | null;
  /**
   * Include Free Text Invoices.
   * @nullable
   */
  declare includeFreeTextInvoices?: NoYes | null;
  /**
   * Order Attribute Name For Tin.
   * @nullable
   */
  declare orderAttributeNameForTin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Amount Declaration.
   * @nullable
   */
  declare requireAmountDeclaration?: NoYes | null;
  /**
   * Limit Staff List To Store.
   * @nullable
   */
  declare limitStaffListToStore?: NoYes | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eod Bank Totals Verification.
   * @nullable
   */
  declare eodBankTotalsVerification?: NoYes | null;
  /**
   * Decimal Not Required For Minor Currency Unit.
   * @nullable
   */
  declare decimalNotRequiredForMinorCurrencyUnit?: NoYes | null;
  /**
   * Item Not On File.
   * @nullable
   */
  declare itemNotOnFile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print X Report On Terminal.
   * @nullable
   */
  declare printXReportOnTerminal?: NoYes | null;
  /**
   * Currency Symbol.
   * @nullable
   */
  declare currencySymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Attendance Enable Registration.
   * @nullable
   */
  declare timeAttendanceEnableRegistration?: NoYes | null;
  /**
   * Apply Discount On Unit Prices.
   * @nullable
   */
  declare applyDiscountOnUnitPrices?: NoYes | null;
  /**
   * Product Search Type.
   * @nullable
   */
  declare productSearchType?: RetailProductSearchType | null;
  /**
   * Tax Registration Number On Receipt.
   * @nullable
   */
  declare taxRegistrationNumberOnReceipt?: Abc | null;
  /**
   * Create Async Customer Orders.
   * @nullable
   */
  declare createAsyncCustomerOrders?: NoYes | null;
  /**
   * Display Secondary Total Currency.
   * @nullable
   */
  declare displaySecondaryTotalCurrency?: NoYes | null;
  /**
   * Aggregate Payments.
   * @nullable
   */
  declare aggregatePayments?: NoYes | null;
  /**
   * Skip Sales Invoice Selection During Return.
   * @nullable
   */
  declare skipSalesInvoiceSelectionDuringReturn?: NoYes | null;
  /**
   * Print Receipts On Card Decline.
   * @nullable
   */
  declare printReceiptsOnCardDecline?: NoYes | null;
  /**
   * Reject Order Fulfillment.
   * @nullable
   */
  declare rejectOrderFulfillment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Person Mode.
   * @nullable
   */
  declare salesPersonMode?: RetailNoneManualAutomatic | null;
  /**
   * Price Decimal Places.
   * @nullable
   */
  declare priceDecimalPlaces?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Store Trans Log.
   */
  declare maximumStoreTransLog: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mark Up.
   * @nullable
   */
  declare markUp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Charge Calculation.
   * @nullable
   */
  declare manualChargeCalculation?: NoYes | null;
  /**
   * Notification Refresh Interval.
   */
  declare notificationRefreshInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Person.
   * @nullable
   */
  declare salesPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Mode Default As Customer Order.
   * @nullable
   */
  declare salesModeDefaultAsCustomerOrder?: NoYes | null;
  /**
   * Central Table Server.
   * @nullable
   */
  declare centralTableServer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Show Staff List At Log On.
   * @nullable
   */
  declare showStaffListAtLogOn?: NoYes | null;
  /**
   * Print Void Transaction Receipts.
   * @nullable
   */
  declare printVoidTransactionReceipts?: NoYes | null;
  /**
   * Days Transactions Exists.
   */
  declare daysTransactionsExists: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Quick Pay Shortcuts.
   * @nullable
   */
  declare useQuickPayShortcuts?: NoYes | null;
  /**
   * Price Rounding To.
   */
  declare priceRoundingTo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mark Down.
   * @nullable
   */
  declare markDown?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Audit Enabled.
   * @nullable
   */
  declare auditEnabled?: NoYes | null;
  /**
   * Use Advanced Cash Management.
   * @nullable
   */
  declare useAdvancedCashManagement?: NoYes | null;
  /**
   * Void Is Pressed.
   * @nullable
   */
  declare voidIsPressed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Tax Calculation.
   * @nullable
   */
  declare manualTaxCalculation?: NoYes | null;
  /**
   * Maximum Quantity.
   */
  declare maximumQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Change Due Behavior.
   * @nullable
   */
  declare changeDueBehavior?: RetailChangeDueBehavior | null;
  /**
   * Prohibit Mixing Sales And Returns.
   * @nullable
   */
  declare prohibitMixingSalesAndReturns?: NoYes | null;
  /**
   * Multible Item Symbol.
   * @nullable
   */
  declare multibleItemSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Price.
   */
  declare maximumPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Max Transaction Search Results.
   */
  declare maxTransactionSearchResults: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Central Table Server Port.
   * @nullable
   */
  declare centralTableServerPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Decimal Places.
   * @nullable
   */
  declare amountDecimalPlaces?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Attribute Type Name For Tin.
   * @nullable
   */
  declare orderAttributeTypeNameForTin?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Item Tax Change.
   * @nullable
   */
  declare lineItemTaxChange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refund Sale.
   * @nullable
   */
  declare refundSale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contingency Reason.
   * @nullable
   */
  declare contingencyReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Void Suspended Transactions On Close Shift.
   * @nullable
   */
  declare voidSuspendedTransactionsOnCloseShift?: NoYes | null;
  /**
   * Manual Calculate Discounts.
   * @nullable
   */
  declare manualCalculateDiscounts?: NoYes | null;
  /**
   * Create Customer Orders With Async Fallback.
   * @nullable
   */
  declare createCustomerOrdersWithAsyncFallback?: NoYes | null;
  /**
   * Create Customer Order Wait Timeout.
   */
  declare createCustomerOrderWaitTimeout: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aggregate Items.
   * @nullable
   */
  declare aggregateItems?: NoYes | null;
  /**
   * Cancel Reason.
   * @nullable
   */
  declare cancelReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copilot Product Insights.
   * @nullable
   */
  declare copilotProductInsights?: NoYes | null;
  /**
   * Override Price.
   * @nullable
   */
  declare overridePrice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Always Expand Transaction Screen Line Details.
   * @nullable
   */
  declare alwaysExpandTransactionScreenLineDetails?: NoYes | null;
  /**
   * Retail Receipt Profile.
   * @nullable
   */
  declare retailReceiptProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Number.
   * @nullable
   */
  declare processNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Kit Components.
   * @nullable
   */
  declare includeKitComponents?: NoYes | null;
  /**
   * Staff Card Logon.
   * @nullable
   */
  declare staffCardLogon?: NoYes | null;
  /**
   * Staff Card Logon Requires Password.
   * @nullable
   */
  declare staffCardLogonRequiresPassword?: NoYes | null;
  /**
   * Disable Editing Of Partially Fulfilled Orders.
   * @nullable
   */
  declare disableEditingOfPartiallyFulfilledOrders?: NoYes | null;
  /**
   * Generate Loyalty Card Number.
   * @nullable
   */
  declare generateLoyaltyCardNumber?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];

  constructor(_entityApi: RetailFunctionalityProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailFunctionalityProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  aggregateItemsForPrinting?: NoYes | null;
  displayTaxExemptInLineDetails?: NoYes | null;
  minimumPasswordLength: DeserializedType<T, 'Edm.Int32'>;
  noSale?: DeserializedType<T, 'Edm.String'> | null;
  transactionDeleteReminder: DeserializedType<T, 'Edm.Int32'>;
  amountRoundingTo: DeserializedType<T, 'Edm.Decimal'>;
  tenderDeclaration?: DeserializedType<T, 'Edm.String'> | null;
  negativeSalesLine?: DeserializedType<T, 'Edm.String'> | null;
  shiftReconciliation?: DeserializedType<T, 'Edm.String'> | null;
  addTaxOnPrices?: NoYes | null;
  requirePaymentForFulfillment?: RetailRequirePaymentForFulfillment | null;
  secondaryTotalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  skipTaxOnReceipt?: NoYes | null;
  discountAtTotal?: DeserializedType<T, 'Edm.String'> | null;
  startOfTransaction?: DeserializedType<T, 'Edm.String'> | null;
  includeProjectInvoices?: NoYes | null;
  endOfTransaction?: DeserializedType<T, 'Edm.String'> | null;
  copilotReportInsights?: NoYes | null;
  synchronizeNumberSequencesAtPosStartup?: NoYes | null;
  createAsyncCustomers?: NoYes | null;
  excludeSalesOrderInvoices?: NoYes | null;
  promptEditContactForAsyncOrderCancellation?: NoYes | null;
  employeeLogonType?: RetailEmployeeLogonType | null;
  isProductSuggestionsEnabled?: NoYes | null;
  negativeAdjustment?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptReceiptIndicator?: DeserializedType<T, 'Edm.String'> | null;
  staffBarcodeLogonRequiresPassword?: NoYes | null;
  backupTrainingTransactions?: NoYes | null;
  supportedCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  includeCreditNoteInvoices?: NoYes | null;
  daysCustomerHistory?: RetailCustomerHistoryType | null;
  voidPayment?: DeserializedType<T, 'Edm.String'> | null;
  denominationsToDisplay?: RetailDenominationsToDisplay | null;
  defaultCustomerSearchMode?: RetailCustomerSearchScope | null;
  useFinancialReconcialiationInStore?: NoYes | null;
  copilotCustomerInsights?: NoYes | null;
  staffBarcodeLogon?: NoYes | null;
  mustKeyInPriceIfZero?: NoYes | null;
  voidTransaction?: DeserializedType<T, 'Edm.String'> | null;
  transactionTaxChange?: DeserializedType<T, 'Edm.String'> | null;
  blockedClosedAccount?: NoYes | null;
  isFiscalCustomerRequiredForTransaction?: NoYes | null;
  noTaxUsed?: NoYes | null;
  includeFreeTextInvoices?: NoYes | null;
  orderAttributeNameForTin?: DeserializedType<T, 'Edm.String'> | null;
  requireAmountDeclaration?: NoYes | null;
  limitStaffListToStore?: NoYes | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  eodBankTotalsVerification?: NoYes | null;
  decimalNotRequiredForMinorCurrencyUnit?: NoYes | null;
  itemNotOnFile?: DeserializedType<T, 'Edm.String'> | null;
  printXReportOnTerminal?: NoYes | null;
  currencySymbol?: DeserializedType<T, 'Edm.String'> | null;
  timeAttendanceEnableRegistration?: NoYes | null;
  applyDiscountOnUnitPrices?: NoYes | null;
  productSearchType?: RetailProductSearchType | null;
  taxRegistrationNumberOnReceipt?: Abc | null;
  createAsyncCustomerOrders?: NoYes | null;
  displaySecondaryTotalCurrency?: NoYes | null;
  aggregatePayments?: NoYes | null;
  skipSalesInvoiceSelectionDuringReturn?: NoYes | null;
  printReceiptsOnCardDecline?: NoYes | null;
  rejectOrderFulfillment?: DeserializedType<T, 'Edm.String'> | null;
  salesPersonMode?: RetailNoneManualAutomatic | null;
  priceDecimalPlaces?: DeserializedType<T, 'Edm.String'> | null;
  maximumStoreTransLog: DeserializedType<T, 'Edm.Int32'>;
  markUp?: DeserializedType<T, 'Edm.String'> | null;
  manualChargeCalculation?: NoYes | null;
  notificationRefreshInterval: DeserializedType<T, 'Edm.Int32'>;
  salesPerson?: DeserializedType<T, 'Edm.String'> | null;
  salesModeDefaultAsCustomerOrder?: NoYes | null;
  centralTableServer?: DeserializedType<T, 'Edm.String'> | null;
  showStaffListAtLogOn?: NoYes | null;
  printVoidTransactionReceipts?: NoYes | null;
  daysTransactionsExists: DeserializedType<T, 'Edm.Int32'>;
  useQuickPayShortcuts?: NoYes | null;
  priceRoundingTo: DeserializedType<T, 'Edm.Decimal'>;
  markDown?: DeserializedType<T, 'Edm.String'> | null;
  auditEnabled?: NoYes | null;
  useAdvancedCashManagement?: NoYes | null;
  voidIsPressed?: DeserializedType<T, 'Edm.String'> | null;
  manualTaxCalculation?: NoYes | null;
  maximumQuantity: DeserializedType<T, 'Edm.Decimal'>;
  changeDueBehavior?: RetailChangeDueBehavior | null;
  prohibitMixingSalesAndReturns?: NoYes | null;
  multibleItemSymbol?: DeserializedType<T, 'Edm.String'> | null;
  maximumPrice: DeserializedType<T, 'Edm.Decimal'>;
  maxTransactionSearchResults: DeserializedType<T, 'Edm.Int32'>;
  centralTableServerPort?: DeserializedType<T, 'Edm.String'> | null;
  amountDecimalPlaces?: DeserializedType<T, 'Edm.String'> | null;
  orderAttributeTypeNameForTin?: DeserializedType<T, 'Edm.String'> | null;
  lineItemTaxChange?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  refundSale?: DeserializedType<T, 'Edm.String'> | null;
  contingencyReason?: DeserializedType<T, 'Edm.String'> | null;
  voidSuspendedTransactionsOnCloseShift?: NoYes | null;
  manualCalculateDiscounts?: NoYes | null;
  createCustomerOrdersWithAsyncFallback?: NoYes | null;
  createCustomerOrderWaitTimeout: DeserializedType<T, 'Edm.Int32'>;
  aggregateItems?: NoYes | null;
  cancelReason?: DeserializedType<T, 'Edm.String'> | null;
  copilotProductInsights?: NoYes | null;
  overridePrice?: DeserializedType<T, 'Edm.String'> | null;
  alwaysExpandTransactionScreenLineDetails?: NoYes | null;
  retailReceiptProfile?: DeserializedType<T, 'Edm.String'> | null;
  processNumber?: DeserializedType<T, 'Edm.String'> | null;
  includeKitComponents?: NoYes | null;
  staffCardLogon?: NoYes | null;
  staffCardLogonRequiresPassword?: NoYes | null;
  disableEditingOfPartiallyFulfilledOrders?: NoYes | null;
  generateLoyaltyCardNumber?: NoYes | null;
  retailStore: RetailStoresType<T>[];
}
