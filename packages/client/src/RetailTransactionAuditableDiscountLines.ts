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
import type { RetailTransactionAuditableDiscountLinesApi } from './RetailTransactionAuditableDiscountLinesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailDiscountOriginType } from './RetailDiscountOriginType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { RetailCustomerDiscountType } from './RetailCustomerDiscountType';
import { RetailManualDiscountType } from './RetailManualDiscountType';
import {
  RetailTransactionAuditableSalesLines,
  RetailTransactionAuditableSalesLinesType
} from './RetailTransactionAuditableSalesLines';
import {
  RetailTransactionsAuditable,
  RetailTransactionsAuditableType
} from './RetailTransactionsAuditable';

/**
 * This class represents the entity "RetailTransactionAuditableDiscountLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableDiscountLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableDiscountLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableDiscountLines.
   */
  static override _entityName = 'RetailTransactionAuditableDiscountLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableDiscountLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'SalesLineNumber',
    'LineNumber'
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
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Periodic Discount Offer Id.
   * @nullable
   */
  declare periodicDiscountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Cost.
   */
  declare discountCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Asynchronous Order Status.
   * @nullable
   */
  declare headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Header Transaction Type.
   * @nullable
   */
  declare headerTransactionType?: RetailTransactionType | null;
  /**
   * Discount Origin Type.
   * @nullable
   */
  declare discountOriginType?: RetailDiscountOriginType | null;
  /**
   * Header Validation Status.
   * @nullable
   */
  declare headerValidationStatus?: RetailTransactionValidationStatus | null;
  /**
   * Customer Discount Type.
   * @nullable
   */
  declare customerDiscountType?: RetailCustomerDiscountType | null;
  /**
   * Bundle Id.
   */
  declare bundleId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manual Discount Type.
   * @nullable
   */
  declare manualDiscountType?: RetailManualDiscountType | null;
  /**
   * Header Store Number.
   * @nullable
   */
  declare headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deal Price.
   */
  declare dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailTransactionAuditableSalesLines} entity.
   */
  declare retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLines<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailTransactionsAuditable} entity.
   */
  declare retailTransactionAuditable?: RetailTransactionsAuditable<T> | null;

  constructor(_entityApi: RetailTransactionAuditableDiscountLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableDiscountLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  periodicDiscountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  discountCost: DeserializedType<T, 'Edm.Decimal'>;
  headerAsynchronousOrderStatus?: RetailTransactionOrderStatusType | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  headerTransactionType?: RetailTransactionType | null;
  discountOriginType?: RetailDiscountOriginType | null;
  headerValidationStatus?: RetailTransactionValidationStatus | null;
  customerDiscountType?: RetailCustomerDiscountType | null;
  bundleId: DeserializedType<T, 'Edm.Int32'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  manualDiscountType?: RetailManualDiscountType | null;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  retailTransactionAuditableSalesLine?: RetailTransactionAuditableSalesLinesType<T> | null;
  retailTransactionAuditable?: RetailTransactionsAuditableType<T> | null;
}
