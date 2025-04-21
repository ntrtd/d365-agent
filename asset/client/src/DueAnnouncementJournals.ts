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
import type { DueAnnouncementJournalsApi } from './DueAnnouncementJournalsApi';

/**
 * This class represents the entity "DueAnnouncementJournals" of service "d365_metadata".
 */
export class DueAnnouncementJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DueAnnouncementJournalsType<T>
{
  /**
   * Technical entity name for DueAnnouncementJournals.
   */
  static override _entityName = 'DueAnnouncementJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DueAnnouncementJournals entity.
   */
  static _keys = ['dataAreaId', 'AnnouncementNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Announcement Number.
   */
  declare announcementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Batch Number.
   * @nullable
   */
  declare journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DueAnnouncementJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface DueAnnouncementJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  announcementNumber: DeserializedType<T, 'Edm.String'>;
  bankTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
