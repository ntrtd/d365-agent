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
import { BatchOrderHeaders } from './BatchOrderHeaders';

/**
 * Request builder class for operations supported on the {@link BatchOrderHeaders} entity.
 */
export class BatchOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<BatchOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderHeaders`.
   */
  create(
    entity: BatchOrderHeaders<T>
  ): CreateRequestBuilder<BatchOrderHeaders<T>, T> {
    return new CreateRequestBuilder<BatchOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderHeaders.dataAreaId}.
   * @param batchOrderNumber Key property. See {@link BatchOrderHeaders.batchOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    batchOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderHeaders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BatchOrderNumber: batchOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderHeaders`.
   */
  update(
    entity: BatchOrderHeaders<T>
  ): UpdateRequestBuilder<BatchOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<BatchOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderHeaders`.
   * @param dataAreaId Key property. See {@link BatchOrderHeaders.dataAreaId}.
   * @param batchOrderNumber Key property. See {@link BatchOrderHeaders.batchOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    batchOrderNumber: string
  ): DeleteRequestBuilder<BatchOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderHeaders<T>
  ): DeleteRequestBuilder<BatchOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    batchOrderNumber?: string
  ): DeleteRequestBuilder<BatchOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<BatchOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BatchOrderNumber: batchOrderNumber!
          }
    );
  }
}
