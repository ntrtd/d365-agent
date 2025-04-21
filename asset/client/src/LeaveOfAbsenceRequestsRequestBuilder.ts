/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { LeaveOfAbsenceRequests } from './LeaveOfAbsenceRequests';

/**
 * Request builder class for operations supported on the {@link LeaveOfAbsenceRequests} entity.
 */
export class LeaveOfAbsenceRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveOfAbsenceRequests<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveOfAbsenceRequests` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveOfAbsenceRequests` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveOfAbsenceRequests<T>, T> {
    return new GetAllRequestBuilder<LeaveOfAbsenceRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveOfAbsenceRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveOfAbsenceRequests`.
   */
  create(
    entity: LeaveOfAbsenceRequests<T>
  ): CreateRequestBuilder<LeaveOfAbsenceRequests<T>, T> {
    return new CreateRequestBuilder<LeaveOfAbsenceRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveOfAbsenceRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveOfAbsenceRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveOfAbsenceRequests.requestId}.
   * @returns A request builder for creating requests to retrieve one `LeaveOfAbsenceRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveOfAbsenceRequests<T>, T> {
    return new GetByKeyRequestBuilder<LeaveOfAbsenceRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveOfAbsenceRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveOfAbsenceRequests`.
   */
  update(
    entity: LeaveOfAbsenceRequests<T>
  ): UpdateRequestBuilder<LeaveOfAbsenceRequests<T>, T> {
    return new UpdateRequestBuilder<LeaveOfAbsenceRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveOfAbsenceRequests`.
   * @param dataAreaId Key property. See {@link LeaveOfAbsenceRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveOfAbsenceRequests.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveOfAbsenceRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<LeaveOfAbsenceRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveOfAbsenceRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveOfAbsenceRequests` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveOfAbsenceRequests<T>
  ): DeleteRequestBuilder<LeaveOfAbsenceRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<LeaveOfAbsenceRequests<T>, T> {
    return new DeleteRequestBuilder<LeaveOfAbsenceRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveOfAbsenceRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
