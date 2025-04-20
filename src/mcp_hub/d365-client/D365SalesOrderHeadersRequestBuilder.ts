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
import { D365SalesOrderHeaders } from './D365SalesOrderHeaders';

/**
 * Request builder class for operations supported on the {@link D365SalesOrderHeaders} entity.
 */
export class D365SalesOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<D365SalesOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `D365SalesOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `D365SalesOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<D365SalesOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<D365SalesOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `D365SalesOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `D365SalesOrderHeaders`.
   */
  create(
    entity: D365SalesOrderHeaders<T>
  ): CreateRequestBuilder<D365SalesOrderHeaders<T>, T> {
    return new CreateRequestBuilder<D365SalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `D365SalesOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link D365SalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link D365SalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `D365SalesOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<D365SalesOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<D365SalesOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `D365SalesOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `D365SalesOrderHeaders`.
   */
  update(
    entity: D365SalesOrderHeaders<T>
  ): UpdateRequestBuilder<D365SalesOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<D365SalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `D365SalesOrderHeaders`.
   * @param dataAreaId Key property. See {@link D365SalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link D365SalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<D365SalesOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `D365SalesOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: D365SalesOrderHeaders<T>
  ): DeleteRequestBuilder<D365SalesOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<D365SalesOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<D365SalesOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof D365SalesOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
