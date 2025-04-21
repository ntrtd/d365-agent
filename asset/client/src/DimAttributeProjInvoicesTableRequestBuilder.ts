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
import { DimAttributeProjInvoicesTable } from './DimAttributeProjInvoicesTable';

/**
 * Request builder class for operations supported on the {@link DimAttributeProjInvoicesTable} entity.
 */
export class DimAttributeProjInvoicesTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeProjInvoicesTable` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeProjInvoicesTable` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
    return new GetAllRequestBuilder<DimAttributeProjInvoicesTable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeProjInvoicesTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeProjInvoicesTable`.
   */
  create(
    entity: DimAttributeProjInvoicesTable<T>
  ): CreateRequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
    return new CreateRequestBuilder<DimAttributeProjInvoicesTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeProjInvoicesTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeProjInvoicesTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjInvoicesTable.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeProjInvoicesTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeProjInvoicesTable<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeProjInvoicesTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeProjInvoicesTable`.
   */
  update(
    entity: DimAttributeProjInvoicesTable<T>
  ): UpdateRequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
    return new UpdateRequestBuilder<DimAttributeProjInvoicesTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjInvoicesTable`.
   * @param dataAreaId Key property. See {@link DimAttributeProjInvoicesTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjInvoicesTable.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjInvoicesTable`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeProjInvoicesTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjInvoicesTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjInvoicesTable` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeProjInvoicesTable<T>
  ): DeleteRequestBuilder<DimAttributeProjInvoicesTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeProjInvoicesTable<T>, T> {
    return new DeleteRequestBuilder<DimAttributeProjInvoicesTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeProjInvoicesTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
