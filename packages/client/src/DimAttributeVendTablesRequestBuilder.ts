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
import { DimAttributeVendTables } from './DimAttributeVendTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeVendTables} entity.
 */
export class DimAttributeVendTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeVendTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeVendTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeVendTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeVendTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeVendTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeVendTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeVendTables`.
   */
  create(
    entity: DimAttributeVendTables<T>
  ): CreateRequestBuilder<DimAttributeVendTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeVendTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeVendTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeVendTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeVendTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeVendTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeVendTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeVendTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeVendTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeVendTables`.
   */
  update(
    entity: DimAttributeVendTables<T>
  ): UpdateRequestBuilder<DimAttributeVendTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeVendTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeVendTables`.
   * @param dataAreaId Key property. See {@link DimAttributeVendTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeVendTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeVendTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeVendTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeVendTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeVendTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeVendTables<T>
  ): DeleteRequestBuilder<DimAttributeVendTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeVendTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeVendTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeVendTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
