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
import type { ItemSerialNumbersApi } from './ItemSerialNumbersApi';
import { CatchWeightTags, CatchWeightTagsType } from './CatchWeightTags';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';

/**
 * This class represents the entity "ItemSerialNumbers" of service "d365_metadata".
 */
export class ItemSerialNumbers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemSerialNumbersType<T>
{
  /**
   * Technical entity name for ItemSerialNumbers.
   */
  static override _entityName = 'ItemSerialNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemSerialNumbers entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'SerialNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Serial Number.
   */
  declare serialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufacturing Date.
   */
  declare manufacturingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CatchWeightTags} entity.
   */
  declare catchWeightTags: CatchWeightTags<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsItemSerialNumber: AssetMaintenanceAssetBillOfMaterialsV2<T>[];

  constructor(_entityApi: ItemSerialNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface ItemSerialNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  serialNumber: DeserializedType<T, 'Edm.String'>;
  manufacturingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightTags: CatchWeightTagsType<T>[];
  maintenanceAssetBillOfMaterialsItemSerialNumber: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
}
