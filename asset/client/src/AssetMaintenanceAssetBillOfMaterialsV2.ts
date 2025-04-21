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
import type { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  OperationalSitesV2,
  OperationalSitesV2Type
} from './OperationalSitesV2';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import { ItemSerialNumbers, ItemSerialNumbersType } from './ItemSerialNumbers';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { Warehouses, WarehousesType } from './Warehouses';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';

/**
 * This class represents the entity "AssetMaintenanceAssetBillOfMaterialsV2" of service "d365_metadata".
 */
export class AssetMaintenanceAssetBillOfMaterialsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetBillOfMaterialsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetBillOfMaterialsV2.
   */
  static override _entityName = 'AssetMaintenanceAssetBillOfMaterialsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetBillOfMaterialsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetId',
    'LineNumber',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Item Batch Number.
   * @nullable
   */
  declare inventoryItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Material Quantity.
   */
  declare billOfMaterialQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number Replaced By.
   */
  declare lineNumberReplacedBy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operational Site Id.
   * @nullable
   */
  declare operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Item Serial Number.
   * @nullable
   */
  declare inventoryItemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Work Order Id.
   * @nullable
   */
  declare maintenanceWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Work Order Job Line Number.
   */
  declare maintenanceWorkOrderJobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare billOfMaterialsMaintenanceAsset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSitesV2} entity.
   */
  declare operationalSite?: OperationalSitesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare product?: AssetMaintenanceReleasedProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare unplannedWorkOrderJob?: AssetMaintenanceUnplannedWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare workOrderJobV2?: AssetMaintenanceWorkOrderLinesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare maintenanceRequestWorkOrderJob?: AssetMaintenanceRequestWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemSerialNumbers} entity.
   */
  declare itemSerialNumber?: ItemSerialNumbers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare maintenancePlanWorkOrderJob?: AssetMaintenancePlanWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare maintenanceRoundWorkOrderJob?: AssetMaintenanceRoundWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetBillOfMaterialsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetBillOfMaterialsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumberReplacedBy: DeserializedType<T, 'Edm.Int64'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryItemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrderJobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialsMaintenanceAsset?: AssetMaintenanceAssetsV3Type<T> | null;
  operationalSite?: OperationalSitesV2Type<T> | null;
  product?: AssetMaintenanceReleasedProductsType<T> | null;
  unplannedWorkOrderJob?: AssetMaintenanceUnplannedWorkOrderLinesType<T> | null;
  workOrderJobV2?: AssetMaintenanceWorkOrderLinesV2Type<T> | null;
  maintenanceRequestWorkOrderJob?: AssetMaintenanceRequestWorkOrderLinesType<T> | null;
  itemSerialNumber?: ItemSerialNumbersType<T> | null;
  maintenancePlanWorkOrderJob?: AssetMaintenancePlanWorkOrderLinesType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  warehouse?: WarehousesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  maintenanceRoundWorkOrderJob?: AssetMaintenanceRoundWorkOrderLinesType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
}
