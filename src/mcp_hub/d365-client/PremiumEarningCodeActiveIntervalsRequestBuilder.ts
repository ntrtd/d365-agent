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
import { PremiumEarningCodeActiveIntervals } from './PremiumEarningCodeActiveIntervals';

/**
 * Request builder class for operations supported on the {@link PremiumEarningCodeActiveIntervals} entity.
 */
export class PremiumEarningCodeActiveIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `PremiumEarningCodeActiveIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `PremiumEarningCodeActiveIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
    return new GetAllRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PremiumEarningCodeActiveIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PremiumEarningCodeActiveIntervals`.
   */
  create(
    entity: PremiumEarningCodeActiveIntervals<T>
  ): CreateRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
    return new CreateRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PremiumEarningCodeActiveIntervals` entity based on its keys.
   * @param premiumEarningCodeId Key property. See {@link PremiumEarningCodeActiveIntervals.premiumEarningCodeId}.
   * @param validFrom Key property. See {@link PremiumEarningCodeActiveIntervals.validFrom}.
   * @param validTo Key property. See {@link PremiumEarningCodeActiveIntervals.validTo}.
   * @returns A request builder for creating requests to retrieve one `PremiumEarningCodeActiveIntervals` entity based on its keys.
   */
  getByKey(
    premiumEarningCodeId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
    return new GetByKeyRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>(
      this.entityApi,
      {
        PremiumEarningCodeId: premiumEarningCodeId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PremiumEarningCodeActiveIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PremiumEarningCodeActiveIntervals`.
   */
  update(
    entity: PremiumEarningCodeActiveIntervals<T>
  ): UpdateRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
    return new UpdateRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningCodeActiveIntervals`.
   * @param premiumEarningCodeId Key property. See {@link PremiumEarningCodeActiveIntervals.premiumEarningCodeId}.
   * @param validFrom Key property. See {@link PremiumEarningCodeActiveIntervals.validFrom}.
   * @param validTo Key property. See {@link PremiumEarningCodeActiveIntervals.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningCodeActiveIntervals`.
   */
  delete(
    premiumEarningCodeId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningCodeActiveIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningCodeActiveIntervals` by taking the entity as a parameter.
   */
  delete(
    entity: PremiumEarningCodeActiveIntervals<T>
  ): DeleteRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>;
  delete(
    premiumEarningCodeIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T> {
    return new DeleteRequestBuilder<PremiumEarningCodeActiveIntervals<T>, T>(
      this.entityApi,
      premiumEarningCodeIdOrEntity instanceof PremiumEarningCodeActiveIntervals
        ? premiumEarningCodeIdOrEntity
        : {
            PremiumEarningCodeId: premiumEarningCodeIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
