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
import { PartitionedSystemUsers } from './PartitionedSystemUsers';

/**
 * Request builder class for operations supported on the {@link PartitionedSystemUsers} entity.
 */
export class PartitionedSystemUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartitionedSystemUsers<T>, T> {
  /**
   * Returns a request builder for querying all `PartitionedSystemUsers` entities.
   * @returns A request builder for creating requests to retrieve all `PartitionedSystemUsers` entities.
   */
  getAll(): GetAllRequestBuilder<PartitionedSystemUsers<T>, T> {
    return new GetAllRequestBuilder<PartitionedSystemUsers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PartitionedSystemUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartitionedSystemUsers`.
   */
  create(
    entity: PartitionedSystemUsers<T>
  ): CreateRequestBuilder<PartitionedSystemUsers<T>, T> {
    return new CreateRequestBuilder<PartitionedSystemUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartitionedSystemUsers` entity based on its keys.
   * @param userId Key property. See {@link PartitionedSystemUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `PartitionedSystemUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartitionedSystemUsers<T>, T> {
    return new GetByKeyRequestBuilder<PartitionedSystemUsers<T>, T>(
      this.entityApi,
      { UserID: userId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartitionedSystemUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartitionedSystemUsers`.
   */
  update(
    entity: PartitionedSystemUsers<T>
  ): UpdateRequestBuilder<PartitionedSystemUsers<T>, T> {
    return new UpdateRequestBuilder<PartitionedSystemUsers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartitionedSystemUsers`.
   * @param userId Key property. See {@link PartitionedSystemUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `PartitionedSystemUsers`.
   */
  delete(userId: string): DeleteRequestBuilder<PartitionedSystemUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartitionedSystemUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartitionedSystemUsers` by taking the entity as a parameter.
   */
  delete(
    entity: PartitionedSystemUsers<T>
  ): DeleteRequestBuilder<PartitionedSystemUsers<T>, T>;
  delete(
    userIdOrEntity: any
  ): DeleteRequestBuilder<PartitionedSystemUsers<T>, T> {
    return new DeleteRequestBuilder<PartitionedSystemUsers<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof PartitionedSystemUsers
        ? userIdOrEntity
        : { UserID: userIdOrEntity! }
    );
  }
}
