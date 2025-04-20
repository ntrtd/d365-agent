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
import { EssLeaveRequestHeaders } from './EssLeaveRequestHeaders';

/**
 * Request builder class for operations supported on the {@link EssLeaveRequestHeaders} entity.
 */
export class EssLeaveRequestHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLeaveRequestHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EssLeaveRequestHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EssLeaveRequestHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EssLeaveRequestHeaders<T>, T> {
    return new GetAllRequestBuilder<EssLeaveRequestHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLeaveRequestHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLeaveRequestHeaders`.
   */
  create(
    entity: EssLeaveRequestHeaders<T>
  ): CreateRequestBuilder<EssLeaveRequestHeaders<T>, T> {
    return new CreateRequestBuilder<EssLeaveRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLeaveRequestHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLeaveRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestHeaders.requestId}.
   * @returns A request builder for creating requests to retrieve one `EssLeaveRequestHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLeaveRequestHeaders<T>, T> {
    return new GetByKeyRequestBuilder<EssLeaveRequestHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLeaveRequestHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLeaveRequestHeaders`.
   */
  update(
    entity: EssLeaveRequestHeaders<T>
  ): UpdateRequestBuilder<EssLeaveRequestHeaders<T>, T> {
    return new UpdateRequestBuilder<EssLeaveRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestHeaders`.
   * @param dataAreaId Key property. See {@link EssLeaveRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLeaveRequestHeaders.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestHeaders`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<EssLeaveRequestHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLeaveRequestHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLeaveRequestHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EssLeaveRequestHeaders<T>
  ): DeleteRequestBuilder<EssLeaveRequestHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<EssLeaveRequestHeaders<T>, T> {
    return new DeleteRequestBuilder<EssLeaveRequestHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLeaveRequestHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
