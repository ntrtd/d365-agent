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
import { DimAttributeProjTables } from './DimAttributeProjTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeProjTables} entity.
 */
export class DimAttributeProjTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeProjTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeProjTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeProjTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeProjTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeProjTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeProjTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeProjTables`.
   */
  create(
    entity: DimAttributeProjTables<T>
  ): CreateRequestBuilder<DimAttributeProjTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeProjTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeProjTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeProjTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeProjTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeProjTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeProjTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeProjTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeProjTables`.
   */
  update(
    entity: DimAttributeProjTables<T>
  ): UpdateRequestBuilder<DimAttributeProjTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeProjTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjTables`.
   * @param dataAreaId Key property. See {@link DimAttributeProjTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeProjTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeProjTables<T>
  ): DeleteRequestBuilder<DimAttributeProjTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeProjTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeProjTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeProjTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
