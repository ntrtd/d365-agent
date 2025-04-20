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
import { PayrollCalculationFrequencyPayPeriods } from './PayrollCalculationFrequencyPayPeriods';

/**
 * Request builder class for operations supported on the {@link PayrollCalculationFrequencyPayPeriods} entity.
 */
export class PayrollCalculationFrequencyPayPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollCalculationFrequencyPayPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollCalculationFrequencyPayPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
    return new GetAllRequestBuilder<
      PayrollCalculationFrequencyPayPeriods<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayrollCalculationFrequencyPayPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollCalculationFrequencyPayPeriods`.
   */
  create(
    entity: PayrollCalculationFrequencyPayPeriods<T>
  ): CreateRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
    return new CreateRequestBuilder<
      PayrollCalculationFrequencyPayPeriods<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayrollCalculationFrequencyPayPeriods` entity based on its keys.
   * @param calculationFrequencyId Key property. See {@link PayrollCalculationFrequencyPayPeriods.calculationFrequencyId}.
   * @param payCycleId Key property. See {@link PayrollCalculationFrequencyPayPeriods.payCycleId}.
   * @param periodEndDate Key property. See {@link PayrollCalculationFrequencyPayPeriods.periodEndDate}.
   * @returns A request builder for creating requests to retrieve one `PayrollCalculationFrequencyPayPeriods` entity based on its keys.
   */
  getByKey(
    calculationFrequencyId: DeserializedType<T, 'Edm.String'>,
    payCycleId: DeserializedType<T, 'Edm.String'>,
    periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
    return new GetByKeyRequestBuilder<
      PayrollCalculationFrequencyPayPeriods<T>,
      T
    >(this.entityApi, {
      CalculationFrequencyId: calculationFrequencyId,
      PayCycleId: payCycleId,
      PeriodEndDate: periodEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollCalculationFrequencyPayPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollCalculationFrequencyPayPeriods`.
   */
  update(
    entity: PayrollCalculationFrequencyPayPeriods<T>
  ): UpdateRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
    return new UpdateRequestBuilder<
      PayrollCalculationFrequencyPayPeriods<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollCalculationFrequencyPayPeriods`.
   * @param calculationFrequencyId Key property. See {@link PayrollCalculationFrequencyPayPeriods.calculationFrequencyId}.
   * @param payCycleId Key property. See {@link PayrollCalculationFrequencyPayPeriods.payCycleId}.
   * @param periodEndDate Key property. See {@link PayrollCalculationFrequencyPayPeriods.periodEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollCalculationFrequencyPayPeriods`.
   */
  delete(
    calculationFrequencyId: string,
    payCycleId: string,
    periodEndDate: Moment
  ): DeleteRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollCalculationFrequencyPayPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollCalculationFrequencyPayPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollCalculationFrequencyPayPeriods<T>
  ): DeleteRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T>;
  delete(
    calculationFrequencyIdOrEntity: any,
    payCycleId?: string,
    periodEndDate?: Moment
  ): DeleteRequestBuilder<PayrollCalculationFrequencyPayPeriods<T>, T> {
    return new DeleteRequestBuilder<
      PayrollCalculationFrequencyPayPeriods<T>,
      T
    >(
      this.entityApi,
      calculationFrequencyIdOrEntity instanceof
      PayrollCalculationFrequencyPayPeriods
        ? calculationFrequencyIdOrEntity
        : {
            CalculationFrequencyId: calculationFrequencyIdOrEntity!,
            PayCycleId: payCycleId!,
            PeriodEndDate: periodEndDate!
          }
    );
  }
}
