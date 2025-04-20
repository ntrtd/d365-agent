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
import { DiscussionGoals } from './DiscussionGoals';

/**
 * Request builder class for operations supported on the {@link DiscussionGoals} entity.
 */
export class DiscussionGoalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionGoals<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionGoals` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionGoals` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionGoals<T>, T> {
    return new GetAllRequestBuilder<DiscussionGoals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionGoals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionGoals`.
   */
  create(
    entity: DiscussionGoals<T>
  ): CreateRequestBuilder<DiscussionGoals<T>, T> {
    return new CreateRequestBuilder<DiscussionGoals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionGoals` entity based on its keys.
   * @param discussion Key property. See {@link DiscussionGoals.discussion}.
   * @param personnelNumberDiscussion Key property. See {@link DiscussionGoals.personnelNumberDiscussion}.
   * @param goal Key property. See {@link DiscussionGoals.goal}.
   * @param goalHeading Key property. See {@link DiscussionGoals.goalHeading}.
   * @returns A request builder for creating requests to retrieve one `DiscussionGoals` entity based on its keys.
   */
  getByKey(
    discussion: DeserializedType<T, 'Edm.String'>,
    personnelNumberDiscussion: DeserializedType<T, 'Edm.String'>,
    goal: DeserializedType<T, 'Edm.String'>,
    goalHeading: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscussionGoals<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionGoals<T>, T>(this.entityApi, {
      Discussion: discussion,
      PersonnelNumberDiscussion: personnelNumberDiscussion,
      Goal: goal,
      GoalHeading: goalHeading
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionGoals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionGoals`.
   */
  update(
    entity: DiscussionGoals<T>
  ): UpdateRequestBuilder<DiscussionGoals<T>, T> {
    return new UpdateRequestBuilder<DiscussionGoals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionGoals`.
   * @param discussion Key property. See {@link DiscussionGoals.discussion}.
   * @param personnelNumberDiscussion Key property. See {@link DiscussionGoals.personnelNumberDiscussion}.
   * @param goal Key property. See {@link DiscussionGoals.goal}.
   * @param goalHeading Key property. See {@link DiscussionGoals.goalHeading}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionGoals`.
   */
  delete(
    discussion: string,
    personnelNumberDiscussion: string,
    goal: string,
    goalHeading: string
  ): DeleteRequestBuilder<DiscussionGoals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionGoals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionGoals` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionGoals<T>
  ): DeleteRequestBuilder<DiscussionGoals<T>, T>;
  delete(
    discussionOrEntity: any,
    personnelNumberDiscussion?: string,
    goal?: string,
    goalHeading?: string
  ): DeleteRequestBuilder<DiscussionGoals<T>, T> {
    return new DeleteRequestBuilder<DiscussionGoals<T>, T>(
      this.entityApi,
      discussionOrEntity instanceof DiscussionGoals
        ? discussionOrEntity
        : {
            Discussion: discussionOrEntity!,
            PersonnelNumberDiscussion: personnelNumberDiscussion!,
            Goal: goal!,
            GoalHeading: goalHeading!
          }
    );
  }
}
