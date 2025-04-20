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
import type { SourceSystemProductDocumentAttachmentMessagesApi } from './SourceSystemProductDocumentAttachmentMessagesApi';
import { EcoResProductImageUsage } from './EcoResProductImageUsage';
import { DocuRestriction } from './DocuRestriction';
import { NoYes } from './NoYes';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';

/**
 * This class represents the entity "SourceSystemProductDocumentAttachmentMessages" of service "d365_metadata".
 */
export class SourceSystemProductDocumentAttachmentMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemProductDocumentAttachmentMessagesType<T>
{
  /**
   * Technical entity name for SourceSystemProductDocumentAttachmentMessages.
   */
  static override _entityName = 'SourceSystemProductDocumentAttachmentMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemProductDocumentAttachmentMessages entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'SourceSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Image Usage.
   * @nullable
   */
  declare productImageUsage?: EcoResProductImageUsage | null;
  /**
   * Attachment.
   * @nullable
   */
  declare attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Document Attachment Type Code.
   * @nullable
   */
  declare documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Restriction.
   * @nullable
   */
  declare accessRestriction?: DocuRestriction | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original File Name.
   * @nullable
   */
  declare originalFileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Description.
   * @nullable
   */
  declare attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fields With Value.
   * @nullable
   */
  declare fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Is Product Image.
   * @nullable
   */
  declare isProductImage?: NoYes | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Product Image.
   * @nullable
   */
  declare isDefaultProductImage?: NoYes | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;

  constructor(_entityApi: SourceSystemProductDocumentAttachmentMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceSystemProductDocumentAttachmentMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productImageUsage?: EcoResProductImageUsage | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  accessRestriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  originalFileName?: DeserializedType<T, 'Edm.String'> | null;
  attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  isProductImage?: NoYes | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultProductImage?: NoYes | null;
  processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
}
