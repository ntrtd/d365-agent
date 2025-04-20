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
import { LtmDocumentClassificationCollectPaymDocs } from './LtmDocumentClassificationCollectPaymDocs';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationCollectPaymDocs} entity.
 */
export class LtmDocumentClassificationCollectPaymDocsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationCollectPaymDocs` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationCollectPaymDocs` entities.
   */
  getAll(): GetAllRequestBuilder<
    LtmDocumentClassificationCollectPaymDocs<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LtmDocumentClassificationCollectPaymDocs<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationCollectPaymDocs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   */
  create(
    entity: LtmDocumentClassificationCollectPaymDocs<T>
  ): CreateRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T> {
    return new CreateRequestBuilder<
      LtmDocumentClassificationCollectPaymDocs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationCollectPaymDocs` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationCollectPaymDocs.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationCollectPaymDocs.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationCollectPaymDocs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationCollectPaymDocs<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentClassificationId: documentClassificationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   */
  update(
    entity: LtmDocumentClassificationCollectPaymDocs<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T> {
    return new UpdateRequestBuilder<
      LtmDocumentClassificationCollectPaymDocs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationCollectPaymDocs.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationCollectPaymDocs.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationCollectPaymDocs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationCollectPaymDocs` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationCollectPaymDocs<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationCollectPaymDocs<T>, T> {
    return new DeleteRequestBuilder<
      LtmDocumentClassificationCollectPaymDocs<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationCollectPaymDocs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
