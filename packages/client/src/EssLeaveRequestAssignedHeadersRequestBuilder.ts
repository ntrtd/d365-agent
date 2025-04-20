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
import { EssLeaveRequestAssignedHeaders } from './EssLeaveRequestAssignedHeaders';

/**
 * Request builder class for operations supported on the {@link EssLeaveRequestAssignedHeaders} entity.
 */
export class EssLeaveRequestAssignedHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveRequestAssignedHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveRequestAssignedHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
    return new GetAllRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveRequestAssignedHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveRequestAssignedHeaders`.
   */
  create(
    entity: EssLeaveRequestAssignedHeaders<T>
  ): CreateRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
    return new CreateRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveRequestAssignedHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAssignedHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestAssignedHeaders.requestId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveRequestAssignedHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveRequestAssignedHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveRequestAssignedHeaders`.
   */
  update(
    entity: EssLeaveRequestAssignedHeaders<T>
  ): UpdateRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
    return new UpdateRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAssignedHeaders`.
   * @param dataAreaId Key property. See {@link EssLeaveRequestAssignedHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestAssignedHeaders.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAssignedHeaders`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestAssignedHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestAssignedHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveRequestAssignedHeaders<T>
  ): DeleteRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T> {
    return new DeleteRequestBuilder<EssLeaveRequestAssignedHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveRequestAssignedHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
