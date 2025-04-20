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
import type { LedgerEntryJournalizingBiEntitiesApi } from './LedgerEntryJournalizingBiEntitiesApi';

/**
 * This class represents the entity "LedgerEntryJournalizingBiEntities" of service "d365_metadata".
 */
export class LedgerEntryJournalizingBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerEntryJournalizingBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerEntryJournalizingBiEntities.
   */
  static override _entityName = 'LedgerEntryJournalizingBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerEntryJournalizingBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Journal.
   * @nullable
   */
  declare journal?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerEntryJournalizingBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerEntryJournalizingBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  journal?: DeserializedType<T, 'Edm.String'> | null;
}
