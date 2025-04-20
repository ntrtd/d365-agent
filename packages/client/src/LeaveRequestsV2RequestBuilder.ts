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
import { LeaveRequestsV2 } from './LeaveRequestsV2';

/**
 * Request builder class for operations supported on the {@link LeaveRequestsV2} entity.
 */
export class LeaveRequestsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequestsV2<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequestsV2` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequestsV2` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequestsV2<T>, T> {
    return new GetAllRequestBuilder<LeaveRequestsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveRequestsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequestsV2`.
   */
  create(
    entity: LeaveRequestsV2<T>
  ): CreateRequestBuilder<LeaveRequestsV2<T>, T> {
    return new CreateRequestBuilder<LeaveRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequestsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestsV2.requestId}.
   * @param leaveType Key property. See {@link LeaveRequestsV2.leaveType}.
   * @param leaveDate Key property. See {@link LeaveRequestsV2.leaveDate}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequestsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveType: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaveRequestsV2<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequestsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestId: requestId,
      LeaveType: leaveType,
      LeaveDate: leaveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequestsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequestsV2`.
   */
  update(
    entity: LeaveRequestsV2<T>
  ): UpdateRequestBuilder<LeaveRequestsV2<T>, T> {
    return new UpdateRequestBuilder<LeaveRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestsV2`.
   * @param dataAreaId Key property. See {@link LeaveRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestsV2.requestId}.
   * @param leaveType Key property. See {@link LeaveRequestsV2.leaveType}.
   * @param leaveDate Key property. See {@link LeaveRequestsV2.leaveDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestsV2`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveType: string,
    leaveDate: Moment
  ): DeleteRequestBuilder<LeaveRequestsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestsV2` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveRequestsV2<T>
  ): DeleteRequestBuilder<LeaveRequestsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveType?: string,
    leaveDate?: Moment
  ): DeleteRequestBuilder<LeaveRequestsV2<T>, T> {
    return new DeleteRequestBuilder<LeaveRequestsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveRequestsV2
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
