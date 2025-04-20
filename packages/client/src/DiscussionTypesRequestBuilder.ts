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
import { DiscussionTypes } from './DiscussionTypes';

/**
 * Request builder class for operations supported on the {@link DiscussionTypes} entity.
 */
export class DiscussionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTypes<T>, T> {
    return new GetAllRequestBuilder<DiscussionTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTypes`.
   */
  create(
    entity: DiscussionTypes<T>
  ): CreateRequestBuilder<DiscussionTypes<T>, T> {
    return new CreateRequestBuilder<DiscussionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTypes` entity based on its keys.
   * @param discussionTypeId Key property. See {@link DiscussionTypes.discussionTypeId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTypes` entity based on its keys.
   */
  getByKey(
    discussionTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscussionTypes<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionTypes<T>, T>(this.entityApi, {
      DiscussionTypeId: discussionTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTypes`.
   */
  update(
    entity: DiscussionTypes<T>
  ): UpdateRequestBuilder<DiscussionTypes<T>, T> {
    return new UpdateRequestBuilder<DiscussionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTypes`.
   * @param discussionTypeId Key property. See {@link DiscussionTypes.discussionTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTypes`.
   */
  delete(discussionTypeId: string): DeleteRequestBuilder<DiscussionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTypes` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTypes<T>
  ): DeleteRequestBuilder<DiscussionTypes<T>, T>;
  delete(
    discussionTypeIdOrEntity: any
  ): DeleteRequestBuilder<DiscussionTypes<T>, T> {
    return new DeleteRequestBuilder<DiscussionTypes<T>, T>(
      this.entityApi,
      discussionTypeIdOrEntity instanceof DiscussionTypes
        ? discussionTypeIdOrEntity
        : { DiscussionTypeId: discussionTypeIdOrEntity! }
    );
  }
}
