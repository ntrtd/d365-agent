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
import { EngineeringChangePriorities } from './EngineeringChangePriorities';

/**
 * Request builder class for operations supported on the {@link EngineeringChangePriorities} entity.
 */
export class EngineeringChangePrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangePriorities<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangePriorities` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangePriorities` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangePriorities<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangePriorities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangePriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangePriorities`.
   */
  create(
    entity: EngineeringChangePriorities<T>
  ): CreateRequestBuilder<EngineeringChangePriorities<T>, T> {
    return new CreateRequestBuilder<EngineeringChangePriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangePriorities` entity based on its keys.
   * @param priorityName Key property. See {@link EngineeringChangePriorities.priorityName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangePriorities` entity based on its keys.
   */
  getByKey(
    priorityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangePriorities<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangePriorities<T>, T>(
      this.entityApi,
      { PriorityName: priorityName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangePriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangePriorities`.
   */
  update(
    entity: EngineeringChangePriorities<T>
  ): UpdateRequestBuilder<EngineeringChangePriorities<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangePriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangePriorities`.
   * @param priorityName Key property. See {@link EngineeringChangePriorities.priorityName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangePriorities`.
   */
  delete(
    priorityName: string
  ): DeleteRequestBuilder<EngineeringChangePriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangePriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangePriorities` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangePriorities<T>
  ): DeleteRequestBuilder<EngineeringChangePriorities<T>, T>;
  delete(
    priorityNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringChangePriorities<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangePriorities<T>, T>(
      this.entityApi,
      priorityNameOrEntity instanceof EngineeringChangePriorities
        ? priorityNameOrEntity
        : { PriorityName: priorityNameOrEntity! }
    );
  }
}
