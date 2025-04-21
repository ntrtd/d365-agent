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
import { ConfiguratorDefinitionGroupSummations } from './ConfiguratorDefinitionGroupSummations';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroupSummations} entity.
 */
export class ConfiguratorDefinitionGroupSummationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroupSummations` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroupSummations` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
    return new GetAllRequestBuilder<
      ConfiguratorDefinitionGroupSummations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroupSummations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroupSummations`.
   */
  create(
    entity: ConfiguratorDefinitionGroupSummations<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
    return new CreateRequestBuilder<
      ConfiguratorDefinitionGroupSummations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroupSummations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupSummations.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupSummations.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupSummations.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupSummations.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroupSummations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
    return new GetByKeyRequestBuilder<
      ConfiguratorDefinitionGroupSummations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DefinitionGroupId: definitionGroupId,
      TableName: tableName,
      FieldName: fieldName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroupSummations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroupSummations`.
   */
  update(
    entity: ConfiguratorDefinitionGroupSummations<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
    return new UpdateRequestBuilder<
      ConfiguratorDefinitionGroupSummations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupSummations`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupSummations.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupSummations.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupSummations.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupSummations.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupSummations`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    tableName: string,
    fieldName: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupSummations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupSummations` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroupSummations<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    tableName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSummations<T>, T> {
    return new DeleteRequestBuilder<
      ConfiguratorDefinitionGroupSummations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroupSummations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!,
            TableName: tableName!,
            FieldName: fieldName!
          }
    );
  }
}
