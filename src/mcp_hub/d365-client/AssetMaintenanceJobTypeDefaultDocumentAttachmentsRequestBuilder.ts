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
import { AssetMaintenanceJobTypeDefaultDocumentAttachments } from './AssetMaintenanceJobTypeDefaultDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeDefaultDocumentAttachments} entity.
 */
export class AssetMaintenanceJobTypeDefaultDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeDefaultDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeDefaultDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeDefaultDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   */
  create(
    entity: AssetMaintenanceJobTypeDefaultDocumentAttachments<T>
  ): CreateRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeDefaultDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link AssetMaintenanceJobTypeDefaultDocumentAttachments.documentId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeDefaultDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   */
  update(
    entity: AssetMaintenanceJobTypeDefaultDocumentAttachments<T>
  ): UpdateRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeDefaultDocumentAttachments.dataAreaId}.
   * @param documentId Key property. See {@link AssetMaintenanceJobTypeDefaultDocumentAttachments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeDefaultDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeDefaultDocumentAttachments<T>
  ): DeleteRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<
    AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeDefaultDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetMaintenanceJobTypeDefaultDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
