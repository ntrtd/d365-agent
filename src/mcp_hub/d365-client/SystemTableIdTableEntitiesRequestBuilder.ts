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
import { SystemTableIdTableEntities } from './SystemTableIdTableEntities';

/**
 * Request builder class for operations supported on the {@link SystemTableIdTableEntities} entity.
 */
export class SystemTableIdTableEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemTableIdTableEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SystemTableIdTableEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SystemTableIdTableEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SystemTableIdTableEntities<T>, T> {
    return new GetAllRequestBuilder<SystemTableIdTableEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SystemTableIdTableEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemTableIdTableEntities`.
   */
  create(
    entity: SystemTableIdTableEntities<T>
  ): CreateRequestBuilder<SystemTableIdTableEntities<T>, T> {
    return new CreateRequestBuilder<SystemTableIdTableEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemTableIdTableEntities` entity based on its keys.
   * @param id Key property. See {@link SystemTableIdTableEntities.id}.
   * @returns A request builder for creating requests to retrieve one `SystemTableIdTableEntities` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SystemTableIdTableEntities<T>, T> {
    return new GetByKeyRequestBuilder<SystemTableIdTableEntities<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SystemTableIdTableEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemTableIdTableEntities`.
   */
  update(
    entity: SystemTableIdTableEntities<T>
  ): UpdateRequestBuilder<SystemTableIdTableEntities<T>, T> {
    return new UpdateRequestBuilder<SystemTableIdTableEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemTableIdTableEntities`.
   * @param id Key property. See {@link SystemTableIdTableEntities.id}.
   * @returns A request builder for creating requests that delete an entity of type `SystemTableIdTableEntities`.
   */
  delete(id: number): DeleteRequestBuilder<SystemTableIdTableEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemTableIdTableEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemTableIdTableEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SystemTableIdTableEntities<T>
  ): DeleteRequestBuilder<SystemTableIdTableEntities<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<SystemTableIdTableEntities<T>, T> {
    return new DeleteRequestBuilder<SystemTableIdTableEntities<T>, T>(
      this.entityApi,
      idOrEntity instanceof SystemTableIdTableEntities
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
