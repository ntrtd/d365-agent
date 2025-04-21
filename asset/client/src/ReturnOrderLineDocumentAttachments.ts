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
import type { ReturnOrderLineDocumentAttachmentsApi } from './ReturnOrderLineDocumentAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';

/**
 * This class represents the entity "ReturnOrderLineDocumentAttachments" of service "d365_metadata".
 */
export class ReturnOrderLineDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnOrderLineDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for ReturnOrderLineDocumentAttachments.
   */
  static override _entityName = 'ReturnOrderLineDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnOrderLineDocumentAttachments entity.
   */
  static _keys = ['dataAreaId', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Return Order Number.
   * @nullable
   */
  declare returnOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Attachment.
   * @nullable
   */
  declare isDefaultAttachment?: NoYes | null;
  /**
   * Access Restriction.
   * @nullable
   */
  declare accessRestriction?: DocuRestriction | null;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attachment Description.
   * @nullable
   */
  declare attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Attachment Type Code.
   * @nullable
   */
  declare documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment.
   * @nullable
   */
  declare attachment?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: ReturnOrderLineDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnOrderLineDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  returnOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultAttachment?: NoYes | null;
  accessRestriction?: DocuRestriction | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
}
