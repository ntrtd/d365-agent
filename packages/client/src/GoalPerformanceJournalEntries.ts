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
import type { GoalPerformanceJournalEntriesApi } from './GoalPerformanceJournalEntriesApi';
import {
  PerformanceJournals,
  PerformanceJournalsType
} from './PerformanceJournals';
import { Goals, GoalsType } from './Goals';

/**
 * This class represents the entity "GoalPerformanceJournalEntries" of service "d365_metadata".
 */
export class GoalPerformanceJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GoalPerformanceJournalEntriesType<T>
{
  /**
   * Technical entity name for GoalPerformanceJournalEntries.
   */
  static override _entityName = 'GoalPerformanceJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalPerformanceJournalEntries entity.
   */
  static _keys = [
    'PerformanceJournalEntryId',
    'GoalId',
    'GoalHeadingId',
    'GoalWorkerPersonnelNumber'
  ];
  /**
   * Performance Journal Entry Id.
   */
  declare performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Goal Id.
   */
  declare goalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Heading Id.
   */
  declare goalHeadingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Worker Personnel Number.
   */
  declare goalWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link PerformanceJournals} entity.
   */
  declare performanceJournalEntry?: PerformanceJournals<T> | null;
  /**
   * One-to-one navigation property to the {@link Goals} entity.
   */
  declare goal?: Goals<T> | null;

  constructor(_entityApi: GoalPerformanceJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface GoalPerformanceJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  performanceJournalEntryId: DeserializedType<T, 'Edm.Guid'>;
  goalId: DeserializedType<T, 'Edm.String'>;
  goalHeadingId: DeserializedType<T, 'Edm.String'>;
  goalWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  performanceJournalEntry?: PerformanceJournalsType<T> | null;
  goal?: GoalsType<T> | null;
}
