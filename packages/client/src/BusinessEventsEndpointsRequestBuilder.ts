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
import { BusinessEventsEndpoints } from './BusinessEventsEndpoints';

/**
 * Request builder class for operations supported on the {@link BusinessEventsEndpoints} entity.
 */
export class BusinessEventsEndpointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessEventsEndpoints<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessEventsEndpoints` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessEventsEndpoints` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessEventsEndpoints<T>, T> {
    return new GetAllRequestBuilder<BusinessEventsEndpoints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessEventsEndpoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessEventsEndpoints`.
   */
  create(
    entity: BusinessEventsEndpoints<T>
  ): CreateRequestBuilder<BusinessEventsEndpoints<T>, T> {
    return new CreateRequestBuilder<BusinessEventsEndpoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessEventsEndpoints` entity based on its keys.
   * @param name Key property. See {@link BusinessEventsEndpoints.name}.
   * @returns A request builder for creating requests to retrieve one `BusinessEventsEndpoints` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessEventsEndpoints<T>, T> {
    return new GetByKeyRequestBuilder<BusinessEventsEndpoints<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessEventsEndpoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessEventsEndpoints`.
   */
  update(
    entity: BusinessEventsEndpoints<T>
  ): UpdateRequestBuilder<BusinessEventsEndpoints<T>, T> {
    return new UpdateRequestBuilder<BusinessEventsEndpoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsEndpoints`.
   * @param name Key property. See {@link BusinessEventsEndpoints.name}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsEndpoints`.
   */
  delete(name: string): DeleteRequestBuilder<BusinessEventsEndpoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessEventsEndpoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessEventsEndpoints` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessEventsEndpoints<T>
  ): DeleteRequestBuilder<BusinessEventsEndpoints<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<BusinessEventsEndpoints<T>, T> {
    return new DeleteRequestBuilder<BusinessEventsEndpoints<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BusinessEventsEndpoints
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
