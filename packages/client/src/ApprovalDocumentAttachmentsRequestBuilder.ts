/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { ApprovalDocumentAttachments } from './ApprovalDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link ApprovalDocumentAttachments} entity.
 */
export class ApprovalDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `ApprovalDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<ApprovalDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApprovalDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalDocumentAttachments`.
   */
  create(
    entity: ApprovalDocumentAttachments<T>
  ): CreateRequestBuilder<ApprovalDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<ApprovalDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApprovalDocumentAttachments` entity based on its keys.
   * @param workItemRecId Key property. See {@link ApprovalDocumentAttachments.workItemRecId}.
   * @param attachmentRecId Key property. See {@link ApprovalDocumentAttachments.attachmentRecId}.
   * @returns A request builder for creating requests to retrieve one `ApprovalDocumentAttachments` entity based on its keys.
   */
  getByKey(
    workItemRecId: DeserializedType<T, 'Edm.Int64'>,
    attachmentRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ApprovalDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalDocumentAttachments<T>, T>(
      this.entityApi,
      {
        WorkItemRecId: workItemRecId,
        AttachmentRecId: attachmentRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalDocumentAttachments`.
   */
  update(
    entity: ApprovalDocumentAttachments<T>
  ): UpdateRequestBuilder<ApprovalDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<ApprovalDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalDocumentAttachments`.
   * @param workItemRecId Key property. See {@link ApprovalDocumentAttachments.workItemRecId}.
   * @param attachmentRecId Key property. See {@link ApprovalDocumentAttachments.attachmentRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalDocumentAttachments`.
   */
  delete(
    workItemRecId: BigNumber,
    attachmentRecId: BigNumber
  ): DeleteRequestBuilder<ApprovalDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: ApprovalDocumentAttachments<T>
  ): DeleteRequestBuilder<ApprovalDocumentAttachments<T>, T>;
  delete(
    workItemRecIdOrEntity: any,
    attachmentRecId?: BigNumber
  ): DeleteRequestBuilder<ApprovalDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<ApprovalDocumentAttachments<T>, T>(
      this.entityApi,
      workItemRecIdOrEntity instanceof ApprovalDocumentAttachments
        ? workItemRecIdOrEntity
        : {
            WorkItemRecId: workItemRecIdOrEntity!,
            AttachmentRecId: attachmentRecId!
          }
    );
  }
}
