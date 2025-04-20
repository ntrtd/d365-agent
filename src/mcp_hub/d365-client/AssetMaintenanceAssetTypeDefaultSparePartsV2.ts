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
import type { AssetMaintenanceAssetTypeDefaultSparePartsV2Api } from './AssetMaintenanceAssetTypeDefaultSparePartsV2Api';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceReleasedProducts,
  AssetMaintenanceReleasedProductsType
} from './AssetMaintenanceReleasedProducts';
import { Workers, WorkersType } from './Workers';
import {
  AssetMaintenanceAssetTypeDefaults,
  AssetMaintenanceAssetTypeDefaultsType
} from './AssetMaintenanceAssetTypeDefaults';

/**
 * This class represents the entity "AssetMaintenanceAssetTypeDefaultSparePartsV2" of service "d365_metadata".
 */
export class AssetMaintenanceAssetTypeDefaultSparePartsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetTypeDefaultSparePartsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetTypeDefaultSparePartsV2.
   */
  static override _entityName = 'AssetMaintenanceAssetTypeDefaultSparePartsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetTypeDefaultSparePartsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ManufacturerId',
    'ManufacturerModelId',
    'ModelId',
    'ProductNumber',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufacturer Id.
   */
  declare manufacturerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufacturer Model Id.
   */
  declare manufacturerModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Spare Part Approved For Use.
   * @nullable
   */
  declare isSparePartApprovedForUse?: NoYes | null;
  /**
   * Alternative Product Number.
   * @nullable
   */
  declare alternativeProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved Date Time.
   */
  declare approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved By Worker Personnel Number.
   * @nullable
   */
  declare approvedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare alternativeSparePartProductNumber?: AssetMaintenanceReleasedProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare workerPersonnelNumber?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypeDefaults} entity.
   */
  declare assetTypeDefault?: AssetMaintenanceAssetTypeDefaults<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceReleasedProducts} entity.
   */
  declare sparePartProductNumber?: AssetMaintenanceReleasedProducts<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetTypeDefaultSparePartsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetTypeDefaultSparePartsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  manufacturerId: DeserializedType<T, 'Edm.String'>;
  manufacturerModelId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSparePartApprovedForUse?: NoYes | null;
  alternativeProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvedByWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  alternativeSparePartProductNumber?: AssetMaintenanceReleasedProductsType<T> | null;
  workerPersonnelNumber?: WorkersType<T> | null;
  assetTypeDefault?: AssetMaintenanceAssetTypeDefaultsType<T> | null;
  sparePartProductNumber?: AssetMaintenanceReleasedProductsType<T> | null;
}
