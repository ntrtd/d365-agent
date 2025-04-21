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
import type { AuditTrailsApi } from './AuditTrailsApi';
import { TransactionLogType } from './TransactionLogType';

/**
 * This class represents the entity "AuditTrails" of service "d365_metadata".
 */
export class AuditTrails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AuditTrailsType<T>
{
  /**
   * Technical entity name for AuditTrails.
   */
  static override _entityName = 'AuditTrails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AuditTrails entity.
   */
  static _keys = ['dataAreaId', 'TransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: TransactionLogType | null;
  /**
   * Created By User.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Transaction Date Time.
   */
  declare createdTransactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AuditTrailsApi<T>) {
    super(_entityApi);
  }
}

export interface AuditTrailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.Int64'>;
  transactionType?: TransactionLogType | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  createdTransactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
