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
import { RetailDiscountPriceGroups } from './RetailDiscountPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailDiscountPriceGroups} entity.
 */
export class RetailDiscountPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDiscountPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDiscountPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDiscountPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDiscountPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailDiscountPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDiscountPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDiscountPriceGroups`.
   */
  create(
    entity: RetailDiscountPriceGroups<T>
  ): CreateRequestBuilder<RetailDiscountPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailDiscountPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDiscountPriceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDiscountPriceGroups.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountPriceGroups.offerId}.
   * @param priceGroupId Key property. See {@link RetailDiscountPriceGroups.priceGroupId}.
   * @returns A request builder for creating requests to retrieve one `RetailDiscountPriceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>,
    priceGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDiscountPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailDiscountPriceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OfferId: offerId,
        PriceGroupId: priceGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDiscountPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDiscountPriceGroups`.
   */
  update(
    entity: RetailDiscountPriceGroups<T>
  ): UpdateRequestBuilder<RetailDiscountPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailDiscountPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountPriceGroups`.
   * @param dataAreaId Key property. See {@link RetailDiscountPriceGroups.dataAreaId}.
   * @param offerId Key property. See {@link RetailDiscountPriceGroups.offerId}.
   * @param priceGroupId Key property. See {@link RetailDiscountPriceGroups.priceGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountPriceGroups`.
   */
  delete(
    dataAreaId: string,
    offerId: string,
    priceGroupId: string
  ): DeleteRequestBuilder<RetailDiscountPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDiscountPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDiscountPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDiscountPriceGroups<T>
  ): DeleteRequestBuilder<RetailDiscountPriceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    offerId?: string,
    priceGroupId?: string
  ): DeleteRequestBuilder<RetailDiscountPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailDiscountPriceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDiscountPriceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OfferId: offerId!,
            PriceGroupId: priceGroupId!
          }
    );
  }
}
