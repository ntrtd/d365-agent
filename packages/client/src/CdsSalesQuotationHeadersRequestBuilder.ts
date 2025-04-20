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
import { CdsSalesQuotationHeaders } from './CdsSalesQuotationHeaders';

/**
 * Request builder class for operations supported on the {@link CdsSalesQuotationHeaders} entity.
 */
export class CdsSalesQuotationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesQuotationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesQuotationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesQuotationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesQuotationHeaders<T>, T> {
    return new GetAllRequestBuilder<CdsSalesQuotationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsSalesQuotationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesQuotationHeaders`.
   */
  create(
    entity: CdsSalesQuotationHeaders<T>
  ): CreateRequestBuilder<CdsSalesQuotationHeaders<T>, T> {
    return new CreateRequestBuilder<CdsSalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesQuotationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link CdsSalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesQuotationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsSalesQuotationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesQuotationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesQuotationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesQuotationHeaders`.
   */
  update(
    entity: CdsSalesQuotationHeaders<T>
  ): UpdateRequestBuilder<CdsSalesQuotationHeaders<T>, T> {
    return new UpdateRequestBuilder<CdsSalesQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesQuotationHeaders`.
   * @param dataAreaId Key property. See {@link CdsSalesQuotationHeaders.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link CdsSalesQuotationHeaders.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesQuotationHeaders`.
   */
  delete(
    dataAreaId: string,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<CdsSalesQuotationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesQuotationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesQuotationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesQuotationHeaders<T>
  ): DeleteRequestBuilder<CdsSalesQuotationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<CdsSalesQuotationHeaders<T>, T> {
    return new DeleteRequestBuilder<CdsSalesQuotationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesQuotationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
