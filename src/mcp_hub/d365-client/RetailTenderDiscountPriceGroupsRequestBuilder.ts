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
import { RetailTenderDiscountPriceGroups } from './RetailTenderDiscountPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailTenderDiscountPriceGroups} entity.
 */
export class RetailTenderDiscountPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderDiscountPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderDiscountPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTenderDiscountPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderDiscountPriceGroups`.
   */
  create(
    entity: RetailTenderDiscountPriceGroups<T>
  ): CreateRequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderDiscountPriceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTenderDiscountPriceGroups.dataAreaId}.
   * @param priceGroupId Key property. See {@link RetailTenderDiscountPriceGroups.priceGroupId}.
   * @param offerId Key property. See {@link RetailTenderDiscountPriceGroups.offerId}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderDiscountPriceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceGroupId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PriceGroupId: priceGroupId,
        OfferId: offerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderDiscountPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderDiscountPriceGroups`.
   */
  update(
    entity: RetailTenderDiscountPriceGroups<T>
  ): UpdateRequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscountPriceGroups`.
   * @param dataAreaId Key property. See {@link RetailTenderDiscountPriceGroups.dataAreaId}.
   * @param priceGroupId Key property. See {@link RetailTenderDiscountPriceGroups.priceGroupId}.
   * @param offerId Key property. See {@link RetailTenderDiscountPriceGroups.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscountPriceGroups`.
   */
  delete(
    dataAreaId: string,
    priceGroupId: string,
    offerId: string
  ): DeleteRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderDiscountPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderDiscountPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderDiscountPriceGroups<T>
  ): DeleteRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceGroupId?: string,
    offerId?: string
  ): DeleteRequestBuilder<RetailTenderDiscountPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailTenderDiscountPriceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTenderDiscountPriceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceGroupId: priceGroupId!,
            OfferId: offerId!
          }
    );
  }
}
