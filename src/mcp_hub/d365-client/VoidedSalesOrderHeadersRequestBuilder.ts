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
import { VoidedSalesOrderHeaders } from './VoidedSalesOrderHeaders';

/**
 * Request builder class for operations supported on the {@link VoidedSalesOrderHeaders} entity.
 */
export class VoidedSalesOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoidedSalesOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VoidedSalesOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VoidedSalesOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VoidedSalesOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<VoidedSalesOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoidedSalesOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoidedSalesOrderHeaders`.
   */
  create(
    entity: VoidedSalesOrderHeaders<T>
  ): CreateRequestBuilder<VoidedSalesOrderHeaders<T>, T> {
    return new CreateRequestBuilder<VoidedSalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoidedSalesOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoidedSalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link VoidedSalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `VoidedSalesOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoidedSalesOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VoidedSalesOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoidedSalesOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoidedSalesOrderHeaders`.
   */
  update(
    entity: VoidedSalesOrderHeaders<T>
  ): UpdateRequestBuilder<VoidedSalesOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<VoidedSalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoidedSalesOrderHeaders`.
   * @param dataAreaId Key property. See {@link VoidedSalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link VoidedSalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VoidedSalesOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<VoidedSalesOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoidedSalesOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoidedSalesOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VoidedSalesOrderHeaders<T>
  ): DeleteRequestBuilder<VoidedSalesOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<VoidedSalesOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<VoidedSalesOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoidedSalesOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
