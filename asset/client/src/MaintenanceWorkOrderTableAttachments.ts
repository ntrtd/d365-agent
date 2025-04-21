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
import type { MaintenanceWorkOrderTableAttachmentsApi } from './MaintenanceWorkOrderTableAttachmentsApi';
import { DocuRestriction } from './DocuRestriction';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "MaintenanceWorkOrderTableAttachments" of service "d365_metadata".
 */
export class MaintenanceWorkOrderTableAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintenanceWorkOrderTableAttachmentsType<T>
{
  /**
   * Technical entity name for MaintenanceWorkOrderTableAttachments.
   */
  static override _entityName = 'MaintenanceWorkOrderTableAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaintenanceWorkOrderTableAttachments entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderId',
    'DocumentAttachmentTypeCode',
    'AttachmentDescription',
    'AttachedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare documentAttachment?: AssetMaintenanceWorkOrderTablesV2<T> | null;

  constructor(_entityApi: MaintenanceWorkOrderTableAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MaintenanceWorkOrderTableAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
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
  documentAttachment?: AssetMaintenanceWorkOrderTablesV2Type<T> | null;
}
