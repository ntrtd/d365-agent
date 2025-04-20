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
import { EssLeaveRequestDetails } from './EssLeaveRequestDetails';

/**
 * Request builder class for operations supported on the {@link EssLeaveRequestDetails} entity.
 */
export class EssLeaveRequestDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveRequestDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveRequestDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveRequestDetails` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveRequestDetails<T>, T> {
    return new GetAllRequestBuilder<EssLeaveRequestDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveRequestDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveRequestDetails`.
   */
  create(
    entity: EssLeaveRequestDetails<T>
  ): CreateRequestBuilder<EssLeaveRequestDetails<T>, T> {
    return new CreateRequestBuilder<EssLeaveRequestDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveRequestDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveRequestDetails.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestDetails.requestId}.
   * @param leaveTypeId Key property. See {@link EssLeaveRequestDetails.leaveTypeId}.
   * @param leaveDate Key property. See {@link EssLeaveRequestDetails.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveRequestDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EssLeaveRequestDetails<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveRequestDetails<T>, T>(
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
   * Returns a request builder for updating an entity of type `EssLeaveRequestDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveRequestDetails`.
   */
  update(
    entity: EssLeaveRequestDetails<T>
  ): UpdateRequestBuilder<EssLeaveRequestDetails<T>, T> {
    return new UpdateRequestBuilder<EssLeaveRequestDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestDetails`.
   * @param dataAreaId Key property. See {@link EssLeaveRequestDetails.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestDetails.requestId}.
   * @param leaveTypeId Key property. See {@link EssLeaveRequestDetails.leaveTypeId}.
   * @param leaveDate Key property. See {@link EssLeaveRequestDetails.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestDetails`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveTypeId: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<EssLeaveRequestDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveRequestDetails<T>
  ): DeleteRequestBuilder<EssLeaveRequestDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveTypeId?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<EssLeaveRequestDetails<T>, T> {
    return new DeleteRequestBuilder<EssLeaveRequestDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveRequestDetails
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
