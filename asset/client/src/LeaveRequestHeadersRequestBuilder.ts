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
import { LeaveRequestHeaders } from './LeaveRequestHeaders';

/**
 * Request builder class for operations supported on the {@link LeaveRequestHeaders} entity.
 */
export class LeaveRequestHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveRequestHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveRequestHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveRequestHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveRequestHeaders<T>, T> {
    return new GetAllRequestBuilder<LeaveRequestHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveRequestHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveRequestHeaders`.
   */
  create(
    entity: LeaveRequestHeaders<T>
  ): CreateRequestBuilder<LeaveRequestHeaders<T>, T> {
    return new CreateRequestBuilder<LeaveRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveRequestHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestHeaders.requestId}.
   * @returns A request builder for creating requests to retrieve one `LeaveRequestHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveRequestHeaders<T>, T> {
    return new GetByKeyRequestBuilder<LeaveRequestHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveRequestHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveRequestHeaders`.
   */
  update(
    entity: LeaveRequestHeaders<T>
  ): UpdateRequestBuilder<LeaveRequestHeaders<T>, T> {
    return new UpdateRequestBuilder<LeaveRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestHeaders`.
   * @param dataAreaId Key property. See {@link LeaveRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link LeaveRequestHeaders.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestHeaders`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<LeaveRequestHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveRequestHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveRequestHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveRequestHeaders<T>
  ): DeleteRequestBuilder<LeaveRequestHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<LeaveRequestHeaders<T>, T> {
    return new DeleteRequestBuilder<LeaveRequestHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveRequestHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
