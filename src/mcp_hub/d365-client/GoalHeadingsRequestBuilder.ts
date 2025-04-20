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
import { GoalHeadings } from './GoalHeadings';

/**
 * Request builder class for operations supported on the {@link GoalHeadings} entity.
 */
export class GoalHeadingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalHeadings<T>, T> {
  /**
   * Returns a request builder for querying all `GoalHeadings` entities.
   * @returns A request builder for creating requests to retrieve all `GoalHeadings` entities.
   */
  getAll(): GetAllRequestBuilder<GoalHeadings<T>, T> {
    return new GetAllRequestBuilder<GoalHeadings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GoalHeadings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalHeadings`.
   */
  create(entity: GoalHeadings<T>): CreateRequestBuilder<GoalHeadings<T>, T> {
    return new CreateRequestBuilder<GoalHeadings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GoalHeadings` entity based on its keys.
   * @param goalHeadingId Key property. See {@link GoalHeadings.goalHeadingId}.
   * @returns A request builder for creating requests to retrieve one `GoalHeadings` entity based on its keys.
   */
  getByKey(
    goalHeadingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GoalHeadings<T>, T> {
    return new GetByKeyRequestBuilder<GoalHeadings<T>, T>(this.entityApi, {
      GoalHeadingId: goalHeadingId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GoalHeadings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalHeadings`.
   */
  update(entity: GoalHeadings<T>): UpdateRequestBuilder<GoalHeadings<T>, T> {
    return new UpdateRequestBuilder<GoalHeadings<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalHeadings`.
   * @param goalHeadingId Key property. See {@link GoalHeadings.goalHeadingId}.
   * @returns A request builder for creating requests that delete an entity of type `GoalHeadings`.
   */
  delete(goalHeadingId: string): DeleteRequestBuilder<GoalHeadings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalHeadings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalHeadings` by taking the entity as a parameter.
   */
  delete(entity: GoalHeadings<T>): DeleteRequestBuilder<GoalHeadings<T>, T>;
  delete(goalHeadingIdOrEntity: any): DeleteRequestBuilder<GoalHeadings<T>, T> {
    return new DeleteRequestBuilder<GoalHeadings<T>, T>(
      this.entityApi,
      goalHeadingIdOrEntity instanceof GoalHeadings
        ? goalHeadingIdOrEntity
        : { GoalHeadingId: goalHeadingIdOrEntity! }
    );
  }
}
