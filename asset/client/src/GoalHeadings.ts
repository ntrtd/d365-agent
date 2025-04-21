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
import type { GoalHeadingsApi } from './GoalHeadingsApi';
import { NoYes } from './NoYes';
import { GoalTemplates, GoalTemplatesType } from './GoalTemplates';
import {
  DiscussionGoalComments,
  DiscussionGoalCommentsType
} from './DiscussionGoalComments';
import { Goals, GoalsType } from './Goals';

/**
 * This class represents the entity "GoalHeadings" of service "d365_metadata".
 */
export class GoalHeadings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GoalHeadingsType<T>
{
  /**
   * Technical entity name for GoalHeadings.
   */
  static override _entityName = 'GoalHeadings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalHeadings entity.
   */
  static _keys = ['GoalHeadingId'];
  /**
   * Goal Heading Id.
   */
  declare goalHeadingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GoalTemplates} entity.
   */
  declare goalTemplates: GoalTemplates<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionGoalComments} entity.
   */
  declare discussionGoalComment: DiscussionGoalComments<T>[];
  /**
   * One-to-many navigation property to the {@link Goals} entity.
   */
  declare goals: Goals<T>[];

  constructor(_entityApi: GoalHeadingsApi<T>) {
    super(_entityApi);
  }
}

export interface GoalHeadingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  goalHeadingId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  goalTemplates: GoalTemplatesType<T>[];
  discussionGoalComment: DiscussionGoalCommentsType<T>[];
  goals: GoalsType<T>[];
}
