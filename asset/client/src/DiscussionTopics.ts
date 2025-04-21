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
import type { DiscussionTopicsApi } from './DiscussionTopicsApi';
import { Discussions, DiscussionsType } from './Discussions';
import { RatingModels, RatingModelsType } from './RatingModels';
import { Workers, WorkersType } from './Workers';
import { RatingLevels, RatingLevelsType } from './RatingLevels';
import {
  DiscussionTopicComments,
  DiscussionTopicCommentsType
} from './DiscussionTopicComments';

/**
 * This class represents the entity "DiscussionTopics" of service "d365_metadata".
 */
export class DiscussionTopics<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionTopicsType<T>
{
  /**
   * Technical entity name for DiscussionTopics.
   */
  static override _entityName = 'DiscussionTopics';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionTopics entity.
   */
  static _keys = ['DiscussionId', 'PersonnelNumber', 'TopicNumber'];
  /**
   * Discussion Id.
   */
  declare discussionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Topic Number.
   */
  declare topicNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employee Rating Level Id.
   * @nullable
   */
  declare employeeRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Topic Title.
   * @nullable
   */
  declare topicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Score.
   */
  declare employeeScore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manager Score.
   */
  declare managerScore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manager Rating Level Id.
   * @nullable
   */
  declare managerRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Topic Description.
   * @nullable
   */
  declare topicDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare topics?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare employeeRatingLevels?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare managerRatingLevels?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link DiscussionTopicComments} entity.
   */
  declare comments?: DiscussionTopicComments<T> | null;

  constructor(_entityApi: DiscussionTopicsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionTopicsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  topicNumber: DeserializedType<T, 'Edm.String'>;
  employeeRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  topicTitle?: DeserializedType<T, 'Edm.String'> | null;
  employeeScore: DeserializedType<T, 'Edm.Decimal'>;
  managerScore: DeserializedType<T, 'Edm.Decimal'>;
  managerRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  topicDescription?: DeserializedType<T, 'Edm.String'> | null;
  topics?: DiscussionsType<T> | null;
  ratingModel?: RatingModelsType<T> | null;
  worker?: WorkersType<T> | null;
  employeeRatingLevels?: RatingLevelsType<T> | null;
  managerRatingLevels?: RatingLevelsType<T> | null;
  comments?: DiscussionTopicCommentsType<T> | null;
}
