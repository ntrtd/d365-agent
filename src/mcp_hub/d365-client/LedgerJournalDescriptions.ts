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
import type { LedgerJournalDescriptionsApi } from './LedgerJournalDescriptionsApi';

/**
 * This class represents the entity "LedgerJournalDescriptions" of service "d365_metadata".
 */
export class LedgerJournalDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalDescriptionsType<T>
{
  /**
   * Technical entity name for LedgerJournalDescriptions.
   */
  static override _entityName = 'LedgerJournalDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalDescriptions entity.
   */
  static _keys = ['dataAreaId', 'Identification'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification.
   */
  declare identification: DeserializedType<T, 'Edm.String'>;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerJournalDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  identification: DeserializedType<T, 'Edm.String'>;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
