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
import type { ItemAutoCostHeadersApi } from './ItemAutoCostHeadersApi';

/**
 * This class represents the entity "ItemAutoCostHeaders" of service "d365_metadata".
 */
export class ItemAutoCostHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemAutoCostHeadersType<T>
{
  /**
   * Technical entity name for ItemAutoCostHeaders.
   */
  static override _entityName = 'ItemAutoCostHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemAutoCostHeaders entity.
   */
  static _keys = ['dataAreaId', 'ItemCostAutoNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Cost Auto Number.
   */
  declare itemCostAutoNumber: DeserializedType<T, 'Edm.String'>;
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
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Vendor Landed Cost Type Group Id.
   * @nullable
   */
  declare vendorLandedCostTypeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Landed Cost Type Group Id.
   * @nullable
   */
  declare productLandedCostTypeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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

  constructor(_entityApi: ItemAutoCostHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ItemAutoCostHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  vendorLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
}
