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
import type { SalesOrderLineDocumentAttachmentsV2Api } from './SalesOrderLineDocumentAttachmentsV2Api';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { SalesOrderLines, SalesOrderLinesType } from './SalesOrderLines';
import {
  CdsSalesOrderLines,
  CdsSalesOrderLinesType
} from './CdsSalesOrderLines';

/**
 * This class represents the entity "SalesOrderLineDocumentAttachmentsV2" of service "d365_metadata".
 */
export class SalesOrderLineDocumentAttachmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderLineDocumentAttachmentsV2Type<T>
{
  /**
   * Technical entity name for SalesOrderLineDocumentAttachmentsV2.
   */
  static override _entityName = 'SalesOrderLineDocumentAttachmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderLineDocumentAttachmentsV2 entity.
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
  /**
   * One-to-one navigation property to the {@link SalesOrderLines} entity.
   */
  declare salesOrderLineV2?: SalesOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsSalesOrderLines} entity.
   */
  declare cdsSalesOrderLine?: CdsSalesOrderLines<T> | null;

  constructor(_entityApi: SalesOrderLineDocumentAttachmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderLineDocumentAttachmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultAttachment?: NoYes | null;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  accessRestriction?: DocuRestriction | null;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  attachmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  documentAttachmentTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  salesOrderLineV2?: SalesOrderLinesType<T> | null;
  cdsSalesOrderLine?: CdsSalesOrderLinesType<T> | null;
}
