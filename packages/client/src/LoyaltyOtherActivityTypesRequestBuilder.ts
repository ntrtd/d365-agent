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
import { LoyaltyOtherActivityTypes } from './LoyaltyOtherActivityTypes';

/**
 * Request builder class for operations supported on the {@link LoyaltyOtherActivityTypes} entity.
 */
export class LoyaltyOtherActivityTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LoyaltyOtherActivityTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyOtherActivityTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
    return new GetAllRequestBuilder<LoyaltyOtherActivityTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LoyaltyOtherActivityTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyOtherActivityTypes`.
   */
  create(
    entity: LoyaltyOtherActivityTypes<T>
  ): CreateRequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
    return new CreateRequestBuilder<LoyaltyOtherActivityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyOtherActivityTypes` entity based on its keys.
   * @param loyaltyOtherActivityTypeId Key property. See {@link LoyaltyOtherActivityTypes.loyaltyOtherActivityTypeId}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyOtherActivityTypes` entity based on its keys.
   */
  getByKey(
    loyaltyOtherActivityTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
    return new GetByKeyRequestBuilder<LoyaltyOtherActivityTypes<T>, T>(
      this.entityApi,
      { LoyaltyOtherActivityTypeId: loyaltyOtherActivityTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyOtherActivityTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyOtherActivityTypes`.
   */
  update(
    entity: LoyaltyOtherActivityTypes<T>
  ): UpdateRequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
    return new UpdateRequestBuilder<LoyaltyOtherActivityTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyOtherActivityTypes`.
   * @param loyaltyOtherActivityTypeId Key property. See {@link LoyaltyOtherActivityTypes.loyaltyOtherActivityTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyOtherActivityTypes`.
   */
  delete(
    loyaltyOtherActivityTypeId: string
  ): DeleteRequestBuilder<LoyaltyOtherActivityTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyOtherActivityTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyOtherActivityTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltyOtherActivityTypes<T>
  ): DeleteRequestBuilder<LoyaltyOtherActivityTypes<T>, T>;
  delete(
    loyaltyOtherActivityTypeIdOrEntity: any
  ): DeleteRequestBuilder<LoyaltyOtherActivityTypes<T>, T> {
    return new DeleteRequestBuilder<LoyaltyOtherActivityTypes<T>, T>(
      this.entityApi,
      loyaltyOtherActivityTypeIdOrEntity instanceof LoyaltyOtherActivityTypes
        ? loyaltyOtherActivityTypeIdOrEntity
        : { LoyaltyOtherActivityTypeId: loyaltyOtherActivityTypeIdOrEntity! }
    );
  }
}
