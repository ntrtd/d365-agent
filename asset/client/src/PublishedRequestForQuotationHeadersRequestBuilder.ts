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
import { PublishedRequestForQuotationHeaders } from './PublishedRequestForQuotationHeaders';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationHeaders} entity.
 */
export class PublishedRequestForQuotationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
    return new GetAllRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationHeaders`.
   */
  create(
    entity: PublishedRequestForQuotationHeaders<T>
  ): CreateRequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
    return new CreateRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationHeaders.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationHeaders.rfqCaseNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqCaseNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQCaseNumber: rfqCaseNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationHeaders`.
   */
  update(
    entity: PublishedRequestForQuotationHeaders<T>
  ): UpdateRequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
    return new UpdateRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationHeaders`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationHeaders.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationHeaders.rfqCaseNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationHeaders`.
   */
  delete(
    dataAreaId: string,
    rfqCaseNumber: string
  ): DeleteRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationHeaders<T>
  ): DeleteRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqCaseNumber?: string
  ): DeleteRequestBuilder<PublishedRequestForQuotationHeaders<T>, T> {
    return new DeleteRequestBuilder<PublishedRequestForQuotationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PublishedRequestForQuotationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQCaseNumber: rfqCaseNumber!
          }
    );
  }
}
