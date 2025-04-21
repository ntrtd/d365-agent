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
import type { PerformanceJournalEntryUrlLinkApi } from './PerformanceJournalEntryUrlLinkApi';
import {
  PerformanceJournals,
  PerformanceJournalsType
} from './PerformanceJournals';

/**
 * This class represents the entity "PerformanceJournalEntryUrlLink" of service "d365_metadata".
 */
export class PerformanceJournalEntryUrlLink<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PerformanceJournalEntryUrlLinkType<T>
{
  /**
   * Technical entity name for PerformanceJournalEntryUrlLink.
   */
  static override _entityName = 'PerformanceJournalEntryUrlLink';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerformanceJournalEntryUrlLink entity.
   */
  static _keys = ['LinkId'];
  /**
   * Link Id.
   */
  declare linkId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Performance Journal Entry Id.
   */
  declare performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * One-to-one navigation property to the {@link PerformanceJournals} entity.
   */
  declare performanceJournalEntry?: PerformanceJournals<T> | null;

  constructor(_entityApi: PerformanceJournalEntryUrlLinkApi<T>) {
    super(_entityApi);
  }
}

export interface PerformanceJournalEntryUrlLinkType<
  T extends DeSerializers = DefaultDeSerializers
> {
  linkId: DeserializedType<T, 'Edm.Guid'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  performanceJournalEntry?: PerformanceJournalsType<T> | null;
}
