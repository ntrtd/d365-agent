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
import { RetailLoyaltyTierRules } from './RetailLoyaltyTierRules';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyTierRules} entity.
 */
export class RetailLoyaltyTierRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyTierRules<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyTierRules` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyTierRules` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyTierRules<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyTierRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyTierRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyTierRules`.
   */
  create(
    entity: RetailLoyaltyTierRules<T>
  ): CreateRequestBuilder<RetailLoyaltyTierRules<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyTierRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyTierRules` entity based on its keys.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTierRules.loyaltyName}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierRules.loyaltyTierId}.
   * @param rewardPointId Key property. See {@link RetailLoyaltyTierRules.rewardPointId}.
   * @param evaluationDateInterval Key property. See {@link RetailLoyaltyTierRules.evaluationDateInterval}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyTierRules` entity based on its keys.
   */
  getByKey(
    loyaltyName: DeserializedType<T, 'Edm.String'>,
    loyaltyTierId: DeserializedType<T, 'Edm.String'>,
    rewardPointId: DeserializedType<T, 'Edm.String'>,
    evaluationDateInterval: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyTierRules<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyTierRules<T>, T>(
      this.entityApi,
      {
        LoyaltyName: loyaltyName,
        LoyaltyTierId: loyaltyTierId,
        RewardPointId: rewardPointId,
        EvaluationDateInterval: evaluationDateInterval
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyTierRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyTierRules`.
   */
  update(
    entity: RetailLoyaltyTierRules<T>
  ): UpdateRequestBuilder<RetailLoyaltyTierRules<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyTierRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierRules`.
   * @param loyaltyName Key property. See {@link RetailLoyaltyTierRules.loyaltyName}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierRules.loyaltyTierId}.
   * @param rewardPointId Key property. See {@link RetailLoyaltyTierRules.rewardPointId}.
   * @param evaluationDateInterval Key property. See {@link RetailLoyaltyTierRules.evaluationDateInterval}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierRules`.
   */
  delete(
    loyaltyName: string,
    loyaltyTierId: string,
    rewardPointId: string,
    evaluationDateInterval: string
  ): DeleteRequestBuilder<RetailLoyaltyTierRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierRules` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyTierRules<T>
  ): DeleteRequestBuilder<RetailLoyaltyTierRules<T>, T>;
  delete(
    loyaltyNameOrEntity: any,
    loyaltyTierId?: string,
    rewardPointId?: string,
    evaluationDateInterval?: string
  ): DeleteRequestBuilder<RetailLoyaltyTierRules<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyTierRules<T>, T>(
      this.entityApi,
      loyaltyNameOrEntity instanceof RetailLoyaltyTierRules
        ? loyaltyNameOrEntity
        : {
            LoyaltyName: loyaltyNameOrEntity!,
            LoyaltyTierId: loyaltyTierId!,
            RewardPointId: rewardPointId!,
            EvaluationDateInterval: evaluationDateInterval!
          }
    );
  }
}
