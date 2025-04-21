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
import { SalesOrderHeadersV3 } from './SalesOrderHeadersV3';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeadersV3} entity.
 */
export class SalesOrderHeadersV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeadersV3<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeadersV3` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeadersV3` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeadersV3<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeadersV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeadersV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeadersV3`.
   */
  create(
    entity: SalesOrderHeadersV3<T>
  ): CreateRequestBuilder<SalesOrderHeadersV3<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeadersV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV3.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV3.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeadersV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeadersV3<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHeadersV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeadersV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeadersV3`.
   */
  update(
    entity: SalesOrderHeadersV3<T>
  ): UpdateRequestBuilder<SalesOrderHeadersV3<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeadersV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV3`.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV3.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV3.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV3`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<SalesOrderHeadersV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV3` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeadersV3<T>
  ): DeleteRequestBuilder<SalesOrderHeadersV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<SalesOrderHeadersV3<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeadersV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeadersV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
