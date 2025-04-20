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
import type { RetailTransactionsAuditableApi } from './RetailTransactionsAuditableApi';
import { NoYes } from './NoYes';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { RetailTransactionCode } from './RetailTransactionCode';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  RetailTransactionAuditableTaxLines,
  RetailTransactionAuditableTaxLinesType
} from './RetailTransactionAuditableTaxLines';
import {
  RetailTransactionAuditableChargeLines,
  RetailTransactionAuditableChargeLinesType
} from './RetailTransactionAuditableChargeLines';
import {
  RetailTransactionAuditableAddressLines,
  RetailTransactionAuditableAddressLinesType
} from './RetailTransactionAuditableAddressLines';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import {
  RetailTransactionAuditableDiscountLines,
  RetailTransactionAuditableDiscountLinesType
} from './RetailTransactionAuditableDiscountLines';
import {
  RetailTransactionAuditablePaymentLines,
  RetailTransactionAuditablePaymentLinesType
} from './RetailTransactionAuditablePaymentLines';

/**
 * This class represents the entity "RetailTransactionsAuditable" of service "d365_metadata".
 */
export class RetailTransactionsAuditable<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionsAuditableType<T>
{
  /**
   * Technical entity name for RetailTransactionsAuditable.
   */
  static override _entityName = 'RetailTransactionsAuditable';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionsAuditable entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time When Transaction Closed.
   */
  declare timeWhenTransactionClosed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Tax Exempted For Price Inclusive.
   * @nullable
   */
  declare isTaxExemptedForPriceInclusive?: NoYes | null;
  /**
   * Operating Unit Rec Id.
   */
  declare operatingUnitRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Of Delivery.
   * @nullable
   */
  declare modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Price.
   */
  declare netPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Validation Time.
   */
  declare lastValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Manual Discount Percentage.
   */
  declare totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Order Type.
   * @nullable
   */
  declare transactionOrderType?: RetailTransactionOrderTypes | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asynchronous Order Status.
   * @nullable
   */
  declare asynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Payment Lines.
   */
  declare numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Active From.
   */
  declare giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RetailTransactionType | null;
  /**
   * Requested Ship Date.
   */
  declare requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Entry Status.
   * @nullable
   */
  declare entryStatus?: RetailEntryStatus | null;
  /**
   * Created At Register.
   * @nullable
   */
  declare createdAtRegister?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Balance.
   */
  declare giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Tax Included In Price.
   * @nullable
   */
  declare isTaxIncludedInPrice?: NoYes | null;
  /**
   * Fiscal Document Id.
   * @nullable
   */
  declare fiscalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Comment.
   * @nullable
   */
  declare invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Calculation Type.
   * @nullable
   */
  declare taxCalculationType?: TaxCalculationType | null;
  /**
   * Discount Amount Excluding Tax.
   */
  declare discountAmountExcludingTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Id Masked.
   * @nullable
   */
  declare giftCardIdMasked?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Status.
   * @nullable
   */
  declare validationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Loyalty Card Number.
   * @nullable
   */
  declare loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Serial Id.
   * @nullable
   */
  declare fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Code.
   * @nullable
   */
  declare transCode?: RetailTransactionCode | null;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Expire Date.
   */
  declare giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Products.
   */
  declare numberOfProducts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Aggregation.
   * @nullable
   */
  declare skipAggregation?: NoYes | null;
  /**
   * Cust Purchase Order.
   * @nullable
   */
  declare custPurchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Async.
   * @nullable
   */
  declare customerAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Payment Difference.
   */
  declare salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Suspended Transaction Id.
   * @nullable
   */
  declare suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Invoice Amount.
   */
  declare salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Product Lines.
   */
  declare numberOfProductLines: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Group.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Discount.
   */
  declare customerDiscount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sale On Account.
   * @nullable
   */
  declare saleOnAccount?: NoYes | null;
  /**
   * Shift Register Id.
   * @nullable
   */
  declare shiftRegisterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Expense Amount.
   */
  declare incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Gross Amount.
   */
  declare grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Email.
   * @nullable
   */
  declare receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created Offline.
   * @nullable
   */
  declare createdOffline?: NoYes | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Issue Amount.
   */
  declare giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shift Id.
   */
  declare shiftId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sale Is Return Sale.
   * @nullable
   */
  declare saleIsReturnSale?: NoYes | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Dimension Display Value.
   * @nullable
   */
  declare financialDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gift Card History Details.
   * @nullable
   */
  declare giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Manual Discount Amount.
   */
  declare totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quotation Expiry Date.
   */
  declare quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableTaxLines} entity.
   */
  declare retailTransactionAuditableTaxLine: RetailTransactionAuditableTaxLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableChargeLines} entity.
   */
  declare retailTransactionAuditableChargeLine: RetailTransactionAuditableChargeLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableAddressLines} entity.
   */
  declare retailTransactionAuditableAddressLine: RetailTransactionAuditableAddressLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine: RetailTransactionAuditableSalesLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditableDiscountLines} entity.
   */
  declare retailTransactionAuditableDiscountLine: RetailTransactionAuditableDiscountLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTransactionAuditablePaymentLines} entity.
   */
  declare retailTransactionAuditablePaymentLine: RetailTransactionAuditablePaymentLines<T>[];

  constructor(_entityApi: RetailTransactionsAuditableApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionsAuditableType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  timeWhenTransactionClosed: DeserializedType<T, 'Edm.Int32'>;
  isTaxExemptedForPriceInclusive?: NoYes | null;
  operatingUnitRecId: DeserializedType<T, 'Edm.Int64'>;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  netPrice: DeserializedType<T, 'Edm.Decimal'>;
  lastValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  transactionOrderType?: RetailTransactionOrderTypes | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  asynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionType?: RetailTransactionType | null;
  requestedShipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  entryStatus?: RetailEntryStatus | null;
  createdAtRegister?: DeserializedType<T, 'Edm.String'> | null;
  giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  isTaxIncludedInPrice?: NoYes | null;
  fiscalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  taxCalculationType?: TaxCalculationType | null;
  discountAmountExcludingTax: DeserializedType<T, 'Edm.Decimal'>;
  giftCardIdMasked?: DeserializedType<T, 'Edm.String'> | null;
  validationStatus?: RetailTransactionValidationStatus | null;
  loyaltyCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  transCode?: RetailTransactionCode | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfProducts: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  skipAggregation?: NoYes | null;
  custPurchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountAsync?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfProductLines: DeserializedType<T, 'Edm.Decimal'>;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerDiscount: DeserializedType<T, 'Edm.Decimal'>;
  saleOnAccount?: NoYes | null;
  shiftRegisterId?: DeserializedType<T, 'Edm.String'> | null;
  incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  channel: DeserializedType<T, 'Edm.Int64'>;
  grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  receiptEmail?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  createdOffline?: NoYes | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  shiftId: DeserializedType<T, 'Edm.Int64'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  saleIsReturnSale?: NoYes | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  financialDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionSet?: DimensionSetsType<T> | null;
  retailTransactionAuditableTaxLine: RetailTransactionAuditableTaxLinesType<T>[];
  retailTransactionAuditableChargeLine: RetailTransactionAuditableChargeLinesType<T>[];
  retailTransactionAuditableAddressLine: RetailTransactionAuditableAddressLinesType<T>[];
  retailTransactionAuditableSalesLine: RetailTransactionAuditableSalesLinesType<T>[];
  retailTransactionAuditableDiscountLine: RetailTransactionAuditableDiscountLinesType<T>[];
  retailTransactionAuditablePaymentLine: RetailTransactionAuditablePaymentLinesType<T>[];
}
