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
import { LtmDocumentClassificationes } from './LtmDocumentClassificationes';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationes} entity.
 */
export class LtmDocumentClassificationesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationes<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationes`.
   */
  create(
    entity: LtmDocumentClassificationes<T>
  ): CreateRequestBuilder<LtmDocumentClassificationes<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationes.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationes.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationes<T>, T> {
    return new GetByKeyRequestBuilder<LtmDocumentClassificationes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentClassificationId: documentClassificationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationes`.
   */
  update(
    entity: LtmDocumentClassificationes<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationes<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationes`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationes.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationes.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationes`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationes<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationes<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
