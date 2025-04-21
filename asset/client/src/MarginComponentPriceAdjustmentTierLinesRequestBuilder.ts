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
import { MarginComponentPriceAdjustmentTierLines } from './MarginComponentPriceAdjustmentTierLines';

/**
 * Request builder class for operations supported on the {@link MarginComponentPriceAdjustmentTierLines} entity.
 */
export class MarginComponentPriceAdjustmentTierLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T> {
  /**
   * Returns a request builder for querying all `MarginComponentPriceAdjustmentTierLines` entities.
   * @returns A request builder for creating requests to retrieve all `MarginComponentPriceAdjustmentTierLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    MarginComponentPriceAdjustmentTierLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MarginComponentPriceAdjustmentTierLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MarginComponentPriceAdjustmentTierLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarginComponentPriceAdjustmentTierLines`.
   */
  create(
    entity: MarginComponentPriceAdjustmentTierLines<T>
  ): CreateRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T> {
    return new CreateRequestBuilder<
      MarginComponentPriceAdjustmentTierLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MarginComponentPriceAdjustmentTierLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustmentTierLines.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustmentTierLines.offerId}.
   * @param qtyLowest Key property. See {@link MarginComponentPriceAdjustmentTierLines.qtyLowest}.
   * @returns A request builder for creating requests to retrieve one `MarginComponentPriceAdjustmentTierLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    qtyLowest: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T> {
    return new GetByKeyRequestBuilder<
      MarginComponentPriceAdjustmentTierLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      QtyLowest: qtyLowest
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MarginComponentPriceAdjustmentTierLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarginComponentPriceAdjustmentTierLines`.
   */
  update(
    entity: MarginComponentPriceAdjustmentTierLines<T>
  ): UpdateRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T> {
    return new UpdateRequestBuilder<
      MarginComponentPriceAdjustmentTierLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustmentTierLines`.
   * @param dataAreaId Key property. See {@link MarginComponentPriceAdjustmentTierLines.dataAreaId}.
   * @param offerId Key property. See {@link MarginComponentPriceAdjustmentTierLines.offerId}.
   * @param qtyLowest Key property. See {@link MarginComponentPriceAdjustmentTierLines.qtyLowest}.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustmentTierLines`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    qtyLowest: BigNumber
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarginComponentPriceAdjustmentTierLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarginComponentPriceAdjustmentTierLines` by taking the entity as a parameter.
   */
  delete(
    entity: MarginComponentPriceAdjustmentTierLines<T>
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    qtyLowest?: BigNumber
  ): DeleteRequestBuilder<MarginComponentPriceAdjustmentTierLines<T>, T> {
    return new DeleteRequestBuilder<
      MarginComponentPriceAdjustmentTierLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarginComponentPriceAdjustmentTierLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            QtyLowest: qtyLowest!
          }
    );
  }
}
