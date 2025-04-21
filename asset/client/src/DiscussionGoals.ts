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
import type { DiscussionGoalsApi } from './DiscussionGoalsApi';
import { Discussions, DiscussionsType } from './Discussions';
import { RatingModels, RatingModelsType } from './RatingModels';
import { Goals, GoalsType } from './Goals';
import { RatingLevels, RatingLevelsType } from './RatingLevels';

/**
 * This class represents the entity "DiscussionGoals" of service "d365_metadata".
 */
export class DiscussionGoals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionGoalsType<T>
{
  /**
   * Technical entity name for DiscussionGoals.
   */
  static override _entityName = 'DiscussionGoals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionGoals entity.
   */
  static _keys = [
    'Discussion',
    'PersonnelNumberDiscussion',
    'Goal',
    'GoalHeading'
  ];
  /**
   * Discussion.
   */
  declare discussion: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number Discussion.
   */
  declare personnelNumberDiscussion: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal.
   */
  declare goal: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Heading.
   */
  declare goalHeading: DeserializedType<T, 'Edm.String'>;
  /**
   * Employee Rating Level Id.
   * @nullable
   */
  declare employeeRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare goals?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Goals} entity.
   */
  declare discussions?: Goals<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare employeeRatingLevels?: RatingLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link RatingLevels} entity.
   */
  declare managerRatingLevels?: RatingLevels<T> | null;

  constructor(_entityApi: DiscussionGoalsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionGoalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussion: DeserializedType<T, 'Edm.String'>;
  personnelNumberDiscussion: DeserializedType<T, 'Edm.String'>;
  goal: DeserializedType<T, 'Edm.String'>;
  goalHeading: DeserializedType<T, 'Edm.String'>;
  employeeRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  employeeScore: DeserializedType<T, 'Edm.Decimal'>;
  managerScore: DeserializedType<T, 'Edm.Decimal'>;
  managerRatingLevelId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  goals?: DiscussionsType<T> | null;
  ratingModel?: RatingModelsType<T> | null;
  discussions?: GoalsType<T> | null;
  employeeRatingLevels?: RatingLevelsType<T> | null;
  managerRatingLevels?: RatingLevelsType<T> | null;
}
