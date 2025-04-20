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
import { DiscussionOverallComments } from './DiscussionOverallComments';

/**
 * Request builder class for operations supported on the {@link DiscussionOverallComments} entity.
 */
export class DiscussionOverallCommentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionOverallComments<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionOverallComments` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionOverallComments` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionOverallComments<T>, T> {
    return new GetAllRequestBuilder<DiscussionOverallComments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionOverallComments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionOverallComments`.
   */
  create(
    entity: DiscussionOverallComments<T>
  ): CreateRequestBuilder<DiscussionOverallComments<T>, T> {
    return new CreateRequestBuilder<DiscussionOverallComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionOverallComments` entity based on its keys.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionOverallComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionOverallComments.discussionId}.
   * @param commentId Key property. See {@link DiscussionOverallComments.commentId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionOverallComments` entity based on its keys.
   */
  getByKey(
    discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    discussionId: DeserializedType<T, 'Edm.String'>,
    commentId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionOverallComments<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionOverallComments<T>, T>(
      this.entityApi,
      {
        DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber,
        DiscussionId: discussionId,
        CommentId: commentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionOverallComments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionOverallComments`.
   */
  update(
    entity: DiscussionOverallComments<T>
  ): UpdateRequestBuilder<DiscussionOverallComments<T>, T> {
    return new UpdateRequestBuilder<DiscussionOverallComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionOverallComments`.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionOverallComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionOverallComments.discussionId}.
   * @param commentId Key property. See {@link DiscussionOverallComments.commentId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionOverallComments`.
   */
  delete(
    discussionWorkerPersonnelNumber: string,
    discussionId: string,
    commentId: number
  ): DeleteRequestBuilder<DiscussionOverallComments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionOverallComments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionOverallComments` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionOverallComments<T>
  ): DeleteRequestBuilder<DiscussionOverallComments<T>, T>;
  delete(
    discussionWorkerPersonnelNumberOrEntity: any,
    discussionId?: string,
    commentId?: number
  ): DeleteRequestBuilder<DiscussionOverallComments<T>, T> {
    return new DeleteRequestBuilder<DiscussionOverallComments<T>, T>(
      this.entityApi,
      discussionWorkerPersonnelNumberOrEntity instanceof
      DiscussionOverallComments
        ? discussionWorkerPersonnelNumberOrEntity
        : {
            DiscussionWorkerPersonnelNumber:
              discussionWorkerPersonnelNumberOrEntity!,
            DiscussionId: discussionId!,
            CommentId: commentId!
          }
    );
  }
}
