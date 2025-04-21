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
import type { RetailTransactionsApi } from './RetailTransactionsApi';
import { NoYes } from './NoYes';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailEntryStatus } from './RetailEntryStatus';
import {
  RetailGiftCardTransactions,
  RetailGiftCardTransactionsType
} from './RetailGiftCardTransactions';
import {
  GiftCardTransactionsV2,
  GiftCardTransactionsV2Type
} from './GiftCardTransactionsV2';

/**
 * This class represents the entity "RetailTransactions" of service "d365_metadata".
 */
export class RetailTransactions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailTransactionsType<T>
{
  /**
   * Technical entity name for RetailTransactions.
   */
  static override _entityName = 'RetailTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactions entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionNumber',
    'OperatingUnitNumber',
    'Terminal'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount Posted To Account.
   */
  declare amountPostedToAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Post As Shipment.
   * @nullable
   */
  declare postAsShipment?: NoYes | null;
  /**
   * Refund Receipt Id.
   * @nullable
   */
  declare refundReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Logistics Postal Address Valid From.
   */
  declare logisticsPostalAddressValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Infocode Discount Group.
   * @nullable
   */
  declare infocodeDiscountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items Posted.
   * @nullable
   */
  declare itemsPosted?: NoYes | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Payment Lines.
   */
  declare numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Manual Discount Percentage.
   */
  declare totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax Exempted For Price Inclusive.
   * @nullable
   */
  declare isTaxExemptedForPriceInclusive?: NoYes | null;
  /**
   * Sales Order Amount.
   */
  declare salesOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Discount Amount.
   */
  declare customerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Balance.
   */
  declare giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Expire Date.
   */
  declare giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Logistic Postal Address Valid To.
   */
  declare logisticPostalAddressValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Rreceipt Id.
   * @nullable
   */
  declare rreceiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RetailTransactionType | null;
  /**
   * Discount Amount Without Tax.
   */
  declare discountAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Order Type.
   * @nullable
   */
  declare transactionOrderType?: RetailTransactionOrderTypes | null;
  /**
   * Net Price.
   */
  declare netPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Id.
   */
  declare batchId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Suspended Transaction Id.
   * @nullable
   */
  declare suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Transaction Aggregation Field List.
   */
  declare retailTransactionAggregationFieldList: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Payment Difference.
   */
  declare salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Logistics Postal County.
   * @nullable
   */
  declare logisticsPostalCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Expense Amount.
   */
  declare incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Calculation Type.
   * @nullable
   */
  declare taxCalculationType?: TaxCalculationType | null;
  /**
   * Gross Amount.
   */
  declare grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Items.
   */
  declare numberOfItems: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On Pos Terminal.
   * @nullable
   */
  declare createdOnPosTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Manual Discount Amount.
   */
  declare totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card History Details.
   * @nullable
   */
  declare giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Active From.
   */
  declare giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Postal Street.
   * @nullable
   */
  declare logisticsPostalStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift.
   * @nullable
   */
  declare shift?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staff.
   * @nullable
   */
  declare staff?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quotation Expiry Date.
   */
  declare quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Issue Amount.
   */
  declare giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Loyalty Card Id.
   * @nullable
   */
  declare loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Item Lines.
   */
  declare numberOfItemLines: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created Offline.
   * @nullable
   */
  declare createdOffline?: NoYes | null;
  /**
   * Sales Invoice Amount.
   */
  declare salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sale Is Return Sale.
   * @nullable
   */
  declare saleIsReturnSale?: NoYes | null;
  /**
   * Logistics Postal City.
   * @nullable
   */
  declare logisticsPostalCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sale On Account.
   * @nullable
   */
  declare saleOnAccount?: NoYes | null;
  /**
   * Logistics Postal State.
   * @nullable
   */
  declare logisticsPostalState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logistics Location Id.
   * @nullable
   */
  declare logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Account.
   * @nullable
   */
  declare toAccount?: NoYes | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Logistics Postal Zip Code.
   * @nullable
   */
  declare logisticsPostalZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Id.
   * @nullable
   */
  declare salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailGiftCardTransactions} entity.
   */
  declare retailGiftCardTransactions: RetailGiftCardTransactions<T>[];
  /**
   * One-to-many navigation property to the {@link GiftCardTransactionsV2} entity.
   */
  declare giftCardTransactionV2: GiftCardTransactionsV2<T>[];

  constructor(_entityApi: RetailTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  amountPostedToAccount: DeserializedType<T, 'Edm.Decimal'>;
  postAsShipment?: NoYes | null;
  refundReceiptId?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  logisticsPostalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  infocodeDiscountGroup?: DeserializedType<T, 'Edm.String'> | null;
  itemsPosted?: NoYes | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfPaymentLines: DeserializedType<T, 'Edm.Int32'>;
  totalManualDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  batchTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  isTaxIncludedInPrice?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  isTaxExemptedForPriceInclusive?: NoYes | null;
  salesOrderAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  giftCardBalance: DeserializedType<T, 'Edm.Decimal'>;
  giftCardExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  logisticPostalAddressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rreceiptId?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: RetailTransactionType | null;
  discountAmountWithoutTax: DeserializedType<T, 'Edm.Decimal'>;
  transactionOrderType?: RetailTransactionOrderTypes | null;
  netPrice: DeserializedType<T, 'Edm.Decimal'>;
  batchId: DeserializedType<T, 'Edm.Int64'>;
  suspendedTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  retailTransactionAggregationFieldList: DeserializedType<T, 'Edm.Int64'>;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  giftCardIdMasked?: DeserializedType<T, 'Edm.String'> | null;
  beginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  logisticsPostalCounty?: DeserializedType<T, 'Edm.String'> | null;
  incomeExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  taxCalculationType?: TaxCalculationType | null;
  grossAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfItems: DeserializedType<T, 'Edm.Decimal'>;
  createdOnPosTerminal?: DeserializedType<T, 'Edm.String'> | null;
  totalManualDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: RetailEntryStatus | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  giftCardHistoryDetails?: DeserializedType<T, 'Edm.String'> | null;
  giftCardActiveFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  logisticsPostalStreet?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  shift?: DeserializedType<T, 'Edm.String'> | null;
  staff?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quotationExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  giftCardIssueAmount: DeserializedType<T, 'Edm.Decimal'>;
  loyaltyCardId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  numberOfItemLines: DeserializedType<T, 'Edm.Decimal'>;
  createdOffline?: NoYes | null;
  salesInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  saleIsReturnSale?: NoYes | null;
  logisticsPostalCity?: DeserializedType<T, 'Edm.String'> | null;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  saleOnAccount?: NoYes | null;
  logisticsPostalState?: DeserializedType<T, 'Edm.String'> | null;
  logisticsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  toAccount?: NoYes | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  logisticsPostalZipCode?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  retailGiftCardTransactions: RetailGiftCardTransactionsType<T>[];
  giftCardTransactionV2: GiftCardTransactionsV2Type<T>[];
}
