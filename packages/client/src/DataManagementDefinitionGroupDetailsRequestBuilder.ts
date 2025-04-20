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
import { DataManagementDefinitionGroupDetails } from './DataManagementDefinitionGroupDetails';

/**
 * Request builder class for operations supported on the {@link DataManagementDefinitionGroupDetails} entity.
 */
export class DataManagementDefinitionGroupDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementDefinitionGroupDetails` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementDefinitionGroupDetails` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
    return new GetAllRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementDefinitionGroupDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementDefinitionGroupDetails`.
   */
  create(
    entity: DataManagementDefinitionGroupDetails<T>
  ): CreateRequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
    return new CreateRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementDefinitionGroupDetails` entity based on its keys.
   * @param definitionGroupId Key property. See {@link DataManagementDefinitionGroupDetails.definitionGroupId}.
   * @param entityName Key property. See {@link DataManagementDefinitionGroupDetails.entityName}.
   * @returns A request builder for creating requests to retrieve one `DataManagementDefinitionGroupDetails` entity based on its keys.
   */
  getByKey(
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    entityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
    return new GetByKeyRequestBuilder<
      DataManagementDefinitionGroupDetails<T>,
      T
    >(this.entityApi, {
      DefinitionGroupId: definitionGroupId,
      EntityName: entityName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementDefinitionGroupDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementDefinitionGroupDetails`.
   */
  update(
    entity: DataManagementDefinitionGroupDetails<T>
  ): UpdateRequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
    return new UpdateRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementDefinitionGroupDetails`.
   * @param definitionGroupId Key property. See {@link DataManagementDefinitionGroupDetails.definitionGroupId}.
   * @param entityName Key property. See {@link DataManagementDefinitionGroupDetails.entityName}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementDefinitionGroupDetails`.
   */
  delete(
    definitionGroupId: string,
    entityName: string
  ): DeleteRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementDefinitionGroupDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementDefinitionGroupDetails` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementDefinitionGroupDetails<T>
  ): DeleteRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>;
  delete(
    definitionGroupIdOrEntity: any,
    entityName?: string
  ): DeleteRequestBuilder<DataManagementDefinitionGroupDetails<T>, T> {
    return new DeleteRequestBuilder<DataManagementDefinitionGroupDetails<T>, T>(
      this.entityApi,
      definitionGroupIdOrEntity instanceof DataManagementDefinitionGroupDetails
        ? definitionGroupIdOrEntity
        : {
            DefinitionGroupId: definitionGroupIdOrEntity!,
            EntityName: entityName!
          }
    );
  }
}
