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
import type { ReleasedProductDocumentAttachmentsApi } from './ReleasedProductDocumentAttachmentsApi';
import { EcoResProductImageUsage } from './EcoResProductImageUsage';
import { DocuRestriction } from './DocuRestriction';
import { NoYes } from './NoYes';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ReleasedProductDocumentAttachments" of service "d365_metadata".
 */
export class ReleasedProductDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for ReleasedProductDocumentAttachments.
   */
  static override _entityName = 'ReleasedProductDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductDocumentAttachments entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'DocumentAttachmentTypeCode',
    'AttachmentDescription',
    'AttachedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Attachment Type Code.
   */
  declare documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Attachment Description.
   */
  declare attachmentDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Attached Date Time.
   */
  declare attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Attaching User Id.
   * @nullable
   */
  declare attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Location.
   * @nullable
   */
  declare fileLocation?: DeserializedType<T, 'Edm.String'> | null;
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
   * Document Attachment Type Legal Entity Id.
   * @nullable
   */
  declare documentAttachmentTypeLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ReleasedProductDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  attachmentDescription: DeserializedType<T, 'Edm.String'>;
  attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productImageUsage?: EcoResProductImageUsage | null;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  accessRestriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  originalFileName?: DeserializedType<T, 'Edm.String'> | null;
  attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  fileLocation?: DeserializedType<T, 'Edm.String'> | null;
  isProductImage?: NoYes | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultProductImage?: NoYes | null;
  documentAttachmentTypeLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
