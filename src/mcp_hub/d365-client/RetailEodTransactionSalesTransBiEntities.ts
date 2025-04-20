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
import type { RetailEodTransactionSalesTransBiEntitiesApi } from './RetailEodTransactionSalesTransBiEntitiesApi';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailInventStatusSales } from './RetailInventStatusSales';

/**
 * This class represents the entity "RetailEodTransactionSalesTransBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionSalesTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionSalesTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionSalesTransBiEntities.
   */
  static override _entityName = 'RetailEodTransactionSalesTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionSalesTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'StatementId', 'RetailTransactionSalesTrans'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Transaction Sales Trans.
   */
  declare retailTransactionSalesTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Return Transaction Id.
   * @nullable
   */
  declare returnTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: RetailItemTransactionCode | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Status Sales.
   * @nullable
   */
  declare inventStatusSales?: RetailInventStatusSales | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailEodTransactionSalesTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionSalesTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  retailTransactionSalesTrans: DeserializedType<T, 'Edm.Int64'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  returnTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: RetailItemTransactionCode | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  inventStatusSales?: RetailInventStatusSales | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
