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
import { BenefitsRateTiers } from './BenefitsRateTiers';

/**
 * Request builder class for operations supported on the {@link BenefitsRateTiers} entity.
 */
export class BenefitsRateTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsRateTiers<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsRateTiers` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsRateTiers` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsRateTiers<T>, T> {
    return new GetAllRequestBuilder<BenefitsRateTiers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsRateTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsRateTiers`.
   */
  create(
    entity: BenefitsRateTiers<T>
  ): CreateRequestBuilder<BenefitsRateTiers<T>, T> {
    return new CreateRequestBuilder<BenefitsRateTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsRateTiers` entity based on its keys.
   * @param rateId Key property. See {@link BenefitsRateTiers.rateId}.
   * @param rateValidTo Key property. See {@link BenefitsRateTiers.rateValidTo}.
   * @param rateValidFrom Key property. See {@link BenefitsRateTiers.rateValidFrom}.
   * @param tierCodeId Key property. See {@link BenefitsRateTiers.tierCodeId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsRateTiers` entity based on its keys.
   */
  getByKey(
    rateId: DeserializedType<T, 'Edm.String'>,
    rateValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    rateValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    tierCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsRateTiers<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsRateTiers<T>, T>(this.entityApi, {
      RateId: rateId,
      RateValidTo: rateValidTo,
      RateValidFrom: rateValidFrom,
      TierCodeId: tierCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsRateTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsRateTiers`.
   */
  update(
    entity: BenefitsRateTiers<T>
  ): UpdateRequestBuilder<BenefitsRateTiers<T>, T> {
    return new UpdateRequestBuilder<BenefitsRateTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsRateTiers`.
   * @param rateId Key property. See {@link BenefitsRateTiers.rateId}.
   * @param rateValidTo Key property. See {@link BenefitsRateTiers.rateValidTo}.
   * @param rateValidFrom Key property. See {@link BenefitsRateTiers.rateValidFrom}.
   * @param tierCodeId Key property. See {@link BenefitsRateTiers.tierCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRateTiers`.
   */
  delete(
    rateId: string,
    rateValidTo: Moment,
    rateValidFrom: Moment,
    tierCodeId: string
  ): DeleteRequestBuilder<BenefitsRateTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsRateTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsRateTiers` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsRateTiers<T>
  ): DeleteRequestBuilder<BenefitsRateTiers<T>, T>;
  delete(
    rateIdOrEntity: any,
    rateValidTo?: Moment,
    rateValidFrom?: Moment,
    tierCodeId?: string
  ): DeleteRequestBuilder<BenefitsRateTiers<T>, T> {
    return new DeleteRequestBuilder<BenefitsRateTiers<T>, T>(
      this.entityApi,
      rateIdOrEntity instanceof BenefitsRateTiers
        ? rateIdOrEntity
        : {
            RateId: rateIdOrEntity!,
            RateValidTo: rateValidTo!,
            RateValidFrom: rateValidFrom!,
            TierCodeId: tierCodeId!
          }
    );
  }
}
