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
import type { DiscussionOverallCommentsApi } from './DiscussionOverallCommentsApi';
import { Discussions, DiscussionsType } from './Discussions';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "DiscussionOverallComments" of service "d365_metadata".
 */
export class DiscussionOverallComments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscussionOverallCommentsType<T>
{
  /**
   * Technical entity name for DiscussionOverallComments.
   */
  static override _entityName = 'DiscussionOverallComments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionOverallComments entity.
   */
  static _keys = [
    'DiscussionWorkerPersonnelNumber',
    'DiscussionId',
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
   * Commenter Party Number.
   * @nullable
   */
  declare commenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Discussions} entity.
   */
  declare discussion?: Discussions<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare commenter?: People<T> | null;

  constructor(_entityApi: DiscussionOverallCommentsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionOverallCommentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  discussionId: DeserializedType<T, 'Edm.String'>;
  commentId: DeserializedType<T, 'Edm.Int32'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  commentDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  commenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  discussion?: DiscussionsType<T> | null;
  commenter?: PeopleType<T> | null;
}
