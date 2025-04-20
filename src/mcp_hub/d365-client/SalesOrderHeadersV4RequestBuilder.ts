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
import { SalesOrderHeadersV4 } from './SalesOrderHeadersV4';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeadersV4} entity.
 */
export class SalesOrderHeadersV4RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeadersV4<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeadersV4` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeadersV4` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeadersV4<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeadersV4<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeadersV4` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeadersV4`.
   */
  create(
    entity: SalesOrderHeadersV4<T>
  ): CreateRequestBuilder<SalesOrderHeadersV4<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeadersV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeadersV4` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV4.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV4.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeadersV4` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeadersV4<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHeadersV4<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeadersV4`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeadersV4`.
   */
  update(
    entity: SalesOrderHeadersV4<T>
  ): UpdateRequestBuilder<SalesOrderHeadersV4<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeadersV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV4`.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV4.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV4.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV4`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<SalesOrderHeadersV4<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV4`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV4` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeadersV4<T>
  ): DeleteRequestBuilder<SalesOrderHeadersV4<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<SalesOrderHeadersV4<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeadersV4<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeadersV4
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
