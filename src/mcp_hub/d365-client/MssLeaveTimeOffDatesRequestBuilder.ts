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
import { MssLeaveTimeOffDates } from './MssLeaveTimeOffDates';

/**
 * Request builder class for operations supported on the {@link MssLeaveTimeOffDates} entity.
 */
export class MssLeaveTimeOffDatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MssLeaveTimeOffDates<T>, T> {
  /**
   * Returns a request builder for querying all `MssLeaveTimeOffDates` entities.
   * @returns A request builder for creating requests to retrieve all `MssLeaveTimeOffDates` entities.
   */
  getAll(): GetAllRequestBuilder<MssLeaveTimeOffDates<T>, T> {
    return new GetAllRequestBuilder<MssLeaveTimeOffDates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MssLeaveTimeOffDates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MssLeaveTimeOffDates`.
   */
  create(
    entity: MssLeaveTimeOffDates<T>
  ): CreateRequestBuilder<MssLeaveTimeOffDates<T>, T> {
    return new CreateRequestBuilder<MssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MssLeaveTimeOffDates` entity based on its keys.
   * @param dataAreaId Key property. See {@link MssLeaveTimeOffDates.dataAreaId}.
   * @param leaveDate Key property. See {@link MssLeaveTimeOffDates.leaveDate}.
   * @param personnelNumber Key property. See {@link MssLeaveTimeOffDates.personnelNumber}.
   * @param leaveTypeId Key property. See {@link MssLeaveTimeOffDates.leaveTypeId}.
   * @returns A request builder for creating requests to retrieve one `MssLeaveTimeOffDates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MssLeaveTimeOffDates<T>, T> {
    return new GetByKeyRequestBuilder<MssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaveDate: leaveDate,
        PersonnelNumber: personnelNumber,
        LeaveTypeId: leaveTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MssLeaveTimeOffDates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MssLeaveTimeOffDates`.
   */
  update(
    entity: MssLeaveTimeOffDates<T>
  ): UpdateRequestBuilder<MssLeaveTimeOffDates<T>, T> {
    return new UpdateRequestBuilder<MssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MssLeaveTimeOffDates`.
   * @param dataAreaId Key property. See {@link MssLeaveTimeOffDates.dataAreaId}.
   * @param leaveDate Key property. See {@link MssLeaveTimeOffDates.leaveDate}.
   * @param personnelNumber Key property. See {@link MssLeaveTimeOffDates.personnelNumber}.
   * @param leaveTypeId Key property. See {@link MssLeaveTimeOffDates.leaveTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveTimeOffDates`.
   */
  delete(
    dataAreaId: string,
    leaveDate: Moment,
    personnelNumber: string,
    leaveTypeId: string
  ): DeleteRequestBuilder<MssLeaveTimeOffDates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MssLeaveTimeOffDates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveTimeOffDates` by taking the entity as a parameter.
   */
  delete(
    entity: MssLeaveTimeOffDates<T>
  ): DeleteRequestBuilder<MssLeaveTimeOffDates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaveDate?: Moment,
    personnelNumber?: string,
    leaveTypeId?: string
  ): DeleteRequestBuilder<MssLeaveTimeOffDates<T>, T> {
    return new DeleteRequestBuilder<MssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MssLeaveTimeOffDates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaveDate: leaveDate!,
            PersonnelNumber: personnelNumber!,
            LeaveTypeId: leaveTypeId!
          }
    );
  }
}
