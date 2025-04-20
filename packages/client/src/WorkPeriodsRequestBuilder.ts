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
import { WorkPeriods } from './WorkPeriods';

/**
 * Request builder class for operations supported on the {@link WorkPeriods} entity.
 */
export class WorkPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `WorkPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `WorkPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<WorkPeriods<T>, T> {
    return new GetAllRequestBuilder<WorkPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkPeriods`.
   */
  create(entity: WorkPeriods<T>): CreateRequestBuilder<WorkPeriods<T>, T> {
    return new CreateRequestBuilder<WorkPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkPeriods` entity based on its keys.
   * @param workCycleId Key property. See {@link WorkPeriods.workCycleId}.
   * @param periodStartDate Key property. See {@link WorkPeriods.periodStartDate}.
   * @returns A request builder for creating requests to retrieve one `WorkPeriods` entity based on its keys.
   */
  getByKey(
    workCycleId: DeserializedType<T, 'Edm.String'>,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkPeriods<T>, T> {
    return new GetByKeyRequestBuilder<WorkPeriods<T>, T>(this.entityApi, {
      WorkCycleId: workCycleId,
      PeriodStartDate: periodStartDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkPeriods`.
   */
  update(entity: WorkPeriods<T>): UpdateRequestBuilder<WorkPeriods<T>, T> {
    return new UpdateRequestBuilder<WorkPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkPeriods`.
   * @param workCycleId Key property. See {@link WorkPeriods.workCycleId}.
   * @param periodStartDate Key property. See {@link WorkPeriods.periodStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkPeriods`.
   */
  delete(
    workCycleId: string,
    periodStartDate: Moment
  ): DeleteRequestBuilder<WorkPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkPeriods` by taking the entity as a parameter.
   */
  delete(entity: WorkPeriods<T>): DeleteRequestBuilder<WorkPeriods<T>, T>;
  delete(
    workCycleIdOrEntity: any,
    periodStartDate?: Moment
  ): DeleteRequestBuilder<WorkPeriods<T>, T> {
    return new DeleteRequestBuilder<WorkPeriods<T>, T>(
      this.entityApi,
      workCycleIdOrEntity instanceof WorkPeriods
        ? workCycleIdOrEntity
        : {
            WorkCycleId: workCycleIdOrEntity!,
            PeriodStartDate: periodStartDate!
          }
    );
  }
}
