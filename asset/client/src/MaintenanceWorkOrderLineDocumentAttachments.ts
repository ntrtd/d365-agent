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
import type { MaintenanceWorkOrderLineDocumentAttachmentsApi } from './MaintenanceWorkOrderLineDocumentAttachmentsApi';
import { DocuRestriction } from './DocuRestriction';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import { DocumentTypes, DocumentTypesType } from './DocumentTypes';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';

/**
 * This class represents the entity "MaintenanceWorkOrderLineDocumentAttachments" of service "d365_metadata".
 */
export class MaintenanceWorkOrderLineDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintenanceWorkOrderLineDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for MaintenanceWorkOrderLineDocumentAttachments.
   */
  static override _entityName = 'MaintenanceWorkOrderLineDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MaintenanceWorkOrderLineDocumentAttachments entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderId',
    'LineNumber',
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
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare unplannedWorkOrderLineDocumentAttachment?: AssetMaintenanceUnplannedWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare requestWorkOrderLineDocumentAttachment?: AssetMaintenanceRequestWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare maintenancePlanWorkOrderLineDocumentAttachment?: AssetMaintenancePlanWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link DocumentTypes} entity.
   */
  declare documentAttachmentType?: DocumentTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare rountOrderLineDocumentAttachment?: AssetMaintenanceRoundWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare maintenanceWorkOrderLineDocumentAttachment?: AssetMaintenanceWorkOrderLinesV2<T> | null;

  constructor(_entityApi: MaintenanceWorkOrderLineDocumentAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MaintenanceWorkOrderLineDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
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
  unplannedWorkOrderLineDocumentAttachment?: AssetMaintenanceUnplannedWorkOrderLinesType<T> | null;
  requestWorkOrderLineDocumentAttachment?: AssetMaintenanceRequestWorkOrderLinesType<T> | null;
  maintenancePlanWorkOrderLineDocumentAttachment?: AssetMaintenancePlanWorkOrderLinesType<T> | null;
  documentAttachmentType?: DocumentTypesType<T> | null;
  rountOrderLineDocumentAttachment?: AssetMaintenanceRoundWorkOrderLinesType<T> | null;
  maintenanceWorkOrderLineDocumentAttachment?: AssetMaintenanceWorkOrderLinesV2Type<T> | null;
}
