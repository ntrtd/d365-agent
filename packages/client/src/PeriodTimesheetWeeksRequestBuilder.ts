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
import { PeriodTimesheetWeeks } from './PeriodTimesheetWeeks';

/**
 * Request builder class for operations supported on the {@link PeriodTimesheetWeeks} entity.
 */
export class PeriodTimesheetWeeksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodTimesheetWeeks<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodTimesheetWeeks` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodTimesheetWeeks` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodTimesheetWeeks<T>, T> {
    return new GetAllRequestBuilder<PeriodTimesheetWeeks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PeriodTimesheetWeeks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodTimesheetWeeks`.
   */
  create(
    entity: PeriodTimesheetWeeks<T>
  ): CreateRequestBuilder<PeriodTimesheetWeeks<T>, T> {
    return new CreateRequestBuilder<PeriodTimesheetWeeks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodTimesheetWeeks` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodTimesheetWeeks.dataAreaId}.
   * @param periodId Key property. See {@link PeriodTimesheetWeeks.periodId}.
   * @param periodFrom Key property. See {@link PeriodTimesheetWeeks.periodFrom}.
   * @param periodTo Key property. See {@link PeriodTimesheetWeeks.periodTo}.
   * @returns A request builder for creating requests to retrieve one `PeriodTimesheetWeeks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PeriodTimesheetWeeks<T>, T> {
    return new GetByKeyRequestBuilder<PeriodTimesheetWeeks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodId: periodId,
        PeriodFrom: periodFrom,
        PeriodTo: periodTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodTimesheetWeeks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodTimesheetWeeks`.
   */
  update(
    entity: PeriodTimesheetWeeks<T>
  ): UpdateRequestBuilder<PeriodTimesheetWeeks<T>, T> {
    return new UpdateRequestBuilder<PeriodTimesheetWeeks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodTimesheetWeeks`.
   * @param dataAreaId Key property. See {@link PeriodTimesheetWeeks.dataAreaId}.
   * @param periodId Key property. See {@link PeriodTimesheetWeeks.periodId}.
   * @param periodFrom Key property. See {@link PeriodTimesheetWeeks.periodFrom}.
   * @param periodTo Key property. See {@link PeriodTimesheetWeeks.periodTo}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodTimesheetWeeks`.
   */
  delete(
    dataAreaId: string,
    periodId: string,
    periodFrom: Moment,
    periodTo: Moment
  ): DeleteRequestBuilder<PeriodTimesheetWeeks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodTimesheetWeeks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodTimesheetWeeks` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodTimesheetWeeks<T>
  ): DeleteRequestBuilder<PeriodTimesheetWeeks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string,
    periodFrom?: Moment,
    periodTo?: Moment
  ): DeleteRequestBuilder<PeriodTimesheetWeeks<T>, T> {
    return new DeleteRequestBuilder<PeriodTimesheetWeeks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodTimesheetWeeks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!,
            PeriodFrom: periodFrom!,
            PeriodTo: periodTo!
          }
    );
  }
}
