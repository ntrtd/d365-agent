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
import type { RetailParametersApi } from './RetailParametersApi';
import { NoYes } from './NoYes';
import { RetailCustomerOrderTaxCalculationBehavior } from './RetailCustomerOrderTaxCalculationBehavior';
import { RetailCustomerOrderType } from './RetailCustomerOrderType';
import { RetailTaxCalculationBehavior } from './RetailTaxCalculationBehavior';
import { RetailBookingLedgerAccountTypeBase } from './RetailBookingLedgerAccountTypeBase';
import { RetailNoneItemGroupDepartment } from './RetailNoneItemGroupDepartment';
import { RetailItemLabelSetupMissingAction } from './RetailItemLabelSetupMissingAction';
import { RetailReceiptOptionBase } from './RetailReceiptOptionBase';
import { RetailReplenishmentRespectAssortments } from './RetailReplenishmentRespectAssortments';
import { DetailSummary } from './DetailSummary';
import { RetailDefaultCustomerPostingBase } from './RetailDefaultCustomerPostingBase';
import { RetailIncludeSalesOrderDetailsPolicy } from './RetailIncludeSalesOrderDetailsPolicy';
import { RetailInventoryAvailabilityQuantityReturnType } from './RetailInventoryAvailabilityQuantityReturnType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RetailParameters" of service "d365_metadata".
 */
export class RetailParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailParametersType<T>
{
  /**
   * Technical entity name for RetailParameters.
   */
  static override _entityName = 'RetailParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Advanced Auto Charges.
   * @nullable
   */
  declare useAdvancedAutoCharges?: NoYes | null;
  /**
   * Item Labels For Negative Stock.
   * @nullable
   */
  declare itemLabelsForNegativeStock?: NoYes | null;
  /**
   * System In Use.
   * @nullable
   */
  declare systemInUse?: NoYes | null;
  /**
   * Default Batch Id On Sale For Cash And Carry Sales.
   * @nullable
   */
  declare defaultBatchIdOnSaleForCashAndCarrySales?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cancellation Charge.
   */
  declare cancellationCharge: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Use Default Batch Id On Sale For Customer Order.
   * @nullable
   */
  declare useDefaultBatchIdOnSaleForCustomerOrder?: NoYes | null;
  /**
   * Password Expiry Interval.
   */
  declare passwordExpiryInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Async Orders Edit Hold Code.
   * @nullable
   */
  declare asyncOrdersEditHoldCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Customer Discount.
   * @nullable
   */
  declare postCustomerDiscount?: NoYes | null;
  /**
   * Item Label Last Action.
   * @nullable
   */
  declare itemLabelLastAction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment Ledger Dimension Display Value.
   * @nullable
   */
  declare prepaymentLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Default Trade Dates.
   * @nullable
   */
  declare useDefaultTradeDates?: NoYes | null;
  /**
   * Post Periodic Discount.
   * @nullable
   */
  declare postPeriodicDiscount?: NoYes | null;
  /**
   * Charge Override Reason Code.
   * @nullable
   */
  declare chargeOverrideReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Order Tax Calculation Behavior.
   * @nullable
   */
  declare customerOrderTaxCalculationBehavior?: RetailCustomerOrderTaxCalculationBehavior | null;
  /**
   * Ignore Return Link.
   * @nullable
   */
  declare ignoreReturnLink?: NoYes | null;
  /**
   * Default Ordertype.
   * @nullable
   */
  declare defaultOrdertype?: RetailCustomerOrderType | null;
  /**
   * Discount Offer Activity Type.
   * @nullable
   */
  declare discountOfferActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Login Counter Reset Duration.
   */
  declare loginCounterResetDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax On Gift Cards.
   * @nullable
   */
  declare taxOnGiftCards?: NoYes | null;
  /**
   * Small Business Account Export Profile Name.
   * @nullable
   */
  declare smallBusinessAccountExportProfileName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Hide System Inventory In Stock Count.
   * @nullable
   */
  declare hideSystemInventoryInStockCount?: NoYes | null;
  /**
   * Use Gift Card Policies.
   * @nullable
   */
  declare useGiftCardPolicies?: NoYes | null;
  /**
   * Tax Calculation Behavior.
   * @nullable
   */
  declare taxCalculationBehavior?: RetailTaxCalculationBehavior | null;
  /**
   * Total Discount Ledger Dimension Display Value.
   * @nullable
   */
  declare totalDiscountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Replenishment Assortments Coverage Days.
   */
  declare replenishmentAssortmentsCoverageDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Default Journal Name 4 Category Price.
   * @nullable
   */
  declare defaultJournalName4CategoryPrice?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Account Type.
   * @nullable
   */
  declare ledgerAccountType?: RetailBookingLedgerAccountTypeBase | null;
  /**
   * Recalculate Dimensions On Posting Error.
   * @nullable
   */
  declare recalculateDimensionsOnPostingError?: NoYes | null;
  /**
   * Inventory Enable Automatic Validation.
   * @nullable
   */
  declare inventoryEnableAutomaticValidation?: NoYes | null;
  /**
   * Item Sales Statistics On.
   * @nullable
   */
  declare itemSalesStatisticsOn?: RetailNoneItemGroupDepartment | null;
  /**
   * Lockout Threshold.
   */
  declare lockoutThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Delayed Price And Discount Calculation.
   * @nullable
   */
  declare enableDelayedPriceAndDiscountCalculation?: NoYes | null;
  /**
   * Aggregate Sales And Returns.
   * @nullable
   */
  declare aggregateSalesAndReturns?: NoYes | null;
  /**
   * Item Label Setup Missing Action.
   * @nullable
   */
  declare itemLabelSetupMissingAction?: RetailItemLabelSetupMissingAction | null;
  /**
   * Cancellation Charge Code.
   * @nullable
   */
  declare cancellationChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Call Center Gift Card Void Journal Name.
   * @nullable
   */
  declare callCenterGiftCardVoidJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override System Lookup.
   * @nullable
   */
  declare overrideSystemLookup?: NoYes | null;
  /**
   * Post Infocode Discount.
   * @nullable
   */
  declare postInfocodeDiscount?: NoYes | null;
  /**
   * Payment Statistics.
   * @nullable
   */
  declare paymentStatistics?: NoYes | null;
  /**
   * Default Ledger Journal Name.
   * @nullable
   */
  declare defaultLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Sales Staff To Current User On Edit.
   * @nullable
   */
  declare updateSalesStaffToCurrentUserOnEdit?: NoYes | null;
  /**
   * Is Organization Hierarchy Enabled On Sales Agreement.
   * @nullable
   */
  declare isOrganizationHierarchyEnabledOnSalesAgreement?: NoYes | null;
  /**
   * Max Number Of Threads Customer Order.
   */
  declare maxNumberOfThreadsCustomerOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aggregate Customer Payments.
   * @nullable
   */
  declare aggregateCustomerPayments?: NoYes | null;
  /**
   * Journal Name For Kit Pricing.
   * @nullable
   */
  declare journalNameForKitPricing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Location Id For Sales Order.
   * @nullable
   */
  declare inventoryLocationIdForSalesOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Event Notification Profile Id.
   * @nullable
   */
  declare eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Default Batch Id On Sale For Cash And Carry Sales.
   * @nullable
   */
  declare useDefaultBatchIdOnSaleForCashAndCarrySales?: NoYes | null;
  /**
   * Require Uppercase.
   * @nullable
   */
  declare requireUppercase?: NoYes | null;
  /**
   * Inventory Location Id For Purchase Order.
   * @nullable
   */
  declare inventoryLocationIdForPurchaseOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Aggregate Income Expense Transactions.
   * @nullable
   */
  declare aggregateIncomeExpenseTransactions?: NoYes | null;
  /**
   * Multi Buy Ledger Dimension Display Value.
   * @nullable
   */
  declare multiBuyLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multibuy Activity Type.
   * @nullable
   */
  declare multibuyActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Anonymous User Order Search.
   * @nullable
   */
  declare enableAnonymousUserOrderSearch?: NoYes | null;
  /**
   * Show Only Carrier Options For Ship Orders.
   * @nullable
   */
  declare showOnlyCarrierOptionsForShipOrders?: NoYes | null;
  /**
   * Allow Conclude Credit Memo Transactions When Offline.
   * @nullable
   */
  declare allowConcludeCreditMemoTransactionsWhenOffline?: NoYes | null;
  /**
   * Lockout Duration.
   */
  declare lockoutDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Require Numeric Character.
   * @nullable
   */
  declare requireNumericCharacter?: NoYes | null;
  /**
   * Allow Threshold Join Exclusive Competition.
   * @nullable
   */
  declare allowThresholdJoinExclusiveCompetition?: NoYes | null;
  /**
   * Use Session Date For Calculating Prices And Discounts.
   * @nullable
   */
  declare useSessionDateForCalculatingPricesAndDiscounts?: NoYes | null;
  /**
   * Receipt Option.
   * @nullable
   */
  declare receiptOption?: RetailReceiptOptionBase | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Inventory Product Availability Sortable Attribute.
   */
  declare inventoryProductAvailabilitySortableAttribute: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Cross Docking Respect Assortments.
   * @nullable
   */
  declare crossDockingRespectAssortments?: RetailReplenishmentRespectAssortments | null;
  /**
   * Aggregate Before Posting.
   * @nullable
   */
  declare aggregateBeforePosting?: NoYes | null;
  /**
   * Post Sales Order When Paid.
   * @nullable
   */
  declare postSalesOrderWhenPaid?: NoYes | null;
  /**
   * Gift Card Closing Ledger Dimension Display Value.
   * @nullable
   */
  declare giftCardClosingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ean License No.
   * @nullable
   */
  declare eanLicenseNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mix And Match Activity Type.
   * @nullable
   */
  declare mixAndMatchActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Not Aggregate Returns.
   * @nullable
   */
  declare doNotAggregateReturns?: NoYes | null;
  /**
   * Terminal Statistics.
   * @nullable
   */
  declare terminalStatistics?: NoYes | null;
  /**
   * Default Customer Payment Journal Name.
   * @nullable
   */
  declare defaultCustomerPaymentJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Returns For Multiple Order Invoices.
   * @nullable
   */
  declare enableReturnsForMultipleOrderInvoices?: NoYes | null;
  /**
   * Post Total Discount.
   * @nullable
   */
  declare postTotalDiscount?: NoYes | null;
  /**
   * Use Rts For Online Order Creation.
   * @nullable
   */
  declare useRtsForOnlineOrderCreation?: NoYes | null;
  /**
   * Pick Up Delivery Mode Code.
   * @nullable
   */
  declare pickUpDeliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Special Character.
   * @nullable
   */
  declare requireSpecialCharacter?: NoYes | null;
  /**
   * Apply Discounts To Price Keyed In.
   * @nullable
   */
  declare applyDiscountsToPriceKeyedIn?: NoYes | null;
  /**
   * Gift Card Ledger Journal Name.
   * @nullable
   */
  declare giftCardLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prioritize Dimensions From Payment Method For Statements.
   * @nullable
   */
  declare prioritizeDimensionsFromPaymentMethodForStatements?: NoYes | null;
  /**
   * Stmt Auto Settle Customer Deposit.
   * @nullable
   */
  declare stmtAutoSettleCustomerDeposit?: NoYes | null;
  /**
   * Cleanup Expired Discounts Required Days.
   */
  declare cleanupExpiredDiscountsRequiredDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Post Periodic Discount For Orders.
   * @nullable
   */
  declare postPeriodicDiscountForOrders?: NoYes | null;
  /**
   * Shelf Label Last Action.
   * @nullable
   */
  declare shelfLabelLastAction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Giftcard Item.
   * @nullable
   */
  declare giftcardItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Attribute Group Name.
   * @nullable
   */
  declare customerAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Product Out Of Stock Attribute Value.
   */
  declare inventoryProductOutOfStockAttributeValue: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Post Line Discount.
   * @nullable
   */
  declare postLineDiscount?: NoYes | null;
  /**
   * Detail Summary.
   * @nullable
   */
  declare detailSummary?: DetailSummary | null;
  /**
   * Shipping Charge Code.
   * @nullable
   */
  declare shippingChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parallel Sales Order Posting.
   * @nullable
   */
  declare parallelSalesOrderPosting?: NoYes | null;
  /**
   * Wish List Invitation Email Id.
   * @nullable
   */
  declare wishListInvitationEmailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Password Length.
   */
  declare minimumPasswordLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Delivery Mode Code.
   * @nullable
   */
  declare electronicDeliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff Statistics.
   * @nullable
   */
  declare staffStatistics?: NoYes | null;
  /**
   * Disable Post Rounding Difference.
   * @nullable
   */
  declare disablePostRoundingDifference?: NoYes | null;
  /**
   * Enable Channel Return Policies.
   * @nullable
   */
  declare enableChannelReturnPolicies?: NoYes | null;
  /**
   * Discount Account Ledger Dimension Display Value.
   * @nullable
   */
  declare discountAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Password Expiry Notification Threshold.
   */
  declare passwordExpiryNotificationThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Retail Return Tax Group.
   * @nullable
   */
  declare useRetailReturnTaxGroup?: NoYes | null;
  /**
   * Gift Card Inquiry Print History Count.
   */
  declare giftCardInquiryPrintHistoryCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Max Sales Orders Per Task.
   */
  declare maxSalesOrdersPerTask: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Email Text.
   * @nullable
   */
  declare receiptEmailText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Discounts To Price Overrides.
   * @nullable
   */
  declare applyDiscountsToPriceOverrides?: NoYes | null;
  /**
   * Offer Ledger Dimension Display Value.
   * @nullable
   */
  declare offerLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display Non Retail Orders In Ecommerce Order History.
   * @nullable
   */
  declare displayNonRetailOrdersInEcommerceOrderHistory?: NoYes | null;
  /**
   * Inventory Location Id For Inventory.
   * @nullable
   */
  declare inventoryLocationIdForInventory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receipt Email Subject.
   * @nullable
   */
  declare receiptEmailSubject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Inventory Journal Name.
   * @nullable
   */
  declare defaultInventoryJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Advance Invoice.
   * @nullable
   */
  declare useAdvanceInvoice?: NoYes | null;
  /**
   * Aggregate Tender Remove And Float.
   * @nullable
   */
  declare aggregateTenderRemoveAndFloat?: NoYes | null;
  /**
   * Threshold Ledger Dimension Display Value.
   * @nullable
   */
  declare thresholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post Banked Sum.
   * @nullable
   */
  declare postBankedSum?: NoYes | null;
  /**
   * Return Disposition Code Id.
   * @nullable
   */
  declare returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Financial Dimension From Return Store.
   * @nullable
   */
  declare useFinancialDimensionFromReturnStore?: NoYes | null;
  /**
   * Inventory Product Attribute.
   */
  declare inventoryProductAttribute: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Use Default Ledger Account.
   * @nullable
   */
  declare useDefaultLedgerAccount?: NoYes | null;
  /**
   * Post Safe Sum.
   * @nullable
   */
  declare postSafeSum?: NoYes | null;
  /**
   * Customer Attribute Group.
   */
  declare customerAttributeGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Customer Posting.
   * @nullable
   */
  declare defaultCustomerPosting?: RetailDefaultCustomerPostingBase | null;
  /**
   * Minimum Deposit For Sales Order.
   */
  declare minimumDepositForSalesOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mix Match Ledger Dimension Display Value.
   * @nullable
   */
  declare mixMatchLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pre Payment Ledger Journal Name.
   * @nullable
   */
  declare prePaymentLedgerJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inherit Price Includes Tax From Order Origin At Pickup.
   * @nullable
   */
  declare inheritPriceIncludesTaxFromOrderOriginAtPickup?: NoYes | null;
  /**
   * Enable Validation Of Serial Numbers On Pos Returns.
   * @nullable
   */
  declare enableValidationOfSerialNumbersOnPosReturns?: NoYes | null;
  /**
   * Auto Settle.
   * @nullable
   */
  declare autoSettle?: NoYes | null;
  /**
   * Default R Cash Journal Name.
   * @nullable
   */
  declare defaultRCashJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Exchange On Return Orders.
   * @nullable
   */
  declare allowExchangeOnReturnOrders?: NoYes | null;
  /**
   * Receipt Email Filename.
   * @nullable
   */
  declare receiptEmailFilename?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Sales Order Details Policy.
   * @nullable
   */
  declare includeSalesOrderDetailsPolicy?: RetailIncludeSalesOrderDetailsPolicy | null;
  /**
   * Max Number Of Statements Post In Parallel.
   */
  declare maxNumberOfStatementsPostInParallel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Coupon Barcode Setup Id.
   * @nullable
   */
  declare couponBarcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Client Book Attribute Group.
   */
  declare clientBookAttributeGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disable B 2 B Prospect Address Assoc With Customer.
   * @nullable
   */
  declare disableB2BProspectAddressAssocWithCustomer?: NoYes | null;
  /**
   * Inventory Availability Quantity Return Type.
   * @nullable
   */
  declare inventoryAvailabilityQuantityReturnType?: RetailInventoryAvailabilityQuantityReturnType | null;
  /**
   * Allow Conclude Gift Card Transactions When Offline.
   * @nullable
   */
  declare allowConcludeGiftCardTransactionsWhenOffline?: NoYes | null;
  /**
   * Buyers Push Respect Assortments.
   * @nullable
   */
  declare buyersPushRespectAssortments?: RetailReplenishmentRespectAssortments | null;
  /**
   * Aggregated Transactions Bundle Size.
   */
  declare aggregatedTransactionsBundleSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment.
   * @nullable
   */
  declare payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Batch Id On Sale For Customer Order.
   * @nullable
   */
  declare defaultBatchIdOnSaleForCustomerOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Company.
   * @nullable
   */
  declare giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RetailParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  useAdvancedAutoCharges?: NoYes | null;
  itemLabelsForNegativeStock?: NoYes | null;
  systemInUse?: NoYes | null;
  defaultBatchIdOnSaleForCashAndCarrySales?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  cancellationCharge: DeserializedType<T, 'Edm.Decimal'>;
  useDefaultBatchIdOnSaleForCustomerOrder?: NoYes | null;
  passwordExpiryInterval: DeserializedType<T, 'Edm.Int32'>;
  asyncOrdersEditHoldCode?: DeserializedType<T, 'Edm.String'> | null;
  postCustomerDiscount?: NoYes | null;
  itemLabelLastAction?: DeserializedType<T, 'Edm.String'> | null;
  prepaymentLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  useDefaultTradeDates?: NoYes | null;
  postPeriodicDiscount?: NoYes | null;
  chargeOverrideReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  customerOrderTaxCalculationBehavior?: RetailCustomerOrderTaxCalculationBehavior | null;
  ignoreReturnLink?: NoYes | null;
  defaultOrdertype?: RetailCustomerOrderType | null;
  discountOfferActivityType?: DeserializedType<T, 'Edm.String'> | null;
  loginCounterResetDuration: DeserializedType<T, 'Edm.Int32'>;
  taxOnGiftCards?: NoYes | null;
  smallBusinessAccountExportProfileName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  hideSystemInventoryInStockCount?: NoYes | null;
  useGiftCardPolicies?: NoYes | null;
  taxCalculationBehavior?: RetailTaxCalculationBehavior | null;
  totalDiscountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  replenishmentAssortmentsCoverageDays: DeserializedType<T, 'Edm.Int32'>;
  defaultJournalName4CategoryPrice?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccountType?: RetailBookingLedgerAccountTypeBase | null;
  recalculateDimensionsOnPostingError?: NoYes | null;
  inventoryEnableAutomaticValidation?: NoYes | null;
  itemSalesStatisticsOn?: RetailNoneItemGroupDepartment | null;
  lockoutThreshold: DeserializedType<T, 'Edm.Int32'>;
  enableDelayedPriceAndDiscountCalculation?: NoYes | null;
  aggregateSalesAndReturns?: NoYes | null;
  itemLabelSetupMissingAction?: RetailItemLabelSetupMissingAction | null;
  cancellationChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  callCenterGiftCardVoidJournalName?: DeserializedType<T, 'Edm.String'> | null;
  overrideSystemLookup?: NoYes | null;
  postInfocodeDiscount?: NoYes | null;
  paymentStatistics?: NoYes | null;
  defaultLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  updateSalesStaffToCurrentUserOnEdit?: NoYes | null;
  isOrganizationHierarchyEnabledOnSalesAgreement?: NoYes | null;
  maxNumberOfThreadsCustomerOrder: DeserializedType<T, 'Edm.Int32'>;
  aggregateCustomerPayments?: NoYes | null;
  journalNameForKitPricing?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLocationIdForSalesOrder?: DeserializedType<T, 'Edm.String'> | null;
  eventNotificationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  useDefaultBatchIdOnSaleForCashAndCarrySales?: NoYes | null;
  requireUppercase?: NoYes | null;
  inventoryLocationIdForPurchaseOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  aggregateIncomeExpenseTransactions?: NoYes | null;
  multiBuyLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  multibuyActivityType?: DeserializedType<T, 'Edm.String'> | null;
  enableAnonymousUserOrderSearch?: NoYes | null;
  showOnlyCarrierOptionsForShipOrders?: NoYes | null;
  allowConcludeCreditMemoTransactionsWhenOffline?: NoYes | null;
  lockoutDuration: DeserializedType<T, 'Edm.Int32'>;
  requireNumericCharacter?: NoYes | null;
  allowThresholdJoinExclusiveCompetition?: NoYes | null;
  useSessionDateForCalculatingPricesAndDiscounts?: NoYes | null;
  receiptOption?: RetailReceiptOptionBase | null;
  expirationDate: DeserializedType<T, 'Edm.Int32'>;
  inventoryProductAvailabilitySortableAttribute: DeserializedType<
    T,
    'Edm.Int64'
  >;
  crossDockingRespectAssortments?: RetailReplenishmentRespectAssortments | null;
  aggregateBeforePosting?: NoYes | null;
  postSalesOrderWhenPaid?: NoYes | null;
  giftCardClosingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  eanLicenseNo?: DeserializedType<T, 'Edm.String'> | null;
  mixAndMatchActivityType?: DeserializedType<T, 'Edm.String'> | null;
  doNotAggregateReturns?: NoYes | null;
  terminalStatistics?: NoYes | null;
  defaultCustomerPaymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  enableReturnsForMultipleOrderInvoices?: NoYes | null;
  postTotalDiscount?: NoYes | null;
  useRtsForOnlineOrderCreation?: NoYes | null;
  pickUpDeliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  requireSpecialCharacter?: NoYes | null;
  applyDiscountsToPriceKeyedIn?: NoYes | null;
  giftCardLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  prioritizeDimensionsFromPaymentMethodForStatements?: NoYes | null;
  stmtAutoSettleCustomerDeposit?: NoYes | null;
  cleanupExpiredDiscountsRequiredDays: DeserializedType<T, 'Edm.Int32'>;
  postPeriodicDiscountForOrders?: NoYes | null;
  shelfLabelLastAction?: DeserializedType<T, 'Edm.String'> | null;
  giftcardItem?: DeserializedType<T, 'Edm.String'> | null;
  customerAttributeGroupName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProductOutOfStockAttributeValue: DeserializedType<T, 'Edm.Int64'>;
  postLineDiscount?: NoYes | null;
  detailSummary?: DetailSummary | null;
  shippingChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  parallelSalesOrderPosting?: NoYes | null;
  wishListInvitationEmailId?: DeserializedType<T, 'Edm.String'> | null;
  minimumPasswordLength: DeserializedType<T, 'Edm.Int32'>;
  electronicDeliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  staffStatistics?: NoYes | null;
  disablePostRoundingDifference?: NoYes | null;
  enableChannelReturnPolicies?: NoYes | null;
  discountAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  passwordExpiryNotificationThreshold: DeserializedType<T, 'Edm.Int32'>;
  useRetailReturnTaxGroup?: NoYes | null;
  giftCardInquiryPrintHistoryCount: DeserializedType<T, 'Edm.Int32'>;
  maxSalesOrdersPerTask: DeserializedType<T, 'Edm.Int32'>;
  receiptEmailText?: DeserializedType<T, 'Edm.String'> | null;
  applyDiscountsToPriceOverrides?: NoYes | null;
  offerLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  displayNonRetailOrdersInEcommerceOrderHistory?: NoYes | null;
  inventoryLocationIdForInventory?: DeserializedType<T, 'Edm.String'> | null;
  receiptEmailSubject?: DeserializedType<T, 'Edm.String'> | null;
  defaultInventoryJournalName?: DeserializedType<T, 'Edm.String'> | null;
  useAdvanceInvoice?: NoYes | null;
  aggregateTenderRemoveAndFloat?: NoYes | null;
  thresholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postBankedSum?: NoYes | null;
  returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  useFinancialDimensionFromReturnStore?: NoYes | null;
  inventoryProductAttribute: DeserializedType<T, 'Edm.Int64'>;
  useDefaultLedgerAccount?: NoYes | null;
  postSafeSum?: NoYes | null;
  customerAttributeGroup: DeserializedType<T, 'Edm.Int64'>;
  defaultCustomerPosting?: RetailDefaultCustomerPostingBase | null;
  minimumDepositForSalesOrder: DeserializedType<T, 'Edm.Decimal'>;
  mixMatchLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  prePaymentLedgerJournalName?: DeserializedType<T, 'Edm.String'> | null;
  inheritPriceIncludesTaxFromOrderOriginAtPickup?: NoYes | null;
  enableValidationOfSerialNumbersOnPosReturns?: NoYes | null;
  autoSettle?: NoYes | null;
  defaultRCashJournalName?: DeserializedType<T, 'Edm.String'> | null;
  allowExchangeOnReturnOrders?: NoYes | null;
  receiptEmailFilename?: DeserializedType<T, 'Edm.String'> | null;
  includeSalesOrderDetailsPolicy?: RetailIncludeSalesOrderDetailsPolicy | null;
  maxNumberOfStatementsPostInParallel: DeserializedType<T, 'Edm.Int32'>;
  couponBarcodeSetupId?: DeserializedType<T, 'Edm.String'> | null;
  clientBookAttributeGroup: DeserializedType<T, 'Edm.Int64'>;
  disableB2BProspectAddressAssocWithCustomer?: NoYes | null;
  inventoryAvailabilityQuantityReturnType?: RetailInventoryAvailabilityQuantityReturnType | null;
  allowConcludeGiftCardTransactionsWhenOffline?: NoYes | null;
  buyersPushRespectAssortments?: RetailReplenishmentRespectAssortments | null;
  aggregatedTransactionsBundleSize: DeserializedType<T, 'Edm.Int32'>;
  payment?: DeserializedType<T, 'Edm.String'> | null;
  defaultBatchIdOnSaleForCustomerOrder?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardCompany?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
