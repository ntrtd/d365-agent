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
import type { AssetMaintenanceWorkOrderPoolsApi } from './AssetMaintenanceWorkOrderPoolsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderPools" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderPools<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderPoolsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderPools.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderPools';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderPools entity.
   */
  static _keys = ['dataAreaId', 'PoolId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Id.
   */
  declare poolId: DeserializedType<T, 'Edm.String'>;
  /**
   * Remove At Work Order Lifecycle State Id.
   * @nullable
   */
  declare removeAtWorkOrderLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Delete Work Order Relation.
   * @nullable
   */
  declare deleteWorkOrderRelation?: NoYes | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderPoolsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderPoolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  poolId: DeserializedType<T, 'Edm.String'>;
  removeAtWorkOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  deleteWorkOrderRelation?: NoYes | null;
}
