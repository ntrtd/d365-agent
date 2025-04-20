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
import { EssLeaveTimeOffDates } from './EssLeaveTimeOffDates';

/**
 * Request builder class for operations supported on the {@link EssLeaveTimeOffDates} entity.
 */
export class EssLeaveTimeOffDatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveTimeOffDates<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveTimeOffDates` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveTimeOffDates` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveTimeOffDates<T>, T> {
    return new GetAllRequestBuilder<EssLeaveTimeOffDates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssLeaveTimeOffDates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveTimeOffDates`.
   */
  create(
    entity: EssLeaveTimeOffDates<T>
  ): CreateRequestBuilder<EssLeaveTimeOffDates<T>, T> {
    return new CreateRequestBuilder<EssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveTimeOffDates` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveTimeOffDates.dataAreaId}.
   * @param leaveDate Key property. See {@link EssLeaveTimeOffDates.leaveDate}.
   * @param personnelNumber Key property. See {@link EssLeaveTimeOffDates.personnelNumber}.
   * @param leaveTypeId Key property. See {@link EssLeaveTimeOffDates.leaveTypeId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveTimeOffDates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveTimeOffDates<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveTimeOffDates<T>, T>(
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
   * Returns a request builder for updating an entity of type `EssLeaveTimeOffDates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveTimeOffDates`.
   */
  update(
    entity: EssLeaveTimeOffDates<T>
  ): UpdateRequestBuilder<EssLeaveTimeOffDates<T>, T> {
    return new UpdateRequestBuilder<EssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTimeOffDates`.
   * @param dataAreaId Key property. See {@link EssLeaveTimeOffDates.dataAreaId}.
   * @param leaveDate Key property. See {@link EssLeaveTimeOffDates.leaveDate}.
   * @param personnelNumber Key property. See {@link EssLeaveTimeOffDates.personnelNumber}.
   * @param leaveTypeId Key property. See {@link EssLeaveTimeOffDates.leaveTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTimeOffDates`.
   */
  delete(
    dataAreaId: string,
    leaveDate: Moment,
    personnelNumber: string,
    leaveTypeId: string
  ): DeleteRequestBuilder<EssLeaveTimeOffDates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveTimeOffDates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveTimeOffDates` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveTimeOffDates<T>
  ): DeleteRequestBuilder<EssLeaveTimeOffDates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaveDate?: Moment,
    personnelNumber?: string,
    leaveTypeId?: string
  ): DeleteRequestBuilder<EssLeaveTimeOffDates<T>, T> {
    return new DeleteRequestBuilder<EssLeaveTimeOffDates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveTimeOffDates
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
