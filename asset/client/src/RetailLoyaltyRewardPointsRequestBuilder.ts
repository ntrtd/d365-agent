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
import { RetailLoyaltyRewardPoints } from './RetailLoyaltyRewardPoints';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyRewardPoints} entity.
 */
export class RetailLoyaltyRewardPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyRewardPoints` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyRewardPoints` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyRewardPoints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyRewardPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyRewardPoints`.
   */
  create(
    entity: RetailLoyaltyRewardPoints<T>
  ): CreateRequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyRewardPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyRewardPoints` entity based on its keys.
   * @param rewardPointId Key property. See {@link RetailLoyaltyRewardPoints.rewardPointId}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyRewardPoints` entity based on its keys.
   */
  getByKey(
    rewardPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyRewardPoints<T>, T>(
      this.entityApi,
      { RewardPointId: rewardPointId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyRewardPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyRewardPoints`.
   */
  update(
    entity: RetailLoyaltyRewardPoints<T>
  ): UpdateRequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyRewardPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRewardPoints`.
   * @param rewardPointId Key property. See {@link RetailLoyaltyRewardPoints.rewardPointId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRewardPoints`.
   */
  delete(
    rewardPointId: string
  ): DeleteRequestBuilder<RetailLoyaltyRewardPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRewardPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRewardPoints` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyRewardPoints<T>
  ): DeleteRequestBuilder<RetailLoyaltyRewardPoints<T>, T>;
  delete(
    rewardPointIdOrEntity: any
  ): DeleteRequestBuilder<RetailLoyaltyRewardPoints<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyRewardPoints<T>, T>(
      this.entityApi,
      rewardPointIdOrEntity instanceof RetailLoyaltyRewardPoints
        ? rewardPointIdOrEntity
        : { RewardPointId: rewardPointIdOrEntity! }
    );
  }
}
