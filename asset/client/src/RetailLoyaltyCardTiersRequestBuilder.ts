/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { RetailLoyaltyCardTiers } from './RetailLoyaltyCardTiers';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyCardTiers} entity.
 */
export class RetailLoyaltyCardTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyCardTiers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyCardTiers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyCardTiers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyCardTiers<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyCardTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyCardTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyCardTiers`.
   */
  create(
    entity: RetailLoyaltyCardTiers<T>
  ): CreateRequestBuilder<RetailLoyaltyCardTiers<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyCardTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyCardTiers` entity based on its keys.
   * @param loyaltyCard Key property. See {@link RetailLoyaltyCardTiers.loyaltyCard}.
   * @param loyaltyTier Key property. See {@link RetailLoyaltyCardTiers.loyaltyTier}.
   * @param validFrom Key property. See {@link RetailLoyaltyCardTiers.validFrom}.
   * @param validTo Key property. See {@link RetailLoyaltyCardTiers.validTo}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyCardTiers.loyaltyProgramName}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyCardTiers` entity based on its keys.
   */
  getByKey(
    loyaltyCard: DeserializedType<T, 'Edm.Int64'>,
    loyaltyTier: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    loyaltyProgramName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyCardTiers<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyCardTiers<T>, T>(
      this.entityApi,
      {
        LoyaltyCard: loyaltyCard,
        LoyaltyTier: loyaltyTier,
        ValidFrom: validFrom,
        ValidTo: validTo,
        LoyaltyProgramName: loyaltyProgramName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyCardTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyCardTiers`.
   */
  update(
    entity: RetailLoyaltyCardTiers<T>
  ): UpdateRequestBuilder<RetailLoyaltyCardTiers<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyCardTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardTiers`.
   * @param loyaltyCard Key property. See {@link RetailLoyaltyCardTiers.loyaltyCard}.
   * @param loyaltyTier Key property. See {@link RetailLoyaltyCardTiers.loyaltyTier}.
   * @param validFrom Key property. See {@link RetailLoyaltyCardTiers.validFrom}.
   * @param validTo Key property. See {@link RetailLoyaltyCardTiers.validTo}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyCardTiers.loyaltyProgramName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardTiers`.
   */
  delete(
    loyaltyCard: BigNumber,
    loyaltyTier: BigNumber,
    validFrom: Moment,
    validTo: Moment,
    loyaltyProgramName: string
  ): DeleteRequestBuilder<RetailLoyaltyCardTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCardTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCardTiers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyCardTiers<T>
  ): DeleteRequestBuilder<RetailLoyaltyCardTiers<T>, T>;
  delete(
    loyaltyCardOrEntity: any,
    loyaltyTier?: BigNumber,
    validFrom?: Moment,
    validTo?: Moment,
    loyaltyProgramName?: string
  ): DeleteRequestBuilder<RetailLoyaltyCardTiers<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyCardTiers<T>, T>(
      this.entityApi,
      loyaltyCardOrEntity instanceof RetailLoyaltyCardTiers
        ? loyaltyCardOrEntity
        : {
            LoyaltyCard: loyaltyCardOrEntity!,
            LoyaltyTier: loyaltyTier!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            LoyaltyProgramName: loyaltyProgramName!
          }
    );
  }
}
