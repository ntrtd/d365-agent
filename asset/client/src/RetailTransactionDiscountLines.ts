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
import type { RetailTransactionDiscountLinesApi } from './RetailTransactionDiscountLinesApi';
import { RetailCustomerDiscountType } from './RetailCustomerDiscountType';
import { RetailManualDiscountType } from './RetailManualDiscountType';
import { RetailDiscountOriginType } from './RetailDiscountOriginType';

/**
 * This class represents the entity "RetailTransactionDiscountLines" of service "d365_metadata".
 */
export class RetailTransactionDiscountLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionDiscountLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionDiscountLines.
   */
  static override _entityName = 'RetailTransactionDiscountLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionDiscountLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'SalesLineNumber',
    'OperatingUnitNumber',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Line Number.
   */
  declare salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective Amount.
   */
  declare effectiveAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bundle Id.
   */
  declare bundleId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Deal Price.
   */
  declare dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Discount Type.
   * @nullable
   */
  declare customerDiscountType?: RetailCustomerDiscountType | null;
  /**
   * Manual Discount Type.
   * @nullable
   */
  declare manualDiscountType?: RetailManualDiscountType | null;
  /**
   * Discount Origin Type.
   * @nullable
   */
  declare discountOriginType?: RetailDiscountOriginType | null;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Percentage.
   */
  declare discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Offer Id.
   * @nullable
   */
  declare discountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Cost.
   */
  declare discountCost: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionDiscountLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionDiscountLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  salesLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  effectiveAmount: DeserializedType<T, 'Edm.Decimal'>;
  bundleId: DeserializedType<T, 'Edm.Int32'>;
  dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  customerDiscountType?: RetailCustomerDiscountType | null;
  manualDiscountType?: RetailManualDiscountType | null;
  discountOriginType?: RetailDiscountOriginType | null;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  discountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  discountCost: DeserializedType<T, 'Edm.Decimal'>;
}
