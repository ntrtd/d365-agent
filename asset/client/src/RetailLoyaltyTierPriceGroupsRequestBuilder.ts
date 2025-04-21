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
import { RetailLoyaltyTierPriceGroups } from './RetailLoyaltyTierPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyTierPriceGroups} entity.
 */
export class RetailLoyaltyTierPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyTierPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyTierPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyTierPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyTierPriceGroups`.
   */
  create(
    entity: RetailLoyaltyTierPriceGroups<T>
  ): CreateRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyTierPriceGroups` entity based on its keys.
   * @param priceGroupId Key property. See {@link RetailLoyaltyTierPriceGroups.priceGroupId}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierPriceGroups.loyaltyTierId}.
   * @param priceGroupCompany Key property. See {@link RetailLoyaltyTierPriceGroups.priceGroupCompany}.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTierPriceGroups.loyaltyName}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyTierPriceGroups` entity based on its keys.
   */
  getByKey(
    priceGroupId: DeserializedType<T, 'Edm.String'>,
    loyaltyTierId: DeserializedType<T, 'Edm.String'>,
    priceGroupCompany: DeserializedType<T, 'Edm.String'>,
    loyaltyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>(
      this.entityApi,
      {
        PriceGroupId: priceGroupId,
        LoyaltyTierId: loyaltyTierId,
        PriceGroupCompany: priceGroupCompany,
        LoyaltyName: loyaltyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyTierPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyTierPriceGroups`.
   */
  update(
    entity: RetailLoyaltyTierPriceGroups<T>
  ): UpdateRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierPriceGroups`.
   * @param priceGroupId Key property. See {@link RetailLoyaltyTierPriceGroups.priceGroupId}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierPriceGroups.loyaltyTierId}.
   * @param priceGroupCompany Key property. See {@link RetailLoyaltyTierPriceGroups.priceGroupCompany}.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTierPriceGroups.loyaltyName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierPriceGroups`.
   */
  delete(
    priceGroupId: string,
    loyaltyTierId: string,
    priceGroupCompany: string,
    loyaltyName: string
  ): DeleteRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyTierPriceGroups<T>
  ): DeleteRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>;
  delete(
    priceGroupIdOrEntity: any,
    loyaltyTierId?: string,
    priceGroupCompany?: string,
    loyaltyName?: string
  ): DeleteRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyTierPriceGroups<T>, T>(
      this.entityApi,
      priceGroupIdOrEntity instanceof RetailLoyaltyTierPriceGroups
        ? priceGroupIdOrEntity
        : {
            PriceGroupId: priceGroupIdOrEntity!,
            LoyaltyTierId: loyaltyTierId!,
            PriceGroupCompany: priceGroupCompany!,
            LoyaltyName: loyaltyName!
          }
    );
  }
}
