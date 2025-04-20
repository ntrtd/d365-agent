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
import { LtmDocumentClassificationAdditionals } from './LtmDocumentClassificationAdditionals';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationAdditionals} entity.
 */
export class LtmDocumentClassificationAdditionalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationAdditionals` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationAdditionals` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationAdditionals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationAdditionals`.
   */
  create(
    entity: LtmDocumentClassificationAdditionals<T>
  ): CreateRequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationAdditionals` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationAdditionals.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationAdditionals.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationAdditionals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationAdditionals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentClassificationId: documentClassificationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationAdditionals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationAdditionals`.
   */
  update(
    entity: LtmDocumentClassificationAdditionals<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationAdditionals`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationAdditionals.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationAdditionals.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationAdditionals`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationAdditionals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationAdditionals` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationAdditionals<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationAdditionals<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationAdditionals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationAdditionals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
