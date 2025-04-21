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
import type { AssetMaintenanceJobTypeDefaultDocumentAttachmentsApi } from './AssetMaintenanceJobTypeDefaultDocumentAttachmentsApi';
import { DocuRestriction } from './DocuRestriction';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceJobTypeDefaultDocumentAttachments" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeDefaultDocumentAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeDefaultDocumentAttachmentsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeDefaultDocumentAttachments.
   */
  static override _entityName =
    'AssetMaintenanceJobTypeDefaultDocumentAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeDefaultDocumentAttachments entity.
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
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Product Id.
   * @nullable
   */
  declare modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Product Id.
   * @nullable
   */
  declare productId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Contents.
   * @nullable
   */
  declare fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: AssetMaintenanceJobTypeDefaultDocumentAttachmentsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeDefaultDocumentAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  modelProductId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  productId?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
}
