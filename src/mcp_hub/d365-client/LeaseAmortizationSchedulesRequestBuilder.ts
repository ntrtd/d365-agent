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
import { LeaseAmortizationSchedules } from './LeaseAmortizationSchedules';

/**
 * Request builder class for operations supported on the {@link LeaseAmortizationSchedules} entity.
 */
export class LeaseAmortizationSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseAmortizationSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseAmortizationSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseAmortizationSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseAmortizationSchedules<T>, T> {
    return new GetAllRequestBuilder<LeaseAmortizationSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseAmortizationSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseAmortizationSchedules`.
   */
  create(
    entity: LeaseAmortizationSchedules<T>
  ): CreateRequestBuilder<LeaseAmortizationSchedules<T>, T> {
    return new CreateRequestBuilder<LeaseAmortizationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseAmortizationSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseAmortizationSchedules.dataAreaId}.
   * @param periodStartDate Key property. See {@link LeaseAmortizationSchedules.periodStartDate}.
   * @param leaseId Key property. See {@link LeaseAmortizationSchedules.leaseId}.
   * @returns A request builder for creating requests to retrieve one `LeaseAmortizationSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseAmortizationSchedules<T>, T> {
    return new GetByKeyRequestBuilder<LeaseAmortizationSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodStartDate: periodStartDate,
        LeaseId: leaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseAmortizationSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseAmortizationSchedules`.
   */
  update(
    entity: LeaseAmortizationSchedules<T>
  ): UpdateRequestBuilder<LeaseAmortizationSchedules<T>, T> {
    return new UpdateRequestBuilder<LeaseAmortizationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseAmortizationSchedules`.
   * @param dataAreaId Key property. See {@link LeaseAmortizationSchedules.dataAreaId}.
   * @param periodStartDate Key property. See {@link LeaseAmortizationSchedules.periodStartDate}.
   * @param leaseId Key property. See {@link LeaseAmortizationSchedules.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAmortizationSchedules`.
   */
  delete(
    dataAreaId: string,
    periodStartDate: Moment,
    leaseId: string
  ): DeleteRequestBuilder<LeaseAmortizationSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseAmortizationSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAmortizationSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseAmortizationSchedules<T>
  ): DeleteRequestBuilder<LeaseAmortizationSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodStartDate?: Moment,
    leaseId?: string
  ): DeleteRequestBuilder<LeaseAmortizationSchedules<T>, T> {
    return new DeleteRequestBuilder<LeaseAmortizationSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseAmortizationSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodStartDate: periodStartDate!,
            LeaseId: leaseId!
          }
    );
  }
}
