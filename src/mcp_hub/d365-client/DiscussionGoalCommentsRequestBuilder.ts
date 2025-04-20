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
import { DiscussionGoalComments } from './DiscussionGoalComments';

/**
 * Request builder class for operations supported on the {@link DiscussionGoalComments} entity.
 */
export class DiscussionGoalCommentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionGoalComments<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionGoalComments` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionGoalComments` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionGoalComments<T>, T> {
    return new GetAllRequestBuilder<DiscussionGoalComments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionGoalComments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionGoalComments`.
   */
  create(
    entity: DiscussionGoalComments<T>
  ): CreateRequestBuilder<DiscussionGoalComments<T>, T> {
    return new CreateRequestBuilder<DiscussionGoalComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionGoalComments` entity based on its keys.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionGoalComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionGoalComments.discussionId}.
   * @param goalId Key property. See {@link DiscussionGoalComments.goalId}.
   * @param commentId Key property. See {@link DiscussionGoalComments.commentId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionGoalComments` entity based on its keys.
   */
  getByKey(
    discussionWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    discussionId: DeserializedType<T, 'Edm.String'>,
    goalId: DeserializedType<T, 'Edm.String'>,
    commentId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionGoalComments<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionGoalComments<T>, T>(
      this.entityApi,
      {
        DiscussionWorkerPersonnelNumber: discussionWorkerPersonnelNumber,
        DiscussionId: discussionId,
        GoalId: goalId,
        CommentId: commentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionGoalComments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionGoalComments`.
   */
  update(
    entity: DiscussionGoalComments<T>
  ): UpdateRequestBuilder<DiscussionGoalComments<T>, T> {
    return new UpdateRequestBuilder<DiscussionGoalComments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionGoalComments`.
   * @param discussionWorkerPersonnelNumber Key property. See {@link DiscussionGoalComments.discussionWorkerPersonnelNumber}.
   * @param discussionId Key property. See {@link DiscussionGoalComments.discussionId}.
   * @param goalId Key property. See {@link DiscussionGoalComments.goalId}.
   * @param commentId Key property. See {@link DiscussionGoalComments.commentId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionGoalComments`.
   */
  delete(
    discussionWorkerPersonnelNumber: string,
    discussionId: string,
    goalId: string,
    commentId: number
  ): DeleteRequestBuilder<DiscussionGoalComments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionGoalComments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionGoalComments` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionGoalComments<T>
  ): DeleteRequestBuilder<DiscussionGoalComments<T>, T>;
  delete(
    discussionWorkerPersonnelNumberOrEntity: any,
    discussionId?: string,
    goalId?: string,
    commentId?: number
  ): DeleteRequestBuilder<DiscussionGoalComments<T>, T> {
    return new DeleteRequestBuilder<DiscussionGoalComments<T>, T>(
      this.entityApi,
      discussionWorkerPersonnelNumberOrEntity instanceof DiscussionGoalComments
        ? discussionWorkerPersonnelNumberOrEntity
        : {
            DiscussionWorkerPersonnelNumber:
              discussionWorkerPersonnelNumberOrEntity!,
            DiscussionId: discussionId!,
            GoalId: goalId!,
            CommentId: commentId!
          }
    );
  }
}
