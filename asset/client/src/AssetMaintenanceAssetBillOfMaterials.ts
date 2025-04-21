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
import type { AssetMaintenanceAssetBillOfMaterialsApi } from './AssetMaintenanceAssetBillOfMaterialsApi';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';

/**
 * This class represents the entity "AssetMaintenanceAssetBillOfMaterials" of service "d365_metadata".
 */
export class AssetMaintenanceAssetBillOfMaterials<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetBillOfMaterialsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetBillOfMaterials.
   */
  static override _entityName = 'AssetMaintenanceAssetBillOfMaterials';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetBillOfMaterials entity.
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
   * Bill Of Material Quantity.
   */
  declare billOfMaterialQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number Replaced By.
   */
  declare lineNumberReplacedBy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inventory Style Id.
   * @nullable
   */
  declare inventoryStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Version Id.
   * @nullable
   */
  declare inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Serial Id.
   * @nullable
   */
  declare inventorySerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Version Id.
   * @nullable
   */
  declare inventoryVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Color Id.
   * @nullable
   */
  declare inventoryColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Size Id.
   * @nullable
   */
  declare inventorySizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Batch Id.
   * @nullable
   */
  declare inventoryBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Config Id.
   * @nullable
   */
  declare inventoryConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetBillOfMaterialsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetBillOfMaterialsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billOfMaterialQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineNumberReplacedBy: DeserializedType<T, 'Edm.Int64'>;
  inventoryStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inventVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventorySerialId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventorySizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryBatchId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryConfigId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
}
