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
import type { WarehousesOnHandV2Api } from './WarehousesOnHandV2Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WarehousesOnHandV2" of service "d365_metadata".
 */
export class WarehousesOnHandV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehousesOnHandV2Type<T>
{
  /**
   * Technical entity name for WarehousesOnHandV2.
   */
  static override _entityName = 'WarehousesOnHandV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehousesOnHandV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'InventorySiteId',
    'InventoryWarehouseId'
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
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   */
  declare inventorySiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Warehouse Id.
   */
  declare inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Available On Hand Quantity.
   */
  declare availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved On Hand Quantity.
   */
  declare reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available Ordered Quantity.
   */
  declare availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reserved Ordered Quantity.
   */
  declare reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Warehouse Management Processes Used.
   * @nullable
   */
  declare areWarehouseManagementProcessesUsed?: NoYes | null;
  /**
   * Ordered Quantity.
   */
  declare orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Order Quantity.
   */
  declare onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Available Quantity.
   */
  declare totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: WarehousesOnHandV2Api<T>) {
    super(_entityApi);
  }
}

export interface WarehousesOnHandV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId: DeserializedType<T, 'Edm.String'>;
  inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  areWarehouseManagementProcessesUsed?: NoYes | null;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
