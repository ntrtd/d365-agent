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
import { ConfiguratorDefinitionGroupTables } from './ConfiguratorDefinitionGroupTables';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroupTables} entity.
 */
export class ConfiguratorDefinitionGroupTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroupTables` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroupTables` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroupTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroupTables`.
   */
  create(
    entity: ConfiguratorDefinitionGroupTables<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
    return new CreateRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroupTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupTables.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupTables.definitionGroupId}.
   * @param dataSourceNumber Key property. See {@link ConfiguratorDefinitionGroupTables.dataSourceNumber}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroupTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    dataSourceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DefinitionGroupId: definitionGroupId,
        DataSourceNumber: dataSourceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroupTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroupTables`.
   */
  update(
    entity: ConfiguratorDefinitionGroupTables<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupTables`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupTables.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupTables.definitionGroupId}.
   * @param dataSourceNumber Key property. See {@link ConfiguratorDefinitionGroupTables.dataSourceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupTables`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    dataSourceNumber: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupTables` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroupTables<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    dataSourceNumber?: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorDefinitionGroupTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroupTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!,
            DataSourceNumber: dataSourceNumber!
          }
    );
  }
}
