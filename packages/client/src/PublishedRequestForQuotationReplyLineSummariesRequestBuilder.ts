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
import { PublishedRequestForQuotationReplyLineSummaries } from './PublishedRequestForQuotationReplyLineSummaries';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationReplyLineSummaries} entity.
 */
export class PublishedRequestForQuotationReplyLineSummariesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PublishedRequestForQuotationReplyLineSummaries<T>, T> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationReplyLineSummaries` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationReplyLineSummaries` entities.
   */
  getAll(): GetAllRequestBuilder<
    PublishedRequestForQuotationReplyLineSummaries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PublishedRequestForQuotationReplyLineSummaries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationReplyLineSummaries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   */
  create(
    entity: PublishedRequestForQuotationReplyLineSummaries<T>
  ): CreateRequestBuilder<
    PublishedRequestForQuotationReplyLineSummaries<T>,
    T
  > {
    return new CreateRequestBuilder<
      PublishedRequestForQuotationReplyLineSummaries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationReplyLineSummaries` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.dataAreaId}.
   * @param rfqNumber Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.rfqNumber}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.rfqCaseNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationReplyLineSummaries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    rfqCaseNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    PublishedRequestForQuotationReplyLineSummaries<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationReplyLineSummaries<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQNumber: rfqNumber,
      RFQCaseNumber: rfqCaseNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   */
  update(
    entity: PublishedRequestForQuotationReplyLineSummaries<T>
  ): UpdateRequestBuilder<
    PublishedRequestForQuotationReplyLineSummaries<T>,
    T
  > {
    return new UpdateRequestBuilder<
      PublishedRequestForQuotationReplyLineSummaries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.dataAreaId}.
   * @param rfqNumber Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.rfqNumber}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationReplyLineSummaries.rfqCaseNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    rfqCaseNumber: string
  ): DeleteRequestBuilder<PublishedRequestForQuotationReplyLineSummaries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationReplyLineSummaries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationReplyLineSummaries` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationReplyLineSummaries<T>
  ): DeleteRequestBuilder<PublishedRequestForQuotationReplyLineSummaries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    rfqCaseNumber?: string
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationReplyLineSummaries<T>,
    T
  > {
    return new DeleteRequestBuilder<
      PublishedRequestForQuotationReplyLineSummaries<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PublishedRequestForQuotationReplyLineSummaries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            RFQCaseNumber: rfqCaseNumber!
          }
    );
  }
}
