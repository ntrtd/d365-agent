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
import { DiscountAndMarginComponentPriceAdjustments } from './DiscountAndMarginComponentPriceAdjustments';

/**
 * Request builder class for operations supported on the {@link DiscountAndMarginComponentPriceAdjustments} entity.
 */
export class DiscountAndMarginComponentPriceAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountAndMarginComponentPriceAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountAndMarginComponentPriceAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<
    DiscountAndMarginComponentPriceAdjustments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DiscountAndMarginComponentPriceAdjustments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountAndMarginComponentPriceAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   */
  create(
    entity: DiscountAndMarginComponentPriceAdjustments<T>
  ): CreateRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T> {
    return new CreateRequestBuilder<
      DiscountAndMarginComponentPriceAdjustments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscountAndMarginComponentPriceAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountAndMarginComponentPriceAdjustments.dataAreaId}.
   * @param offerId Key property. See {@link DiscountAndMarginComponentPriceAdjustments.offerId}.
   * @returns A request builder for creating requests to retrieve one `DiscountAndMarginComponentPriceAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscountAndMarginComponentPriceAdjustments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   */
  update(
    entity: DiscountAndMarginComponentPriceAdjustments<T>
  ): UpdateRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T> {
    return new UpdateRequestBuilder<
      DiscountAndMarginComponentPriceAdjustments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   * @param dataAreaId Key property. See {@link DiscountAndMarginComponentPriceAdjustments.dataAreaId}.
   * @param offerId Key property. See {@link DiscountAndMarginComponentPriceAdjustments.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   */
  delete(
    dataAreaId: string,
    offerId: string
  ): DeleteRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountAndMarginComponentPriceAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountAndMarginComponentPriceAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountAndMarginComponentPriceAdjustments<T>
  ): DeleteRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string
  ): DeleteRequestBuilder<DiscountAndMarginComponentPriceAdjustments<T>, T> {
    return new DeleteRequestBuilder<
      DiscountAndMarginComponentPriceAdjustments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountAndMarginComponentPriceAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!
          }
    );
  }
}
