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
import type { WarehouseZoneGroupsApi } from './WarehouseZoneGroupsApi';
import { WarehouseZones, WarehouseZonesType } from './WarehouseZones';

/**
 * This class represents the entity "WarehouseZoneGroups" of service "d365_metadata".
 */
export class WarehouseZoneGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseZoneGroupsType<T>
{
  /**
   * Technical entity name for WarehouseZoneGroups.
   */
  static override _entityName = 'WarehouseZoneGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseZoneGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WarehouseZones} entity.
   */
  declare warehouseZones: WarehouseZones<T>[];

  constructor(_entityApi: WarehouseZoneGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseZoneGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseZones: WarehouseZonesType<T>[];
}
