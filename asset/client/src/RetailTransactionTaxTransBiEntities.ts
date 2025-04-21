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
import type { RetailTransactionTaxTransBiEntitiesApi } from './RetailTransactionTaxTransBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionTaxTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionTaxTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionTaxTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionTaxTransBiEntities.
   */
  static override _entityName = 'RetailTransactionTaxTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionTaxTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'TerminalId',
    'StoreId',
    'TransactionId',
    'SaleLineNum',
    'TaxCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Exempt.
   * @nullable
   */
  declare isExempt?: NoYes | null;
  /**
   * Is Included In Price.
   * @nullable
   */
  declare isIncludedInPrice?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Base Amount.
   */
  declare taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionTaxTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionTaxTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  isExempt?: NoYes | null;
  isIncludedInPrice?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
}
