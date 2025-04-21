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
import { MaintenanceWorkOrderTableAttachments } from './MaintenanceWorkOrderTableAttachments';

/**
 * Request builder class for operations supported on the {@link MaintenanceWorkOrderTableAttachments} entity.
 */
export class MaintenanceWorkOrderTableAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MaintenanceWorkOrderTableAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MaintenanceWorkOrderTableAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
    return new GetAllRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintenanceWorkOrderTableAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintenanceWorkOrderTableAttachments`.
   */
  create(
    entity: MaintenanceWorkOrderTableAttachments<T>
  ): CreateRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
    return new CreateRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintenanceWorkOrderTableAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaintenanceWorkOrderTableAttachments.dataAreaId}.
   * @param workOrderId Key property. See {@link MaintenanceWorkOrderTableAttachments.workOrderId}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceWorkOrderTableAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceWorkOrderTableAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceWorkOrderTableAttachments.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `MaintenanceWorkOrderTableAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintenanceWorkOrderTableAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      DocumentAttachmentTypeCode: documentAttachmentTypeCode,
      AttachmentDescription: attachmentDescription,
      AttachedDateTime: attachedDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintenanceWorkOrderTableAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintenanceWorkOrderTableAttachments`.
   */
  update(
    entity: MaintenanceWorkOrderTableAttachments<T>
  ): UpdateRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
    return new UpdateRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintenanceWorkOrderTableAttachments`.
   * @param dataAreaId Key property. See {@link MaintenanceWorkOrderTableAttachments.dataAreaId}.
   * @param workOrderId Key property. See {@link MaintenanceWorkOrderTableAttachments.workOrderId}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceWorkOrderTableAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceWorkOrderTableAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceWorkOrderTableAttachments.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceWorkOrderTableAttachments`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintenanceWorkOrderTableAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceWorkOrderTableAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MaintenanceWorkOrderTableAttachments<T>
  ): DeleteRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T> {
    return new DeleteRequestBuilder<MaintenanceWorkOrderTableAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaintenanceWorkOrderTableAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
