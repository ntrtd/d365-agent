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
import { FiscalPeriods } from './FiscalPeriods';

/**
 * Request builder class for operations supported on the {@link FiscalPeriods} entity.
 */
export class FiscalPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalPeriods<T>, T> {
    return new GetAllRequestBuilder<FiscalPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalPeriods`.
   */
  create(entity: FiscalPeriods<T>): CreateRequestBuilder<FiscalPeriods<T>, T> {
    return new CreateRequestBuilder<FiscalPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalPeriods` entity based on its keys.
   * @param calendar Key property. See {@link FiscalPeriods.calendar}.
   * @param fiscalYear Key property. See {@link FiscalPeriods.fiscalYear}.
   * @param startDate Key property. See {@link FiscalPeriods.startDate}.
   * @param endDate Key property. See {@link FiscalPeriods.endDate}.
   * @param periodName Key property. See {@link FiscalPeriods.periodName}.
   * @returns A request builder for creating requests to retrieve one `FiscalPeriods` entity based on its keys.
   */
  getByKey(
    calendar: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalPeriods<T>, T> {
    return new GetByKeyRequestBuilder<FiscalPeriods<T>, T>(this.entityApi, {
      Calendar: calendar,
      FiscalYear: fiscalYear,
      StartDate: startDate,
      EndDate: endDate,
      PeriodName: periodName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalPeriods`.
   */
  update(entity: FiscalPeriods<T>): UpdateRequestBuilder<FiscalPeriods<T>, T> {
    return new UpdateRequestBuilder<FiscalPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalPeriods`.
   * @param calendar Key property. See {@link FiscalPeriods.calendar}.
   * @param fiscalYear Key property. See {@link FiscalPeriods.fiscalYear}.
   * @param startDate Key property. See {@link FiscalPeriods.startDate}.
   * @param endDate Key property. See {@link FiscalPeriods.endDate}.
   * @param periodName Key property. See {@link FiscalPeriods.periodName}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPeriods`.
   */
  delete(
    calendar: string,
    fiscalYear: string,
    startDate: Moment,
    endDate: Moment,
    periodName: string
  ): DeleteRequestBuilder<FiscalPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPeriods` by taking the entity as a parameter.
   */
  delete(entity: FiscalPeriods<T>): DeleteRequestBuilder<FiscalPeriods<T>, T>;
  delete(
    calendarOrEntity: any,
    fiscalYear?: string,
    startDate?: Moment,
    endDate?: Moment,
    periodName?: string
  ): DeleteRequestBuilder<FiscalPeriods<T>, T> {
    return new DeleteRequestBuilder<FiscalPeriods<T>, T>(
      this.entityApi,
      calendarOrEntity instanceof FiscalPeriods
        ? calendarOrEntity
        : {
            Calendar: calendarOrEntity!,
            FiscalYear: fiscalYear!,
            StartDate: startDate!,
            EndDate: endDate!,
            PeriodName: periodName!
          }
    );
  }
}
