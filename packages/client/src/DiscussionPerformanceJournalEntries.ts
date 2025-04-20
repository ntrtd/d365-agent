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
import type { DiscussionPerformanceJournalEntriesApi } from './DiscussionPerformanceJournalEntriesApi';
import { Discussions, DiscussionsType } from './Discussions';
import { Goals, GoalsType } from './Goals';
import {
  PerformanceJournals,
  PerformanceJournalsType
} from './PerformanceJournals';

/**
 * This class represents the entity "DiscussionPerformanceJournalEntries" of service "d365_metadata".
 */
export class DiscussionPerformanceJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscussionPerformanceJournalEntriesType<T>
{
  /**
   * Technical entity name for DiscussionPerformanceJournalEntries.
   */
  static override _entityName = 'DiscussionPerformanceJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionPerformanceJournalEntries entity.
   */
  static _keys = [
    'PerformanceJournalEntryId',
    'DiscussionId',
    'DiscussionWorkerPersonnelNumber'
  ];
  /**
   * Performance Journal Entry Id.
   */
  declare performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Discussion Id.
   */
  declare discussionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Discussion Worker Personnel Number.
   */
  declare discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Copied From Goal Id.
   * @nullable
   */
  declare copiedFromGoalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copied From Goal Worker Personnel Number.
   * @nullable
   */
  declare copiedFromGoalWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copied From Goal Heading Id.
   * @nullable
   */
  declare copiedFromGoalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare discussion?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link Goals} entity.
   */
  declare copiedFromGoal?: Goals<T> | null;
  /**
   * One-to-one navigation property to the {@link PerformanceJournals} entity.
   */
  declare performanceJournalEntry?: PerformanceJournals<T> | null;

  constructor(_entityApi: DiscussionPerformanceJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionPerformanceJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  discussionId: DeserializedType<T, 'Edm.String'>;
  discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  copiedFromGoalId?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  copiedFromGoalWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  copiedFromGoalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  discussion?: DiscussionsType<T> | null;
  copiedFromGoal?: GoalsType<T> | null;
  performanceJournalEntry?: PerformanceJournalsType<T> | null;
}
