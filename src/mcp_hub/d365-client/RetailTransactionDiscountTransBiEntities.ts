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
import type { RetailTransactionDiscountTransBiEntitiesApi } from './RetailTransactionDiscountTransBiEntitiesApi';
import { RetailCustomerDiscountType } from './RetailCustomerDiscountType';
import { RetailManualDiscountType } from './RetailManualDiscountType';
import { RetailDiscountOriginType } from './RetailDiscountOriginType';

/**
 * This class represents the entity "RetailTransactionDiscountTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionDiscountTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionDiscountTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionDiscountTransBiEntities.
   */
  static override _entityName = 'RetailTransactionDiscountTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionDiscountTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'SaleLineNum',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deal Price.
   */
  declare dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Amount.
   */
  declare discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Discount Type.
   * @nullable
   */
  declare customerDiscountType?: RetailCustomerDiscountType | null;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Discount Type.
   * @nullable
   */
  declare manualDiscountType?: RetailManualDiscountType | null;
  /**
   * Bundle Id.
   */
  declare bundleId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Periodic Discount Offer Id.
   * @nullable
   */
  declare periodicDiscountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Discount Line Rec Id.
   */
  declare discountLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Applied Discount Line Num.
   */
  declare appliedDiscountLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Origin Type.
   * @nullable
   */
  declare discountOriginType?: RetailDiscountOriginType | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Cost.
   */
  declare discountCost: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionDiscountTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionDiscountTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  dealPrice: DeserializedType<T, 'Edm.Decimal'>;
  discountAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerDiscountType?: RetailCustomerDiscountType | null;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  manualDiscountType?: RetailManualDiscountType | null;
  bundleId: DeserializedType<T, 'Edm.Int32'>;
  periodicDiscountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  discountLineRecId: DeserializedType<T, 'Edm.Int64'>;
  appliedDiscountLineNum: DeserializedType<T, 'Edm.Decimal'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  discountOriginType?: RetailDiscountOriginType | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  discountCost: DeserializedType<T, 'Edm.Decimal'>;
}
