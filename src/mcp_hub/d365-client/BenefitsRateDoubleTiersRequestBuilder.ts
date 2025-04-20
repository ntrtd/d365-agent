/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BenefitsRateDoubleTiers } from './BenefitsRateDoubleTiers';

/**
 * Request builder class for operations supported on the {@link BenefitsRateDoubleTiers} entity.
 */
export class BenefitsRateDoubleTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsRateDoubleTiers<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsRateDoubleTiers` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsRateDoubleTiers` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsRateDoubleTiers<T>, T> {
    return new GetAllRequestBuilder<BenefitsRateDoubleTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsRateDoubleTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsRateDoubleTiers`.
   */
  create(
    entity: BenefitsRateDoubleTiers<T>
  ): CreateRequestBuilder<BenefitsRateDoubleTiers<T>, T> {
    return new CreateRequestBuilder<BenefitsRateDoubleTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsRateDoubleTiers` entity based on its keys.
   * @param rateId Key property. See {@link BenefitsRateDoubleTiers.rateId}.
   * @param rateValidTo Key property. See {@link BenefitsRateDoubleTiers.rateValidTo}.
   * @param rateValidFrom Key property. See {@link BenefitsRateDoubleTiers.rateValidFrom}.
   * @param tierCodeIdForSingleTier Key property. See {@link BenefitsRateDoubleTiers.tierCodeIdForSingleTier}.
   * @param tierCodeIdForDoubleTier Key property. See {@link BenefitsRateDoubleTiers.tierCodeIdForDoubleTier}.
   * @returns A request builder for creating requests to retrieve one `BenefitsRateDoubleTiers` entity based on its keys.
   */
  getByKey(
    rateId: DeserializedType<T, 'Edm.String'>,
    rateValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    rateValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    tierCodeIdForSingleTier: DeserializedType<T, 'Edm.String'>,
    tierCodeIdForDoubleTier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsRateDoubleTiers<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsRateDoubleTiers<T>, T>(
      this.entityApi,
      {
        RateId: rateId,
        RateValidTo: rateValidTo,
        RateValidFrom: rateValidFrom,
        TierCodeIdForSingleTier: tierCodeIdForSingleTier,
        TierCodeIdForDoubleTier: tierCodeIdForDoubleTier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsRateDoubleTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsRateDoubleTiers`.
   */
  update(
    entity: BenefitsRateDoubleTiers<T>
  ): UpdateRequestBuilder<BenefitsRateDoubleTiers<T>, T> {
    return new UpdateRequestBuilder<BenefitsRateDoubleTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsRateDoubleTiers`.
   * @param rateId Key property. See {@link BenefitsRateDoubleTiers.rateId}.
   * @param rateValidTo Key property. See {@link BenefitsRateDoubleTiers.rateValidTo}.
   * @param rateValidFrom Key property. See {@link BenefitsRateDoubleTiers.rateValidFrom}.
   * @param tierCodeIdForSingleTier Key property. See {@link BenefitsRateDoubleTiers.tierCodeIdForSingleTier}.
   * @param tierCodeIdForDoubleTier Key property. See {@link BenefitsRateDoubleTiers.tierCodeIdForDoubleTier}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRateDoubleTiers`.
   */
  delete(
    rateId: string,
    rateValidTo: Moment,
    rateValidFrom: Moment,
    tierCodeIdForSingleTier: string,
    tierCodeIdForDoubleTier: string
  ): DeleteRequestBuilder<BenefitsRateDoubleTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsRateDoubleTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRateDoubleTiers` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsRateDoubleTiers<T>
  ): DeleteRequestBuilder<BenefitsRateDoubleTiers<T>, T>;
  delete(
    rateIdOrEntity: any,
    rateValidTo?: Moment,
    rateValidFrom?: Moment,
    tierCodeIdForSingleTier?: string,
    tierCodeIdForDoubleTier?: string
  ): DeleteRequestBuilder<BenefitsRateDoubleTiers<T>, T> {
    return new DeleteRequestBuilder<BenefitsRateDoubleTiers<T>, T>(
      this.entityApi,
      rateIdOrEntity instanceof BenefitsRateDoubleTiers
        ? rateIdOrEntity
        : {
            RateId: rateIdOrEntity!,
            RateValidTo: rateValidTo!,
            RateValidFrom: rateValidFrom!,
            TierCodeIdForSingleTier: tierCodeIdForSingleTier!,
            TierCodeIdForDoubleTier: tierCodeIdForDoubleTier!
          }
    );
  }
}
