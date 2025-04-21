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
import { D365SalesQuotationHeaders } from './D365SalesQuotationHeaders';

/**
 * Request builder class for operations supported on the {@link D365SalesQuotationHeaders} entity.
 */
export class D365SalesQuotationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<D365SalesQuotationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `D365SalesQuotationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `D365SalesQuotationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<D365SalesQuotationHeaders<T>, T> {
    return new GetAllRequestBuilder<D365SalesQuotationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `D365SalesQuotationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `D365SalesQuotationHeaders`.
   */
  create(
    entity: D365SalesQuotationHeaders<T>
  ): CreateRequestBuilder<D365SalesQuotationHeaders<T>, T> {
    return new CreateRequestBuilder<D365SalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `D365SalesQuotationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link D365SalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link D365SalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `D365SalesQuotationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<D365SalesQuotationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<D365SalesQuotationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `D365SalesQuotationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `D365SalesQuotationHeaders`.
   */
  update(
    entity: D365SalesQuotationHeaders<T>
  ): UpdateRequestBuilder<D365SalesQuotationHeaders<T>, T> {
    return new UpdateRequestBuilder<D365SalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `D365SalesQuotationHeaders`.
   * @param dataAreaId Key property. See {@link D365SalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link D365SalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesQuotationHeaders`.
   */
  delete(
    dataAreaId: string,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<D365SalesQuotationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `D365SalesQuotationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesQuotationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: D365SalesQuotationHeaders<T>
  ): DeleteRequestBuilder<D365SalesQuotationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<D365SalesQuotationHeaders<T>, T> {
    return new DeleteRequestBuilder<D365SalesQuotationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof D365SalesQuotationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
