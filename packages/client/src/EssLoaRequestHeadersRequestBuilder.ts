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
import { EssLoaRequestHeaders } from './EssLoaRequestHeaders';

/**
 * Request builder class for operations supported on the {@link EssLoaRequestHeaders} entity.
 */
export class EssLoaRequestHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLoaRequestHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EssLoaRequestHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EssLoaRequestHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EssLoaRequestHeaders<T>, T> {
    return new GetAllRequestBuilder<EssLoaRequestHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssLoaRequestHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLoaRequestHeaders`.
   */
  create(
    entity: EssLoaRequestHeaders<T>
  ): CreateRequestBuilder<EssLoaRequestHeaders<T>, T> {
    return new CreateRequestBuilder<EssLoaRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLoaRequestHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssLoaRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLoaRequestHeaders.requestId}.
   * @returns A request builder for creating requests to retrieve one `EssLoaRequestHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssLoaRequestHeaders<T>, T> {
    return new GetByKeyRequestBuilder<EssLoaRequestHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLoaRequestHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLoaRequestHeaders`.
   */
  update(
    entity: EssLoaRequestHeaders<T>
  ): UpdateRequestBuilder<EssLoaRequestHeaders<T>, T> {
    return new UpdateRequestBuilder<EssLoaRequestHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLoaRequestHeaders`.
   * @param dataAreaId Key property. See {@link EssLoaRequestHeaders.dataAreaId}.
   * @param requestId Key property. See {@link EssLoaRequestHeaders.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `EssLoaRequestHeaders`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<EssLoaRequestHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLoaRequestHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLoaRequestHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EssLoaRequestHeaders<T>
  ): DeleteRequestBuilder<EssLoaRequestHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<EssLoaRequestHeaders<T>, T> {
    return new DeleteRequestBuilder<EssLoaRequestHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssLoaRequestHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
