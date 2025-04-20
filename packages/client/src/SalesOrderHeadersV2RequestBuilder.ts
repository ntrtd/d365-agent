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
import { SalesOrderHeadersV2 } from './SalesOrderHeadersV2';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeadersV2} entity.
 */
export class SalesOrderHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeadersV2<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeadersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeadersV2`.
   */
  create(
    entity: SalesOrderHeadersV2<T>
  ): CreateRequestBuilder<SalesOrderHeadersV2<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV2.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeadersV2`.
   */
  update(
    entity: SalesOrderHeadersV2<T>
  ): UpdateRequestBuilder<SalesOrderHeadersV2<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV2`.
   * @param dataAreaId Key property. See {@link SalesOrderHeadersV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeadersV2.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV2`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<SalesOrderHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeadersV2<T>
  ): DeleteRequestBuilder<SalesOrderHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<SalesOrderHeadersV2<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
