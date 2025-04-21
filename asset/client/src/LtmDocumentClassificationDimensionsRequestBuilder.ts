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
import { LtmDocumentClassificationDimensions } from './LtmDocumentClassificationDimensions';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationDimensions} entity.
 */
export class LtmDocumentClassificationDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
    return new GetAllRequestBuilder<LtmDocumentClassificationDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationDimensions`.
   */
  create(
    entity: LtmDocumentClassificationDimensions<T>
  ): CreateRequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
    return new CreateRequestBuilder<LtmDocumentClassificationDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationDimensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationDimensions.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationDimensions.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationDimensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationDimensions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentClassificationId: documentClassificationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationDimensions`.
   */
  update(
    entity: LtmDocumentClassificationDimensions<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
    return new UpdateRequestBuilder<LtmDocumentClassificationDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationDimensions`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationDimensions.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationDimensions.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationDimensions`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationDimensions<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationDimensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationDimensions<T>, T> {
    return new DeleteRequestBuilder<LtmDocumentClassificationDimensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationDimensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
