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
import type { InventorySiteOnHandIncludingCatchWeightItemsApi } from './InventorySiteOnHandIncludingCatchWeightItemsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventorySiteOnHandIncludingCatchWeightItems" of service "d365_metadata".
 */
export class InventorySiteOnHandIncludingCatchWeightItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventorySiteOnHandIncludingCatchWeightItemsType<T>
{
  /**
   * Technical entity name for InventorySiteOnHandIncludingCatchWeightItems.
   */
  static override _entityName = 'InventorySiteOnHandIncludingCatchWeightItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventorySiteOnHandIncludingCatchWeightItems entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'InventorySiteId'
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
   * Available On Hand Quantity.
   */
  declare availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved On Hand Quantity.
   */
  declare reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Total Available Catch Weight Quantity.
   */
  declare totalAvailableCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Order Quantity.
   */
  declare onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Order Catch Weight Quantity.
   */
  declare onOrderCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Catch Weight Quantity.
   */
  declare orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Hand Catch Weight Quantity.
   */
  declare onHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved Ordered Quantity.
   */
  declare reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reserved On Hand Catch Weight Quantity.
   */
  declare reservedOnHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available On Hand Catch Weight Quantity.
   */
  declare availableOnHandCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Reserved Ordered Catch Weight Quantity.
   */
  declare reservedOrderedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Total Available Quantity.
   */
  declare totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available Ordered Quantity.
   */
  declare availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Available Ordered Catch Weight Quantity.
   */
  declare availableOrderedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;

  constructor(_entityApi: InventorySiteOnHandIncludingCatchWeightItemsApi<T>) {
    super(_entityApi);
  }
}

export interface InventorySiteOnHandIncludingCatchWeightItemsType<
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
  availableOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOnHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  areWarehouseManagementProcessesUsed?: NoYes | null;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  onOrderCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  onHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOnHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOnHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reservedOrderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  availableOrderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
