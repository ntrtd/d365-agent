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
import type { WarehouseZonesApi } from './WarehouseZonesApi';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  WarehouseZoneGroups,
  WarehouseZoneGroupsType
} from './WarehouseZoneGroups';

/**
 * This class represents the entity "WarehouseZones" of service "d365_metadata".
 */
export class WarehouseZones<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseZonesType<T>
{
  /**
   * Technical entity name for WarehouseZones.
   */
  static override _entityName = 'WarehouseZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseZones entity.
   */
  static _keys = ['dataAreaId', 'ZoneId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone Id.
   */
  declare zoneId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone Name.
   * @nullable
   */
  declare zoneName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Zone Group Id.
   * @nullable
   */
  declare warehouseZoneGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare secondAdditionalZoneWarehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare firstAdditionalZoneWarehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare thirdAdditionalZoneWarehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-one navigation property to the {@link WarehouseZoneGroups} entity.
   */
  declare warehouseZoneGroup?: WarehouseZoneGroups<T> | null;

  constructor(_entityApi: WarehouseZonesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  zoneId: DeserializedType<T, 'Edm.String'>;
  zoneName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseZoneGroupId?: DeserializedType<T, 'Edm.String'> | null;
  secondAdditionalZoneWarehouseLocations: WarehouseLocationsType<T>[];
  firstAdditionalZoneWarehouseLocations: WarehouseLocationsType<T>[];
  thirdAdditionalZoneWarehouseLocations: WarehouseLocationsType<T>[];
  warehouseLocations: WarehouseLocationsType<T>[];
  warehouseZoneGroup?: WarehouseZoneGroupsType<T> | null;
}
