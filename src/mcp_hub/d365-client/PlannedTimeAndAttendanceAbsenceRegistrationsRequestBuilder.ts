/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PlannedTimeAndAttendanceAbsenceRegistrations } from './PlannedTimeAndAttendanceAbsenceRegistrations';

/**
 * Request builder class for operations supported on the {@link PlannedTimeAndAttendanceAbsenceRegistrations} entity.
 */
export class PlannedTimeAndAttendanceAbsenceRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `PlannedTimeAndAttendanceAbsenceRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `PlannedTimeAndAttendanceAbsenceRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<
    PlannedTimeAndAttendanceAbsenceRegistrations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PlannedTimeAndAttendanceAbsenceRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   */
  create(
    entity: PlannedTimeAndAttendanceAbsenceRegistrations<T>
  ): CreateRequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T> {
    return new CreateRequestBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PlannedTimeAndAttendanceAbsenceRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.workerPersonnelNumber}.
   * @param plannedAbsenceRegistrationEntryNumber Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.plannedAbsenceRegistrationEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `PlannedTimeAndAttendanceAbsenceRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    plannedAbsenceRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    PlannedTimeAndAttendanceAbsenceRegistrations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkerPersonnelNumber: workerPersonnelNumber,
      PlannedAbsenceRegistrationEntryNumber:
        plannedAbsenceRegistrationEntryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   */
  update(
    entity: PlannedTimeAndAttendanceAbsenceRegistrations<T>
  ): UpdateRequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T> {
    return new UpdateRequestBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   * @param dataAreaId Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.workerPersonnelNumber}.
   * @param plannedAbsenceRegistrationEntryNumber Key property. See {@link PlannedTimeAndAttendanceAbsenceRegistrations.plannedAbsenceRegistrationEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   */
  delete(
    dataAreaId: string,
    workerPersonnelNumber: string,
    plannedAbsenceRegistrationEntryNumber: BigNumber
  ): DeleteRequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PlannedTimeAndAttendanceAbsenceRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: PlannedTimeAndAttendanceAbsenceRegistrations<T>
  ): DeleteRequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerPersonnelNumber?: string,
    plannedAbsenceRegistrationEntryNumber?: BigNumber
  ): DeleteRequestBuilder<PlannedTimeAndAttendanceAbsenceRegistrations<T>, T> {
    return new DeleteRequestBuilder<
      PlannedTimeAndAttendanceAbsenceRegistrations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PlannedTimeAndAttendanceAbsenceRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            PlannedAbsenceRegistrationEntryNumber:
              plannedAbsenceRegistrationEntryNumber!
          }
    );
  }
}
