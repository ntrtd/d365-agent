/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { MaintenanceRequestDocumentAttachments } from './MaintenanceRequestDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link MaintenanceRequestDocumentAttachments} entity.
 */
export class MaintenanceRequestDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MaintenanceRequestDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MaintenanceRequestDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<
      MaintenanceRequestDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintenanceRequestDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintenanceRequestDocumentAttachments`.
   */
  create(
    entity: MaintenanceRequestDocumentAttachments<T>
  ): CreateRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<
      MaintenanceRequestDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintenanceRequestDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaintenanceRequestDocumentAttachments.dataAreaId}.
   * @param requestId Key property. See {@link MaintenanceRequestDocumentAttachments.requestId}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceRequestDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceRequestDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceRequestDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `MaintenanceRequestDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintenanceRequestDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RequestId: requestId,
      DocumentAttachmentTypeCode: documentAttachmentTypeCode,
      AttachmentDescription: attachmentDescription,
      AttachedDateTime: attachedDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintenanceRequestDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintenanceRequestDocumentAttachments`.
   */
  update(
    entity: MaintenanceRequestDocumentAttachments<T>
  ): UpdateRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<
      MaintenanceRequestDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintenanceRequestDocumentAttachments`.
   * @param dataAreaId Key property. See {@link MaintenanceRequestDocumentAttachments.dataAreaId}.
   * @param requestId Key property. See {@link MaintenanceRequestDocumentAttachments.requestId}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceRequestDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceRequestDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceRequestDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceRequestDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    requestId: string,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintenanceRequestDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceRequestDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MaintenanceRequestDocumentAttachments<T>
  ): DeleteRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<MaintenanceRequestDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<
      MaintenanceRequestDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaintenanceRequestDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
