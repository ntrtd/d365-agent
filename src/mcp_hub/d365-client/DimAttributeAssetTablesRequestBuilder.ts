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
import { DimAttributeAssetTables } from './DimAttributeAssetTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeAssetTables} entity.
 */
export class DimAttributeAssetTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeAssetTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeAssetTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeAssetTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeAssetTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeAssetTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeAssetTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeAssetTables`.
   */
  create(
    entity: DimAttributeAssetTables<T>
  ): CreateRequestBuilder<DimAttributeAssetTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeAssetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeAssetTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeAssetTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAssetTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeAssetTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeAssetTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeAssetTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeAssetTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeAssetTables`.
   */
  update(
    entity: DimAttributeAssetTables<T>
  ): UpdateRequestBuilder<DimAttributeAssetTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeAssetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAssetTables`.
   * @param dataAreaId Key property. See {@link DimAttributeAssetTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAssetTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAssetTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeAssetTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAssetTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAssetTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeAssetTables<T>
  ): DeleteRequestBuilder<DimAttributeAssetTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeAssetTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeAssetTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeAssetTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
