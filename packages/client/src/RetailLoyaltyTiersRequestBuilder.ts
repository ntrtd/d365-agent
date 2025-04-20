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
import { RetailLoyaltyTiers } from './RetailLoyaltyTiers';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyTiers} entity.
 */
export class RetailLoyaltyTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyTiers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyTiers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyTiers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyTiers<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyTiers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyTiers`.
   */
  create(
    entity: RetailLoyaltyTiers<T>
  ): CreateRequestBuilder<RetailLoyaltyTiers<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyTiers` entity based on its keys.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTiers.loyaltyName}.
   * @param tierId Key property. See {@link RetailLoyaltyTiers.tierId}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyTiers` entity based on its keys.
   */
  getByKey(
    loyaltyName: DeserializedType<T, 'Edm.String'>,
    tierId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyTiers<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyTiers<T>, T>(
      this.entityApi,
      {
        LoyaltyName: loyaltyName,
        TierId: tierId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyTiers`.
   */
  update(
    entity: RetailLoyaltyTiers<T>
  ): UpdateRequestBuilder<RetailLoyaltyTiers<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTiers`.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTiers.loyaltyName}.
   * @param tierId Key property. See {@link RetailLoyaltyTiers.tierId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTiers`.
   */
  delete(
    loyaltyName: string,
    tierId: string
  ): DeleteRequestBuilder<RetailLoyaltyTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTiers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyTiers<T>
  ): DeleteRequestBuilder<RetailLoyaltyTiers<T>, T>;
  delete(
    loyaltyNameOrEntity: any,
    tierId?: string
  ): DeleteRequestBuilder<RetailLoyaltyTiers<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyTiers<T>, T>(
      this.entityApi,
      loyaltyNameOrEntity instanceof RetailLoyaltyTiers
        ? loyaltyNameOrEntity
        : {
            LoyaltyName: loyaltyNameOrEntity!,
            TierId: tierId!
          }
    );
  }
}
