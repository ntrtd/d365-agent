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
import type { SalesOrderHeaderDocumentAttachmentsApi } from './SalesOrderHeaderDocumentAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';

/**
 * This class represents the entity "SalesOrderHeaderDocumentAttachments" of service "d365_metadata".
 */
export class SalesOrderHeaderDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderHeaderDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for SalesOrderHeaderDocumentAttachments.
   */
  static override _entityName = 'SalesOrderHeaderDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderHeaderDocumentAttachments entity.
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
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Access Restriction.
   * @nullable
   */
  declare accessRestriction?: DocuRestriction | null;
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

  constructor(_entityApi: SalesOrderHeaderDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeaderDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultAttachment?: NoYes | null;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  accessRestriction?: DocuRestriction | null;
  attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
}
