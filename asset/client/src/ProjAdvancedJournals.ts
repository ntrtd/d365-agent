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
import type { ProjAdvancedJournalsApi } from './ProjAdvancedJournalsApi';
import { ProjAdvancedJournalStatus } from './ProjAdvancedJournalStatus';

/**
 * This class represents the entity "ProjAdvancedJournals" of service "d365_metadata".
 */
export class ProjAdvancedJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjAdvancedJournalsType<T>
{
  /**
   * Technical entity name for ProjAdvancedJournals.
   */
  static override _entityName = 'ProjAdvancedJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjAdvancedJournals entity.
   */
  static _keys = ['dataAreaId', 'ProjAdvancedJournalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Advanced Journal Id.
   */
  declare projAdvancedJournalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Proj Adanced Journal Id.
   * @nullable
   */
  declare originalProjAdancedJournalId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjAdvancedJournalStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Rec Id.
   */
  declare journalRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ProjAdvancedJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjAdvancedJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projAdvancedJournalId: DeserializedType<T, 'Edm.String'>;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalProjAdancedJournalId?: DeserializedType<T, 'Edm.String'> | null;
  status?: ProjAdvancedJournalStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalRecId: DeserializedType<T, 'Edm.Int64'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
