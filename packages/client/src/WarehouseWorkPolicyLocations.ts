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
import type { WarehouseWorkPolicyLocationsApi } from './WarehouseWorkPolicyLocationsApi';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  WarehouseWorkPolicies,
  WarehouseWorkPoliciesType
} from './WarehouseWorkPolicies';

/**
 * This class represents the entity "WarehouseWorkPolicyLocations" of service "d365_metadata".
 */
export class WarehouseWorkPolicyLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkPolicyLocationsType<T>
{
  /**
   * Technical entity name for WarehouseWorkPolicyLocations.
   */
  static override _entityName = 'WarehouseWorkPolicyLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkPolicyLocations entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId', 'WarehouseLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Policy Name.
   * @nullable
   */
  declare workPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseWorkPolicies} entity.
   */
  declare warehouseWorkPolicy?: WarehouseWorkPolicies<T> | null;

  constructor(_entityApi: WarehouseWorkPolicyLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkPolicyLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  workPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  warehouseWorkPolicy?: WarehouseWorkPoliciesType<T> | null;
}
