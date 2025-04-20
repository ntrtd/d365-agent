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
import { LoyaltyCardRewardPointNonTransactionalActivityV2Entity } from './LoyaltyCardRewardPointNonTransactionalActivityV2Entity';

/**
 * Request builder class for operations supported on the {@link LoyaltyCardRewardPointNonTransactionalActivityV2Entity} entity.
 */
export class LoyaltyCardRewardPointNonTransactionalActivityV2EntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
  T
> {
  /**
   * Returns a request builder for querying all `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` entities.
   */
  getAll(): GetAllRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   */
  create(
    entity: LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>
  ): CreateRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  > {
    return new CreateRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` entity based on its keys.
   * @param nonTransactionalActivityId Key property. See {@link LoyaltyCardRewardPointNonTransactionalActivityV2Entity.nonTransactionalActivityId}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` entity based on its keys.
   */
  getByKey(
    nonTransactionalActivityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
      T
    >(this.entityApi, {
      NonTransactionalActivityId: nonTransactionalActivityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   */
  update(
    entity: LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>
  ): UpdateRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  > {
    return new UpdateRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   * @param nonTransactionalActivityId Key property. See {@link LoyaltyCardRewardPointNonTransactionalActivityV2Entity.nonTransactionalActivityId}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   */
  delete(
    nonTransactionalActivityId: string
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointNonTransactionalActivityV2Entity` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  >;
  delete(
    nonTransactionalActivityIdOrEntity: any
  ): DeleteRequestBuilder<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
    T
  > {
    return new DeleteRequestBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<T>,
      T
    >(
      this.entityApi,
      nonTransactionalActivityIdOrEntity instanceof
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity
        ? nonTransactionalActivityIdOrEntity
        : { NonTransactionalActivityId: nonTransactionalActivityIdOrEntity! }
    );
  }
}
