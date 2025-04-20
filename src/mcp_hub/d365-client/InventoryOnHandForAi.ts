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
import type { InventoryOnHandForAiApi } from './InventoryOnHandForAiApi';
import { NoYes } from './NoYes';
import {
  InventoryWarehousesForAi,
  InventoryWarehousesForAiType
} from './InventoryWarehousesForAi';
import {
  InventorySitesForAi,
  InventorySitesForAiType
} from './InventorySitesForAi';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';

/**
 * This class represents the entity "InventoryOnHandForAI" of service "d365_metadata".
 */
export class InventoryOnHandForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryOnHandForAiType<T>
{
  /**
   * Technical entity name for InventoryOnHandForAi.
   */
  static override _entityName = 'InventoryOnHandForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOnHandForAi entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'SiteId',
    'WarehouseId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'InventoryStatus'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Status.
   */
  declare inventoryStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Avail Physical.
   */
  declare availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Available Physical.
   */
  declare calculatedAvailablePhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Warehouse Item.
   * @nullable
   */
  declare isWarehouseItem?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link InventoryWarehousesForAi} entity.
   */
  declare inventLocationAiEntity?: InventoryWarehousesForAi<T> | null;
  /**
   * One-to-one navigation property to the {@link InventorySitesForAi} entity.
   */
  declare inventSiteAiEntity?: InventorySitesForAi<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare releasedProduct?: ReleasedProductsForAi<T> | null;

  constructor(_entityApi: InventoryOnHandForAiApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryOnHandForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  inventoryStatus: DeserializedType<T, 'Edm.String'>;
  availPhysical: DeserializedType<T, 'Edm.Decimal'>;
  calculatedAvailablePhysical: DeserializedType<T, 'Edm.Decimal'>;
  isWarehouseItem?: NoYes | null;
  inventLocationAiEntity?: InventoryWarehousesForAiType<T> | null;
  inventSiteAiEntity?: InventorySitesForAiType<T> | null;
  releasedProduct?: ReleasedProductsForAiType<T> | null;
}
