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
import type { AssetMaintenanceUnplannedWorkOrderLinesApi } from './AssetMaintenanceUnplannedWorkOrderLinesApi';
import { SchedJobLink } from './SchedJobLink';
import {
  MaintenanceWorkOrderLineDocumentAttachments,
  MaintenanceWorkOrderLineDocumentAttachmentsType
} from './MaintenanceWorkOrderLineDocumentAttachments';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceWorkOrderJobChecklistHeadersV2,
  AssetMaintenanceWorkOrderJobChecklistHeadersV2Type
} from './AssetMaintenanceWorkOrderJobChecklistHeadersV2';

/**
 * This class represents the entity "AssetMaintenanceUnplannedWorkOrderLines" of service "d365_metadata".
 */
export class AssetMaintenanceUnplannedWorkOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceUnplannedWorkOrderLinesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceUnplannedWorkOrderLines.
   */
  static override _entityName = 'AssetMaintenanceUnplannedWorkOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceUnplannedWorkOrderLines entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderId', 'LineNumber'];
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
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Maintenance Asset Id.
   * @nullable
   */
  declare replacementMaintenanceAssetId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Order Job Description.
   * @nullable
   */
  declare workOrderJobDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Functional Location Id.
   * @nullable
   */
  declare maintenanceAssetFunctionalLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scheduled Start Date Time.
   */
  declare scheduledStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled End Date Time.
   */
  declare scheduledEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Order Job Maintenance Worker Remarks.
   * @nullable
   */
  declare workOrderJobMaintenanceWorkerRemarks?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replacement Maintenance Asset Installation Functional Location Id.
   * @nullable
   */
  declare replacementMaintenanceAssetInstallationFunctionalLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Order Job Internal Note.
   * @nullable
   */
  declare workOrderJobInternalNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Hour Qty.
   */
  declare forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Schedule Link Type.
   * @nullable
   */
  declare jobScheduleLinkType?: SchedJobLink | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled Worker Personnel Number.
   * @nullable
   */
  declare scheduledWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link MaintenanceWorkOrderLineDocumentAttachments} entity.
   */
  declare unplannedWorkOrderJobDocumentAttachment?: MaintenanceWorkOrderLineDocumentAttachments<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsMaintenanceUnplannedWorkOrderJob: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare replacementMaintenanceAssetInstallationFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare maintenanceJobType?: AssetMaintenanceJobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare replacementMaintenanceAsset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare maintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare maintenanceAssetFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare scheduledWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare maintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare maintenanceJobTypeVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare asset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2} entity.
   */
  declare maintenanceWorkOrderJobChecklistHeadersMaintenanceUnplannedWorkOrderJob: AssetMaintenanceWorkOrderJobChecklistHeadersV2<T>[];

  constructor(_entityApi: AssetMaintenanceUnplannedWorkOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceUnplannedWorkOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  replacementMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderJobDescription?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetFunctionalLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  scheduledStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workOrderJobMaintenanceWorkerRemarks?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  replacementMaintenanceAssetInstallationFunctionalLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  workOrderJobInternalNote?: DeserializedType<T, 'Edm.String'> | null;
  forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  jobScheduleLinkType?: SchedJobLink | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  unplannedWorkOrderJobDocumentAttachment?: MaintenanceWorkOrderLineDocumentAttachmentsType<T> | null;
  maintenanceAssetBillOfMaterialsMaintenanceUnplannedWorkOrderJob: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  replacementMaintenanceAssetInstallationFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  maintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  replacementMaintenanceAsset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  maintenanceAssetFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  scheduledWorker?: AssetMaintenanceWorkersType<T> | null;
  maintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2Type<T> | null;
  maintenanceJobTypeVariant?: AssetMaintenanceJobVariantsType<T> | null;
  asset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceWorkOrderJobChecklistHeadersMaintenanceUnplannedWorkOrderJob: AssetMaintenanceWorkOrderJobChecklistHeadersV2Type<T>[];
}
