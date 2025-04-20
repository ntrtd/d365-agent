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
import type { DiscussionsApi } from './DiscussionsApi';
import { HcmDiscussionApproveStatus } from './HcmDiscussionApproveStatus';
import { NoYes } from './NoYes';
import { DiscussionGoals, DiscussionGoalsType } from './DiscussionGoals';
import { DiscussionTopics, DiscussionTopicsType } from './DiscussionTopics';
import {
  DiscussionPerformanceJournalEntries,
  DiscussionPerformanceJournalEntriesType
} from './DiscussionPerformanceJournalEntries';
import {
  DiscussionGoalComments,
  DiscussionGoalCommentsType
} from './DiscussionGoalComments';
import { RatingModels, RatingModelsType } from './RatingModels';
import { PerfPeriods, PerfPeriodsType } from './PerfPeriods';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import { Workers, WorkersType } from './Workers';
import { DiscussionTypes, DiscussionTypesType } from './DiscussionTypes';
import {
  DiscussionTopicComments,
  DiscussionTopicCommentsType
} from './DiscussionTopicComments';
import {
  DiscussionMeasurements,
  DiscussionMeasurementsType
} from './DiscussionMeasurements';
import {
  DiscussionOverallComments,
  DiscussionOverallCommentsType
} from './DiscussionOverallComments';
import {
  DiscussionSignOffs,
  DiscussionSignOffsType
} from './DiscussionSignOffs';

/**
 * This class represents the entity "Discussions" of service "d365_metadata".
 */
export class Discussions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionsType<T>
{
  /**
   * Technical entity name for Discussions.
   */
  static override _entityName = 'Discussions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Discussions entity.
   */
  static _keys = ['Discussion', 'PersonnelNumber'];
  /**
   * Discussion.
   */
  declare discussion: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Performance Period Id.
   * @nullable
   */
  declare performancePeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discussion Approval Status.
   * @nullable
   */
  declare discussionApprovalStatus?: HcmDiscussionApproveStatus | null;
  /**
   * Final Employee Rating Id.
   * @nullable
   */
  declare finalEmployeeRatingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linkto Discussion.
   * @nullable
   */
  declare linktoDiscussion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Finished Date.
   */
  declare finishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Review Type Id.
   * @nullable
   */
  declare reviewTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Rating Score.
   */
  declare totalRatingScore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Enabled.
   * @nullable
   */
  declare workflowEnabled?: NoYes | null;
  /**
   * Average Rating Score.
   */
  declare averageRatingScore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  declare goals: DiscussionGoals<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTopics} entity.
   */
  declare topics: DiscussionTopics<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionPerformanceJournalEntries} entity.
   */
  declare performanceJournalEntryRelations: DiscussionPerformanceJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionGoalComments} entity.
   */
  declare goalComments: DiscussionGoalComments<T>[];
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link PerfPeriods} entity.
   */
  declare perfPeriod?: PerfPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare ratingLevel?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link DiscussionTypes} entity.
   */
  declare hcmDiscussionType?: DiscussionTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionTopicComments} entity.
   */
  declare topicComments: DiscussionTopicComments<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionMeasurements} entity.
   */
  declare measurements: DiscussionMeasurements<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionOverallComments} entity.
   */
  declare overallComments: DiscussionOverallComments<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionSignOffs} entity.
   */
  declare signOffs: DiscussionSignOffs<T>[];

  constructor(_entityApi: DiscussionsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussion: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  performancePeriodId?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  discussionApprovalStatus?: HcmDiscussionApproveStatus | null;
  finalEmployeeRatingId?: DeserializedType<T, 'Edm.String'> | null;
  linktoDiscussion?: DeserializedType<T, 'Edm.String'> | null;
  finishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reviewTypeId?: DeserializedType<T, 'Edm.String'> | null;
  totalRatingScore: DeserializedType<T, 'Edm.Decimal'>;
  workflowEnabled?: NoYes | null;
  averageRatingScore: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  overview?: DeserializedType<T, 'Edm.String'> | null;
  goals: DiscussionGoalsType<T>[];
  topics: DiscussionTopicsType<T>[];
  performanceJournalEntryRelations: DiscussionPerformanceJournalEntriesType<T>[];
  goalComments: DiscussionGoalCommentsType<T>[];
  ratingModel?: RatingModelsType<T> | null;
  perfPeriod?: PerfPeriodsType<T> | null;
  ratingLevel?: RatingLevelsType<T> | null;
  worker?: WorkersType<T> | null;
  hcmDiscussionType?: DiscussionTypesType<T> | null;
  topicComments: DiscussionTopicCommentsType<T>[];
  measurements: DiscussionMeasurementsType<T>[];
  overallComments: DiscussionOverallCommentsType<T>[];
  signOffs: DiscussionSignOffsType<T>[];
}
