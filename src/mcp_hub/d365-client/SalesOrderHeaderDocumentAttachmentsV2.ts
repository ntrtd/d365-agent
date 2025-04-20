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
import type { SalesOrderHeaderDocumentAttachmentsV2Api } from './SalesOrderHeaderDocumentAttachmentsV2Api';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import {
  SalesOrderHeadersV3,
  SalesOrderHeadersV3Type
} from './SalesOrderHeadersV3';
import {
  SalesOrderHeadersV2,
  SalesOrderHeadersV2Type
} from './SalesOrderHeadersV2';
import {
  CdsSalesOrderHeaders,
  CdsSalesOrderHeadersType
} from './CdsSalesOrderHeaders';

/**
 * This class represents the entity "SalesOrderHeaderDocumentAttachmentsV2" of service "d365_metadata".
 */
export class SalesOrderHeaderDocumentAttachmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderHeaderDocumentAttachmentsV2Type<T>
{
  /**
   * Technical entity name for SalesOrderHeaderDocumentAttachmentsV2.
   */
  static override _entityName = 'SalesOrderHeaderDocumentAttachmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderHeaderDocumentAttachmentsV2 entity.
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
  /**
   * One-to-one navigation property to the {@link SalesOrderHeadersV3} entity.
   */
  declare salesOrderHeaderV3?: SalesOrderHeadersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderHeadersV2} entity.
   */
  declare salesOrderHeaderV2?: SalesOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsSalesOrderHeaders} entity.
   */
  declare cdsSalesOrderHeader?: CdsSalesOrderHeaders<T> | null;

  constructor(_entityApi: SalesOrderHeaderDocumentAttachmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeaderDocumentAttachmentsV2Type<
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
  salesOrderHeaderV3?: SalesOrderHeadersV3Type<T> | null;
  salesOrderHeaderV2?: SalesOrderHeadersV2Type<T> | null;
  cdsSalesOrderHeader?: CdsSalesOrderHeadersType<T> | null;
}
