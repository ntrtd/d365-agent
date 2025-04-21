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
import { DimAttributeCustTables } from './DimAttributeCustTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeCustTables} entity.
 */
export class DimAttributeCustTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeCustTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeCustTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeCustTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeCustTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeCustTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeCustTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeCustTables`.
   */
  create(
    entity: DimAttributeCustTables<T>
  ): CreateRequestBuilder<DimAttributeCustTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeCustTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeCustTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeCustTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeCustTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeCustTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeCustTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeCustTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeCustTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeCustTables`.
   */
  update(
    entity: DimAttributeCustTables<T>
  ): UpdateRequestBuilder<DimAttributeCustTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeCustTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCustTables`.
   * @param dataAreaId Key property. See {@link DimAttributeCustTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeCustTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCustTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeCustTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCustTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCustTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeCustTables<T>
  ): DeleteRequestBuilder<DimAttributeCustTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeCustTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeCustTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeCustTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
