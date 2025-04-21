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
import { DiscountInquiryResults } from './DiscountInquiryResults';

/**
 * Request builder class for operations supported on the {@link DiscountInquiryResults} entity.
 */
export class DiscountInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountInquiryResults<T>, T> {
    return new GetAllRequestBuilder<DiscountInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountInquiryResults`.
   */
  create(
    entity: DiscountInquiryResults<T>
  ): CreateRequestBuilder<DiscountInquiryResults<T>, T> {
    return new CreateRequestBuilder<DiscountInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link DiscountInquiryResults.offerId}.
   * @returns A request builder for creating requests to retrieve one `DiscountInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<DiscountInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountInquiryResults`.
   */
  update(
    entity: DiscountInquiryResults<T>
  ): UpdateRequestBuilder<DiscountInquiryResults<T>, T> {
    return new UpdateRequestBuilder<DiscountInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountInquiryResults`.
   * @param dataAreaId Key property. See {@link DiscountInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link DiscountInquiryResults.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<DiscountInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountInquiryResults<T>
  ): DeleteRequestBuilder<DiscountInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<DiscountInquiryResults<T>, T> {
    return new DeleteRequestBuilder<DiscountInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
