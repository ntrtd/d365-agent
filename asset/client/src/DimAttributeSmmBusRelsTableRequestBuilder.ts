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
import { DimAttributeSmmBusRelsTable } from './DimAttributeSmmBusRelsTable';

/**
 * Request builder class for operations supported on the {@link DimAttributeSmmBusRelsTable} entity.
 */
export class DimAttributeSmmBusRelsTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeSmmBusRelsTable` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeSmmBusRelsTable` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
    return new GetAllRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeSmmBusRelsTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeSmmBusRelsTable`.
   */
  create(
    entity: DimAttributeSmmBusRelsTable<T>
  ): CreateRequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
    return new CreateRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeSmmBusRelsTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeSmmBusRelsTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeSmmBusRelsTable.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeSmmBusRelsTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeSmmBusRelsTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeSmmBusRelsTable`.
   */
  update(
    entity: DimAttributeSmmBusRelsTable<T>
  ): UpdateRequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
    return new UpdateRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeSmmBusRelsTable`.
   * @param dataAreaId Key property. See {@link DimAttributeSmmBusRelsTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeSmmBusRelsTable.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeSmmBusRelsTable`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeSmmBusRelsTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeSmmBusRelsTable` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeSmmBusRelsTable<T>
  ): DeleteRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeSmmBusRelsTable<T>, T> {
    return new DeleteRequestBuilder<DimAttributeSmmBusRelsTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeSmmBusRelsTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
