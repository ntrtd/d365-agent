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
import type { RetailEodStatementControllerLogBiEntitiesApi } from './RetailEodStatementControllerLogBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailEodTransactionPostingStatus } from './RetailEodTransactionPostingStatus';

/**
 * This class represents the entity "RetailEodStatementControllerLogBIEntities" of service "d365_metadata".
 */
export class RetailEodStatementControllerLogBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodStatementControllerLogBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodStatementControllerLogBiEntities.
   */
  static override _entityName = 'RetailEodStatementControllerLogBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodStatementControllerLogBiEntities entity.
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
   * Is End Event.
   * @nullable
   */
  declare isEndEvent?: NoYes | null;
  /**
   * Start Event Id.
   */
  declare startEventId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting State Message.
   * @nullable
   */
  declare postingStateMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Status.
   * @nullable
   */
  declare postingStatus?: RetailEodTransactionPostingStatus | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posting Batch Job Id.
   */
  declare postingBatchJobId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailEodStatementControllerLogBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodStatementControllerLogBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isEndEvent?: NoYes | null;
  startEventId: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  postingStateMessage?: DeserializedType<T, 'Edm.String'> | null;
  postingStatus?: RetailEodTransactionPostingStatus | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingBatchJobId: DeserializedType<T, 'Edm.Int64'>;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
}
