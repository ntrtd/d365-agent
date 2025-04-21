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
import type { PostingJournalsApi } from './PostingJournalsApi';
import { LedgerJournalTypeBe } from './LedgerJournalTypeBe';

/**
 * This class represents the entity "PostingJournals" of service "d365_metadata".
 */
export class PostingJournals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostingJournalsType<T>
{
  /**
   * Technical entity name for PostingJournals.
   */
  static override _entityName = 'PostingJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostingJournals entity.
   */
  static _keys = ['dataAreaId', 'Journal', 'NumberSequenceCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal.
   */
  declare journal: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Code.
   */
  declare numberSequenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalTypeBe | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PostingJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface PostingJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journal: DeserializedType<T, 'Edm.String'>;
  numberSequenceCode: DeserializedType<T, 'Edm.String'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  journalType?: LedgerJournalTypeBe | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
