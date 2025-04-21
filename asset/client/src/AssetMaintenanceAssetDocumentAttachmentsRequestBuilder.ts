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
import { AssetMaintenanceAssetDocumentAttachments } from './AssetMaintenanceAssetDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetDocumentAttachments} entity.
 */
export class AssetMaintenanceAssetDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetDocumentAttachments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   */
  create(
    entity: AssetMaintenanceAssetDocumentAttachments<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link AssetMaintenanceAssetDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   */
  update(
    entity: AssetMaintenanceAssetDocumentAttachments<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link AssetMaintenanceAssetDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetDocumentAttachments<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
