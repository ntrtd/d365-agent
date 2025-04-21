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
import type { WarehouseAislesApi } from './WarehouseAislesApi';
import { NoYes } from './NoYes';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { Warehouses, WarehousesType } from './Warehouses';

/**
 * This class represents the entity "WarehouseAisles" of service "d365_metadata".
 */
export class WarehouseAisles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseAislesType<T>
{
  /**
   * Technical entity name for WarehouseAisles.
   */
  static override _entityName = 'WarehouseAisles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseAisles entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId', 'AisleId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Aisle Id.
   */
  declare aisleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Sort Order Code Assigned Descending.
   * @nullable
   */
  declare isSortOrderCodeAssignedDescending?: NoYes | null;
  /**
   * Manual Starting Sort Order Code.
   */
  declare manualStartingSortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aisle Name.
   * @nullable
   */
  declare aisleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aisle Number.
   */
  declare aisleNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;

  constructor(_entityApi: WarehouseAislesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseAislesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  aisleId: DeserializedType<T, 'Edm.String'>;
  isSortOrderCodeAssignedDescending?: NoYes | null;
  manualStartingSortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  aisleName?: DeserializedType<T, 'Edm.String'> | null;
  aisleNumber: DeserializedType<T, 'Edm.Int32'>;
  warehouseLocations: WarehouseLocationsType<T>[];
  warehouse?: WarehousesType<T> | null;
}
