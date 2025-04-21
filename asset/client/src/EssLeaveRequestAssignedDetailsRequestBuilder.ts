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
import { EssLeaveRequestAssignedDetails } from './EssLeaveRequestAssignedDetails';

/**
 * Request builder class for operations supported on the {@link EssLeaveRequestAssignedDetails} entity.
 */
export class EssLeaveRequestAssignedDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveRequestAssignedDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveRequestAssignedDetails` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
    return new GetAllRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveRequestAssignedDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveRequestAssignedDetails`.
   */
  create(
    entity: EssLeaveRequestAssignedDetails<T>
  ): CreateRequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
    return new CreateRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveRequestAssignedDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAssignedDetails.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestAssignedDetails.requestId}.
   * @param leaveTypeId Key property. See {@link EssLeaveRequestAssignedDetails.leaveTypeId}.
   * @param leaveDate Key property. See {@link EssLeaveRequestAssignedDetails.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveRequestAssignedDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>(
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
   * Returns a request builder for updating an entity of type `EssLeaveRequestAssignedDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveRequestAssignedDetails`.
   */
  update(
    entity: EssLeaveRequestAssignedDetails<T>
  ): UpdateRequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
    return new UpdateRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAssignedDetails`.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAssignedDetails.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestAssignedDetails.requestId}.
   * @param leaveTypeId Key property. See {@link EssLeaveRequestAssignedDetails.leaveTypeId}.
   * @param leaveDate Key property. See {@link EssLeaveRequestAssignedDetails.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAssignedDetails`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveTypeId: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAssignedDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAssignedDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveRequestAssignedDetails<T>
  ): DeleteRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveTypeId?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<EssLeaveRequestAssignedDetails<T>, T> {
    return new DeleteRequestBuilder<EssLeaveRequestAssignedDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveRequestAssignedDetails
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
