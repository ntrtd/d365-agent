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
import { RetailMediaResources } from './RetailMediaResources';

/**
 * Request builder class for operations supported on the {@link RetailMediaResources} entity.
 */
export class RetailMediaResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMediaResources<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMediaResources` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMediaResources` entities.
   */
  getAll(): GetAllRequestBuilder<RetailMediaResources<T>, T> {
    return new GetAllRequestBuilder<RetailMediaResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailMediaResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMediaResources`.
   */
  create(
    entity: RetailMediaResources<T>
  ): CreateRequestBuilder<RetailMediaResources<T>, T> {
    return new CreateRequestBuilder<RetailMediaResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailMediaResources` entity based on its keys.
   * @param resourceId Key property. See {@link RetailMediaResources.resourceId}.
   * @returns A request builder for creating requests to retrieve one `RetailMediaResources` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailMediaResources<T>, T> {
    return new GetByKeyRequestBuilder<RetailMediaResources<T>, T>(
      this.entityApi,
      { ResourceId: resourceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMediaResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMediaResources`.
   */
  update(
    entity: RetailMediaResources<T>
  ): UpdateRequestBuilder<RetailMediaResources<T>, T> {
    return new UpdateRequestBuilder<RetailMediaResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMediaResources`.
   * @param resourceId Key property. See {@link RetailMediaResources.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaResources`.
   */
  delete(resourceId: number): DeleteRequestBuilder<RetailMediaResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMediaResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaResources` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMediaResources<T>
  ): DeleteRequestBuilder<RetailMediaResources<T>, T>;
  delete(
    resourceIdOrEntity: any
  ): DeleteRequestBuilder<RetailMediaResources<T>, T> {
    return new DeleteRequestBuilder<RetailMediaResources<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof RetailMediaResources
        ? resourceIdOrEntity
        : { ResourceId: resourceIdOrEntity! }
    );
  }
}
