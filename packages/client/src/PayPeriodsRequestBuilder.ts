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
import { PayPeriods } from './PayPeriods';

/**
 * Request builder class for operations supported on the {@link PayPeriods} entity.
 */
export class PayPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `PayPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `PayPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<PayPeriods<T>, T> {
    return new GetAllRequestBuilder<PayPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayPeriods`.
   */
  create(entity: PayPeriods<T>): CreateRequestBuilder<PayPeriods<T>, T> {
    return new CreateRequestBuilder<PayPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayPeriods` entity based on its keys.
   * @param payCycleId Key property. See {@link PayPeriods.payCycleId}.
   * @param periodStartDate Key property. See {@link PayPeriods.periodStartDate}.
   * @param periodEndDate Key property. See {@link PayPeriods.periodEndDate}.
   * @returns A request builder for creating requests to retrieve one `PayPeriods` entity based on its keys.
   */
  getByKey(
    payCycleId: DeserializedType<T, 'Edm.String'>,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayPeriods<T>, T> {
    return new GetByKeyRequestBuilder<PayPeriods<T>, T>(this.entityApi, {
      PayCycleId: payCycleId,
      PeriodStartDate: periodStartDate,
      PeriodEndDate: periodEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayPeriods`.
   */
  update(entity: PayPeriods<T>): UpdateRequestBuilder<PayPeriods<T>, T> {
    return new UpdateRequestBuilder<PayPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayPeriods`.
   * @param payCycleId Key property. See {@link PayPeriods.payCycleId}.
   * @param periodStartDate Key property. See {@link PayPeriods.periodStartDate}.
   * @param periodEndDate Key property. See {@link PayPeriods.periodEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayPeriods`.
   */
  delete(
    payCycleId: string,
    periodStartDate: Moment,
    periodEndDate: Moment
  ): DeleteRequestBuilder<PayPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayPeriods` by taking the entity as a parameter.
   */
  delete(entity: PayPeriods<T>): DeleteRequestBuilder<PayPeriods<T>, T>;
  delete(
    payCycleIdOrEntity: any,
    periodStartDate?: Moment,
    periodEndDate?: Moment
  ): DeleteRequestBuilder<PayPeriods<T>, T> {
    return new DeleteRequestBuilder<PayPeriods<T>, T>(
      this.entityApi,
      payCycleIdOrEntity instanceof PayPeriods
        ? payCycleIdOrEntity
        : {
            PayCycleId: payCycleIdOrEntity!,
            PeriodStartDate: periodStartDate!,
            PeriodEndDate: periodEndDate!
          }
    );
  }
}
