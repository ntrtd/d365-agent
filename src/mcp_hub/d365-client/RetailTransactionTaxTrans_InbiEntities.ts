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
import type { RetailTransactionTaxTrans_InbiEntitiesApi } from './RetailTransactionTaxTrans_InbiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionTaxTrans_INBIEntities" of service "d365_metadata".
 */
export class RetailTransactionTaxTrans_InbiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionTaxTrans_InbiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionTaxTrans_InbiEntities.
   */
  static override _entityName = 'RetailTransactionTaxTrans_INBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionTaxTrans_InbiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Channel',
    'SaleLineNum',
    'TransactionId',
    'TerminalId',
    'StoreId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Id.
   */
  declare storeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Percentage.
   */
  declare taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Tax On Tax.
   * @nullable
   */
  declare isTaxOnTax?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Component.
   * @nullable
   */
  declare taxComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Is Exempt.
   * @nullable
   */
  declare taxIsExempt?: NoYes | null;
  /**
   * Tax Formula.
   * @nullable
   */
  declare taxFormula?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Basis.
   */
  declare taxBasis: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Is Included In Price.
   * @nullable
   */
  declare taxIsIncludedInPrice?: NoYes | null;

  constructor(_entityApi: RetailTransactionTaxTrans_InbiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionTaxTrans_InbiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  storeId: DeserializedType<T, 'Edm.String'>;
  taxPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isTaxOnTax?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  taxComponent?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxIsExempt?: NoYes | null;
  taxFormula?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxBasis: DeserializedType<T, 'Edm.Decimal'>;
  taxIsIncludedInPrice?: NoYes | null;
}
