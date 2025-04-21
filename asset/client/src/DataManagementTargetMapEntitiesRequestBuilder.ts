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
import { DataManagementTargetMapEntities } from './DataManagementTargetMapEntities';

/**
 * Request builder class for operations supported on the {@link DataManagementTargetMapEntities} entity.
 */
export class DataManagementTargetMapEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementTargetMapEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementTargetMapEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementTargetMapEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementTargetMapEntities<T>, T> {
    return new GetAllRequestBuilder<DataManagementTargetMapEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementTargetMapEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementTargetMapEntities`.
   */
  create(
    entity: DataManagementTargetMapEntities<T>
  ): CreateRequestBuilder<DataManagementTargetMapEntities<T>, T> {
    return new CreateRequestBuilder<DataManagementTargetMapEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementTargetMapEntities` entity based on its keys.
   * @param stagingField Key property. See {@link DataManagementTargetMapEntities.stagingField}.
   * @param entity Key property. See {@link DataManagementTargetMapEntities.entity}.
   * @returns A request builder for creating requests to retrieve one `DataManagementTargetMapEntities` entity based on its keys.
   */
  getByKey(
    stagingField: DeserializedType<T, 'Edm.String'>,
    entity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementTargetMapEntities<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementTargetMapEntities<T>, T>(
      this.entityApi,
      {
        StagingField: stagingField,
        Entity: entity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementTargetMapEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementTargetMapEntities`.
   */
  update(
    entity: DataManagementTargetMapEntities<T>
  ): UpdateRequestBuilder<DataManagementTargetMapEntities<T>, T> {
    return new UpdateRequestBuilder<DataManagementTargetMapEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementTargetMapEntities`.
   * @param stagingField Key property. See {@link DataManagementTargetMapEntities.stagingField}.
   * @param entity Key property. See {@link DataManagementTargetMapEntities.entity}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTargetMapEntities`.
   */
  delete(
    stagingField: string,
    entity: string
  ): DeleteRequestBuilder<DataManagementTargetMapEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementTargetMapEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTargetMapEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementTargetMapEntities<T>
  ): DeleteRequestBuilder<DataManagementTargetMapEntities<T>, T>;
  delete(
    stagingFieldOrEntity: any,
    entity?: string
  ): DeleteRequestBuilder<DataManagementTargetMapEntities<T>, T> {
    return new DeleteRequestBuilder<DataManagementTargetMapEntities<T>, T>(
      this.entityApi,
      stagingFieldOrEntity instanceof DataManagementTargetMapEntities
        ? stagingFieldOrEntity
        : {
            StagingField: stagingFieldOrEntity!,
            Entity: entity!
          }
    );
  }
}
