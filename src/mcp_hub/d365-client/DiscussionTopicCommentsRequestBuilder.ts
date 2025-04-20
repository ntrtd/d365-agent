/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DiscussionTopicComments } from './DiscussionTopicComments';

/**
 * Request builder class for operations supported on the {@link DiscussionTopicComments} entity.
 */
export class DiscussionTopicCommentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTopicComments<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTopicComments` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTopicComments` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTopicComments<T>, T> {
    return new GetAllRequestBuilder<DiscussionTopicComments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionTopicComments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTopicComments`.
   */
  create(
    entity: DiscussionTopicComments<T>
  ): CreateRequestBuilder<DiscussionTopicComments<T>, T> {
    return new CreateRequestBuilder<DiscussionTopicComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTopicComments` entity based on its keys.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionTopicComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionTopicComments.discussionId}.
   * @param topicNumber Key property. See {@link DiscussionTopicComments.topicNumber}.
   * @param commentId Key property. See {@link DiscussionTopicComments.commentId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTopicComments` entity based on its keys.
   */
  getByKey(
    discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    discussionId: DeserializedType<T, 'Edm.String'>,
    topicNumber: DeserializedType<T, 'Edm.Int32'>,
    commentId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionTopicComments<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionTopicComments<T>, T>(
      this.entityApi,
      {
        DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber,
        DiscussionId: discussionId,
        TopicNumber: topicNumber,
        CommentId: commentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTopicComments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTopicComments`.
   */
  update(
    entity: DiscussionTopicComments<T>
  ): UpdateRequestBuilder<DiscussionTopicComments<T>, T> {
    return new UpdateRequestBuilder<DiscussionTopicComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTopicComments`.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionTopicComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionTopicComments.discussionId}.
   * @param topicNumber Key property. See {@link DiscussionTopicComments.topicNumber}.
   * @param commentId Key property. See {@link DiscussionTopicComments.commentId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTopicComments`.
   */
  delete(
    discussionWorkerPersonnelNumber: string,
    discussionId: string,
    topicNumber: number,
    commentId: number
  ): DeleteRequestBuilder<DiscussionTopicComments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTopicComments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTopicComments` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTopicComments<T>
  ): DeleteRequestBuilder<DiscussionTopicComments<T>, T>;
  delete(
    discussionWorkerPersonnelNumberOrEntity: any,
    discussionId?: string,
    topicNumber?: number,
    commentId?: number
  ): DeleteRequestBuilder<DiscussionTopicComments<T>, T> {
    return new DeleteRequestBuilder<DiscussionTopicComments<T>, T>(
      this.entityApi,
      discussionWorkerPersonnelNumberOrEntity instanceof DiscussionTopicComments
        ? discussionWorkerPersonnelNumberOrEntity
        : {
            DiscussionWorkerPersonnelNumber:
              discussionWorkerPersonnelNumberOrEntity!,
            DiscussionId: discussionId!,
            TopicNumber: topicNumber!,
            CommentId: commentId!
          }
    );
  }
}
