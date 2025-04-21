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
import type { DiscussionGoalCommentsApi } from './DiscussionGoalCommentsApi';
import { Discussions, DiscussionsType } from './Discussions';
import { GoalHeadings, GoalHeadingsType } from './GoalHeadings';
import { People, PeopleType } from './People';
import { Goals, GoalsType } from './Goals';

/**
 * This class represents the entity "DiscussionGoalComments" of service "d365_metadata".
 */
export class DiscussionGoalComments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscussionGoalCommentsType<T>
{
  /**
   * Technical entity name for DiscussionGoalComments.
   */
  static override _entityName = 'DiscussionGoalComments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionGoalComments entity.
   */
  static _keys = [
    'DiscussionWorkerPersonnelNumber',
    'DiscussionId',
    'GoalId',
    'CommentId'
  ];
  /**
   * Discussion Worker Personnel Number.
   */
  declare discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Discussion Id.
   */
  declare discussionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Goal Id.
   */
  declare goalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Comment Id.
   */
  declare commentId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment Date Time.
   */
  declare commentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created By User.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goal Heading Id.
   * @nullable
   */
  declare goalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commenter Party Number.
   * @nullable
   */
  declare commenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goal Worker Personnel Number.
   * @nullable
   */
  declare goalWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare discussion?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link GoalHeadings} entity.
   */
  declare goalHeading?: GoalHeadings<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare commenter?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link Goals} entity.
   */
  declare goal?: Goals<T> | null;

  constructor(_entityApi: DiscussionGoalCommentsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionGoalCommentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  discussionId: DeserializedType<T, 'Edm.String'>;
  goalId: DeserializedType<T, 'Edm.String'>;
  commentId: DeserializedType<T, 'Edm.Int32'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  commentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  goalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  commenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  goalWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  discussion?: DiscussionsType<T> | null;
  goalHeading?: GoalHeadingsType<T> | null;
  commenter?: PeopleType<T> | null;
  goal?: GoalsType<T> | null;
}
