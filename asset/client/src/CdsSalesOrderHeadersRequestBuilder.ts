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
import { CdsSalesOrderHeaders } from './CdsSalesOrderHeaders';

/**
 * Request builder class for operations supported on the {@link CdsSalesOrderHeaders} entity.
 */
export class CdsSalesOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<CdsSalesOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsSalesOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesOrderHeaders`.
   */
  create(
    entity: CdsSalesOrderHeaders<T>
  ): CreateRequestBuilder<CdsSalesOrderHeaders<T>, T> {
    return new CreateRequestBuilder<CdsSalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsSalesOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesOrderHeaders`.
   */
  update(
    entity: CdsSalesOrderHeaders<T>
  ): UpdateRequestBuilder<CdsSalesOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<CdsSalesOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderHeaders`.
   * @param dataAreaId Key property. See {@link CdsSalesOrderHeaders.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderHeaders.salesOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string
  ): DeleteRequestBuilder<CdsSalesOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesOrderHeaders<T>
  ): DeleteRequestBuilder<CdsSalesOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string
  ): DeleteRequestBuilder<CdsSalesOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<CdsSalesOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!
          }
    );
  }
}
