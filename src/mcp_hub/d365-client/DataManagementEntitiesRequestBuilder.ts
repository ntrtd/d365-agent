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
import { DataManagementEntities } from './DataManagementEntities';

/**
 * Request builder class for operations supported on the {@link DataManagementEntities} entity.
 */
export class DataManagementEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementEntities<T>, T> {
    return new GetAllRequestBuilder<DataManagementEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementEntities`.
   */
  create(
    entity: DataManagementEntities<T>
  ): CreateRequestBuilder<DataManagementEntities<T>, T> {
    return new CreateRequestBuilder<DataManagementEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementEntities` entity based on its keys.
   * @param entityName Key property. See {@link DataManagementEntities.entityName}.
   * @returns A request builder for creating requests to retrieve one `DataManagementEntities` entity based on its keys.
   */
  getByKey(
    entityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementEntities<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementEntities<T>, T>(
      this.entityApi,
      { EntityName: entityName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementEntities`.
   */
  update(
    entity: DataManagementEntities<T>
  ): UpdateRequestBuilder<DataManagementEntities<T>, T> {
    return new UpdateRequestBuilder<DataManagementEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementEntities`.
   * @param entityName Key property. See {@link DataManagementEntities.entityName}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementEntities`.
   */
  delete(
    entityName: string
  ): DeleteRequestBuilder<DataManagementEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementEntities<T>
  ): DeleteRequestBuilder<DataManagementEntities<T>, T>;
  delete(
    entityNameOrEntity: any
  ): DeleteRequestBuilder<DataManagementEntities<T>, T> {
    return new DeleteRequestBuilder<DataManagementEntities<T>, T>(
      this.entityApi,
      entityNameOrEntity instanceof DataManagementEntities
        ? entityNameOrEntity
        : { EntityName: entityNameOrEntity! }
    );
  }
}
