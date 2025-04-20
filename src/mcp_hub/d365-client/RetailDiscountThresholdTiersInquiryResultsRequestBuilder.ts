/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailDiscountThresholdTiersInquiryResults } from './RetailDiscountThresholdTiersInquiryResults';

/**
 * Request builder class for operations supported on the {@link RetailDiscountThresholdTiersInquiryResults} entity.
 */
export class RetailDiscountThresholdTiersInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountThresholdTiersInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountThresholdTiersInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailDiscountThresholdTiersInquiryResults<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailDiscountThresholdTiersInquiryResults<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDiscountThresholdTiersInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   */
  create(
    entity: RetailDiscountThresholdTiersInquiryResults<T>
  ): CreateRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T> {
    return new CreateRequestBuilder<
      RetailDiscountThresholdTiersInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountThresholdTiersInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountThresholdTiersInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountThresholdTiersInquiryResults.offerId}.
   * @param amountThreshold Key property. See {@link RetailDiscountThresholdTiersInquiryResults.amountThreshold}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountThresholdTiersInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    amountThreshold: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailDiscountThresholdTiersInquiryResults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      AmountThreshold: amountThreshold
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   */
  update(
    entity: RetailDiscountThresholdTiersInquiryResults<T>
  ): UpdateRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T> {
    return new UpdateRequestBuilder<
      RetailDiscountThresholdTiersInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   * @param dataAreaId Key property. See {@link RetailDiscountThresholdTiersInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountThresholdTiersInquiryResults.offerId}.
   * @param amountThreshold Key property. See {@link RetailDiscountThresholdTiersInquiryResults.amountThreshold}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    amountThreshold: BigNumber
  ): DeleteRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountThresholdTiersInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountThresholdTiersInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountThresholdTiersInquiryResults<T>
  ): DeleteRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    amountThreshold?: BigNumber
  ): DeleteRequestBuilder<RetailDiscountThresholdTiersInquiryResults<T>, T> {
    return new DeleteRequestBuilder<
      RetailDiscountThresholdTiersInquiryResults<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountThresholdTiersInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            AmountThreshold: amountThreshold!
          }
    );
  }
}
