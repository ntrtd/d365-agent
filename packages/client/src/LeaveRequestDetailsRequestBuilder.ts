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
import { LeaveRequestDetails } from './LeaveRequestDetails';

/**
 * Request builder class for operations supported on the {@link LeaveRequestDetails} entity.
 */
export class LeaveRequestDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequestDetails<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequestDetails` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequestDetails` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequestDetails<T>, T> {
    return new GetAllRequestBuilder<LeaveRequestDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveRequestDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequestDetails`.
   */
  create(
    entity: LeaveRequestDetails<T>
  ): CreateRequestBuilder<LeaveRequestDetails<T>, T> {
    return new CreateRequestBuilder<LeaveRequestDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequestDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveRequestDetails.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestDetails.requestId}.
   * @param leaveDate Key property. See {@link LeaveRequestDetails.leaveDate}.
   * @param type Key property. See {@link LeaveRequestDetails.type}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequestDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveRequestDetails<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequestDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId,
        LeaveDate: leaveDate,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequestDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequestDetails`.
   */
  update(
    entity: LeaveRequestDetails<T>
  ): UpdateRequestBuilder<LeaveRequestDetails<T>, T> {
    return new UpdateRequestBuilder<LeaveRequestDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestDetails`.
   * @param dataAreaId Key property. See {@link LeaveRequestDetails.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestDetails.requestId}.
   * @param leaveDate Key property. See {@link LeaveRequestDetails.leaveDate}.
   * @param type Key property. See {@link LeaveRequestDetails.type}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestDetails`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    leaveDate: Moment,
    type: string
  ): DeleteRequestBuilder<LeaveRequestDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestDetails` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveRequestDetails<T>
  ): DeleteRequestBuilder<LeaveRequestDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    leaveDate?: Moment,
    type?: string
  ): DeleteRequestBuilder<LeaveRequestDetails<T>, T> {
    return new DeleteRequestBuilder<LeaveRequestDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveRequestDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!,
            LeaveDate: leaveDate!,
            Type: type!
          }
    );
  }
}
