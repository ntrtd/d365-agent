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
import type { RetailPosBatches2Api } from './RetailPosBatches2Api';
import { RetailPosBatchStatus } from './RetailPosBatchStatus';

/**
 * This class represents the entity "RetailPosBatches2" of service "d365_metadata".
 */
export class RetailPosBatches2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPosBatches2Type<T>
{
  /**
   * Technical entity name for RetailPosBatches2.
   */
  static override _entityName = 'RetailPosBatches2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPosBatches2 entity.
   */
  static _keys = ['dataAreaId', 'StoreNumber', 'Terminal', 'BatchShiftId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Shift Id.
   */
  declare batchShiftId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Close Date.
   */
  declare closeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transactions Count.
   */
  declare transactionsCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Close Date Time Utc.
   */
  declare closeDateTimeUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closed At Register Number.
   * @nullable
   */
  declare closedAtRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounded Amount Total.
   */
  declare roundedAmountTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Total.
   */
  declare taxTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Count.
   */
  declare salesCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Paid To Account Total.
   */
  declare paidToAccountTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operation Unit Number.
   * @nullable
   */
  declare operationUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Returns Count.
   */
  declare returnsCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailPosBatchStatus | null;
  /**
   * Shift Returns Total.
   */
  declare shiftReturnsTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voids Count.
   */
  declare voidsCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Charge Total.
   */
  declare chargeTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shift Sales Total.
   */
  declare shiftSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Services Sold Quantity.
   */
  declare servicesSoldQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Copies Total.
   */
  declare receiptCopiesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Zero Sales Count.
   */
  declare zeroSalesCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Returns Total.
   */
  declare returnsTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date Time Utc.
   */
  declare startDateTimeUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gift Cards Total.
   */
  declare giftCardsTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Override Total.
   */
  declare priceOverrideTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No Sale Count.
   */
  declare noSaleCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Items Sold.
   */
  declare itemsSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Training Count.
   */
  declare trainingCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Training Total.
   */
  declare trainingTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location Number.
   * @nullable
   */
  declare locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receipt Copies Count.
   */
  declare receiptCopiesCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Grand Total.
   */
  declare salesGrandTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Returns Grand Total.
   */
  declare returnsGrandTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voided Sales Total.
   */
  declare voidedSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Close Time.
   */
  declare closeTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Suspended Total.
   */
  declare suspendedTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Total Amount.
   */
  declare discountTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Total.
   */
  declare salesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Organization Party Number.
   * @nullable
   */
  declare organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Cash Out Total.
   */
  declare giftCardCashOutTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Suspended Count.
   */
  declare suspendedCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Sales Count.
   */
  declare customerSalesCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Logons Count.
   */
  declare logonsCount: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailPosBatches2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailPosBatches2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  batchShiftId: DeserializedType<T, 'Edm.Int64'>;
  closeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionsCount: DeserializedType<T, 'Edm.Int32'>;
  closeDateTimeUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closedAtRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  roundedAmountTotal: DeserializedType<T, 'Edm.Decimal'>;
  taxTotal: DeserializedType<T, 'Edm.Decimal'>;
  salesCount: DeserializedType<T, 'Edm.Int32'>;
  paidToAccountTotal: DeserializedType<T, 'Edm.Decimal'>;
  operationUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  returnsCount: DeserializedType<T, 'Edm.Int32'>;
  status?: RetailPosBatchStatus | null;
  shiftReturnsTotal: DeserializedType<T, 'Edm.Decimal'>;
  voidsCount: DeserializedType<T, 'Edm.Int32'>;
  chargeTotal: DeserializedType<T, 'Edm.Decimal'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shiftSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  servicesSoldQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receiptCopiesTotal: DeserializedType<T, 'Edm.Decimal'>;
  zeroSalesCount: DeserializedType<T, 'Edm.Int32'>;
  returnsTotal: DeserializedType<T, 'Edm.Decimal'>;
  startDateTimeUtc: DeserializedType<T, 'Edm.DateTimeOffset'>;
  giftCardsTotal: DeserializedType<T, 'Edm.Decimal'>;
  priceOverrideTotal: DeserializedType<T, 'Edm.Decimal'>;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  noSaleCount: DeserializedType<T, 'Edm.Int32'>;
  itemsSold: DeserializedType<T, 'Edm.Decimal'>;
  trainingCount: DeserializedType<T, 'Edm.Int32'>;
  trainingTotal: DeserializedType<T, 'Edm.Decimal'>;
  locationNumber?: DeserializedType<T, 'Edm.String'> | null;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  receiptCopiesCount: DeserializedType<T, 'Edm.Int32'>;
  salesGrandTotal: DeserializedType<T, 'Edm.Decimal'>;
  returnsGrandTotal: DeserializedType<T, 'Edm.Decimal'>;
  voidedSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  closeTime: DeserializedType<T, 'Edm.Int32'>;
  suspendedTotal: DeserializedType<T, 'Edm.Decimal'>;
  discountTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesTotal: DeserializedType<T, 'Edm.Decimal'>;
  organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  giftCardCashOutTotal: DeserializedType<T, 'Edm.Decimal'>;
  suspendedCount: DeserializedType<T, 'Edm.Int32'>;
  customerSalesCount: DeserializedType<T, 'Edm.Int32'>;
  logonsCount: DeserializedType<T, 'Edm.Int32'>;
}
