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
import { RetailMediaAndMaterRelations } from './RetailMediaAndMaterRelations';

/**
 * Request builder class for operations supported on the {@link RetailMediaAndMaterRelations} entity.
 */
export class RetailMediaAndMaterRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMediaAndMaterRelations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMediaAndMaterRelations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMediaAndMaterRelations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailMediaAndMaterRelations<T>, T> {
    return new GetAllRequestBuilder<RetailMediaAndMaterRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailMediaAndMaterRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMediaAndMaterRelations`.
   */
  create(
    entity: RetailMediaAndMaterRelations<T>
  ): CreateRequestBuilder<RetailMediaAndMaterRelations<T>, T> {
    return new CreateRequestBuilder<RetailMediaAndMaterRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailMediaAndMaterRelations` entity based on its keys.
   * @param resourceId Key property. See {@link RetailMediaAndMaterRelations.resourceId}.
   * @returns A request builder for creating requests to retrieve one `RetailMediaAndMaterRelations` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailMediaAndMaterRelations<T>, T> {
    return new GetByKeyRequestBuilder<RetailMediaAndMaterRelations<T>, T>(
      this.entityApi,
      { ResourceId: resourceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMediaAndMaterRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMediaAndMaterRelations`.
   */
  update(
    entity: RetailMediaAndMaterRelations<T>
  ): UpdateRequestBuilder<RetailMediaAndMaterRelations<T>, T> {
    return new UpdateRequestBuilder<RetailMediaAndMaterRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMediaAndMaterRelations`.
   * @param resourceId Key property. See {@link RetailMediaAndMaterRelations.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaAndMaterRelations`.
   */
  delete(
    resourceId: number
  ): DeleteRequestBuilder<RetailMediaAndMaterRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMediaAndMaterRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaAndMaterRelations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMediaAndMaterRelations<T>
  ): DeleteRequestBuilder<RetailMediaAndMaterRelations<T>, T>;
  delete(
    resourceIdOrEntity: any
  ): DeleteRequestBuilder<RetailMediaAndMaterRelations<T>, T> {
    return new DeleteRequestBuilder<RetailMediaAndMaterRelations<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof RetailMediaAndMaterRelations
        ? resourceIdOrEntity
        : { ResourceId: resourceIdOrEntity! }
    );
  }
}
