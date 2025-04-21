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
import { LeaseAmortizationSchedulesHistory } from './LeaseAmortizationSchedulesHistory';

/**
 * Request builder class for operations supported on the {@link LeaseAmortizationSchedulesHistory} entity.
 */
export class LeaseAmortizationSchedulesHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseAmortizationSchedulesHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseAmortizationSchedulesHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
    return new GetAllRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseAmortizationSchedulesHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseAmortizationSchedulesHistory`.
   */
  create(
    entity: LeaseAmortizationSchedulesHistory<T>
  ): CreateRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
    return new CreateRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseAmortizationSchedulesHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseAmortizationSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseAmortizationSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseAmortizationSchedulesHistory.lineLeaseCounter}.
   * @param periodStartDate Key property. See {@link LeaseAmortizationSchedulesHistory.periodStartDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseAmortizationSchedulesHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
    return new GetByKeyRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        LineLeaseCounter: lineLeaseCounter,
        PeriodStartDate: periodStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseAmortizationSchedulesHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseAmortizationSchedulesHistory`.
   */
  update(
    entity: LeaseAmortizationSchedulesHistory<T>
  ): UpdateRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
    return new UpdateRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseAmortizationSchedulesHistory`.
   * @param dataAreaId Key property. See {@link LeaseAmortizationSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseAmortizationSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseAmortizationSchedulesHistory.lineLeaseCounter}.
   * @param periodStartDate Key property. See {@link LeaseAmortizationSchedulesHistory.periodStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAmortizationSchedulesHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    lineLeaseCounter: number,
    periodStartDate: Moment
  ): DeleteRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseAmortizationSchedulesHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAmortizationSchedulesHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseAmortizationSchedulesHistory<T>
  ): DeleteRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    lineLeaseCounter?: number,
    periodStartDate?: Moment
  ): DeleteRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T> {
    return new DeleteRequestBuilder<LeaseAmortizationSchedulesHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseAmortizationSchedulesHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            LineLeaseCounter: lineLeaseCounter!,
            PeriodStartDate: periodStartDate!
          }
    );
  }
}
