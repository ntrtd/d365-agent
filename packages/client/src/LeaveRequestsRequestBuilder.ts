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
import { LeaveRequests } from './LeaveRequests';

/**
 * Request builder class for operations supported on the {@link LeaveRequests} entity.
 */
export class LeaveRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequests<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequests` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequests` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequests<T>, T> {
    return new GetAllRequestBuilder<LeaveRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequests`.
   */
  create(entity: LeaveRequests<T>): CreateRequestBuilder<LeaveRequests<T>, T> {
    return new CreateRequestBuilder<LeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequests.requestId}.
   * @param leaveType Key property. See {@link LeaveRequests.leaveType}.
   * @param leaveDate Key property. See {@link LeaveRequests.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveType: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaveRequests<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequests<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestId: requestId,
      LeaveType: leaveType,
      LeaveDate: leaveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequests`.
   */
  update(entity: LeaveRequests<T>): UpdateRequestBuilder<LeaveRequests<T>, T> {
    return new UpdateRequestBuilder<LeaveRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequests`.
   * @param dataAreaId Key property. See {@link LeaveRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequests.requestId}.
   * @param leaveType Key property. See {@link LeaveRequests.leaveType}.
   * @param leaveDate Key property. See {@link LeaveRequests.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveType: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<LeaveRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequests` by taking the entity as a parameter.
   */
  delete(entity: LeaveRequests<T>): DeleteRequestBuilder<LeaveRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveType?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<LeaveRequests<T>, T> {
    return new DeleteRequestBuilder<LeaveRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveRequests
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
