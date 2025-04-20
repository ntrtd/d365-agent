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
import { DiscountPriceComponentGroupExclusionLists } from './DiscountPriceComponentGroupExclusionLists';

/**
 * Request builder class for operations supported on the {@link DiscountPriceComponentGroupExclusionLists} entity.
 */
export class DiscountPriceComponentGroupExclusionListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountPriceComponentGroupExclusionLists` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountPriceComponentGroupExclusionLists` entities.
   */
  getAll(): GetAllRequestBuilder<
    DiscountPriceComponentGroupExclusionLists<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DiscountPriceComponentGroupExclusionLists<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountPriceComponentGroupExclusionLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountPriceComponentGroupExclusionLists`.
   */
  create(
    entity: DiscountPriceComponentGroupExclusionLists<T>
  ): CreateRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T> {
    return new CreateRequestBuilder<
      DiscountPriceComponentGroupExclusionLists<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscountPriceComponentGroupExclusionLists` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountPriceComponentGroupExclusionLists.dataAreaId}.
   * @param offerId Key property. See {@link DiscountPriceComponentGroupExclusionLists.offerId}.
   * @param priceComponentCodeGroup Key property. See {@link DiscountPriceComponentGroupExclusionLists.priceComponentCodeGroup}.
   * @returns A request builder for creating requests to retrieve one `DiscountPriceComponentGroupExclusionLists` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscountPriceComponentGroupExclusionLists<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OfferId: offerId,
      PriceComponentCodeGroup: priceComponentCodeGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountPriceComponentGroupExclusionLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountPriceComponentGroupExclusionLists`.
   */
  update(
    entity: DiscountPriceComponentGroupExclusionLists<T>
  ): UpdateRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T> {
    return new UpdateRequestBuilder<
      DiscountPriceComponentGroupExclusionLists<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountPriceComponentGroupExclusionLists`.
   * @param dataAreaId Key property. See {@link DiscountPriceComponentGroupExclusionLists.dataAreaId}.
   * @param offerId Key property. See {@link DiscountPriceComponentGroupExclusionLists.offerId}.
   * @param priceComponentCodeGroup Key property. See {@link DiscountPriceComponentGroupExclusionLists.priceComponentCodeGroup}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountPriceComponentGroupExclusionLists`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    priceComponentCodeGroup: string
  ): DeleteRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountPriceComponentGroupExclusionLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountPriceComponentGroupExclusionLists` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountPriceComponentGroupExclusionLists<T>
  ): DeleteRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    priceComponentCodeGroup?: string
  ): DeleteRequestBuilder<DiscountPriceComponentGroupExclusionLists<T>, T> {
    return new DeleteRequestBuilder<
      DiscountPriceComponentGroupExclusionLists<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountPriceComponentGroupExclusionLists
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            PriceComponentCodeGroup: priceComponentCodeGroup!
          }
    );
  }
}
