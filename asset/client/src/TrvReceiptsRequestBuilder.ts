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
import { TrvReceipts } from './TrvReceipts';

/**
 * Request builder class for operations supported on the {@link TrvReceipts} entity.
 */
export class TrvReceiptsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvReceipts<T>, T> {
  /**
   * Returns a request builder for querying all `TrvReceipts` entities.
   * @returns A request builder for creating requests to retrieve all `TrvReceipts` entities.
   */
  getAll(): GetAllRequestBuilder<TrvReceipts<T>, T> {
    return new GetAllRequestBuilder<TrvReceipts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TrvReceipts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvReceipts`.
   */
  create(entity: TrvReceipts<T>): CreateRequestBuilder<TrvReceipts<T>, T> {
    return new CreateRequestBuilder<TrvReceipts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TrvReceipts` entity based on its keys.
   * @param dataAreaId Key property. See {@link TrvReceipts.dataAreaId}.
   * @param documentId Key property. See {@link TrvReceipts.documentId}.
   * @returns A request builder for creating requests to retrieve one `TrvReceipts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<TrvReceipts<T>, T> {
    return new GetByKeyRequestBuilder<TrvReceipts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TrvReceipts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvReceipts`.
   */
  update(entity: TrvReceipts<T>): UpdateRequestBuilder<TrvReceipts<T>, T> {
    return new UpdateRequestBuilder<TrvReceipts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvReceipts`.
   * @param dataAreaId Key property. See {@link TrvReceipts.dataAreaId}.
   * @param documentId Key property. See {@link TrvReceipts.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `TrvReceipts`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<TrvReceipts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvReceipts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvReceipts` by taking the entity as a parameter.
   */
  delete(entity: TrvReceipts<T>): DeleteRequestBuilder<TrvReceipts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<TrvReceipts<T>, T> {
    return new DeleteRequestBuilder<TrvReceipts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TrvReceipts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
