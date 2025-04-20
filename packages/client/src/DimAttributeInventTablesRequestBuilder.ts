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
import { DimAttributeInventTables } from './DimAttributeInventTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeInventTables} entity.
 */
export class DimAttributeInventTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeInventTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeInventTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeInventTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeInventTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeInventTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeInventTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeInventTables`.
   */
  create(
    entity: DimAttributeInventTables<T>
  ): CreateRequestBuilder<DimAttributeInventTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeInventTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeInventTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeInventTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeInventTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeInventTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeInventTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeInventTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeInventTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeInventTables`.
   */
  update(
    entity: DimAttributeInventTables<T>
  ): UpdateRequestBuilder<DimAttributeInventTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeInventTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeInventTables`.
   * @param dataAreaId Key property. See {@link DimAttributeInventTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeInventTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeInventTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeInventTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeInventTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeInventTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeInventTables<T>
  ): DeleteRequestBuilder<DimAttributeInventTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeInventTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeInventTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeInventTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
