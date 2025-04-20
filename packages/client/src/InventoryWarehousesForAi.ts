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
import type { InventoryWarehousesForAiApi } from './InventoryWarehousesForAiApi';
import {
  InventoryOnHandForAi,
  InventoryOnHandForAiType
} from './InventoryOnHandForAi';

/**
 * This class represents the entity "InventoryWarehousesForAI" of service "d365_metadata".
 */
export class InventoryWarehousesForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryWarehousesForAiType<T>
{
  /**
   * Technical entity name for InventoryWarehousesForAi.
   */
  static override _entityName = 'InventoryWarehousesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryWarehousesForAi entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Id.
   * @nullable
   */
  declare siteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryOnHandForAi} entity.
   */
  declare inventoryOnHandAiEntity: InventoryOnHandForAi<T>[];

  constructor(_entityApi: InventoryWarehousesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryWarehousesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  siteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOnHandAiEntity: InventoryOnHandForAiType<T>[];
}
