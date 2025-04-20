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
import { MssLeaveRequestDates } from './MssLeaveRequestDates';

/**
 * Request builder class for operations supported on the {@link MssLeaveRequestDates} entity.
 */
export class MssLeaveRequestDatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MssLeaveRequestDates<T>, T> {
  /**
   * Returns a request builder for querying all `MssLeaveRequestDates` entities.
   * @returns A request builder for creating requests to retrieve all `MssLeaveRequestDates` entities.
   */
  getAll(): GetAllRequestBuilder<MssLeaveRequestDates<T>, T> {
    return new GetAllRequestBuilder<MssLeaveRequestDates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MssLeaveRequestDates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MssLeaveRequestDates`.
   */
  create(
    entity: MssLeaveRequestDates<T>
  ): CreateRequestBuilder<MssLeaveRequestDates<T>, T> {
    return new CreateRequestBuilder<MssLeaveRequestDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MssLeaveRequestDates` entity based on its keys.
   * @param dataAreaId Key property. See {@link MssLeaveRequestDates.dataAreaId}.
   * @param requestId Key property. See {@link MssLeaveRequestDates.requestId}.
   * @param leaveTypeId Key property. See {@link MssLeaveRequestDates.leaveTypeId}.
   * @param leaveDate Key property. See {@link MssLeaveRequestDates.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `MssLeaveRequestDates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MssLeaveRequestDates<T>, T> {
    return new GetByKeyRequestBuilder<MssLeaveRequestDates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId,
        LeaveTypeId: leaveTypeId,
        LeaveDate: leaveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MssLeaveRequestDates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MssLeaveRequestDates`.
   */
  update(
    entity: MssLeaveRequestDates<T>
  ): UpdateRequestBuilder<MssLeaveRequestDates<T>, T> {
    return new UpdateRequestBuilder<MssLeaveRequestDates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestDates`.
   * @param dataAreaId Key property. See {@link MssLeaveRequestDates.dataAreaId}.
   * @param requestId Key property. See {@link MssLeaveRequestDates.requestId}.
   * @param leaveTypeId Key property. See {@link MssLeaveRequestDates.leaveTypeId}.
   * @param leaveDate Key property. See {@link MssLeaveRequestDates.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestDates`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveTypeId: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<MssLeaveRequestDates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MssLeaveRequestDates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MssLeaveRequestDates` by taking the entity as a parameter.
   */
  delete(
    entity: MssLeaveRequestDates<T>
  ): DeleteRequestBuilder<MssLeaveRequestDates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveTypeId?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<MssLeaveRequestDates<T>, T> {
    return new DeleteRequestBuilder<MssLeaveRequestDates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MssLeaveRequestDates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!,
            LeaveTypeId: leaveTypeId!,
            LeaveDate: leaveDate!
          }
    );
  }
}
