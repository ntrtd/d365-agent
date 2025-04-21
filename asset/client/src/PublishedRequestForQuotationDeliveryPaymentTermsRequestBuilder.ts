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
import { PublishedRequestForQuotationDeliveryPaymentTerms } from './PublishedRequestForQuotationDeliveryPaymentTerms';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationDeliveryPaymentTerms} entity.
 */
export class PublishedRequestForQuotationDeliveryPaymentTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  PublishedRequestForQuotationDeliveryPaymentTerms<T>,
  T
> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationDeliveryPaymentTerms` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationDeliveryPaymentTerms` entities.
   */
  getAll(): GetAllRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PublishedRequestForQuotationDeliveryPaymentTerms<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationDeliveryPaymentTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   */
  create(
    entity: PublishedRequestForQuotationDeliveryPaymentTerms<T>
  ): CreateRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  > {
    return new CreateRequestBuilder<
      PublishedRequestForQuotationDeliveryPaymentTerms<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationDeliveryPaymentTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationDeliveryPaymentTerms.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationDeliveryPaymentTerms.rfqCaseNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationDeliveryPaymentTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqCaseNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationDeliveryPaymentTerms<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQCaseNumber: rfqCaseNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   */
  update(
    entity: PublishedRequestForQuotationDeliveryPaymentTerms<T>
  ): UpdateRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  > {
    return new UpdateRequestBuilder<
      PublishedRequestForQuotationDeliveryPaymentTerms<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationDeliveryPaymentTerms.dataAreaId}.
   * @param rfqCaseNumber Key property. See {@link PublishedRequestForQuotationDeliveryPaymentTerms.rfqCaseNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   */
  delete(
    dataAreaId: string,
    rfqCaseNumber: string
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationDeliveryPaymentTerms` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationDeliveryPaymentTerms<T>
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    rfqCaseNumber?: string
  ): DeleteRequestBuilder<
    PublishedRequestForQuotationDeliveryPaymentTerms<T>,
    T
  > {
    return new DeleteRequestBuilder<
      PublishedRequestForQuotationDeliveryPaymentTerms<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PublishedRequestForQuotationDeliveryPaymentTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQCaseNumber: rfqCaseNumber!
          }
    );
  }
}
