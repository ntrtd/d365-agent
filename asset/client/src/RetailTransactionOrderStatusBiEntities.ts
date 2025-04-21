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
import type { RetailTransactionOrderStatusBiEntitiesApi } from './RetailTransactionOrderStatusBiEntitiesApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailTransactionOrderStatusBIEntities" of service "d365_metadata".
 */
export class RetailTransactionOrderStatusBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionOrderStatusBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionOrderStatusBiEntities.
   */
  static override _entityName = 'RetailTransactionOrderStatusBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionOrderStatusBiEntities entity.
   */
  static _keys = ['dataAreaId', 'store', 'terminal', 'transactionId', 'Status'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailTransactionOrderStatusType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Detail.
   * @nullable
   */
  declare errorDetail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retry Count.
   */
  declare retryCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Edit User.
   * @nullable
   */
  declare lastEditUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manually Modified.
   * @nullable
   */
  declare manuallyModified?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailTransactionOrderStatusBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionOrderStatusBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  status?: RetailTransactionOrderStatusType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  errorDetail?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  retryCount: DeserializedType<T, 'Edm.Int32'>;
  lastEditUser?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  manuallyModified?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
