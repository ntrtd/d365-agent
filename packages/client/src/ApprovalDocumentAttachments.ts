/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ApprovalDocumentAttachmentsApi } from './ApprovalDocumentAttachmentsApi';

/**
 * This class represents the entity "ApprovalDocumentAttachments" of service "d365_metadata".
 */
export class ApprovalDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApprovalDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for ApprovalDocumentAttachments.
   */
  static override _entityName = 'ApprovalDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalDocumentAttachments entity.
   */
  static _keys = ['WorkItemRecId', 'AttachmentRecId'];
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Attachment Rec Id.
   */
  declare attachmentRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Attached Notes.
   * @nullable
   */
  declare attachedNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Name.
   * @nullable
   */
  declare attachmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApprovalDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  attachmentRecId: DeserializedType<T, 'Edm.Int64'>;
  attachedNotes?: DeserializedType<T, 'Edm.String'> | null;
  attachmentName?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
}
