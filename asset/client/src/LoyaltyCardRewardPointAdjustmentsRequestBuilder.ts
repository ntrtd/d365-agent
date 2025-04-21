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
import { LoyaltyCardRewardPointAdjustments } from './LoyaltyCardRewardPointAdjustments';

/**
 * Request builder class for operations supported on the {@link LoyaltyCardRewardPointAdjustments} entity.
 */
export class LoyaltyCardRewardPointAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `LoyaltyCardRewardPointAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyCardRewardPointAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
    return new GetAllRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LoyaltyCardRewardPointAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyCardRewardPointAdjustments`.
   */
  create(
    entity: LoyaltyCardRewardPointAdjustments<T>
  ): CreateRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
    return new CreateRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyCardRewardPointAdjustments` entity based on its keys.
   * @param adjustmentId Key property. See {@link LoyaltyCardRewardPointAdjustments.adjustmentId}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyCardRewardPointAdjustments` entity based on its keys.
   */
  getByKey(
    adjustmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>(
      this.entityApi,
      { AdjustmentId: adjustmentId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyCardRewardPointAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyCardRewardPointAdjustments`.
   */
  update(
    entity: LoyaltyCardRewardPointAdjustments<T>
  ): UpdateRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
    return new UpdateRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointAdjustments`.
   * @param adjustmentId Key property. See {@link LoyaltyCardRewardPointAdjustments.adjustmentId}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointAdjustments`.
   */
  delete(
    adjustmentId: string
  ): DeleteRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardRewardPointAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardRewardPointAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltyCardRewardPointAdjustments<T>
  ): DeleteRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>;
  delete(
    adjustmentIdOrEntity: any
  ): DeleteRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T> {
    return new DeleteRequestBuilder<LoyaltyCardRewardPointAdjustments<T>, T>(
      this.entityApi,
      adjustmentIdOrEntity instanceof LoyaltyCardRewardPointAdjustments
        ? adjustmentIdOrEntity
        : { AdjustmentId: adjustmentIdOrEntity! }
    );
  }
}
