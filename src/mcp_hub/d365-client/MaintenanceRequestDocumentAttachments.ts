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
import type { MaintenanceRequestDocumentAttachmentsApi } from './MaintenanceRequestDocumentAttachmentsApi';
import { DocuRestriction } from './DocuRestriction';
import { DocumentTypes, DocumentTypesType } from './DocumentTypes';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "MaintenanceRequestDocumentAttachments" of service "d365_metadata".
 */
export class MaintenanceRequestDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintenanceRequestDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for MaintenanceRequestDocumentAttachments.
   */
  static override _entityName = 'MaintenanceRequestDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaintenanceRequestDocumentAttachments entity.
   */
  static _keys = [
    'dataAreaId',
    'RequestId',
    'DocumentAttachmentTypeCode',
    'AttachmentDescription',
    'AttachedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
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
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Attachment Type Legal Entity Id.
   * @nullable
   */
  declare documentAttachmentTypeLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DocumentTypes} entity.
   */
  declare documentAttachmentType?: DocumentTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare documentAttachment?: AssetMaintenanceRequestsV2<T> | null;

  constructor(_entityApi: MaintenanceRequestDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MaintenanceRequestDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>;
  attachmentDescription: DeserializedType<T, 'Edm.String'>;
  attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  attachment?: DeserializedType<T, 'Edm.Binary'> | null;
  accessRestriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  originalFileName?: DeserializedType<T, 'Edm.String'> | null;
  attachingUserId?: DeserializedType<T, 'Edm.String'> | null;
  fileLocation?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  documentAttachmentTypeLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  documentAttachmentType?: DocumentTypesType<T> | null;
  documentAttachment?: AssetMaintenanceRequestsV2Type<T> | null;
}
