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
import type { PerformanceJournalsApi } from './PerformanceJournalsApi';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { NoYes } from './NoYes';
import {
  GoalPerformanceJournalEntries,
  GoalPerformanceJournalEntriesType
} from './GoalPerformanceJournalEntries';
import {
  DiscussionPerformanceJournalEntries,
  DiscussionPerformanceJournalEntriesType
} from './DiscussionPerformanceJournalEntries';
import {
  PerformanceJournalEntryUrlLink,
  PerformanceJournalEntryUrlLinkType
} from './PerformanceJournalEntryUrlLink';
import {
  PerfJournalSourceTypes,
  PerfJournalSourceTypesType
} from './PerfJournalSourceTypes';

/**
 * This class represents the entity "PerformanceJournals" of service "d365_metadata".
 */
export class PerformanceJournals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PerformanceJournalsType<T>
{
  /**
   * Technical entity name for PerformanceJournals.
   */
  static override _entityName = 'PerformanceJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerformanceJournals entity.
   */
  static _keys = ['PersonId', 'JournalDate', 'SourceType', 'Title'];
  /**
   * Person Id.
   */
  declare personId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Date.
   */
  declare journalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Type.
   * @nullable
   */
  declare sourceType?: HcmPerfJournalSourceType | null;
  /**
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Id.
   */
  declare entryId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: HcmPerfManagerEmployee | null;
  /**
   * Is Shared.
   * @nullable
   */
  declare isShared?: NoYes | null;
  /**
   * Started Date.
   */
  declare startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Completed Date.
   */
  declare completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Development Task.
   * @nullable
   */
  declare isDevelopmentTask?: NoYes | null;
  /**
   * Submitted By External.
   * @nullable
   */
  declare submittedByExternal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submitted By Person Id.
   * @nullable
   */
  declare submittedByPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keywords.
   * @nullable
   */
  declare keywords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GoalPerformanceJournalEntries} entity.
   */
  declare goalRelations: GoalPerformanceJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionPerformanceJournalEntries} entity.
   */
  declare discussionRelations: DiscussionPerformanceJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link PerformanceJournalEntryUrlLink} entity.
   */
  declare urlLinks: PerformanceJournalEntryUrlLink<T>[];
  /**
   * One-to-one navigation property to the {@link PerfJournalSourceTypes} entity.
   */
  declare perfJournalSourceType?: PerfJournalSourceTypes<T> | null;

  constructor(_entityApi: PerformanceJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface PerformanceJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personId: DeserializedType<T, 'Edm.String'>;
  journalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceType?: HcmPerfJournalSourceType | null;
  title: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  entryId: DeserializedType<T, 'Edm.Guid'>;
  owner?: HcmPerfManagerEmployee | null;
  isShared?: NoYes | null;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDevelopmentTask?: NoYes | null;
  submittedByExternal?: DeserializedType<T, 'Edm.String'> | null;
  submittedByPersonId?: DeserializedType<T, 'Edm.String'> | null;
  keywords?: DeserializedType<T, 'Edm.String'> | null;
  goalRelations: GoalPerformanceJournalEntriesType<T>[];
  discussionRelations: DiscussionPerformanceJournalEntriesType<T>[];
  urlLinks: PerformanceJournalEntryUrlLinkType<T>[];
  perfJournalSourceType?: PerfJournalSourceTypesType<T> | null;
}
