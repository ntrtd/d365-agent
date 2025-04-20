/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { MaintenanceWorkOrderLineDocumentAttachments } from './MaintenanceWorkOrderLineDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link MaintenanceWorkOrderLineDocumentAttachments} entity.
 */
export class MaintenanceWorkOrderLineDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MaintenanceWorkOrderLineDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MaintenanceWorkOrderLineDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintenanceWorkOrderLineDocumentAttachments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintenanceWorkOrderLineDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   */
  create(
    entity: MaintenanceWorkOrderLineDocumentAttachments<T>
  ): CreateRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintenanceWorkOrderLineDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.dataAreaId}.
   * @param workOrderId Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.workOrderId}.
   * @param lineNumber Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `MaintenanceWorkOrderLineDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkOrderId: workOrderId,
      LineNumber: lineNumber,
      DocumentAttachmentTypeCode: documentAttachmentTypeCode,
      AttachmentDescription: attachmentDescription,
      AttachedDateTime: attachedDateTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   */
  update(
    entity: MaintenanceWorkOrderLineDocumentAttachments<T>
  ): UpdateRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   * @param dataAreaId Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.dataAreaId}.
   * @param workOrderId Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.workOrderId}.
   * @param lineNumber Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link MaintenanceWorkOrderLineDocumentAttachments.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    workOrderId: string,
    lineNumber: BigNumber,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintenanceWorkOrderLineDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintenanceWorkOrderLineDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MaintenanceWorkOrderLineDocumentAttachments<T>
  ): DeleteRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workOrderId?: string,
    lineNumber?: BigNumber,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<MaintenanceWorkOrderLineDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<
      MaintenanceWorkOrderLineDocumentAttachments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaintenanceWorkOrderLineDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkOrderId: workOrderId!,
            LineNumber: lineNumber!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
