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
import type { WarehouseWorkPoliciesApi } from './WarehouseWorkPoliciesApi';
import {
  WarehouseWorkCreationRules,
  WarehouseWorkCreationRulesType
} from './WarehouseWorkCreationRules';
import {
  WarehouseWorkPolicyLocations,
  WarehouseWorkPolicyLocationsType
} from './WarehouseWorkPolicyLocations';
import {
  WarehouseWorkCreationRulesV2,
  WarehouseWorkCreationRulesV2Type
} from './WarehouseWorkCreationRulesV2';
import {
  WarehouseWorkPolicyProducts,
  WarehouseWorkPolicyProductsType
} from './WarehouseWorkPolicyProducts';

/**
 * This class represents the entity "WarehouseWorkPolicies" of service "d365_metadata".
 */
export class WarehouseWorkPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkPoliciesType<T>
{
  /**
   * Technical entity name for WarehouseWorkPolicies.
   */
  static override _entityName = 'WarehouseWorkPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkPolicies entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link WarehouseWorkCreationRules} entity.
   */
  declare warehouseWorkCreationRules: WarehouseWorkCreationRules<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseWorkPolicyLocations} entity.
   */
  declare warehouseWorkPolicyLocations: WarehouseWorkPolicyLocations<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseWorkCreationRulesV2} entity.
   */
  declare warehouseWorkCreationRulesV2: WarehouseWorkCreationRulesV2<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseWorkPolicyProducts} entity.
   */
  declare warehouseWorkPolicyProducts: WarehouseWorkPolicyProducts<T>[];

  constructor(_entityApi: WarehouseWorkPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  warehouseWorkCreationRules: WarehouseWorkCreationRulesType<T>[];
  warehouseWorkPolicyLocations: WarehouseWorkPolicyLocationsType<T>[];
  warehouseWorkCreationRulesV2: WarehouseWorkCreationRulesV2Type<T>[];
  warehouseWorkPolicyProducts: WarehouseWorkPolicyProductsType<T>[];
}
