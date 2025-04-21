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
import { SalesQuotationHeaders } from './SalesQuotationHeaders';

/**
 * Request builder class for operations supported on the {@link SalesQuotationHeaders} entity.
 */
export class SalesQuotationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesQuotationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SalesQuotationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SalesQuotationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SalesQuotationHeaders<T>, T> {
    return new GetAllRequestBuilder<SalesQuotationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesQuotationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesQuotationHeaders`.
   */
  create(
    entity: SalesQuotationHeaders<T>
  ): CreateRequestBuilder<SalesQuotationHeaders<T>, T> {
    return new CreateRequestBuilder<SalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesQuotationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link SalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesQuotationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesQuotationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SalesQuotationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesQuotationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesQuotationHeaders`.
   */
  update(
    entity: SalesQuotationHeaders<T>
  ): UpdateRequestBuilder<SalesQuotationHeaders<T>, T> {
    return new UpdateRequestBuilder<SalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationHeaders`.
   * @param dataAreaId Key property. See {@link SalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link SalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationHeaders`.
   */
  delete(
    dataAreaId: string,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<SalesQuotationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SalesQuotationHeaders<T>
  ): DeleteRequestBuilder<SalesQuotationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<SalesQuotationHeaders<T>, T> {
    return new DeleteRequestBuilder<SalesQuotationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesQuotationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
