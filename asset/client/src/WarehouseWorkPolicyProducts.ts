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
import type { WarehouseWorkPolicyProductsApi } from './WarehouseWorkPolicyProductsApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  WarehouseWorkPolicies,
  WarehouseWorkPoliciesType
} from './WarehouseWorkPolicies';

/**
 * This class represents the entity "WarehouseWorkPolicyProducts" of service "d365_metadata".
 */
export class WarehouseWorkPolicyProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkPolicyProductsType<T>
{
  /**
   * Technical entity name for WarehouseWorkPolicyProducts.
   */
  static override _entityName = 'WarehouseWorkPolicyProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkPolicyProducts entity.
   */
  static _keys = ['dataAreaId', 'WorkPolicyName', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Policy Name.
   */
  declare workPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseWorkPolicies} entity.
   */
  declare warehouseWorkPolicy?: WarehouseWorkPolicies<T> | null;

  constructor(_entityApi: WarehouseWorkPolicyProductsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkPolicyProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workPolicyName: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  warehouseWorkPolicy?: WarehouseWorkPoliciesType<T> | null;
}
