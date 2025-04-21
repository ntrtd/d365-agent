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
import { RetailLoyaltyPriceGroups } from './RetailLoyaltyPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyPriceGroups} entity.
 */
export class RetailLoyaltyPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyPriceGroups`.
   */
  create(
    entity: RetailLoyaltyPriceGroups<T>
  ): CreateRequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyPriceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailLoyaltyPriceGroups.dataAreaId}.
   * @param loyaltyName Key property. See {@link RetailLoyaltyPriceGroups.loyaltyName}.
   * @param priceCustomerGroupCode Key property. See {@link RetailLoyaltyPriceGroups.priceCustomerGroupCode}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyPriceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    loyaltyName: DeserializedType<T, 'Edm.String'>,
    priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyPriceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LoyaltyName: loyaltyName,
        PriceCustomerGroupCode: priceCustomerGroupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyPriceGroups`.
   */
  update(
    entity: RetailLoyaltyPriceGroups<T>
  ): UpdateRequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyPriceGroups`.
   * @param dataAreaId Key property. See {@link RetailLoyaltyPriceGroups.dataAreaId}.
   * @param loyaltyName Key property. See {@link RetailLoyaltyPriceGroups.loyaltyName}.
   * @param priceCustomerGroupCode Key property. See {@link RetailLoyaltyPriceGroups.priceCustomerGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyPriceGroups`.
   */
  delete(
    dataAreaId: string,
    loyaltyName: string,
    priceCustomerGroupCode: string
  ): DeleteRequestBuilder<RetailLoyaltyPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyPriceGroups<T>
  ): DeleteRequestBuilder<RetailLoyaltyPriceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    loyaltyName?: string,
    priceCustomerGroupCode?: string
  ): DeleteRequestBuilder<RetailLoyaltyPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyPriceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailLoyaltyPriceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LoyaltyName: loyaltyName!,
            PriceCustomerGroupCode: priceCustomerGroupCode!
          }
    );
  }
}
