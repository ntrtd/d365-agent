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
import type { RetailTransactionAuditLogTableBiEntitiesApi } from './RetailTransactionAuditLogTableBiEntitiesApi';

/**
 * This class represents the entity "RetailTransactionAuditLogTableBIEntities" of service "d365_metadata".
 */
export class RetailTransactionAuditLogTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditLogTableBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditLogTableBiEntities.
   */
  static override _entityName = 'RetailTransactionAuditLogTableBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditLogTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * New Value.
   * @nullable
   */
  declare newValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Old Value.
   * @nullable
   */
  declare oldValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionAuditLogTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditLogTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  newValue?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oldValue?: DeserializedType<T, 'Edm.String'> | null;
}
