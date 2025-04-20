/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { TransferredTimeAndAttendanceActivityRegistrations } from './TransferredTimeAndAttendanceActivityRegistrations';

/**
 * Request builder class for operations supported on the {@link TransferredTimeAndAttendanceActivityRegistrations} entity.
 */
export class TransferredTimeAndAttendanceActivityRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TransferredTimeAndAttendanceActivityRegistrations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TransferredTimeAndAttendanceActivityRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `TransferredTimeAndAttendanceActivityRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TransferredTimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransferredTimeAndAttendanceActivityRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   */
  create(
    entity: TransferredTimeAndAttendanceActivityRegistrations<T>
  ): CreateRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  > {
    return new CreateRequestBuilder<
      TransferredTimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransferredTimeAndAttendanceActivityRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.timeProfileDate}.
   * @param transferredActivityRegistrationEntryNumber Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.transferredActivityRegistrationEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `TransferredTimeAndAttendanceActivityRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    transferredActivityRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TransferredTimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkerPersonnelNumber: workerPersonnelNumber,
      TimeProfileDate: timeProfileDate,
      TransferredActivityRegistrationEntryNumber:
        transferredActivityRegistrationEntryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   */
  update(
    entity: TransferredTimeAndAttendanceActivityRegistrations<T>
  ): UpdateRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TransferredTimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   * @param dataAreaId Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.timeProfileDate}.
   * @param transferredActivityRegistrationEntryNumber Key property. See {@link TransferredTimeAndAttendanceActivityRegistrations.transferredActivityRegistrationEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   */
  delete(
    dataAreaId: string,
    workerPersonnelNumber: string,
    timeProfileDate: Moment,
    transferredActivityRegistrationEntryNumber: BigNumber
  ): DeleteRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TransferredTimeAndAttendanceActivityRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferredTimeAndAttendanceActivityRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: TransferredTimeAndAttendanceActivityRegistrations<T>
  ): DeleteRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    workerPersonnelNumber?: string,
    timeProfileDate?: Moment,
    transferredActivityRegistrationEntryNumber?: BigNumber
  ): DeleteRequestBuilder<
    TransferredTimeAndAttendanceActivityRegistrations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TransferredTimeAndAttendanceActivityRegistrations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TransferredTimeAndAttendanceActivityRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            TimeProfileDate: timeProfileDate!,
            TransferredActivityRegistrationEntryNumber:
              transferredActivityRegistrationEntryNumber!
          }
    );
  }
}
