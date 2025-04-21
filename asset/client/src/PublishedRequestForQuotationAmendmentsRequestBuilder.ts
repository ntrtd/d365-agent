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
import { PublishedRequestForQuotationAmendments } from './PublishedRequestForQuotationAmendments';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationAmendments} entity.
 */
export class PublishedRequestForQuotationAmendmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationAmendments` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationAmendments` entities.
   */
  getAll(): GetAllRequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
    return new GetAllRequestBuilder<
      PublishedRequestForQuotationAmendments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationAmendments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationAmendments`.
   */
  create(
    entity: PublishedRequestForQuotationAmendments<T>
  ): CreateRequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
    return new CreateRequestBuilder<
      PublishedRequestForQuotationAmendments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationAmendments` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationAmendments.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationAmendments.rfqCaseNumber}.
   * @param amendmentNumber Key property. See {@link PublishedRequestForQuotationAmendments.amendmentNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationAmendments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqCaseNumber: DeserializedType<T, 'Edm.String'>,
    amendmentNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationAmendments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQCaseNumber: rfqCaseNumber,
      AmendmentNumber: amendmentNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationAmendments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationAmendments`.
   */
  update(
    entity: PublishedRequestForQuotationAmendments<T>
  ): UpdateRequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
    return new UpdateRequestBuilder<
      PublishedRequestForQuotationAmendments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationAmendments`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationAmendments.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationAmendments.rfqCaseNumber}.
   * @param amendmentNumber Key property. See {@link PublishedRequestForQuotationAmendments.amendmentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationAmendments`.
   */
  delete(
    dataAreaId: string,
    rfqCaseNumber: string,
    amendmentNumber: number
  ): DeleteRequestBuilder<PublishedRequestForQuotationAmendments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationAmendments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationAmendments` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationAmendments<T>
  ): DeleteRequestBuilder<PublishedRequestForQuotationAmendments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqCaseNumber?: string,
    amendmentNumber?: number
  ): DeleteRequestBuilder<PublishedRequestForQuotationAmendments<T>, T> {
    return new DeleteRequestBuilder<
      PublishedRequestForQuotationAmendments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PublishedRequestForQuotationAmendments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQCaseNumber: rfqCaseNumber!,
            AmendmentNumber: amendmentNumber!
          }
    );
  }
}
