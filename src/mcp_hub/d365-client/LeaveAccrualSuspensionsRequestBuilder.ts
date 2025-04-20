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
import { LeaveAccrualSuspensions } from './LeaveAccrualSuspensions';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link LeaveAccrualSuspensions} entity.
 */
export class LeaveAccrualSuspensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveAccrualSuspensions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveAccrualSuspensions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveAccrualSuspensions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveAccrualSuspensions<T>, T> {
    return new GetAllRequestBuilder<LeaveAccrualSuspensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveAccrualSuspensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveAccrualSuspensions`.
   */
  create(
    entity: LeaveAccrualSuspensions<T>
  ): CreateRequestBuilder<LeaveAccrualSuspensions<T>, T> {
    return new CreateRequestBuilder<LeaveAccrualSuspensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveAccrualSuspensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveAccrualSuspensions.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveAccrualSuspensions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveAccrualSuspensions.leaveTypeId}.
   * @param startDate Key property. See {@link LeaveAccrualSuspensions.startDate}.
   * @param endDate Key property. See {@link LeaveAccrualSuspensions.endDate}.
   * @param requestId Key property. See {@link LeaveAccrualSuspensions.requestId}.
   * @param canceled Key property. See {@link LeaveAccrualSuspensions.canceled}.
   * @returns A request builder for creating requests to retrieve one `LeaveAccrualSuspensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    canceled: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>
  ): GetByKeyRequestBuilder<LeaveAccrualSuspensions<T>, T> {
    return new GetByKeyRequestBuilder<LeaveAccrualSuspensions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        LeaveTypeId: leaveTypeId,
        StartDate: startDate,
        EndDate: endDate,
        RequestId: requestId,
        Canceled: canceled
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveAccrualSuspensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveAccrualSuspensions`.
   */
  update(
    entity: LeaveAccrualSuspensions<T>
  ): UpdateRequestBuilder<LeaveAccrualSuspensions<T>, T> {
    return new UpdateRequestBuilder<LeaveAccrualSuspensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveAccrualSuspensions`.
   * @param dataAreaId Key property. See {@link LeaveAccrualSuspensions.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveAccrualSuspensions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveAccrualSuspensions.leaveTypeId}.
   * @param startDate Key property. See {@link LeaveAccrualSuspensions.startDate}.
   * @param endDate Key property. See {@link LeaveAccrualSuspensions.endDate}.
   * @param requestId Key property. See {@link LeaveAccrualSuspensions.requestId}.
   * @param canceled Key property. See {@link LeaveAccrualSuspensions.canceled}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveAccrualSuspensions`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leaveTypeId: string,
    startDate: Moment,
    endDate: Moment,
    requestId: string,
    canceled: NoYes
  ): DeleteRequestBuilder<LeaveAccrualSuspensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveAccrualSuspensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveAccrualSuspensions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveAccrualSuspensions<T>
  ): DeleteRequestBuilder<LeaveAccrualSuspensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leaveTypeId?: string,
    startDate?: Moment,
    endDate?: Moment,
    requestId?: string,
    canceled?: NoYes
  ): DeleteRequestBuilder<LeaveAccrualSuspensions<T>, T> {
    return new DeleteRequestBuilder<LeaveAccrualSuspensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveAccrualSuspensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LeaveTypeId: leaveTypeId!,
            StartDate: startDate!,
            EndDate: endDate!,
            RequestId: requestId!,
            Canceled: canceled!
          }
    );
  }
}
