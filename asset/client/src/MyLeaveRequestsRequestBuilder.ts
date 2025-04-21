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
import { MyLeaveRequests } from './MyLeaveRequests';

/**
 * Request builder class for operations supported on the {@link MyLeaveRequests} entity.
 */
export class MyLeaveRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MyLeaveRequests<T>, T> {
  /**
   * Returns a request builder for querying all `MyLeaveRequests` entities.
   * @returns A request builder for creating requests to retrieve all `MyLeaveRequests` entities.
   */
  getAll(): GetAllRequestBuilder<MyLeaveRequests<T>, T> {
    return new GetAllRequestBuilder<MyLeaveRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MyLeaveRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MyLeaveRequests`.
   */
  create(
    entity: MyLeaveRequests<T>
  ): CreateRequestBuilder<MyLeaveRequests<T>, T> {
    return new CreateRequestBuilder<MyLeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MyLeaveRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link MyLeaveRequests.dataAreaId}.
   * @param requestId Key property. See {@link MyLeaveRequests.requestId}.
   * @param leaveType Key property. See {@link MyLeaveRequests.leaveType}.
   * @param leaveDate Key property. See {@link MyLeaveRequests.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `MyLeaveRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveType: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MyLeaveRequests<T>, T> {
    return new GetByKeyRequestBuilder<MyLeaveRequests<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestId: requestId,
      LeaveType: leaveType,
      LeaveDate: leaveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MyLeaveRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MyLeaveRequests`.
   */
  update(
    entity: MyLeaveRequests<T>
  ): UpdateRequestBuilder<MyLeaveRequests<T>, T> {
    return new UpdateRequestBuilder<MyLeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MyLeaveRequests`.
   * @param dataAreaId Key property. See {@link MyLeaveRequests.dataAreaId}.
   * @param requestId Key property. See {@link MyLeaveRequests.requestId}.
   * @param leaveType Key property. See {@link MyLeaveRequests.leaveType}.
   * @param leaveDate Key property. See {@link MyLeaveRequests.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `MyLeaveRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveType: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<MyLeaveRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MyLeaveRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MyLeaveRequests` by taking the entity as a parameter.
   */
  delete(
    entity: MyLeaveRequests<T>
  ): DeleteRequestBuilder<MyLeaveRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveType?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<MyLeaveRequests<T>, T> {
    return new DeleteRequestBuilder<MyLeaveRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MyLeaveRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!,
            LeaveType: leaveType!,
            LeaveDate: leaveDate!
          }
    );
  }
}
