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
import type { GoalsApi } from './GoalsApi';
import { HcmGoalLevel } from './HcmGoalLevel';
import { HrmGoalStatus } from './HrmGoalStatus';
import { DiscussionGoals, DiscussionGoalsType } from './DiscussionGoals';
import {
  GoalPerformanceJournalEntries,
  GoalPerformanceJournalEntriesType
} from './GoalPerformanceJournalEntries';
import {
  DiscussionPerformanceJournalEntries,
  DiscussionPerformanceJournalEntriesType
} from './DiscussionPerformanceJournalEntries';
import { GoalMeasurements, GoalMeasurementsType } from './GoalMeasurements';
import {
  DiscussionGoalComments,
  DiscussionGoalCommentsType
} from './DiscussionGoalComments';
import { GoalHeadings, GoalHeadingsType } from './GoalHeadings';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "Goals" of service "d365_metadata".
 */
export class Goals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GoalsType<T>
{
  /**
   * Technical entity name for Goals.
   */
  static override _entityName = 'Goals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Goals entity.
   */
  static _keys = ['Goal', 'PersonnelNumber', 'GoalHeadingId'];
  /**
   * Goal.
   */
  declare goal: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Heading Id.
   */
  declare goalHeadingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Link To Goal.
   * @nullable
   */
  declare linkToGoal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goal Level.
   * @nullable
   */
  declare goalLevel?: HcmGoalLevel | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Finished.
   */
  declare dateFinished: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Percent Complete.
   */
  declare percentComplete: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmGoalStatus | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Overview.
   * @nullable
   */
  declare overview?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionGoals} entity.
   */
  declare discussions: DiscussionGoals<T>[];
  /**
   * One-to-many navigation property to the {@link GoalPerformanceJournalEntries} entity.
   */
  declare performanceJournalEntryRelations: GoalPerformanceJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionPerformanceJournalEntries} entity.
   */
  declare discussionPerformanceJournalEntryRelations: DiscussionPerformanceJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link GoalMeasurements} entity.
   */
  declare measurements: GoalMeasurements<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionGoalComments} entity.
   */
  declare discussionComments: DiscussionGoalComments<T>[];
  /**
   * One-to-one navigation property to the {@link GoalHeadings} entity.
   */
  declare goalHeading?: GoalHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: GoalsApi<T>) {
    super(_entityApi);
  }
}

export interface GoalsType<T extends DeSerializers = DefaultDeSerializers> {
  goal: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  goalHeadingId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  linkToGoal?: DeserializedType<T, 'Edm.String'> | null;
  goalLevel?: HcmGoalLevel | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateFinished: DeserializedType<T, 'Edm.DateTimeOffset'>;
  percentComplete: DeserializedType<T, 'Edm.Decimal'>;
  status?: HrmGoalStatus | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overview?: DeserializedType<T, 'Edm.String'> | null;
  discussions: DiscussionGoalsType<T>[];
  performanceJournalEntryRelations: GoalPerformanceJournalEntriesType<T>[];
  discussionPerformanceJournalEntryRelations: DiscussionPerformanceJournalEntriesType<T>[];
  measurements: GoalMeasurementsType<T>[];
  discussionComments: DiscussionGoalCommentsType<T>[];
  goalHeading?: GoalHeadingsType<T> | null;
  worker?: WorkersType<T> | null;
}
