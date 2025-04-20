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
import { BenefitsPayFrequencyPayPeriods } from './BenefitsPayFrequencyPayPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsPayFrequencyPayPeriods} entity.
 */
export class BenefitsPayFrequencyPayPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPayFrequencyPayPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPayFrequencyPayPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPayFrequencyPayPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPayFrequencyPayPeriods`.
   */
  create(
    entity: BenefitsPayFrequencyPayPeriods<T>
  ): CreateRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPayFrequencyPayPeriods` entity based on its keys.
   * @param paymentFrequencyId Key property. See {@link BenefitsPayFrequencyPayPeriods.paymentFrequencyId}.
   * @param periodStartDateTime Key property. See {@link BenefitsPayFrequencyPayPeriods.periodStartDateTime}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPayFrequencyPayPeriods` entity based on its keys.
   */
  getByKey(
    paymentFrequencyId: DeserializedType<T, 'Edm.String'>,
    periodStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>(
      this.entityApi,
      {
        PaymentFrequencyId: paymentFrequencyId,
        PeriodStartDateTime: periodStartDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPayFrequencyPayPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPayFrequencyPayPeriods`.
   */
  update(
    entity: BenefitsPayFrequencyPayPeriods<T>
  ): UpdateRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPayFrequencyPayPeriods`.
   * @param paymentFrequencyId Key property. See {@link BenefitsPayFrequencyPayPeriods.paymentFrequencyId}.
   * @param periodStartDateTime Key property. See {@link BenefitsPayFrequencyPayPeriods.periodStartDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPayFrequencyPayPeriods`.
   */
  delete(
    paymentFrequencyId: string,
    periodStartDateTime: Moment
  ): DeleteRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPayFrequencyPayPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPayFrequencyPayPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPayFrequencyPayPeriods<T>
  ): DeleteRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>;
  delete(
    paymentFrequencyIdOrEntity: any,
    periodStartDateTime?: Moment
  ): DeleteRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsPayFrequencyPayPeriods<T>, T>(
      this.entityApi,
      paymentFrequencyIdOrEntity instanceof BenefitsPayFrequencyPayPeriods
        ? paymentFrequencyIdOrEntity
        : {
            PaymentFrequencyId: paymentFrequencyIdOrEntity!,
            PeriodStartDateTime: periodStartDateTime!
          }
    );
  }
}
