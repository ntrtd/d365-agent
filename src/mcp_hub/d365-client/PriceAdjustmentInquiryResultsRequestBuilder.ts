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
import { PriceAdjustmentInquiryResults } from './PriceAdjustmentInquiryResults';

/**
 * Request builder class for operations supported on the {@link PriceAdjustmentInquiryResults} entity.
 */
export class PriceAdjustmentInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `PriceAdjustmentInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `PriceAdjustmentInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
    return new GetAllRequestBuilder<PriceAdjustmentInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceAdjustmentInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceAdjustmentInquiryResults`.
   */
  create(
    entity: PriceAdjustmentInquiryResults<T>
  ): CreateRequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
    return new CreateRequestBuilder<PriceAdjustmentInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceAdjustmentInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceAdjustmentInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentInquiryResults.offerId}.
   * @returns A request builder for creating requests to retrieve one `PriceAdjustmentInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<PriceAdjustmentInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceAdjustmentInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceAdjustmentInquiryResults`.
   */
  update(
    entity: PriceAdjustmentInquiryResults<T>
  ): UpdateRequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
    return new UpdateRequestBuilder<PriceAdjustmentInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentInquiryResults`.
   * @param dataAreaId Key property. See {@link PriceAdjustmentInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentInquiryResults.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<PriceAdjustmentInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: PriceAdjustmentInquiryResults<T>
  ): DeleteRequestBuilder<PriceAdjustmentInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<PriceAdjustmentInquiryResults<T>, T> {
    return new DeleteRequestBuilder<PriceAdjustmentInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceAdjustmentInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
