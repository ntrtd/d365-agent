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
import type { RetailTransactionChargeTaxTransGtebiEntitiesApi } from './RetailTransactionChargeTaxTransGtebiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionChargeTaxTransGTEBIEntities" of service "d365_metadata".
 */
export class RetailTransactionChargeTaxTransGtebiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionChargeTaxTransGtebiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionChargeTaxTransGtebiEntities.
   */
  static override _entityName = 'RetailTransactionChargeTaxTransGTEBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionChargeTaxTransGtebiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'StoreId',
    'TerminalId',
    'TransactionId',
    'SaleLineNum',
    'MarkupLineNum',
    'TaxComponent'
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
   * Markup Line Num.
   */
  declare markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Component.
   */
  declare taxComponent: DeserializedType<T, 'Edm.String'>;
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
   * Is Included In Price.
   * @nullable
   */
  declare isIncludedInPrice?: NoYes | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Basis.
   */
  declare taxBasis: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailTransactionChargeTaxTransGtebiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionChargeTaxTransGtebiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  taxComponent: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  isIncludedInPrice?: NoYes | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  taxBasis: DeserializedType<T, 'Edm.Decimal'>;
}
