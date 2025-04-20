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
import { SalesOrderHeaders } from './SalesOrderHeaders';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaders} entity.
 */
export class SalesOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaders`.
   */
  create(
    entity: SalesOrderHeaders<T>
  ): CreateRequestBuilder<SalesOrderHeaders<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderHeaders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderNumber: salesOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaders`.
   */
  update(
    entity: SalesOrderHeaders<T>
  ): UpdateRequestBuilder<SalesOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaders`.
   * @param dataAreaId Key property. See {@link SalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<SalesOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaders<T>
  ): DeleteRequestBuilder<SalesOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<SalesOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
