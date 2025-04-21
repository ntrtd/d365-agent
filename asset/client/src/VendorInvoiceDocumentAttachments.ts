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
import type { VendorInvoiceDocumentAttachmentsApi } from './VendorInvoiceDocumentAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import {
  VendorInvoiceHeaders,
  VendorInvoiceHeadersType
} from './VendorInvoiceHeaders';

/**
 * This class represents the entity "VendorInvoiceDocumentAttachments" of service "d365_metadata".
 */
export class VendorInvoiceDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for VendorInvoiceDocumentAttachments.
   */
  static override _entityName = 'VendorInvoiceDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceDocumentAttachments entity.
   */
  static _keys = ['dataAreaId', 'HeaderReference'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Contents.
   * @nullable
   */
  declare fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorInvoiceHeaders} entity.
   */
  declare vendorInvoiceHeader?: VendorInvoiceHeaders<T> | null;

  constructor(_entityApi: VendorInvoiceDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  restriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  vendorInvoiceHeader?: VendorInvoiceHeadersType<T> | null;
}
