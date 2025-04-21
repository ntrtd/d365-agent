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
import type { LedgerEntryJournalBiEntitiesApi } from './LedgerEntryJournalBiEntitiesApi';

/**
 * This class represents the entity "LedgerEntryJournalBiEntities" of service "d365_metadata".
 */
export class LedgerEntryJournalBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerEntryJournalBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerEntryJournalBiEntities.
   */
  static override _entityName = 'LedgerEntryJournalBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerEntryJournalBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ledger Journal Table Data Area Id.
   * @nullable
   */
  declare ledgerJournalTableDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LedgerEntryJournalBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerEntryJournalBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  ledgerJournalTableDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
}
