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
import { ConfiguratorDefinitionGroupSortOrders } from './ConfiguratorDefinitionGroupSortOrders';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroupSortOrders} entity.
 */
export class ConfiguratorDefinitionGroupSortOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroupSortOrders` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroupSortOrders` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
    return new GetAllRequestBuilder<
      ConfiguratorDefinitionGroupSortOrders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroupSortOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   */
  create(
    entity: ConfiguratorDefinitionGroupSortOrders<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
    return new CreateRequestBuilder<
      ConfiguratorDefinitionGroupSortOrders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroupSortOrders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupSortOrders.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupSortOrders.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupSortOrders.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupSortOrders.fieldName}.
   * @param sortingNumber Key property. See {@link ConfiguratorDefinitionGroupSortOrders.sortingNumber}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroupSortOrders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>,
    sortingNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
    return new GetByKeyRequestBuilder<
      ConfiguratorDefinitionGroupSortOrders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DefinitionGroupId: definitionGroupId,
      TableName: tableName,
      FieldName: fieldName,
      SortingNumber: sortingNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   */
  update(
    entity: ConfiguratorDefinitionGroupSortOrders<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
    return new UpdateRequestBuilder<
      ConfiguratorDefinitionGroupSortOrders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroupSortOrders.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroupSortOrders.definitionGroupId}.
   * @param tableName Key property. See {@link ConfiguratorDefinitionGroupSortOrders.tableName}.
   * @param fieldName Key property. See {@link ConfiguratorDefinitionGroupSortOrders.fieldName}.
   * @param sortingNumber Key property. See {@link ConfiguratorDefinitionGroupSortOrders.sortingNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string,
    tableName: string,
    fieldName: string,
    sortingNumber: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroupSortOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroupSortOrders` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroupSortOrders<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string,
    tableName?: string,
    fieldName?: string,
    sortingNumber?: number
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroupSortOrders<T>, T> {
    return new DeleteRequestBuilder<
      ConfiguratorDefinitionGroupSortOrders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroupSortOrders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!,
            TableName: tableName!,
            FieldName: fieldName!,
            SortingNumber: sortingNumber!
          }
    );
  }
}
