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
import { LeaseDepreciationSchedules } from './LeaseDepreciationSchedules';

/**
 * Request builder class for operations supported on the {@link LeaseDepreciationSchedules} entity.
 */
export class LeaseDepreciationSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseDepreciationSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseDepreciationSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseDepreciationSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseDepreciationSchedules<T>, T> {
    return new GetAllRequestBuilder<LeaseDepreciationSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseDepreciationSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseDepreciationSchedules`.
   */
  create(
    entity: LeaseDepreciationSchedules<T>
  ): CreateRequestBuilder<LeaseDepreciationSchedules<T>, T> {
    return new CreateRequestBuilder<LeaseDepreciationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseDepreciationSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseDepreciationSchedules.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseDepreciationSchedules.leaseId}.
   * @param periodStartDate Key property. See {@link LeaseDepreciationSchedules.periodStartDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseDepreciationSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseDepreciationSchedules<T>, T> {
    return new GetByKeyRequestBuilder<LeaseDepreciationSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        PeriodStartDate: periodStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseDepreciationSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseDepreciationSchedules`.
   */
  update(
    entity: LeaseDepreciationSchedules<T>
  ): UpdateRequestBuilder<LeaseDepreciationSchedules<T>, T> {
    return new UpdateRequestBuilder<LeaseDepreciationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseDepreciationSchedules`.
   * @param dataAreaId Key property. See {@link LeaseDepreciationSchedules.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseDepreciationSchedules.leaseId}.
   * @param periodStartDate Key property. See {@link LeaseDepreciationSchedules.periodStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDepreciationSchedules`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    periodStartDate: Moment
  ): DeleteRequestBuilder<LeaseDepreciationSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseDepreciationSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDepreciationSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseDepreciationSchedules<T>
  ): DeleteRequestBuilder<LeaseDepreciationSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    periodStartDate?: Moment
  ): DeleteRequestBuilder<LeaseDepreciationSchedules<T>, T> {
    return new DeleteRequestBuilder<LeaseDepreciationSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseDepreciationSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            PeriodStartDate: periodStartDate!
          }
    );
  }
}
