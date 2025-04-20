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
import type { RetailEodStatementEventLogBiEntitiesApi } from './RetailEodStatementEventLogBiEntitiesApi';
import { RetailEodStatementEvent } from './RetailEodStatementEvent';

/**
 * This class represents the entity "RetailEodStatementEventLogBIEntities" of service "d365_metadata".
 */
export class RetailEodStatementEventLogBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodStatementEventLogBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodStatementEventLogBiEntities.
   */
  static override _entityName = 'RetailEodStatementEventLogBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodStatementEventLogBiEntities entity.
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
   * Statement Event.
   * @nullable
   */
  declare statementEvent?: RetailEodStatementEvent | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailEodStatementEventLogBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodStatementEventLogBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  statementEvent?: RetailEodStatementEvent | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
}
