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
import { ConfiguratorDefinitionGroupFields } from './ConfiguratorDefinitionGroupFields';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroupFields} entity.
 */
export class ConfiguratorDefinitionGroupFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroupFields` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroupFields` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroupFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroupFields`.
   */
  create(
    entity: ConfiguratorDefinitionGroupFields<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
    return new CreateRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroupFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupFields.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupFields.definitionGroupId}.
   * @param dataSourceNumber Key property. See {@link ConfiguratorDefinitionGroupFields.dataSourceNumber}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupFields.tableName}.
   * @param sortOrder Key property. See {@link ConfiguratorDefinitionGroupFields.sortOrder}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroupFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    dataSourceNumber: DeserializedType<T, 'Edm.Int32'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    sortOrder: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DefinitionGroupId: definitionGroupId,
        DataSourceNumber: dataSourceNumber,
        TableName: tableName,
        SortOrder: sortOrder
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroupFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroupFields`.
   */
  update(
    entity: ConfiguratorDefinitionGroupFields<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupFields`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupFields.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupFields.definitionGroupId}.
   * @param dataSourceNumber Key property. See {@link ConfiguratorDefinitionGroupFields.dataSourceNumber}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupFields.tableName}.
   * @param sortOrder Key property. See {@link ConfiguratorDefinitionGroupFields.sortOrder}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupFields`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    dataSourceNumber: number,
    tableName: string,
    sortOrder: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupFields` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroupFields<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    dataSourceNumber?: number,
    tableName?: string,
    sortOrder?: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorDefinitionGroupFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroupFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!,
            DataSourceNumber: dataSourceNumber!,
            TableName: tableName!,
            SortOrder: sortOrder!
          }
    );
  }
}
