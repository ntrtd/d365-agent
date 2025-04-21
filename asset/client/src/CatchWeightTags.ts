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
import type { CatchWeightTagsApi } from './CatchWeightTagsApi';
import { NoYes } from './NoYes';
import { ItemBatches, ItemBatchesType } from './ItemBatches';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ItemSerialNumbers, ItemSerialNumbersType } from './ItemSerialNumbers';

/**
 * This class represents the entity "CatchWeightTags" of service "d365_metadata".
 */
export class CatchWeightTags<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CatchWeightTagsType<T>
{
  /**
   * Technical entity name for CatchWeightTags.
   */
  static override _entityName = 'CatchWeightTags';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CatchWeightTags entity.
   */
  static _keys = ['dataAreaId', 'TagNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tag Number.
   */
  declare tagNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Weight.
   */
  declare capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemSerialNumbers} entity.
   */
  declare itemSerial?: ItemSerialNumbers<T> | null;

  constructor(_entityApi: CatchWeightTagsApi<T>) {
    super(_entityApi);
  }
}

export interface CatchWeightTagsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tagNumber: DeserializedType<T, 'Edm.String'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: NoYes | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  itemBatch?: ItemBatchesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  itemSerial?: ItemSerialNumbersType<T> | null;
}
