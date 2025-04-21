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
import { LeasePaymentScheduleContractsHistory } from './LeasePaymentScheduleContractsHistory';

/**
 * Request builder class for operations supported on the {@link LeasePaymentScheduleContractsHistory} entity.
 */
export class LeasePaymentScheduleContractsHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentScheduleContractsHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentScheduleContractsHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentScheduleContractsHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentScheduleContractsHistory`.
   */
  create(
    entity: LeasePaymentScheduleContractsHistory<T>
  ): CreateRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
    return new CreateRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentScheduleContractsHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentScheduleContractsHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContractsHistory.leaseId}.
   * @param leaseCounter Key property. See {@link LeasePaymentScheduleContractsHistory.leaseCounter}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContractsHistory.startDate}.
   * @param endDate Key property. See {@link LeasePaymentScheduleContractsHistory.endDate}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentScheduleContractsHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    leaseCounter: DeserializedType<T, 'Edm.Int32'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
    return new GetByKeyRequestBuilder<
      LeasePaymentScheduleContractsHistory<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseId: leaseId,
      LeaseCounter: leaseCounter,
      StartDate: startDate,
      EndDate: endDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentScheduleContractsHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentScheduleContractsHistory`.
   */
  update(
    entity: LeasePaymentScheduleContractsHistory<T>
  ): UpdateRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContractsHistory`.
   * @param dataAreaId Key property. See {@link LeasePaymentScheduleContractsHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentScheduleContractsHistory.leaseId}.
   * @param leaseCounter Key property. See {@link LeasePaymentScheduleContractsHistory.leaseCounter}.
   * @param startDate Key property. See {@link LeasePaymentScheduleContractsHistory.startDate}.
   * @param endDate Key property. See {@link LeasePaymentScheduleContractsHistory.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContractsHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    leaseCounter: number,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentScheduleContractsHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentScheduleContractsHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentScheduleContractsHistory<T>
  ): DeleteRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    leaseCounter?: number,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentScheduleContractsHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentScheduleContractsHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            LeaseCounter: leaseCounter!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
