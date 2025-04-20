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
import type { RetailTransactionTableBiEntitiesApi } from './RetailTransactionTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { McrsoAllocPriority } from './McrsoAllocPriority';
import { McrPaymOutOfBalance } from './McrPaymOutOfBalance';
import { RetailTransactionCode } from './RetailTransactionCode';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { McrContinuityLineEval } from './McrContinuityLineEval';
import { McrOutOfBalanceReleaseType } from './McrOutOfBalanceReleaseType';
import { UnknownNoYes } from './UnknownNoYes';

/**
 * This class represents the entity "RetailTransactionTableBIEntities" of service "d365_metadata".
 */
export class RetailTransactionTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionTableBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionTableBiEntities.
   */
  static override _entityName = 'RetailTransactionTableBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'store', 'terminal', 'transactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * To Account.
   * @nullable
   */
  declare toAccount?: NoYes | null;
  /**
   * Sell To Contact Id.
   * @nullable
   */
  declare sellToContactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disc Amount.
   */
  declare discAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocation Priority.
   * @nullable
   */
  declare allocationPriority?: McrsoAllocPriority | null;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Disc Amount Ru.
   */
  declare loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Paym Out Of Balance Type.
   * @nullable
   */
  declare paymOutOfBalanceType?: McrPaymOutOfBalance | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Manual Discount Percentage.
   */
  declare totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Comment.
   * @nullable
   */
  declare invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Code.
   * @nullable
   */
  declare transCode?: RetailTransactionCode | null;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Batch Terminal Id.
   * @nullable
   */
  declare batchTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax Included In Price.
   * @nullable
   */
  declare isTaxIncludedInPrice?: NoYes | null;
  /**
   * Is Tax Exempted For Price Inclusive.
   * @nullable
   */
  declare isTaxExemptedForPriceInclusive?: NoYes | null;
  /**
   * Receipt Email.
   * @nullable
   */
  declare receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Date Time.
   */
  declare validationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gift Card Balance.
   */
  declare giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Expire Date.
   */
  declare giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Serial Id.
   * @nullable
   */
  declare fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Order Type.
   * @nullable
   */
  declare transactionOrderType?: RetailTransactionOrderTypes | null;
  /**
   * Time When Trans Closed.
   */
  declare timeWhenTransClosed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Id.
   */
  declare batchId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Items Posted.
   * @nullable
   */
  declare itemsPosted?: NoYes | null;
  /**
   * Suspended Transaction Id.
   * @nullable
   */
  declare suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Open Drawer.
   * @nullable
   */
  declare openDrawer?: NoYes | null;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account Async.
   * @nullable
   */
  declare custAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount To Account.
   */
  declare amountToAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Edit Audit Date Time.
   */
  declare editAuditDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Disc Amount Without Tax.
   */
  declare discAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Time When Total Pressed.
   */
  declare timeWhenTotalPressed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ftc Exempt.
   * @nullable
   */
  declare ftcExempt?: NoYes | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Stamped.
   * @nullable
   */
  declare defaultDimensionStamped?: NoYes | null;
  /**
   * Internal Transaction Id.
   */
  declare internalTransactionId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Id Masked.
   * @nullable
   */
  declare giftCardIdMasked?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Begin Date Time.
   */
  declare beginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validation Status.
   * @nullable
   */
  declare validationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Installment Billing Prompt.
   * @nullable
   */
  declare installmentBillingPrompt?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Invoice Amount.
   */
  declare salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Calculation Type.
   * @nullable
   */
  declare taxCalculationType?: TaxCalculationType | null;
  /**
   * Installment Order Submitted.
   * @nullable
   */
  declare installmentOrderSubmitted?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailTransactionType | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Manual Discount Amount.
   */
  declare totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Refund Receipt Id.
   * @nullable
   */
  declare refundReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Payment Difference.
   */
  declare salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Entry Status.
   * @nullable
   */
  declare entryStatus?: RetailEntryStatus | null;
  /**
   * Cust Disc Amount.
   */
  declare custDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Income Expense Amount.
   */
  declare incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gift Card History Details.
   * @nullable
   */
  declare giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On Pos Terminal.
   * @nullable
   */
  declare createdOnPosTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Active From.
   */
  declare giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Aggregation.
   * @nullable
   */
  declare skipAggregation?: NoYes | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Override.
   * @nullable
   */
  declare priceOverride?: NoYes | null;
  /**
   * Loyalty Card Id.
   * @nullable
   */
  declare loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Payment Lines.
   */
  declare numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Included In Statistics.
   * @nullable
   */
  declare includedInStatistics?: NoYes | null;
  /**
   * Net Price.
   */
  declare netPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wrong Shift.
   * @nullable
   */
  declare wrongShift?: NoYes | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Continuity Line Eval.
   * @nullable
   */
  declare continuityLineEval?: McrContinuityLineEval | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Of Items.
   */
  declare numberOfItems: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Out Of Balance Release Type.
   * @nullable
   */
  declare outOfBalanceReleaseType?: McrOutOfBalanceReleaseType | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quotation Expiry Date.
   */
  declare quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Issue Amount.
   */
  declare giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Continuity Order.
   * @nullable
   */
  declare continuityOrder?: NoYes | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Invoices.
   */
  declare numberOfInvoices: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Deposit Overridden.
   * @nullable
   */
  declare isDepositOverridden?: UnknownNoYes | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post As Shipment.
   * @nullable
   */
  declare postAsShipment?: NoYes | null;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retrieved From Receipt Id.
   * @nullable
   */
  declare retrievedFromReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Offline.
   * @nullable
   */
  declare createdOffline?: NoYes | null;
  /**
   * Gross Amount.
   */
  declare grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Id.
   * @nullable
   */
  declare sourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replicated.
   * @nullable
   */
  declare replicated?: NoYes | null;
  /**
   * Fiscal Document Id.
   * @nullable
   */
  declare fiscalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Time.
   */
  declare transTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Continuity Child.
   * @nullable
   */
  declare continuityChild?: NoYes | null;
  /**
   * Sale On Account.
   * @nullable
   */
  declare saleOnAccount?: NoYes | null;
  /**
   * Number Of Item Lines.
   */
  declare numberOfItemLines: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounded Amount.
   */
  declare roundedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Infocode Disc Group.
   * @nullable
   */
  declare infocodeDiscGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catalog Up Sell Shown.
   * @nullable
   */
  declare catalogUpSellShown?: NoYes | null;
  /**
   * Sales Order Id.
   * @nullable
   */
  declare salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Table Id.
   */
  declare transTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Email Sent.
   * @nullable
   */
  declare receiptEmailSent?: NoYes | null;
  /**
   * Sales Order Amount.
   */
  declare salesOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Disc Amount.
   */
  declare totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Purchase Order.
   * @nullable
   */
  declare custPurchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sale Is Return Sale.
   * @nullable
   */
  declare saleIsReturnSale?: NoYes | null;

  constructor(_entityApi: RetailTransactionTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  toAccount?: NoYes | null;
  sellToContactId?: DeserializedType<T, 'Edm.String'> | null;
  discAmount: DeserializedType<T, 'Edm.Decimal'>;
  allocationPriority?: McrsoAllocPriority | null;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyDiscAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  counter: DeserializedType<T, 'Edm.Int32'>;
  paymOutOfBalanceType?: McrPaymOutOfBalance | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  transCode?: RetailTransactionCode | null;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  batchTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  isTaxIncludedInPrice?: NoYes | null;
  isTaxExemptedForPriceInclusive?: NoYes | null;
  receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  validationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  transactionOrderType?: RetailTransactionOrderTypes | null;
  timeWhenTransClosed: DeserializedType<T, 'Edm.Int32'>;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  batchId: DeserializedType<T, 'Edm.Int64'>;
  itemsPosted?: NoYes | null;
  suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  openDrawer?: NoYes | null;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  custAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  amountToAccount: DeserializedType<T, 'Edm.Decimal'>;
  editAuditDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  timeWhenTotalPressed: DeserializedType<T, 'Edm.Int32'>;
  ftcExempt?: NoYes | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionStamped?: NoYes | null;
  internalTransactionId: DeserializedType<T, 'Edm.Guid'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  giftCardIdMasked?: DeserializedType<T, 'Edm.String'> | null;
  beginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validationStatus?: RetailTransactionValidationStatus | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  installmentBillingPrompt?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxCalculationType?: TaxCalculationType | null;
  installmentOrderSubmitted?: NoYes | null;
  type?: RetailTransactionType | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  refundReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  entryStatus?: RetailEntryStatus | null;
  custDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  createdOnPosTerminal?: DeserializedType<T, 'Edm.String'> | null;
  giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipAggregation?: NoYes | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  priceOverride?: NoYes | null;
  loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  includedInStatistics?: NoYes | null;
  netPrice: DeserializedType<T, 'Edm.Decimal'>;
  wrongShift?: NoYes | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  continuityLineEval?: McrContinuityLineEval | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberOfItems: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  outOfBalanceReleaseType?: McrOutOfBalanceReleaseType | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  continuityOrder?: NoYes | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  numberOfInvoices: DeserializedType<T, 'Edm.Int32'>;
  isDepositOverridden?: UnknownNoYes | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  postAsShipment?: NoYes | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  retrievedFromReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  createdOffline?: NoYes | null;
  grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceId?: DeserializedType<T, 'Edm.String'> | null;
  replicated?: NoYes | null;
  fiscalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  transTime: DeserializedType<T, 'Edm.Int32'>;
  continuityChild?: NoYes | null;
  saleOnAccount?: NoYes | null;
  numberOfItemLines: DeserializedType<T, 'Edm.Decimal'>;
  roundedAmount: DeserializedType<T, 'Edm.Decimal'>;
  infocodeDiscGroup?: DeserializedType<T, 'Edm.String'> | null;
  catalogUpSellShown?: NoYes | null;
  salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  transTableId: DeserializedType<T, 'Edm.Int32'>;
  receiptEmailSent?: NoYes | null;
  salesOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscAmount: DeserializedType<T, 'Edm.Decimal'>;
  custPurchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  saleIsReturnSale?: NoYes | null;
}
