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
import { LtmDocumentClassificationTypes } from './LtmDocumentClassificationTypes';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationTypes} entity.
 */
export class LtmDocumentClassificationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationTypes<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationTypes`.
   */
  create(
    entity: LtmDocumentClassificationTypes<T>
  ): CreateRequestBuilder<LtmDocumentClassificationTypes<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationTypes.dataAreaId}.
   * @param documentClassificationTypeId Key property. See {@link LtmDocumentClassificationTypes.documentClassificationTypeId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmDocumentClassificationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentClassificationTypeId: documentClassificationTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationTypes`.
   */
  update(
    entity: LtmDocumentClassificationTypes<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationTypes<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationTypes`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationTypes.dataAreaId}.
   * @param documentClassificationTypeId Key property. See {@link LtmDocumentClassificationTypes.documentClassificationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationTypes`.
   */
  delete(
    dataAreaId: string,
    documentClassificationTypeId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationTypes<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationTypeId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationTypes<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationTypeId: documentClassificationTypeId!
          }
    );
  }
}
