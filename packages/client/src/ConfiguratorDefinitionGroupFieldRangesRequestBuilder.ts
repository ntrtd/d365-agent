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
import { ConfiguratorDefinitionGroupFieldRanges } from './ConfiguratorDefinitionGroupFieldRanges';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroupFieldRanges} entity.
 */
export class ConfiguratorDefinitionGroupFieldRangesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroupFieldRanges` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroupFieldRanges` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
    return new GetAllRequestBuilder<
      ConfiguratorDefinitionGroupFieldRanges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroupFieldRanges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   */
  create(
    entity: ConfiguratorDefinitionGroupFieldRanges<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
    return new CreateRequestBuilder<
      ConfiguratorDefinitionGroupFieldRanges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroupFieldRanges` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroupFieldRanges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
    return new GetByKeyRequestBuilder<
      ConfiguratorDefinitionGroupFieldRanges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DefinitionGroupId: definitionGroupId,
      TableName: tableName,
      FieldName: fieldName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   */
  update(
    entity: ConfiguratorDefinitionGroupFieldRanges<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
    return new UpdateRequestBuilder<
      ConfiguratorDefinitionGroupFieldRanges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupFieldRanges.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    tableName: string,
    fieldName: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupFieldRanges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupFieldRanges` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroupFieldRanges<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    tableName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupFieldRanges<T>, T> {
    return new DeleteRequestBuilder<
      ConfiguratorDefinitionGroupFieldRanges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroupFieldRanges
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
