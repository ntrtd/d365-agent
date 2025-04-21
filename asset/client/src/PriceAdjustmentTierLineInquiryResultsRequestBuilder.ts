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
import { PriceAdjustmentTierLineInquiryResults } from './PriceAdjustmentTierLineInquiryResults';

/**
 * Request builder class for operations supported on the {@link PriceAdjustmentTierLineInquiryResults} entity.
 */
export class PriceAdjustmentTierLineInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `PriceAdjustmentTierLineInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `PriceAdjustmentTierLineInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
    return new GetAllRequestBuilder<
      PriceAdjustmentTierLineInquiryResults<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceAdjustmentTierLineInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceAdjustmentTierLineInquiryResults`.
   */
  create(
    entity: PriceAdjustmentTierLineInquiryResults<T>
  ): CreateRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
    return new CreateRequestBuilder<
      PriceAdjustmentTierLineInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PriceAdjustmentTierLineInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceAdjustmentTierLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentTierLineInquiryResults.offerId}.
   * @param qtyLowest Key property. See {@link PriceAdjustmentTierLineInquiryResults.qtyLowest}.
   * @returns A request builder for creating requests to retrieve one `PriceAdjustmentTierLineInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    qtyLowest: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<
      PriceAdjustmentTierLineInquiryResults<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      QtyLowest: qtyLowest
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceAdjustmentTierLineInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceAdjustmentTierLineInquiryResults`.
   */
  update(
    entity: PriceAdjustmentTierLineInquiryResults<T>
  ): UpdateRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
    return new UpdateRequestBuilder<
      PriceAdjustmentTierLineInquiryResults<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentTierLineInquiryResults`.
   * @param dataAreaId Key property. See {@link PriceAdjustmentTierLineInquiryResults.dataAreaId}.
   * @param offerId Key property. See {@link PriceAdjustmentTierLineInquiryResults.offerId}.
   * @param qtyLowest Key property. See {@link PriceAdjustmentTierLineInquiryResults.qtyLowest}.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentTierLineInquiryResults`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    qtyLowest: BigNumber
  ): DeleteRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceAdjustmentTierLineInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceAdjustmentTierLineInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: PriceAdjustmentTierLineInquiryResults<T>
  ): DeleteRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    qtyLowest?: BigNumber
  ): DeleteRequestBuilder<PriceAdjustmentTierLineInquiryResults<T>, T> {
    return new DeleteRequestBuilder<
      PriceAdjustmentTierLineInquiryResults<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceAdjustmentTierLineInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            QtyLowest: qtyLowest!
          }
    );
  }
}
