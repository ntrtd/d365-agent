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
import type { AssetMaintenanceWorkOrderLinesApi } from './AssetMaintenanceWorkOrderLinesApi';
import {
  AssetMaintenanceWorkOrderLineNotes,
  AssetMaintenanceWorkOrderLineNotesType
} from './AssetMaintenanceWorkOrderLineNotes';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import {
  AssetMaintenanceWorkOrderTables,
  AssetMaintenanceWorkOrderTablesType
} from './AssetMaintenanceWorkOrderTables';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLines" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLinesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLines.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLines entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note Internal.
   * @nullable
   */
  declare noteInternal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note Worker.
   * @nullable
   */
  declare noteWorker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Forecast Hour Qty.
   */
  declare forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLineNotes} entity.
   */
  declare assetMaintenanceWorkOrderLineNote?: AssetMaintenanceWorkOrderLineNotes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare assetMaintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare assetMaintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTables} entity.
   */
  declare assetMaintenanceWorkOrderTable?: AssetMaintenanceWorkOrderTables<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType?: AssetMaintenanceJobTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  noteInternal?: DeserializedType<T, 'Edm.String'> | null;
  noteWorker?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceWorkOrderLineNote?: AssetMaintenanceWorkOrderLineNotesType<T> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  assetMaintenanceWorkOrderTable?: AssetMaintenanceWorkOrderTablesType<T> | null;
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
}
