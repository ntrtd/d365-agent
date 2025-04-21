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
import { LoyaltyCardRewardPointNonTransactionalActivities } from './LoyaltyCardRewardPointNonTransactionalActivities';

/**
 * Request builder class for operations supported on the {@link LoyaltyCardRewardPointNonTransactionalActivities} entity.
 */
export class LoyaltyCardRewardPointNonTransactionalActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  LoyaltyCardRewardPointNonTransactionalActivities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `LoyaltyCardRewardPointNonTransactionalActivities` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyCardRewardPointNonTransactionalActivities` entities.
   */
  getAll(): GetAllRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoyaltyCardRewardPointNonTransactionalActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   */
  create(
    entity: LoyaltyCardRewardPointNonTransactionalActivities<T>
  ): CreateRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  > {
    return new CreateRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyCardRewardPointNonTransactionalActivities` entity based on its keys.
   * @param nonTransactionalActivityId Key property. See {@link LoyaltyCardRewardPointNonTransactionalActivities.nonTransactionalActivityId}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyCardRewardPointNonTransactionalActivities` entity based on its keys.
   */
  getByKey(
    nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<T>,
      T
    >(this.entityApi, {
      NonTransactionalActivityId: nonTransactionalActivityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   */
  update(
    entity: LoyaltyCardRewardPointNonTransactionalActivities<T>
  ): UpdateRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   * @param nonTransactionalActivityId Key property. See {@link LoyaltyCardRewardPointNonTransactionalActivities.nonTransactionalActivityId}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   */
  delete(
    nonTransactionalActivityId: string
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointNonTransactionalActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointNonTransactionalActivities` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltyCardRewardPointNonTransactionalActivities<T>
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  >;
  delete(
    nonTransactionalActivityIdOrEntity: any
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<T>,
      T
    >(
      this.entityApi,
      nonTransactionalActivityIdOrEntity instanceof
      LoyaltyCardRewardPointNonTransactionalActivities
        ? nonTransactionalActivityIdOrEntity
        : { NonTransactionalActivityId: nonTransactionalActivityIdOrEntity! }
    );
  }
}
